"use client";

import TypeWriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-32 text-center space-y-4">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                <h1>The Best AI Tool for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                    <TypeWriterComponent
                        options={{
                            strings: [
                                "Chatbot.",
                                "Photo Generation.",
                                "Video Generation.",
                                "Music Generation.",
                                "Code Generation.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create content using AI 10x faster.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium">Start Generating for Free</Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                No credit card required.
            </div>
        </div>
    );
};
