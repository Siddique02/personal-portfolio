import Image from "next/image";


export default function Projects() {
    return(
        <div className="services-cards flex justify-center flex-wrap">

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project1.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">SEO</div>
            <div className="text-base text-center mt-5 z-10">Boost your online visibility with tailored SEO strategies. We enhance rankings, drive traffic, and help your business reach the right audience effectively.</div>
          </div>

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project2.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">Web Developer</div>
            <div className="text-base text-center mt-5 z-10">Build modern, responsive websites that captivate users. Our development process ensures functionality, speed, and seamless user experiences.</div>
          </div>

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project3.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">UI/UX Design</div>
            <div className="text-base text-center mt-5 z-10">Craft intuitive and engaging interfaces with our UI/UX design expertise. We focus on user-centered designs that elevate usability and aesthetics.</div>
          </div>

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg z-10 w-[100%] h-[100%] object-cover" src="/project4.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">UI/UX Design</div>
            <div className="text-base text-center mt-5 z-10">Craft intuitive and engaging interfaces with our UI/UX design expertise. We focus on user-centered designs that elevate usability and aesthetics.</div>
          </div>

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project5.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">UI/UX Design</div>
            <div className="text-base text-center mt-5 z-10">Craft intuitive and engaging interfaces with our UI/UX design expertise. We focus on user-centered designs that elevate usability and aesthetics.</div>
          </div>

          <div className="project-card m-[10px] w-[400px] min-h-[400px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <Image className="absolute -z-1 rounded-lg w-[100%] h-[100%] object-cover" src="/project6.jpg" width={400} height={400} alt="" />
            <div className="mt-[10px] font-bold text-xl z-10">UI/UX Design</div>
            <div className="text-base text-center mt-5 z-10">Craft intuitive and engaging interfaces with our UI/UX design expertise. We focus on user-centered designs that elevate usability and aesthetics.</div>
          </div>

        </div>
    )
}