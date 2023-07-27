import { ImageIcon } from 'lucide-react';

import Heading from "@/components/heading";



export default function ImagePage() {
    return (
        <div>
            <Heading
                title="Image Generation"
                description="Generate stunning images in seconds"
                icon={ ImageIcon }
                iconColor='text-pink-700'
                bgColor='bg-pink-700/10'
            />
        </div>
    );
};