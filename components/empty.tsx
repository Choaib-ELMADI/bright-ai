import Image from "next/image";

interface EmptyProps {
    label: string
};



export const Empty = ({ label }: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col justify-center items-center gap-4">
            <div className="relative w-[6rem] h-[6rem]">
                <Image 
                    fill
                    src='/logo-trs.png'
                    alt='Empty'
                    draggable='false'
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">{ label }</p>
        </div>
    );
};