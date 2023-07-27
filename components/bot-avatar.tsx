import { Avatar, AvatarImage } from "@/components/ui/avatar";



export const BotAvatar = () => {
    return (
        <Avatar className="w-8 h-8 bg-slate-300">
            <AvatarImage className="p-1" src='/logo-trs.png' />
        </Avatar>
    );
};