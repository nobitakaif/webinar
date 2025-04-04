"use client"
import { items } from "@/constants/SidebarItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar(){

    const pathname = usePathname()
    
    return <div className="bg-[#1C1F2E] sticky left-0 top-10 flex h-screen w-fit flex-col pt-14 justify-between max-sm:hidden lg:w-[264px]">
        <div className="flex flex-col gap-6 m-6">
            {items.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return(
                    <Link 
                        href={item.route}
                        key={item.label}
                        className={cn('flex gap-4 items-center p-4  rounded-lg justify-start',{
                            'bg-[#0E78F9]' : isActive   
                        })}
                    >
                        <Image 
                            src={item.imgUrl}
                            alt={item.label}
                            height={24}
                            width={24}
                        />
                        <p className="text-lg font-semibold max-lg:hidden">
                            {item.label}
                        </p>
                    </Link>
                )
            })}
        </div>
    </div>
}