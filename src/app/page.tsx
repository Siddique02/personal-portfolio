import Image from "next/image";
import Link from 'next/link';
import Services from '@/app/components/ServiceCards';
import Projects from '@/app/components/ProjectCards';
import Facebook from '@/app/components/svgs/facebook';
import Github from '@/app/components/svgs/github';
import Linkedin from '@/app/components/svgs/linkedin';
import Gmail from '@/app/components/svgs/gmail';


export default function Home() {
  return (
    <div className="cont w-[100%] object-cover">

      <div id="home" className="first-sec overflow-hidden bg-gray-900 w-[100%] min-h-[90vh] flex flex-wrap justify-between py-40 px-16">

        <div className="intro">
          <div>
            <h1 className="text-4xl font-bold text-white">Hi! I am Siddique</h1>
            <h2 className="text-2xl font-bold text-white">and I am a <span className="animate text-blue-300 animate"></span></h2>
            <p className="text-gray-400 w-96">A developer, who can create visually appealing and responsive websites using modern technologies.</p>
          </div>

          <div className="flex gap-5 mt-7">
            <div>
              <h3 className="text-white">Email: <br /> <span className="text-gray-400">siddique292002@gmail.com</span></h3>
            </div>
            <div>
              <h3 className="text-white">Phone: <br /> <span className="text-gray-400">0323-1200667</span></h3>
            </div>
          </div>

          <div className="top-btns flex gap-5 mt-5">
            <Link href="https://my-cv-three-rosy.vercel.app/"><button className="btn bg-blue-300 text-gray-900 rounded-md px-6 py-3">Check CV</button></Link>

            <Link href="https://www.linkedin.com/in/muhammad-siddique-56b522267/"><button className="btn hire-btn relative bg-gray-900 text-white rounded-md px-6 py-3 h-[100%] w-[100%]"><div className="trans absolute bg-blue-300 h-[100%] w-[100%] rounded-md"></div><h3 className="opper absolute">Hire me now!</h3></button></Link>
          </div>

          <div className="flex gap-5 mt-5">
            <Link href="https://www.facebook.com/" className="icons relative bg-gray-900 text-white border-blue-300 rounded-md px-5 py-3"><Facebook/></Link>

            <Link href="https://www.linkedin.com/in/muhammad-siddique-56b522267/" className="icons bg-gray-900 text-white border-blue-300 rounded-md px-5 py-3"><Linkedin/></Link>

            <Link href="https://github.com/Siddique02" className="icons bg-gray-900 text-white border-blue-300 rounded-md px-5 py-3"><Github/></Link>
            
            <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWslzCwlGfnvfxwHmGVGgrpgCsHXMSrQCfwdRjFJzgkqsnBqJGnMcrqSzMZwmFJrWXTRrZpqB" className="icons bg-gray-900 text-white border-blue-300 rounded-md px-5 py-3"><Gmail/></Link>
          </div>

        </div>

        <div className="main-pic">
          <Image className="rounded-full" src="/main.jpg" alt="" width={400} height={400}></Image>
        </div>

      </div>


      {/* Second section */}

      <div id="about" className="second-sec bg-gray-700 w-[100%] min-h-[90vh] flex flex-wrap justify-between px-12 py-28 gap-24">
        <div className="main-pic flex justify-center items-center">
          <Image className="rounded-full object-contain" src="/main.jpg" alt="" width={350} height={350}></Image>
        </div>
        <div className="about-me w-96">
          <h2 className="text-4xl text-blue-300 font-bold">About Me</h2>
          <p className="text-xl text-white"> I am a fresh and motivated Front-End Developer with a passion for creating visually appealing and user-friendly websites. I am eager to contribute my skills to build seamless and responsive web experiences.</p>
          <div className="mt-10">
            <button className="btn bg-blue-300 text-black rounded-md px-6 py-3">Read More!</button>
          </div>
        </div>
        
      </div>


      {/* Third section */}

      <div id="services" className="third-sec w-[100%] min-h-[90vh] bg-gray-900 text-white py-16">
        <div className="text-white text-center text-4xl pb-8">
          <h1 className="text-blue-300 font-bold">Our Services</h1>
        </div>
        <Services/>
      </div>


      {/* Forth section */}

      <div id="portfolio" className="forth-sec w-[100%] min-h-[90vh] bg-gray-700 py-16">
        <h1 className="text-center text-blue-300 font-bold text-4xl mb-9">My Recent Projects</h1>
        <Projects/>
      </div>


      {/* Fifth section */}

      <div id="contact" className="fifth-sec relative w-[100%] min-h-[90vh] bg-gray-900 flex flex-col gap-10 pt-16 items-center">
        <h1 className="text-center text-blue-300 font-bold text-4xl">Contact Us</h1>
        <form className="w-full px-32" action="submit">
          <div className="input grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input className="rounded-md h-[40px] bg-gray-700 px-2" type="text" placeholder="Full name" required />
            <input className="rounded-md h-[40px] bg-gray-700 px-2" type="email" placeholder="Email" required />
            <input className="rounded-md h-[40px] bg-gray-700 px-2" type="tel" placeholder="Mobile number" required />
            <input className="rounded-md h-[40px] bg-gray-700 px-2" type="text" placeholder="Text subject" required />
          </div>
          <div className="textarea mt-5">
            <textarea className="w-[100%] h-[100px] rounded-md resize-none bg-gray-700 p-2" placeholder="Enter your messsage" required />
          </div>
          <button className="bg-blue-300 w-[100%] mt-4 py-3 rounded-md">Send Message</button>
        </form>


        <div className="footer w-[100%] h-[1px] bg-white absolute bottom-8 opacity-30">
          <h3 className="text-white text-center text-sm mt-[7px]">© 2024 Your Website. All rights reserved.</h3>
        </div>

      </div>


    </div>
  );
}
