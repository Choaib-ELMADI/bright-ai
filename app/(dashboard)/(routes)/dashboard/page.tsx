import { UserButton } from "@clerk/nextjs";



export default function DashboardPage() {
    return (
        <div>
            <p className="text-3xl">Dashboard (Protected)</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
};