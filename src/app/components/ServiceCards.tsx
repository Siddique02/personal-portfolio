

export default function Services() {
    return(
        <div className="services-cards flex justify-center flex-wrap">

          <div className="card m-[10px] w-[300px] min-h-60 bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <div className="block rounded-full bg-blue-300 p-6 text-2xl">🔍</div>
            <div className="mt-[10px] font-bold text-xl">SEO</div>
            <div className="text-base text-center mt-5">Boost your online visibility with tailored SEO strategies. We enhance rankings, drive traffic, and help your business reach the right audience effectively.</div>
            <button className="bg-blue-300 text-black px-5 py-2 rounded-full mt-7">Read More</button>
          </div>

          <div className="card m-[10px] w-[300px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <div className="block rounded-full bg-blue-300 p-6 text-2xl">🖥️</div>
            <div className="mt-[10px] font-bold text-xl">Web Developer</div>
            <div className="text-base text-center mt-5">Build modern, responsive websites that captivate users. Our development process ensures functionality, speed, and seamless user experiences.</div>
            <button className="bg-blue-300 text-black px-5 py-2 rounded-full mt-7">Read More</button>
          </div>

          <div className="card m-[10px] w-[300px] bg-gray-700 p-[10px] rounded-lg flex flex-col justify-center items-center py-6 px-5">
            <div className="block rounded-full bg-blue-300 p-6 text-2xl">🎨</div>
            <div className="mt-[10px] font-bold text-xl">UI/UX Design</div>
            <div className="text-base text-center mt-5">Craft intuitive and engaging interfaces with our UI/UX design expertise. We focus on user-centered designs that elevate usability and aesthetics.</div>
            <button className="bg-blue-300 text-black px-5 py-2 rounded-full mt-7">Read More</button>
          </div>

        </div>
    )
}