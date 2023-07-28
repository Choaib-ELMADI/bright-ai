'use client';

import { MessageSquare, ImageIcon, VideoIcon, Music, Code, Check, Zap } from 'lucide-react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: 'text-pink-700',
        bgColor: 'bg-pink-700/10',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: 'text-orange-700',
        bgColor: 'bg-orange-700/10',
    },
    {
        label: 'Music Generation',
        icon: Music,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: 'text-green-700',
        bgColor: 'bg-green-700/10',
    }
];



const ProModal = () => {
    const proModal = useProModal();
    
    return (
        <Dialog open={ proModal.isOpen } onOpenChange={ proModal.onClose }>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2">
                            <h4>Upgrade to Bright AI</h4>
                            <Badge variant='premium' className="uppercase test-sm pt-1 px-3 tracking-wider">Pro</Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {
                            tools.map((tool) => (
                                <Card 
                                    key={ tool.label }
                                    className='p-3 flex items-center justify-between border-black/5'
                                >
                                    <div className='flex items-center gap-x-4'>
                                        <div 
                                            className={ cn(
                                                'p-2 w-fit rounded-md',
                                                tool.bgColor
                                            )}
                                        >
                                            <tool.icon 
                                                className={ cn(
                                                    'w-6 h-6',
                                                    tool.color
                                                )}
                                            />
                                        </div>
                                        <div className='font-semibold text-sm'>{ tool.label }</div>
                                    </div>
                                    <Check className='text-primary w-5 h-5' />
                                </Card>
                            ))
                        }
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                <Button className='w-full' variant='premium' size='lg'>
                    Upgrade
                    <Zap className='w-5 h-5 ml-3 fill-yellow-400 text-yellow-400' />
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ProModal;