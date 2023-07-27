import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";



const Navbar = () => {
    return (
        <div className="flex items-center p-4 h-[45px]">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default Navbar;