import { Code } from 'lucide-react';

import Heading from '@/components/heading';



export default function CodePage() {
    return (
        <div>
            <Heading
                title="Code Generation"
                description="Code snippets and bugs solutions"
                icon={ Code }
                iconColor='text-green-700'
                bgColor='bg-green-700/10'
            />
        </div>
    );
};