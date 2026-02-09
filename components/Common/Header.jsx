// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// function Header() {
//   const navlink = [
//     { link: "/", image: "/images/nav/Home-present.svg", text: "Home" },
//     { link: "/services", image: "/images/nav/Service-present.svg", text: "Services" },
//     { link: "/portfolio", image: "/images/nav/Portfolio-present.svg", text: "Portfolio" },
//     { link: "/plans", image: "/images/nav/Plan-present.svg", text: "Plans" },
//     { link: "/about", image: "/images/nav/About-present.svg", text: "About" },
//     { link: "/contact", image: "/images/nav/Contact-present.svg", text: "Contact" },
//     { link: "/blogs", image: "/images/nav/Blog-present.svg", text: "Blog" },
//   ];

//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[80%]">
//         <div
//           className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg"
//         >
//           {/* LOGO */}
//           <Link href="/" className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14 lg:w-40 lg:h-16">
//             <Image
//               src="/images/logo.svg"
//               fill
//               alt="Starway-logo"
//               className="object-contain"
//               priority
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden sm:flex items-center gap-6 md:gap-8">
//             {navlink.map((item, i) => (
//               <Link
//                 key={i}
//                 href={item.link}
//                 className="flex flex-col items-center gap-1 text-gray-700 hover:text-black transition-transform hover:scale-105"
//               >
//                 <div className="relative w-6 h-6 lg:w-8 lg:h-8">
//                   <Image src={item.image} fill alt={item.text} />
//                 </div>
//                 <span className="text-xs md:text-sm font-medium">
//                   {item.text}
//                 </span>
//               </Link>
//             ))}
//           </nav>

//           {/* MOBILE MENU ICON */}
//           <Menu
//             className="sm:hidden w-6 h-6 text-gray-900 cursor-pointer"
//             onClick={() => setShowSidebar(true)}
//           />
//         </div>
//       </header>

//       {/* MOBILE SIDEBAR */}
//       {showSidebar && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
//           <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-[#0A1A2F] p-6">
//             <button
//               onClick={() => setShowSidebar(false)}
//               className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
//             >
//               <X className="text-white" />
//             </button>

//             <nav className="mt-20 grid grid-cols-2 gap-6">
//               {navlink.map((item, i) => (
//                 <Link
//                   href={item.link}
//                   key={i}
//                   onClick={() => setShowSidebar(false)}
//                   className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/10 transition"
//                 >
//                   <div className="relative w-8 h-8">
//                     <Image src={item.image} fill alt={item.text} />
//                   </div>
//                   <span className="text-white text-sm font-medium">
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





"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const navlink = [
    {
      link: "/",
      present: "/images/nav/Home-present.svg",
      active: "/images/nav/Home-active.svg",
      text: "Home",
    },
    {
      link: "/services",
      present: "/images/nav/Service-present.svg",
      active: "/images/nav/Service-active2.svg",
      text: "Services",
    },
    {
      link: "/portfolio",
      present: "/images/nav/Portfolio-present.svg",
      active: "/images/nav/Portfolio-active.svg",
      text: "Portfolio",
    },
    {
      link: "/plans",
      present: "/images/nav/Plan-present.svg",
      active: "/images/nav/Plan-active.svg",
      text: "Plans",
    },
    {
      link: "/about",
      present: "/images/nav/About-present.svg",
      active: "/images/nav/About-active.svg",
      text: "About",
    },
    {
      link: "/contact",
      present: "/images/nav/Contact-present.svg",
      active: "/images/nav/Contact-active.svg",
      text: "Contact",
    },
    {
      link: "/blogs",
      present: "/images/nav/Blog-present.svg",
      active: "/images/nav/Blog-active.svg",
      text: "Blog",
    },
  ];

  const isActive = (link) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[80%]">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg">
          
          {/* LOGO */}
          <Link
            href="/"
            className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14 lg:w-40 lg:h-16"
          >
            <Image
              src="/images/logo.svg"
              fill
              alt="Starway-logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
            {navlink.map((item, i) => {
              const active = isActive(item.link);

              return (
                <Link
                  key={i}
                  href={item.link}
                  className={`flex flex-col items-center gap-1 transition-transform hover:scale-105 ${
                    active ? "text-black" : "text-gray-700"
                  }`}
                >
                  <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                    <Image
                      src={active ? item.active : item.present}
                      fill
                      alt={item.text}
                    />
                  </div>

                  <span
                    className={`text-xs md:text-sm font-medium ${
                      active ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.text}
                  </span>

                  {/* Active underline */}
                  {/* {active && (
                    <div className="w-5 h-[3px] rounded-full bg-black mt-1" />
                  )} */}
                </Link>
              );
            })}
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
            
            {/* CLOSE BTN */}
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
            >
              <X className="text-white" />
            </button>

            <nav className="mt-20 grid grid-cols-2 gap-6">
              {navlink.map((item, i) => {
                const active = isActive(item.link);

                return (
                  <Link
                    href={item.link}
                    key={i}
                    onClick={() => setShowSidebar(false)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition ${
                      active ? "bg-white/20" : "hover:bg-white/10"
                    }`}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={active ? item.active : item.present}
                        fill
                        alt={item.text}
                      />
                    </div>

                    <span
                      className={`text-sm font-medium ${
                        active ? "text-[#abc2ed]" : "text-white"
                      }`}
                    >
                      {item.text}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
