"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5ae9951d-95ce-443b-86a0-f3b9b4199e5a");
    }, []);

    return null;
};
