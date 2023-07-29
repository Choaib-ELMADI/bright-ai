"use client";

import { useState, useEffect } from "react";

import ProModal from "./pro-modal";

export const ModalProvider = ({ resetLimit }: { resetLimit: () => void }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <ProModal resetLimit={resetLimit} />
        </>
    );
};
