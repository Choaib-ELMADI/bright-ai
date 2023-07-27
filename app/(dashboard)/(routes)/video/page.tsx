import { VideoIcon } from 'lucide-react';

import Heading from "@/components/heading";



export default function VideoPage() {
    return (
        <div>
            <Heading
                title="Video Generation"
                description="Generate awesome videos with AI"
                icon={ VideoIcon }
                iconColor='text-orange-700'
                bgColor='bg-orange-700/10'
            />
        </div>
    );
};