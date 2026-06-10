import Image from "next/image";
import Link from 'next/link'

type ProjectProps = {
    title: string;
    desc: string;
    tech: string[]
    reflection: string;
    src: string;
    link: string;
}

export default function Project({title, desc, tech, reflection, src, link}: ProjectProps) {
  return (
    <div className="flex flex-col border border-2 lg:flex-row justify-between lg:h-70 h-200">
        <div className="p-2 flex flex-col gap-3 w-full lg:w-[50%]">
            <span className="text-xl">{title}</span>
            <span className="text-sm">{desc}</span>
            <div className="flex flex-row lg:flex-row gap-2">
                {tech.map((icon, i) => (
                    <Image
                        key={i}
                        src={icon}
                        alt="Technology Icon"
                        width={40}
                        height={40}
                    />
                ))}
            </div>
            <span className="text-sm break-words">{reflection}</span>
        </div>
        <div className="w-full lg:w-[50%]">
            <Link href={link} target="_blank">
                <img 
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src={src} 
                    alt="Project Image"
                />
            </Link>
        </div>
    </div>
  );
}
