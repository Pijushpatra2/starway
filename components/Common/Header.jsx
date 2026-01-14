"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const navlink = [
    { link: "/", image: "/images/nav/home3.svg", text: "Home" },
    { link: "/services", image: "/images/nav/serviceicon2.svg", text: "Services" },
    { link: "/portfolio", image: "/images/nav/portfolioicon2.svg", text: "Portfolio" },
    { link: "/plans", image: "/images/nav/PLANSICON2.svg", text: "Plans" },
    { link: "/about", image: "/images/nav/profileicon2.svg", text: "About" },
    { link: "/contact", image: "/images/nav/contactus2.svg", text: "Contact" },
    { link: "/blogs", image: "/images/nav/blogicon2.svg", text: "Blog" },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[80%]">
        <div
          className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg"
        >
          {/* LOGO */}
          <Link href="/" className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14">
            <Image
              src="/images/logo.svg"
              fill
              alt="Starway logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
            {navlink.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="flex flex-col items-center gap-1 text-gray-700 hover:text-black transition-transform hover:scale-105"
              >
                <div className="relative w-6 h-6 md:w-7 md:h-7">
                  <Image src={item.image} fill alt={item.text} />
                </div>
                <span className="text-xs md:text-sm font-medium">
                  {item.text}
                </span>
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU ICON */}
          <Menu
            className="sm:hidden w-6 h-6 text-gray-900 cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-[#0A1A2F] p-6">
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
            >
              <X className="text-white" />
            </button>

            <nav className="mt-20 grid grid-cols-2 gap-6">
              {navlink.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  onClick={() => setShowSidebar(false)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/10 transition"
                >
                  <div className="relative w-8 h-8">
                    <Image src={item.image} fill alt={item.text} />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {item.text}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// function Header() {
//   const navlink = [
//     { link: "/", image: "/images/nav/home3.svg", text: "Home" },
//     {
//       link: "/services",
//       image: "/images/nav/serviceicon2.svg",
//       text: "Services",
//     },
//     {
//       link: "/portfolio",
//       image: "/images/nav/portfolioicon2.svg",
//       text: "Portfolio",
//     },
//     { link: "/plans", image: "/images/nav/PLANSICON2.svg", text: "Plans" },
//     { link: "/about", image: "/images/nav/profileicon2.svg", text: "About" },
//     { link: "/contact", image: "/images/nav/contactus2.svg", text: "Contact" },
//     { link: "/blogs", image: "/images/nav/blogicon2.svg", text: "Blog" },
//   ];

//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <>
//       {/* FLOATING HEADER */}
//       <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%]">
//         <div
//           className="flex items-center justify-between px-6 sm:px-10 py-3 rounded-full
//           bg-white/40 backdrop-blur-xl border border-white/30
//           shadow-lg hover:shadow-xl transition-all duration-300"
//         >
//           {/* LOGO */}
//           <Link href="/" className="relative w-36 h-12">
//             <Image
//               src="/images/logo.svg"
//               fill
//               alt="Starway logo"
//               className="object-contain"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <div className="hidden sm:flex items-center gap-6">
//             {navlink.map((item, i) => (
//               <div key={i} className="relative group">
//                 <Link
//                   href={item.link}
//                   className="w-12 h-10 relative flex items-center justify-center
//         hover:scale-110 transition"
//                 >
//                   <Image src={item.image} fill alt={item.text} />
//                 </Link>

//                 {/* TOOLTIP */}
//                 <span
//                   className="
//           pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2
//           whitespace-nowrap rounded-md bg-black/80 px-3 py-1 text-xs text-white
//           opacity-0 translate-y-1
//           group-hover:opacity-100 group-hover:translate-y-0
//           transition-all duration-200
//         "
//                 >
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* MOBILE MENU */}
//           <Menu
//             className="sm:hidden w-6 h-6 text-black cursor-pointer"
//             onClick={() => setShowSidebar(true)}
//           />
//         </div>
//       </header>

//       {/* SIDEBAR */}
//       {showSidebar && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end">
//           <div className="w-[75%] sm:w-[60%] md:w-[40%] bg-[#0A1A2F] h-screen p-8 relative">
//             <button
//               onClick={() => setShowSidebar(false)}
//               className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
//             >
//               <X className="text-white" />
//             </button>

//             <nav className="flex flex-col mt-20 gap-6">
//               {navlink.map((item, i) => (
//                 <Link
//                   href={item.link}
//                   key={i}
//                   onClick={() => setShowSidebar(false)}
//                   className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10"
//                 >
//                   <div className="w-8 h-8 relative">
//                     <Image src={item.image} fill alt={item.text} />
//                   </div>
//                   <span className="text-white text-lg font-medium">
//                     {item.text}
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;
