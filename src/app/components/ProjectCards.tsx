import Image from "next/image";
import Link from 'next/link';


export default function Projects() {
    return(
        <div className="services-cards flex justify-center flex-wrap">
          <Link href="https://resume-builder-pied-delta.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project1.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Resume Builder</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Create professional, customizable resumes effortlessly with our user-friendly resume builder. Design polished layouts, upload photos, and download your resume instantly, all while enjoying a seamless and efficient experience.</div>
            </div>
          </Link>

          <Link href="">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project2.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Personal portfolio</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Build modern, responsive websites that captivate users. Our development process ensures functionality, speed, and seamless user experiences.</div>
            </div>
          </Link>

          <Link href="https://hackathon-class.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project3.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Project Lorum</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Build your dream projects with our expert construction services. From planning to execution, we ensure quality, durability, and timely delivery for every structure.</div>
            </div>
          </Link>

          <Link href="https://my-cv-three-rosy.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project4.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">My CV</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Showcase your skills and experience with a polished, professional CV. Highlight your achievements with ease.</div>
            </div>
          </Link>

          <Link href="https://classassignment-ashen.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project5.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Blog Website</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Explore a variety of insightful articles on trending topics. Stay informed and inspired with engaging content, expert perspectives, and fresh ideas.</div>
            </div>
          </Link>

          <Link href="https://nikeedition.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project6.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Nike Special Edition</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Step up your style and comfort with our premium Nike shoes. Designed for performance, durability, and unmatched comfort, perfect for any occasion.</div>
            </div>
          </Link>

        </div>
    )
}