import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import square from "./square.jpg"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [state, setState] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when the component mounts
    setFadeIn(true);
  }, []);

  return (
    <body className="flex flex-1 flex-col items-center justify-center pb-5 gap-5">


      {/* $whoami */}
<div
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
        className={`bg-black w-200 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5 ${
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


      <h1 className="text-3xl mt-10">System Architecture & Projects</h1>

        <div style={{
          backgroundColor: "rgba(22, 25, 33, 1)",
        }} className="w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5">
          
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

        <div style={{
          backgroundColor: "rgba(22, 25, 33, 1)",
        }} className="w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5">
          
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


            <div className="w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5" style={{
              backgroundColor: "rgba(14, 21, 18, 1)",
            }}>

        <header className="flex flex-row items-center gap-2">
          <div className="bg-red-400 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
          <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        </header>

            </div>

    </body>
  );
}