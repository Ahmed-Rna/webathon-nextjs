'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
import { ColourfulText } from "./ui/colourful-text";

export default function UpcomingWebinars() {
    return (
        <>
            <div className="p-12 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mt-5">
                         <ColourfulText text="Our Tech Journey" /> <br /> 
                        </h1>
                        

                    </div>
                </div>
                <div className="max-w-5xl mt-7 mx-auto px-5">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </>
    );
}
export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "/1",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "/2",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "/3",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "/4",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "/5",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "/6",
    },
];
