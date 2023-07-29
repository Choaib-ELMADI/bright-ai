"use client";

import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({ weight: "600", subsets: ["latin"] });
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 mr-4">
                    <Image fill src="/logo.png" alt="Logo" />
                </div>
                <h1
                    className={cn(
                        "text-2xl font-bold text-white",
                        font.className
                    )}
                >
                    Bright
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    );
};
