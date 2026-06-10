import Image from "next/image";
import Link from 'next/link'
import { motion } from "framer-motion";

type CircleProps = {
    src: string;
    href: string;
}
export default function Circle({src, href}: CircleProps) {
  return (
    <div className="flex flex-row items-center justify-center rounded-full h-20 w-20 border border-3">
        <Link href={href} target="_blank"> 
            <Image
                className="transition-transform duration-300 hover:scale-120"
                src={src}
                alt="Logo"
                width={50}
                height={50}
            >
            </Image>
        </Link>
    </div>
  );
}
