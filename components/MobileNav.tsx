"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { items } from "@/constants/SidebarItems"
import { cn } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  

export default function MobileNav(){

    const pathname = usePathname()
    
    return <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger asChild>
               
                <Image
                    src={'/icons/hamburger.svg'}
                    height={36}
                    width={36}
                    alt="humburger icon"
                    className="cursor-pointer sm:hidden"
                />
               
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-[#1C1F2E]">
                <SheetClose asChild >
                    <Link href="/" className="flex items-center gap-1 px-2 py-3">
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt="yoom logo"
                        />
                        <p className="text-[26px] font-extrabold text-white">Webinar</p>
                    </Link>
                </SheetClose>

                <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-hidden">
                    {/* this sheetclose tag will close the sidebar whenever user click the any items  */}
                    <SheetClose asChild>
                        <section className="flex flex-col gap-6 m-4 h-full ">
                            {items.map((item)=>{
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            
                            return(
                                <SheetClose asChild key={item.route}>
                                <Link 
                                    href={item.route}
                                    key={item.label}
                                    className={cn('flex gap-4 items-center p-4  rounded-lg w-full max-w-full',{
                                        'bg-[#0E78F9]' : isActive   
                                    })}
                                >
                                    <Image 
                                        src={item.imgUrl}
                                        alt={item.label}
                                        height={20}
                                        width={20}
                                    />
                                    <p className="font-semibold ">
                                        {item.label}
                                    </p>
                                </Link>
                                </SheetClose>
                                )
                            })}
                        </section>

                    </SheetClose>
                </div>
                
            </SheetContent>
        </Sheet>

    </section>
}


// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { sidebarLinks } from '@/constants';
// import { cn } from '@/lib/utils';

// const MobileNav = () => {
//   const pathname = usePathname();

//   return (
//     <section className="w-full max-w-[264px]">
//       <Sheet>
//         <SheetTrigger asChild>
//           <Image
//             src="/icons/hamburger.svg"
//             width={36}
//             height={36}
//             alt="hamburger icon"
//             className="cursor-pointer sm:hidden"
//           />
//         </SheetTrigger>
//         <SheetContent side="left" className="border-none bg-dark-1">
//           <Link href="/" className="flex items-center gap-1">
//             <Image
//               src="/icons/logo.svg"
//               width={32}
//               height={32}
//               alt="yoom logo"
//             />
//             <p className="text-[26px] font-extrabold text-white">YOOM</p>
//           </Link>
//           <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
//             <SheetClose asChild>
//               <section className=" flex h-full flex-col gap-6 pt-16 text-white">
//                 {sidebarLinks.map((item) => {
//                   const isActive = pathname === item.route;

//                   return (
//                     <SheetClose asChild key={item.route}>
//                       <Link
//                         href={item.route}
//                         key={item.label}
//                         className={cn(
//                           'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
//                           {
//                             'bg-blue-1': isActive,
//                           }
//                         )}
//                       >
//                         <Image
//                           src={item.imgURL}
//                           alt={item.label}
//                           width={20}
//                           height={20}
//                         />
//                         <p className="font-semibold">{item.label}</p>
//                       </Link>
//                     </SheetClose>
//                   );
//                 })}
//               </section>
//             </SheetClose>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </section>
//   );
// };

// export default MobileNav;