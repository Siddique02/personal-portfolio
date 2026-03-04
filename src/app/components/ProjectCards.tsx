import Image from "next/image";
import Link from 'next/link';


export default function Projects() {
    return(
        <div className="services-cards flex justify-center flex-wrap">

          <Link href="https://ecommerce-aykays.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project1.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Avion E-commerce Store</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Discover stylish and functional home furniture at Avion. Elevate every room with quality pieces designed for comfort, elegance, and modern living.</div>
            </div>
          </Link>
          
          <Link href="https://get-fit-eight.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project2.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">One Generation Gym</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Transform your fitness journey with our dynamic gym website. Powerful, motivating, and easy to navigate—discover workouts, trainers, and memberships designed to help you achieve your goals.</div>
            </div>
          </Link>

          <Link href="https://karachi-cadet-school.vercel.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project3.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Karachi Cadet School</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Empowering young minds with discipline and excellence, Karachi Cadet School provides a strong academic foundation in a structured and inspiring environment. Shaping future leaders through education, character, and commitment.</div>
            </div>
          </Link>

          <Link href="https://e-library-9b99f.web.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project4.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">E-Library</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Explore a world of knowledge with our E-Library. Fast, organized, and accessible anytime—discover books, resources, and learning materials designed to expand your mind and fuel your curiosity.</div>
            </div>
          </Link>

          <Link href="https://daily-affirmation-mindfulness.web.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project5.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Daily Affirmation & Mindfulness</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Start each day with positivity and balance through our Daily Affirmation & Mindfulness App. Simple, calming, and inspiring—build confidence, reduce stress, and nurture a peaceful mindset.</div>
            </div>
          </Link>


          <Link href="https://mentorship-program-mvp.web.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project6.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Mentorship Program MVP</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Accelerate your growth with our Mentorship Program MVP App. Smart, structured, and easy to use—connect mentors and mentees, track progress, and build meaningful professional relationships.</div>
            </div>
          </Link>


          <Link href="https://team-collaboration-kanban.web.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project7.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Team Collaboration Kanban</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Simplify project management with our Team Collaboration Kanban Web App. Clean, responsive, and intuitive—collaborate in real time and keep every task moving forward seamlessly.</div>
            </div>
          </Link>


          <Link href="https://portfolio-website-genera-24d5b.web.app/">
            <div className="project-card m-[10px] max-w-[420px] min-h-[350px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
              <Image className="project-img absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project8.jpg" width={400} height={400} alt="" />
              <div className="project-text mt-[10px] font-bold text-xl z-10 text-white">Portfolio Website Generator</div>
              <div className="project-text text-base text-center mt-5 z-10 text-white">Build stunning, customizable portfolios in minutes with our Portfolio Website Generator. Simple, fast, and powerful—create a professional online presence without writing a single line of code.</div>
            </div>
          </Link>


        </div>
    )
}