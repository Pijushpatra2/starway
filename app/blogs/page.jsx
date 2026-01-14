import Image from "next/image";
import { MoveRight } from "lucide-react";
import BottomSection from "@/components/BottomSection";

export default function Blogs() {
  return (
    <div className="w-full pb-20">
      <div className="w-[80%] mx-auto">
        <h2 className="text-5xl text-center font-bold text-white mt-20">Blogs</h2>
        <h3 className="text-2xl text-center text-[#FFEE07] font-bold mt-5">Read Our Blogs!</h3>
        <p className="text-[#00C8FF] text-center mt-5 text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl" key={i}>
              <div className="w-full h-[150px] md:h-[200px] relative" style={{boxShadow: "rgba(255, 255, 255, 0.45) 0px 25px 20px -20px"}}>
                <Image src="/images/blog.png" fill alt={`blog${i}`} className="object-cover rounded-t-2xl" />
              </div>
              <p className="text-white font-semibold mt-6 px-3">SEO Services for SMBs: Boost Your Online Growth</p>
              <p className="text-white px-3 mb-5">September 19, 2025</p>
            </div>
          ))}
        </div>
        <button className="p-3 mt-20 rounded bg-white flex items-center gap-2 text-lg sm:text-xl font-bold text-[#237FBF] mx-auto">Get a Free AI Visibility Audit <MoveRight/></button>

        {/* Bottom section */}
      <BottomSection />
      </div>
    </div>
  );
}
