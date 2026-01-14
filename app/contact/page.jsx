import Image from "next/image";
import { MoveRight } from "lucide-react";
import BottomSection from "@/components/BottomSection";
import AIOptimization from "@/components/AIOptimization";

export default function Contact() {
  return (
    <div className="w-full pb-20">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="w-full md:w-[50%]">
            <h2 className="text-3xl md:text-5xl text-center text-white mt-20">
              <span className="font-bold">AI Search Optimization</span> (AEO)
              Rank on the Platforms of the Future
            </h2>
            <p className="text-xl text-[#00C8FF] mt-10">
              Search behaviour is changing. Customers are no longer only
              searching on Google they are asking{" "}
              <span className="text-[#FFEE07]">
                ChatGPT, Gemini, Copilot, Perplexity, Claude, and other AI
                assistants
              </span>{" "}
              for recommendations and answers.
            </p>

            <button className="p-3 mt-10 rounded bg-white flex items-center gap-2 text-lg sm:text-xl font-bold text-[#237FBF]">
              Get a Free AI Visibility Audit <MoveRight />
            </button>
          </div>
          <div className="w-full md:w-[50%] mt-10 md:mt-0">
            <AIOptimization />
          </div>
        </div>
        <p className="text-white text-center text-2xl mt-20">
          When someone asks{" "}
          <span className="font-bold">
            “Which is the best agency for marketing?”
          </span>{" "}
          these AI systems return only a few trusted names.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="w-full md:w-[50%] h-96 relative overflow-hidden rounded-2xl">
            <Image
              src="/images/services/7.png"
              fill
              alt="img1"
              className="rounded-2xl object-cover"
            />
            {/* Blue overlay shadow (refined gradient + blur for soft glow effect) */}
            <div className="absolute inset-0 bg-gradient-to-b to-blue-600/90 via-blue-500/60 from-transparent backdrop-blur-[1px]" />

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end absolute z-10 bottom-0 px-5 pb-6">
              <div>
                <h3 className="text-4xl font-bold text-black mb-2">GMB</h3>
                <p className="text-black">
                  In the ever-competitive digital landscape, securing a
                  prominent position in search engine results pages (SERPs) is
                  crucial for businesses.
                </p>
              </div>
              <button className="rounded-2xl bg-white px-10 py-2 mt-3 md:mt-0">
                More
              </button>
            </div>
          </div>
          <div className="flex justify-evenly flex-col">
            <h3 className="font-bold text-3xl md:text-4xl text-white">
              AI Search Optimization
            </h3>
            <p className="text-[#FFEE07] text-lg md:text-xl">
              (Rank on ChatGPT, Gemini, Copilot & Perplexity)
            </p>
            <h3 className="text-[#FFEE07] text-3xl md:text-4xl mt-10 font-bold">
              How We Do It:
            </h3>
            <ul className="list-disc text-white ml-5 text-lg md:text-xl">
              <li>Brand Entity Authority Setup</li>
              <li>AI-Readable Content Structuring</li>
              <li>Knowledge Graph &amp; Trust Signal Framework</li>
              <li>LLM Response Influence Strategy</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-[#FFEE07] text-4xl mt-10 font-bold text-center">
            When people ask:
          </h3>
          <p className="text-white text-2xl text-center mt-5">
            “Best service near me?” <br /> “Which company should I choose?”{" "}
            <br /> “Who is trusted and top rated?”
          </p>
          <p className="text-[#FFEE07] text-xl text-center mt-5">
            Your business gets discovered even without searching. <br /> This is
            next-generation marketing. And you’ll be early.
          </p>
          <p className="text-xl text-white text-center mt-5">
            Our goal is to make sure your business is one of them.
          </p>
          <p className="text-[#00C8FF] text-xl text-center mt-5">
            We use AI Search Optimization (AEO) to position your brand so that
            AI models understand, recognize, and recommend your business when
            users ask industry-related or service-based questions.
          </p>
          <p className="text-white mt-5 text-xl">
            This is not just SEO. <br />
            This is visibility in the next generation of search.
          </p>
          <h3 className="text-white text-4xl font-bold text-center mt-20">
            What We Do
          </h3>
          <div className="flex flex-col md:flex-row mt-10 gap-5">
            <div className="w-full md:w[50%]">
              <h3 className="text-[#FFEE07] text-3xl mt-10 font-bold">
                We optimize your
              </h3>
              <ul className="text-white list-disc ml-5 mt-5 text-xl">
                <li>Brand presence and knowledge signals</li>
                <li>Structured content and semantic data</li>
                <li>Authority mentions, citations, and brand identity</li>
                <li>Entity-based SEO for AI model recognition</li>
                <li>
                  Content format suitable for AI learning &amp; summarization
                </li>
              </ul>
            </div>
            <div className="w-full md:w[50%] h-96 relative">
              <Image
                src="/images/blog.png"
                fill
                alt="image"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <p className="text-[#00C8FF] text-center mt-5 text-xl">
            This makes your business easier for AI platforms to identify, trust,
            and recommend.
          </p>
          <div className="mt-10 flex flex-col md:flex-row">
            <div>
              <h3 className="text-[#FFEE07] text-3xl mt-10 font-bold">
                Why It Matters
              </h3>
              <ul className="text-white list-disc ml-5 mt-5 text-xl">
                <li>
                  AI assistants are quickly replacing traditional search habits
                </li>
                <li>Customers trust answers generated instantly by AI</li>
                <li>
                  The brands recommended today will become the market leaders
                  tomorrow
                </li>
              </ul>
              <h3 className="text-[#FFEE07] text-3xl mt-10 font-bold">
                Being recommended on these platforms means
              </h3>
              <ul className="text-white list-disc ml-5 mt-5 text-xl">
                <li>Higher credibility</li>
                <li>Higher trust</li>
                <li>Higher lead conversions</li>
              </ul>
            </div>
            <Image
              src="/images/contact.png"
              height={300}
              width={500}
              alt="image"
              className="mt-10 mx-auto"
            />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-[#FFEE07] text-3xl mt-10 font-bold text-center">
            In Simple Terms
          </h3>
          <p className="text-[#FFEE07] text-2xl font-bold text-center mt-5">
            We help your business appear when someone asks
          </p>
          <p className="text-white text-center mt-5 text-xl">
            “Who is the best in this industry?” <br />
            “Which company should I contact?” <br />
            “What is the top agency for this service?”
          </p>
          <button className="p-3 mt-20 rounded bg-white flex items-center gap-2 text-lg sm:text-xl font-bold text-[#237FBF] mx-auto">
            Get a Free AI Visibility Audit <MoveRight />
          </button>
        </div>
        {/* <div className="mt-10">
        <p className="text-xl text-white">And the AI replies with</p>
        <h3 className="text-2xl text-white font-bold">Your brand.</h3>
        </div> */}

        {/* Bottom section */}
      <BottomSection />
      </div>
    </div>
  );
}
