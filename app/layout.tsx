import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { resetLimit } from "@/lib/api-limit";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bright AI",
    description: "Bright AI SaaS Platform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ModalProvider resetLimit={resetLimit} />
                    <ToasterProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
