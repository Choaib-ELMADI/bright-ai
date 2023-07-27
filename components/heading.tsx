import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface HeadingProps {
    title: string,
    description: string,
    icon: LucideIcon,
    iconColor?: string,
    bgColor?: string
};



const Heading = ({ title, description, icon: Icon, iconColor, bgColor }: HeadingProps) => {
    return (
        <div className='px-4 lg:px-8 flex items-center gap-x-3 mb-8'>
            <div className={ cn('p-2 w-fit rounded-md', bgColor) }>
                <Icon className={ cn('w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10', iconColor) } />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-[1.15rem] leading-[1.15rem] md:text-[1.35rem] md:leading-[1.35rem] lg:text-[1.75rem] lg:leading-[1.75rem] font-bold'>{ title }</h2>
                <p className='text-sm text-muted-foreground'>{ description }</p>
            </div>
        </div>
    );
};

export default Heading;