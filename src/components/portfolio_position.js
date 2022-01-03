import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
export default function Portfolio_position({subtitle, title, content, color, arrow=true, next }) {
    return (
      <div className="flex h-screen">
        <div className="max-w-6xl mx-auto my-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-base font-semibold ${color} tracking-wide uppercase`}>{subtitle}</h2>
            <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-md sm:text-2xl text-gray-600">
             {content}
            </p>
       { arrow && <ChevronDoubleDownIcon onClick={()=>next.current.scrollIntoView()}  className="h-14 animate-bounce mx-auto mt-8 sm:mt-16" /> }
          </div>
        </div>
      </div>
    )
  }
  