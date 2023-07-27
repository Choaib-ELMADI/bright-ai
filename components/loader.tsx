import Image from "next/image";



export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-bounce">
                <Image 
                    fill
                    src='/logo-trs.png'
                    alt='Loader'
                    draggable='false'
                />
            </div>
            <p className="text-sm text-muted-foreground">Bright is thinking...</p>
        </div>
    );
};