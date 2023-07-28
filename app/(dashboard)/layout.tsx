import { getApiLimitCount } from "@/lib/api-limit";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";



export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const apiLimitCount = await getApiLimitCount();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar apiLimitCount={ apiLimitCount } />
            </div>
            <main className="md:pl-72 pb-4">
                <Navbar />
                { children }
            </main>
        </div>
    );
};