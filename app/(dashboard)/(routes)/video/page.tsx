'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { VideoIcon } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useProModal } from '@/hooks/use-pro-modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader } from '@/components/loader';
import Heading from "@/components/heading";
import { Empty } from '@/components/empty';
import { formSchema } from './constants';



export default function VideoPage() {
    const router = useRouter();
    const [video, setVideo] = useState<string>();
    const proModal = useProModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ''
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo(undefined);
            
            const response = await axios.post('/api/video', values);
            setVideo(response.data[0]);
            
            form.reset();
        } catch (error: any) {
            if (error.response.status === 403) {
                proModal.onOpen();
            }
        } finally {
            router.refresh();
        };
    };

    return (
        <div>
            <Heading
                title="Video Generation"
                description="Generate awesome videos with AI"
                icon={ VideoIcon }
                iconColor='text-orange-700'
                bgColor='bg-orange-700/10'
            />
            <div className='px-4 lg:px-8'>
                <div>
                    <Form { ...form }>
                        <form 
                            onSubmit={ form.handleSubmit(onSubmit) }
                            className='rounded-lg border w-full py-2 px-3 focus-within:shadow-sm grid grid-cols-12 gap-2'
                        >
                            <FormField
                                name='prompt'
                                render={({ field }) => (
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className='p-0 m-0'>
                                            <Input 
                                                className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full'
                                                disabled={ isLoading }
                                                placeholder='A horse in the mountains'
                                                { ...field }
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button 
                                className='col-span-12 lg:col-span-2 w-full'
                                disabled={ isLoading }
                            >Generate</Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'>
                    { isLoading && (
                        <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                            <Loader />
                        </div>
                    )}
                    { !video && !isLoading && (
                        <Empty
                            label='Turn your prompts into video'
                        />
                    )}
                    { video && (
                        <video 
                            controls
                            loop
                            className='w-full aspect-video mt-8 rounded-lg border bg-black'
                        >
                            <source src={ video } />
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};