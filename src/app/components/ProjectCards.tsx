import Image from "next/image";
import Link from 'next/link';


export default function Projects() {
    return(
        <div className="services-cards flex justify-center flex-wrap">

          <Link href="https://final-hackathon-gray.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project6.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Avion E-commerce Store</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Discover stylish and functional home furniture at Avion. Elevate every room with quality pieces designed for comfort, elegance, and modern living.</div>
            </div>
          </Link>
          
          <Link href="https://my-ecommerce-ten-xi.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project3.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Project Lorum</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Build your dream projects with our expert construction services. From planning to execution, we ensure quality, durability, and timely delivery for every structure.</div>
            </div>
          </Link>

          <Link href="https://siddique02-library-manager-fullstack-main-iuoajx.streamlit.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project5.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Personal Library Manager</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Organize and enjoy your book collection with ease. Manage titles, track reading progress, and discover new favorites—all in one smart, personal library system.</div>
            </div>
          </Link>

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


          <Link href="https://number-guessing-game-lsqcrl8gqh6r5h8uyrumcx.streamlit.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project4.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Number Guessing Game</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Test your luck and sharpen your intuition with our Number Guessing Game. Fun, simple, and addictive—see if you can guess the right number in the fewest tries!</div>
            </div>
          </Link>


        </div>
    )
}