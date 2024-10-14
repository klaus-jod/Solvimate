
import Image from "next/image"
import Link from "next/link"
import { HeaderContent } from "./header-contents"

export const Header = () => {
    return (
        <header className="w-full border-b sticky top-0 border-gray-200 h-20 pl-32 pr-32 bg-black">
            <div className=" uppercase h-full flex justify-between ">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/solvimate-logo.jpg"
                        alt="Logo"
                        width={50}
                        height={10}
                    />
                    <h1 className=" text-lime-200 font-extrabold">Solvimate</h1>
                </Link>

                <div className=" text-white  font-semibold flex justify-evenly gap-16 items-center">
                    <HeaderContent />
                </div>
            </div>
        </header >
    )
}