import Image from "next/image";
import Link from 'next/link'
import { motion } from "framer-motion";

type IconProps = {
    src: string;
}
export default function Icon({src}: IconProps) {
  return (
    <Image
      className="transition-transform duration-300 hover:scale-130"
      src={src}
      alt="Logo"
      width={50}
      height={50}
    />
  );
}
