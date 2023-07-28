'use client';

import { useState, useEffect } from "react";

import ProModal from "./pro-modal";



export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <ProModal />
        </>
    );
};