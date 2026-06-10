import Image from "next/image";
import Link from 'next/link'
import Icon from './components/Icon'
import Circle from './components/Circle'
import Project from './components/Project'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-source-code-pro)] flex flex-col flex-1 min-h-screen items-center bg-gradient-to-b from-blue-700 via-blue-900 to-gray-800 dark:bg-black">
      <div className="fixed z-100 p-2 flex flex-row justify-between items-center text-white md:text-3xl text-xl w-[100%] bg-black justify-right h-18 ">
        <div> 
          <Link href="#">TYLER ZHANG</Link>
        </div>
        <div className="flex flex-row gap-8">
          <Link href="#aboutme">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contacts">Contacts</Link>
        </div>
      </div>
      <div className="mt-60 text-white text-6xl">
        Tyler Zhang
      </div>
      <div className="mt-10 text-white lg:text-2xl text-xl text-center md:w-15 h-50 w-100 md:w-220">
        Dedicated computer science student ready to learn cybersecurity and software development for the AI-driven future 
      </div>
      <div id="aboutme" className="p-2 flex flex-col gap-2 bg-black/[0.4] border border-2 border-purple-600 text-white md:h-100 h-120 md:w-150 w-100 lg:w-250">
        <span className="text-4xl">Who am I?</span>
        <div className="text-base break-words">
          I am currently a junior attending the Academy of Computer & Information Sciences at the Morris County School of Technology.
          I aspire to work in software development or cybersecurity and utilize artificial intelligence to increase efficiency.
          In my free time, I enjoy doing competitive programming and enhancing my problem-solving skills. 
        </div>
        <span className="text-2xl">Tech Stack</span>
        <div className="flex flex-row gap-2">
          <Icon src="html.svg"/>
          <Icon src="react.svg"/>
          <Icon src="next.svg"/>
          <Icon src="tailwind.svg"/>
        </div>
        <div className="flex flex-row gap-2">
          <Icon src="java.svg"/>
          <Icon src="python.svg"/>
          <Icon src="c++.svg"/>
        </div>
      </div>
      <div id="projects" className="p-2 flex flex-col gap-2 bg-black/[0.4] border border-2 border-purple-600 mt-10 text-white h-620 lg:h-302 md:w-150 w-100 lg:w-250">
        <span className="text-4xl">My Projects</span>
        <Project 
          title="MCST Bus App" 
          desc="A web application that allows students to check if their bus has arrived at MCST on their personal devices"
          tech={["/supabase.svg", "/html.svg", "/react.svg", "/tailwind.svg", "/next.svg"]}
          reflection="My team approached this app by thinking about the appropriate website routes and user interfaces needed for different user groups: admins and students. 
            We were able to solve bus-sizing issues after testing different div sizes using math to calculate appropriate gap sizes and building sizes,
            making the map look uniform."
          src="/busapp.png"
          link="https://github.com/MCST-CIS/congressional-app-challenege-bus-boys"
          >
        </Project>
        <Project 
          title="InfoSTEM" 
          desc="A web application that recommends different STEM careers and allows students to explore them"
          tech={["/supabase.svg", "/html.svg", "/react.svg", "/tailwind.svg", "/next.svg"]}
          reflection="My co-developer and I thought to use Gemini API as logic for recommending careers, but we switched to a more appropriate Likert scale.
            We debugged user interface issues by using LLMs and online web design documentation such as w3schools. 
            As a result, our STEM cards looked more organized and professional on our website.
            "
          src="/infostem.png"
          link="https://github.com/devztyler/InfoSTEM"
          >
        </Project>
        <Project 
          title="NASA ADC" 
          desc="A Python 3D application that shows and educates people on the path of the Artemis II mission"
          tech={["/python.svg", "/ursina2.png"]}
          reflection="We used a two-step approach: setting up the background objects, then the HUD for showing extra simulation information.
            To resolve scaling issues, we found accurate sizes for the real objects online. 
            We also had an issue with rocket orientation; we took the appropriate angle to the next point in the path. "
          src="/ursina.png"
          link="https://github.com/ShrihanAgarwal/Nasa_app"
          >
        </Project>
        <Project 
          title="Border Expanding Plugin" 
          desc="A Minecraft Java plugin that automatically expands the Minecraft border on achievements and Twitch events, meant for Minecraft enjoyers and Twitch streamers"
          tech={["/java.svg", "/gradle.svg"]}
          reflection="I approached the design process by handling in-game events one at a time.
            I used Bukkit documentation to debug syntax issues for functions I needed to call.
            Specifically, I used it to display the achievement message on-screen instead of in chat (minor bug)."
          src="/border.png"
          link="https://github.com/devztyler/BorderExpandingPlugin"
          >
        </Project>
      </div>
      <div id="contacts" className="p-2 flex flex-col gap-2 bg-black/[0.4] border border-2 border-purple-600 mt-10 text-white h-150 md:h-90 md:w-150 w-100 lg:w-250">
        <span className="text-4xl">My Contacts</span>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <Link href="/resume.pdf" target="_blank">
              <Image
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                src="/resume.png"
                alt="Resume Image"
                width={250}
                height={250}
              >
              </Image>
            </Link>
            <span className="text-2xl">My Resume</span>
          </div>
          <div className="flex flex-row gap-2">
            <div className="mt-4 flex flex-col gap-2">
              <span className="h-22 text-xl">Gmail</span>
              <span className="h-22 text-xl">Linkedin</span>
              <span className="h-22 text-xl">Github</span>
            </div>
            <div className="flex flex-col gap-2">
              <Circle src="/gmail.svg" href="mailto:tyler.zhang@mcvts.org"/>
              <Circle src="/linkedin.svg" href="https://www.linkedin.com/in/tyler-zhang-34405134a/"/>
              <Circle src="/github.svg" href="https://github.com/devztyler"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
