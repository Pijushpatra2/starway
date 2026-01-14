import Image from "next/image";
import { MoveRight } from "lucide-react";
import BottomSection from "@/components/BottomSection";

export default function Plans() {
  const plans = [
    {
      image: "/images/plans/1.png",
      text: "Web",
    },
    {
      image: "/images/plans/2.png",
      text: "Digital Marketing",
    },
    {
      image: "/images/plans/3.png",
      text: "SEO",
    },
    {
      image: "/images/plans/4.png",
      text: "SMO",
    },
    {
      image: "/images/plans/5.png",
      text: "PPC",
    },
    {
      image: "/images/plans/6.png",
      text: "Lead Gen",
    },
    {
      image: "/images/plans/7.png",
      text: "Branding",
    },
  ];
  return (
    <div className="w-full pb-20">
      <div className="w-[80%] mx-auto">
        <h2 className="text-5xl text-center font-bold text-white mt-20">
          Plans
        </h2>
        <h3 className="text-2xl text-center text-[#FFEE07] font-bold mt-5">
          Custom Plans With Promised Results!
        </h3>
        <p className="text-[#00C8FF] text-center mt-5 text-xl">
          We focus on maintaining consistency in quality & pricing. There are
          different online marketing services available. Each business has its
          exclusive needs & requirements. We render pricing models depending
          upon our client’s specific requirements.
        </p>

        {/* plans section */}
        <div className="mt-20 w-full mx-auto border border-gray-200 rounded-3xl p-10 ">
          {/* service types */}
          <div className="flex items-center md:justify-center gap-5 mx-auto overflow-x-scroll no-scrollbar py-3">
            {plans.map((item, index) => (
              <div
                className="bg-white rounded-2xl p-2 flex flex-col items-center md:min-w-28 cursor-pointer transition duration-300 ease-in-out hover:shadow-lg hover:scale-110"
                key={index}
              >
                <div className="w-12 h-12 relative">
                  <Image src={item.image} fill alt={`image${index}`} />
                </div>
                <p className="text-black text-center text-nowrap">{item.text}</p>
              </div>
            ))}
          </div>

          {/* plan types */}
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2 bg-[#C9E9FF] rounded-3xl mt-10 p-5 md:p-10 w-full">
            {[...Array(4)].map((_, i) => (
              <div
                className={`p-10 w-full md:w-[25%] rounded-2xl flex flex-col items-center ${
                  i == 0
                    ? "bg-white"
                    : i == 1
                    ? "bg-[#2B58AB]"
                    : i == 2
                    ? "bg-[#003981]"
                    : "bg-[#001E44]"
                }`}
                key={i}
              >
                <p
                  className={`text-2xl pb-3 mb-10 w-full border-b font-bold text-center ${
                    i == 0
                      ? "text-[#14336C]border-[#14336C]"
                      : "text-white border-white"
                  } `}
                >
                  Basic
                </p>
                {[...Array(10)].map((_, j) => (
                  <p
                    className={`text-xl text-center mt-2 ${
                      i == 0
                        ? "text-[#14336C]border-[#14336C]"
                        : "text-white border-white"
                    }`}
                    key={j}
                  >
                    Dummy
                  </p>
                ))}
                <button
                  className={`rounded-2xl px-10 mt-10 py-2 cursor-pointer ${
                    i == 0
                      ? "bg-[#14336C]"
                      : i == 1
                      ? "bg-[#003981]"
                      : i == 2
                      ? "bg-[#2B58AB]"
                      : "bg-white"
                  } ${i == 3 ? "text-[#14336C]" : "text-white"}`}
                >
                  purchase
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <button className="mx-auto text-2xl bg-[#14336C] rounded-2xl px-10 py-3 text-white flex items-center gap-3 mt-20 cursor-pointer">
          GET STARTED <MoveRight />
        </button>

        {/* Bottom section */}
      <BottomSection />
      </div>
    </div>
  );
}
