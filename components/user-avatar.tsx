import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export const UserAvatar = () => {
    const { user } = useUser();

    return (
        <Avatar className="w-8 h-8">
            <AvatarImage src={ user?.profileImageUrl } />
            <AvatarFallback>
                { user?.firstName?.charAt(0).toUpperCase() }
                { user?.lastName?.charAt(0).toUpperCase() }
            </AvatarFallback>
        </Avatar>
    );
};