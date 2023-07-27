import { Music } from 'lucide-react';

import Heading from '@/components/heading';



export default function MusicPage() {
    return (
        <div>
            <Heading
                title="Music Generation"
                description="Generate audio clips and music"
                icon={ Music }
                iconColor='text-emerald-500'
                bgColor='bg-emerald-500/10'
            />
        </div>
    );
};