import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div
    className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative lg:mt-10  z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Meet the art of Technology</h1>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">CacheLogic</h1>
            <p
            className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Explore our comprehensive tech courses and elevate your digital skills today. Whether you're starting your journey or seeking to enhance your expertise, join us to unlock your full potential in the tech world.</p>
           
            <div className="mt-10">
                <Link href={"/contact"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Contact US
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection