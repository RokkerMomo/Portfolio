import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import square from "./square.jpg"
import { CiLocationOn } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import resume from "./resume.pdf"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {
  const [state, setState] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [copied, setCopied] = useState(false);

  const copytoclipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      // Fallback for unsupported browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // Prevent scrolling to the bottom
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Failed to copy text: ", err);
      }
      document.body.removeChild(textarea);
    }
  };


  useEffect(() => {
    // Trigger fade-in effect when the component mounts
    setFadeIn(true);
  }, []);

  return (
    <body className="flex flex-1 flex-col items-center justify-center pb-5 gap-5">


      {/* $whoami */}
<div className="p-5"
        style={{
          backgroundImage: `url(${square})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Full viewport height
          width: "100%",
          justifyContent:"center",
          justifyItems:"center",
          alignContent:"center" // Full width
        }}
      >
        <div
        className={`bg-black border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5 ${
          fadeIn ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <header className="flex flex-row items-center gap-2">
          <div className="bg-red-400 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
          <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        </header>

        <div className="flex flex-1 flex-col gap-1">
          <p className="text-green-400">$ whoami</p>
          <h1 className="font-mono font-bold text-5xl">Fernando Parra</h1>
          <p className="text-gray-400">Computer engenieer</p>
        </div>

        <div className="flex flex-1 flex-col gap-2 ">
          <p className="text-green-400">$ Skills</p>
          <div className="flex flex-row gap-2 flex-wrap">
            <div className="bg-green-950 text-center rounded-md border border-green-800 p-2 mb-2">
              <p>Node.js</p>
            </div>
            <div className="bg-green-950 text-center rounded-md border border-green-800 p-2 mb-2">
              <p>Express.js</p>
            </div>
            <div className="bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2">
              <p>React</p>
            </div>
            <div className="bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2">
              <p>React Native</p>
            </div>
            <div className="bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2">
              <p>Angular</p>
            </div>
            <div className="bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2">
              <p>MongoDB</p>
            </div>
            <div className="bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2">
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="flex flex-1 flex-col justify-center items-center p-5">

        <h1 className="text-3xl mt-10 text-center">System Architecture & Projects</h1>

        <div style={{
          backgroundColor: "rgba(22, 25, 33, 1)",
        }} className="size-[calc(100vw-50px)] border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5">
          
          <div className="flex flex-1 flex-col gap-2">

            <h1 className="font-mono font-bold text-3xl" >
            Fingerprint recognition
            </h1>

            <p className="text-md text-gray-400">
            Development of a fingerprint recognition system for recording employee flow in an institution.
            </p>

          </div>


          <div>
            <h1 className="font-mono font-bold text-2xl">Key Achievements:</h1>
            <ul>
              <li className="text-gray-400">• Designed and implemented a fingerprint recognition system using Python and OpenCV.</li>
              <li className="text-gray-400">• Developed a user-friendly interface for employee check-in and check-out.</li>
              <li className="text-gray-400">• Ensured data security and privacy compliance.</li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col gap-2 ">
          <div className="flex flex-row gap-2 flex-wrap">
            
            <div style={{
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            }} className="bg-green-950 text-center rounded-md border p-2 mb-2">
              <p>React</p>
            </div>

            <div style={{
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            }} className="bg-green-950 text-center rounded-md border p-2 mb-2">
              <p>TypeScript</p>
            </div>

            <div style={{
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            }} className="bg-green-950 text-center rounded-md border p-2 mb-2">
              <p>MongoDB</p>
            </div>

            <div style={{
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            }} className="bg-green-950 text-center rounded-md border p-2 mb-2">
              <p>Arduino</p>
            </div>
          </div>
        </div>


        </div>


            <div className="min-w-[calc(100vw-50vw)] border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5" style={{
              backgroundColor: "rgba(14, 21, 18, 1)",
            }}>

        <header className="flex flex-row items-center gap-2">
          <div className="bg-red-400 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
          <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        </header>

        <p className="text-green-400">$ contact --info</p>

        <h1 className="font-mono font-bold text-3xl">Let's Connect</h1>

        <p className="text-green-400">$ location --current</p>

        <p className="flex flex-1 flex-row gap-1"><CiLocationOn color="green" size={20} /> Maracaibo, Venezuela</p>

        <p className="text-green-400">$ contact --email</p>

        <div className="flex flex-row gap-5 flex-wrap">
        <button onClick={() => {
          copytoclipboard("thefer767@gmail.com")
          }} className=" bg-green-950 hover:bg-green-800 transform transition-transform duration-300 hover:scale-105 text-center rounded-md border border-green-800 p-3 mb-2">
          <p className="text-green-400">thefer767@gmail.com</p>
        </button>

        {copied && 
        <p className="text-green-400 self-center">Email copied to clipboard!</p>
        }
        
        </div>

        <p className="text-green-400">$ cat resume.pdf</p>

        <div className="flex flex-row gap-5 flex-wrap">
        <a     href={resume}  target="_blank" rel="noopener noreferrer"
        download className=" bg-green-950 hover:bg-green-800 transform transition-transform duration-300 hover:scale-105 text-center rounded-md border border-green-800 p-3 mb-2">
          <p className="text-green-400">Download Resume</p>
        </a>
        
        </div>

        <p className="text-green-400">$ ls ./social-links</p>

        <div className="flex flex-row gap-5 flex-wrap">

          <div
           className="bg-[#161F24] hover:bg-[#232B32] flex min-w-60 h-20 justify-center items-center flex-row border border-gray-700 rounded-lg p-2 gap-2
          hover:scale-105 transform transition-transform duration-300">
            <div style={{
              backgroundColor: "rgba(39, 49, 59, 1)",
            }} className="size-10 p-1 rounded-sm justify-center items-center text-center flex"><SiGithub size={30} color="green"/></div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-white">GitHub</p>
            <p className="text-gray-400">@RokkerMomo</p>
          </div>

          </div>

          <div
           className="bg-[#161F24] hover:bg-[#232B32] flex min-w-60 h-20 justify-center items-center flex-row border border-gray-700 rounded-lg p-2 gap-2
          hover:scale-105 transform transition-transform duration-300">
            <div style={{
              backgroundColor: "rgba(39, 49, 59, 1)",
            }} className="size-10 p-1 rounded-sm justify-center items-center text-center flex"><FaLinkedin size={30} color="green"/></div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-white">LinkedIn</p>
            <p className="text-gray-400">Fernando Parra</p>
          </div>

          </div>

        
        
        
        </div>
        
        

            </div>

      </div>

      

    </body>
  );
}