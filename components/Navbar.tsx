import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";


export default function Navbar(){
    return <div className="bg-[#1C1F2E] h-14 flex-between fixed z-50 w-full px-6 py-4 items-center lg:px-10 ">
        <Link href={"/"} className="flex items-center gap-1 max-sm:size-10">
            <Image 
                src={"/icons/logo.svg"}
                alt="Webinar.gg"
                height={32}
                width={32}
                className="max-sm:size-10"
            />
            <p className="max-sm:hidden font-extrabold text-[26px] ">
                Webinar.gg
            </p>
        </Link>

        <div className=" flex flex-between gap-5">
            {/* clerk authentication */}
            <MobileNav/>
        </div>
    </div>
}