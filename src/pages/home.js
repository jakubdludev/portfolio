import React, {useRef, useEffect, useState} from 'react'
import Slide from '../components/slide'


const welcome = {
    subtitle: <div>Jakub Dlubek - Resume</div>,
    title: <div className="block"><div><div>Hi there!</div></div></div>,
    content:<div>Please keep scrolling to learn more about me or navigate straight to my <a className="text-green-500 " href="">Portfolio</a></div>,
    color: 'text-green-500',
}

const intro1 = {
    subtitle: <div><img className="w-36 sm:w-48 rounded-full mx-auto my-7" src="profilephoto.png" />Introduction</div>,
    title: 'Who am I?',
    content: <div><div>My name is Jakub and I am a self taught full stack JavaScript web developer from Edinburgh,  currently looking for my first role in the tech industry.   </div></div>,
    color: 'text-yellow-500',
}

const intro2 = {
    subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="photo1.jpeg" />Introduction</div>,
    title: 'Coffee & Code!',
    content: <div><div>Together with my Fiance Aimee I also own <a href="https://www.instagram.com/thedripedinburgh" className="text-yellow-600">The Drip Edinburgh</a> - a small independent coffee business operating from two converted police boxes in Morningside and Tollcross areas of the City.</div></div>,
    color: 'text-yellow-500',
}

const education1 = {
    subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="graduation.png" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
    title: 'Computer Science',
    content: <div><div className="text-sm sm:text-lg"> Before moving to Scotland I studied and graduated from a 4 year computer science course in Poland. During my time there I have developed a strong understanding of computer systems, learned programming skills and logical thinking.</div></div>,
    color: 'text-indigo-500',
}

const skills1 = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="skills1.png" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'Technical Skills',
  content: <div><div className="text-sm sm:text-lg">My Primary programming language is JavaScript for both front and back end solutions. While learning JavaScript I have also used various libraries, framework and technologies... </div></div>,
  color: 'text-indigo-500',
}


const javascript = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="javascript.png" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'JavaScript',
  content: <div><div className="text-sm sm:text-lg">I am comfortable writing both Object Oriented and Procedural JavaScript code, have experience working with modern features (ES6 and ES7) and asynchronous javascript</div></div>,
  color: 'text-indigo-500',
}

const react1 = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="react.png" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'ReactJS',
  content: <div><div className="text-sm sm:text-lg">I have extensive knowledge of modern React JS (Hooks, Context etc.) as well as related tools (Router etc.) and have worked with Next.js </div></div>,
  color: 'text-indigo-500',
}

const node = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 bg-black pl-2 pt-1 pr-1 pb-1 rounded-full mx-auto my-7" src="node.svg" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'Node.js',
  content: <div><div className="text-sm sm:text-lg">I have a good understanding of back-end web development with Node.js and have worked tools such as Express Mongoose and more</div></div>,
  color: 'text-indigo-500',
}


const css = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="css.webp" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'CSS',
  content: <div><div className="text-sm sm:text-lg">I can write my own css rules, but in order to save time while developing apps I like use the tools available. My go-to css libraries are Tailwind.css and Bootstrap.</div></div>,
  color: 'text-indigo-500',
}

const google = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="google.png" alt="photo credit - unsplash" />EDUCATION & SKILLS</div>,
  title: 'Googling',
  content: <div><div className="text-sm sm:text-lg">I might not know everything but I sure know where to find it. In fact, up until this line of code, I have googled at least 658 times.  </div></div>,
  color: 'text-indigo-500',
}
const finish = {
  subtitle: <div><img className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto my-7" src="finish.png" alt="photo credit - unsplash" />THE END</div>,
  title: 'You made it!',
  content: <div><div className="text-sm sm:text-lg"> That's all in this section, I encourage you to proceed to  <a href ="" className="text-indigo-500">Portfolio</a> section to see some of my work so far.</div></div>,
  color: 'text-indigo-500',
}


export default function Home() {
  const [googled, setGoogled] = useState(689)

  setInterval(() => {
    setGoogled(p=>p+Math.floor(Math.random()*20))
  }, (0.5));

  useEffect(() => {
    window.scrollTo(0,0)
    return () => {
    }
}, [])




    const intro1_ref = useRef()
    const intro2_ref = useRef()
    const education1_ref = useRef()
    const skills1_ref = useRef()
    const javascript_ref = useRef()
    const react_ref= useRef()
    const node_ref= useRef()
    const css_ref= useRef()
    const google_ref = useRef()
    const finish_ref = useRef()

    return (
        <div >
        <div
        data-aos="zoom-out"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide {...welcome} next={intro1_ref} />
      </div>
      <div
        ref={intro1_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...intro1} next={intro2_ref}/>
      </div>
      <div
        ref={intro2_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide {...intro2} next={education1_ref} />
      </div>
      <div
        ref={education1_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...education1} next={skills1_ref}/>
      </div>
      <div
        ref={skills1_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...skills1} next={javascript_ref}/>
      </div>
      <div
        ref={javascript_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...javascript} next={react_ref}/>
      </div>
      <div
        ref={react_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...react1} next={node_ref}/>
      </div>
      <div
        ref={node_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...node} next={css_ref}/>
      </div>
      <div
        ref={css_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...css} next={google_ref}/>
      </div>
      <div
        ref={google_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...google} next={finish_ref}/>
      </div>
      <div
        ref={finish_ref}
        className=""
        data-aos="zoom-out-top"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > <Slide  {...finish} next={finish_ref} arrow={false}/>
      </div>
        </div>
    )
}
