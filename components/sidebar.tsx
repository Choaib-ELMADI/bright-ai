'use client';

import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings, Zap } from 'lucide-react';
const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { useProModal } from '@/hooks/use-pro-modal';
import { Progress } from '@/components/ui/progress';
import { MAX_FREE_TRAIL_COUNT } from '@/constants';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: 'text-violet-500',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        href: '/image',
        color: 'text-pink-700',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        href: '/video',
        color: 'text-orange-700',
    },
    {
        label: 'Music Generation',
        icon: Music,
        href: '/music',
        color: 'text-emerald-500',
    },
    {
        label: 'Code Generation',
        icon: Code,
        href: '/code',
        color: 'text-green-700',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
];



const Sidebar = ({ apiLimitCount }: { apiLimitCount: number }) => {
    const pathname = usePathname();
    const proModal = useProModal();

    return (
        <div className="p-4 flex flex-col h-full overflow-y-auto bg-[#111827] text-white no-scrollbar">
            <Link href='/dashboard' className='flex items-center mb-10 pl-3'>
                <div className='relative w-7 h-7 mr-3'>
                    <Image 
                        src='/logo.png'
                        alt='Logo'
                        fill
                        draggable='false'
                        className='object-cover rounded-[4px]'
                    />
                </div>
                <h1 className={ cn('text-xl font-bold', montserrat.className) }>Bright</h1>
            </Link>
            <div className='space-y-1 mb-10'>
                {
                    routes.map((route) => (
                        <Link 
                            href={ route.href } 
                            key={ route.label } 
                            className={ cn(
                                'text-sm group p-3 flex items-center font-medium hover:text-white hover:bg-white/10 rounded-lg transition',
                                route.href === pathname ? 'bg-white/10 text-white' : 'text-zinc-300'
                            )}
                        >
                            <route.icon className={ cn('w-6 h-6 mr-3', route.color) } />
                            { route.label }
                        </Link>
                    ))
                }
            </div>
            <div
                className='mt-auto bg-white/10 flex flex-col items-center gap-2 justify-center h-max px-2 py-3 rounded-md'
            >
                <p>{ `${ apiLimitCount }/${ MAX_FREE_TRAIL_COUNT }` } Free Generations</p>
                <Progress value={ (apiLimitCount / MAX_FREE_TRAIL_COUNT) * 100 } className='h-3' />
                <Button 
                    className='w-full' 
                    variant='premium'
                    onClick={ () => proModal.onOpen() }
                >
                    Upgrade
                    <Zap className='w-5 h-5 ml-3 fill-yellow-400 text-yellow-400' />
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;