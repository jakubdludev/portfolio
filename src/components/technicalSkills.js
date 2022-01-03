import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
export default function TechnicalSkills() {
    return (
      <div className=" flex h-screen -mt-10">
        <div className="max-w-6xl mx-auto my-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Skills</h2>
            <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Technical Skills
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                JavaScript Python Node.js Express.js React Next 
            </p>
        <ChevronDoubleDownIcon className="h-14 animate-bounce mx-auto mt-20" />
          </div>
        </div>
      </div>
    )
  }
  