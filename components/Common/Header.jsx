"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
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

  const servicesDropdown = [
    {
      title: "Branding",
      icon: "/images/navServices/branding.png",
      link: "/services/branding",
    },
    {
      title: "PPC Advertising",
      icon: "/images/navServices/ppc.png",
      link: "/services/ppc-advertising",
    },
    {
      title: "Social Media Marketing",
      icon: "/images/navServices/socialmedia.png",
      link: "/services/social-media-marketing",
    },
    {
      title: "Google Maps & GMB",
      icon: "/images/navServices/graph.png",
      link: "/services/google-maps-gmb",
    },
    {
      title: "Content Marketing",
      icon: "/images/navServices/writer.png",
      link: "/services/content-marketing",
    },
    {
      title: "SEO & Local Ranking",
      icon: "/images/navServices/seo.png",
      link: "/services/seo-local-ranking",
    },
    {
      title: "UI/UX Design",
      icon: "/images/navServices/webdesign.png",
      link: "/services/ui-ux-design",
    },
    {
      title: "AI Search Optimization",
      icon: "/images/navServices/AI.png",
      link: "/services/ai-search-optimization",
    },
    {
      title: "Website, App & E-Commerce",
      icon: "/images/navServices/webProgramming.png",
      link: "/services/web-app-ecommerce",
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

              // SPECIAL DROPDOWN FOR SERVICES
              if (item.text === "Services") {
                return (
                  <div key={i} className="relative group/services">
                    <Link
                      href={item.link}
                      className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                        active
                          ? "bg-blue-600/10 border-blue-600/30"
                          : "border-transparent hover:bg-blue-600/5"
                      }`}
                    >
                      <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                        <Image
                          src={active ? item.active : item.present}
                          fill
                          alt={item.text}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-0.5">
                        <span className="text-xs md:text-sm font-medium">
                          {item.text}
                        </span>

                        <ChevronDown
                          size={10}
                          className={`transition-transform duration-200 group-hover/services:rotate-180 ${
                            active ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </Link>

                    {/* MEGA MENU */}
                    <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[620px] xl:w-[680px] bg-white backdrop-blur-2xl border border-white/80 rounded-2xl shadow-2xl shadow-black/14 p-5 opacity-0 invisible translate-y-2 group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0 transition-all duration-250 z-50 pointer-events-none group-hover/services:pointer-events-auto">
                      {/* Arrow notch */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/8  8 border-l border-t border-white rotate-45 rounded-tl-sm" />

                      {/* Section label */}
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                        
                        <span className="text-[10px] font-bold text-destructive tracking-[0.18em] uppercase">
                          Our Services
                        </span>
                      </div>

                      {/* 3-col grid */}
                      <div className="grid grid-cols-3 gap-0.5">
                        {servicesDropdown.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.link}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#0B5D48]/6 group/item transition-all duration-150"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] border border-[#0B5D48]/10 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={service.icon}
                                alt={service.title}
                                width={18}
                                height={18}
                                className="object-contain"
                              />
                            </div>
                            <span className="text-[14px] font-semibold text-gray-600 group-hover/item:text-destructive transition-colors leading-snug">
                              {service.title}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Footer row */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">
                          Not sure which service you need?
                        </span>
                        <Link
                          href="/contact"
                          className="text-[11px] font-bold text-destructive border border-destructive/25 bg-destructive/5 hover:bg-destructive/10 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Free Consultation →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              // NORMAL NAV ITEMS
              return (
                <Link
                  key={i}
                  href={item.link}
                  className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    active
                      ? "bg-blue-600/10 border-blue-600/30"
                      : "border-transparent hover:bg-blue-600/5"
                  }`}
                >
                  <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                    <Image
                      src={active ? item.active : item.present}
                      fill
                      alt={item.text}
                    />
                  </div>

                  <span className="text-xs md:text-sm font-medium">
                    {item.text}
                  </span>
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

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";

// // ── Data ─────────────────────────────────────────────────────────────────
// const navLinks = [
//   { link: "/", present: "/images/nav/Home-present.svg", active: "/images/nav/Home-active.svg", text: "Home" },
//   { link: "/services", present: "/images/nav/Service-present.svg", active: "/images/nav/Service-active2.svg", text: "Services" },
//   { link: "/portfolio", present: "/images/nav/Portfolio-present.svg", active: "/images/nav/Portfolio-active.svg", text: "Portfolio" },
//   { link: "/plans", present: "/images/nav/Plan-present.svg", active: "/images/nav/Plan-active.svg", text: "Plans" },
//   { link: "/about", present: "/images/nav/About-present.svg", active: "/images/nav/About-active.svg", text: "About" },
//   { link: "/contact", present: "/images/nav/Contact-present.svg", active: "/images/nav/Contact-active.svg", text: "Contact" },
//   { link: "/blogs", present: "/images/nav/Blog-present.svg", active: "/images/nav/Blog-active.svg", text: "Blog" },
// ];

// const servicesDropdown = [
//   { title: "Branding", icon: "/images/navServices/branding.png", link: "/services/branding" },
//   { title: "PPC Advertising", icon: "/images/navServices/ppc.png", link: "/services/ppc-advertising" },
//   { title: "Social Media Marketing", icon: "/images/navServices/socialmedia.png", link: "/services/social-media-marketing" },
//   { title: "Google Maps & GMB", icon: "/images/navServices/graph.png", link: "/services/google-maps-gmb" },
//   { title: "Content Marketing", icon: "/images/navServices/writer.png", link: "/services/content-marketing" },
//   { title: "SEO & Local Ranking", icon: "/images/navServices/seo.png", link: "/services/seo-local-ranking" },
//   { title: "UI/UX Design", icon: "/images/navServices/webdesign.png", link: "/services/ui-ux-design" },
//   { title: "AI Search Optimization", icon: "/images/navServices/AI.png", link: "/services/ai-search-optimization" },
//   { title: "Website, App & E-Commerce", icon: "/images/navServices/webProgramming.png", link: "/services/web-app-ecommerce" },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showMobileServices, setShowMobileServices] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const isActive = (link) => (link === "/" ? pathname === "/" : pathname.startsWith(link));

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 24);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = showSidebar ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [showSidebar]);

//   return (
//     <>
//       {/* ── FLOATING HEADER ───────────────────────────────────────────── */}
//       <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1100px] transition-all duration-300">
//         <div
//           className={`flex items-center justify-between px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ${
//             scrolled
//               ? "bg-white/85 backdrop-blur-2xl border border-white/70 shadow-xl shadow-black/10"
//               : "bg-white/50 backdrop-blur-xl border border-white/60 shadow-md shadow-black/5"
//           }`}
//         >
//           {/* LOGO */}
//           <Link href="/" className="relative flex-shrink-0 w-28 h-10 sm:w-32 sm:h-11 block">
//             <Image src="/images/logo.svg" fill alt="Logo" className="object-contain" priority />
//           </Link>

//           {/* DESKTOP NAV — visible lg+ */}
//           <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
//             {navLinks.map((item, i) => {
//               const active = isActive(item.link);

//               /* Services with mega dropdown */
//               if (item.text === "Services") {
//                 return (
// <div key={i} className="relative group/services">
//   <Link
//     href={item.link}
//     className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
//       active
//         ? "bg-[#0B5D48]/8 border-[#0B5D48]/20"
//         : "border-transparent hover:bg-black/4"
//     }`}
//   >
//     <div className="relative w-5 h-5 xl:w-6 xl:h-6">
//       <Image src={active ? item.active : item.present} fill alt={item.text} className="object-contain" />
//     </div>
//     <div className="flex items-center gap-0.5">
//       <span className={`text-[11px] xl:text-xs font-semibold tracking-tight ${active ? "text-[#0B5D48]" : "text-gray-700"}`}>
//         {item.text}
//       </span>
//       <ChevronDown
//         size={10}
//         className={`transition-transform duration-200 group-hover/services:rotate-180 ${active ? "text-[#0B5D48]" : "text-gray-400"}`}
//       />
//     </div>
//   </Link>

//   {/* MEGA MENU */}
//   <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[620px] xl:w-[680px] bg-white/88 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-2xl shadow-black/14 p-5 opacity-0 invisible translate-y-2 group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0 transition-all duration-250 z-50 pointer-events-none group-hover/services:pointer-events-auto">

//     {/* Arrow notch */}
//     <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/88 border-l border-t border-white/80 rotate-45 rounded-tl-sm" />

//     {/* Section label */}
//     <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
//       <div className="h-px w-5 bg-[#20c589]" />
//       <span className="text-[9px] font-bold text-[#0B5D48] tracking-[0.18em] uppercase">Our Services</span>
//     </div>

//     {/* 3-col grid */}
//     <div className="grid grid-cols-3 gap-0.5">
//       {servicesDropdown.map((service, idx) => (
//         <Link
//           key={idx}
//           href={service.link}
//           className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#0B5D48]/6 group/item transition-all duration-150"
//         >
//           <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] border border-[#0B5D48]/10 flex items-center justify-center flex-shrink-0">
//             <Image src={service.icon} alt={service.title} width={18} height={18} className="object-contain" />
//           </div>
//           <span className="text-[12px] font-semibold text-gray-600 group-hover/item:text-[#0B5D48] transition-colors leading-snug">
//             {service.title}
//           </span>
//         </Link>
//       ))}
//     </div>

//     {/* Footer row */}
//     <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
//       <span className="text-[11px] text-gray-400">Not sure which service you need?</span>
//       <Link
//         href="/contact"
//         className="text-[11px] font-bold text-[#0B5D48] border border-[#0B5D48]/25 bg-[#0B5D48]/5 hover:bg-[#0B5D48]/10 px-3 py-1.5 rounded-lg transition-all"
//       >
//         Free Consultation →
//       </Link>
//     </div>
//   </div>
// </div>
//                 );
//               }

//               /* Regular nav items */
//               return (
//                 <Link
//                   key={i}
//                   href={item.link}
//                   className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
//                     active
//                       ? "bg-[#0B5D48]/8 border-[#0B5D48]/20"
//                       : "border-transparent hover:bg-black/4"
//                   }`}
//                 >
//                   <div className="relative w-5 h-5 xl:w-6 xl:h-6">
//                     <Image src={active ? item.active : item.present} fill alt={item.text} className="object-contain" />
//                   </div>
//                   <span className={`text-[11px] xl:text-xs font-semibold tracking-tight ${active ? "text-[#0B5D48]" : "text-gray-700"}`}>
//                     {item.text}
//                   </span>
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right — CTA + Hamburger */}
//           <div className="flex items-center gap-2 flex-shrink-0">
//             {/* Desktop CTA */}
//             <Link
//               href="/contact"
//               className="hidden lg:inline-flex items-center px-4 xl:px-5 py-2 rounded-full bg-gradient-to-r from-[#0B5D48] to-[#16855D] text-white text-[12px] xl:text-sm font-bold shadow-md shadow-[#0B5D48]/20 hover:shadow-lg hover:shadow-[#0B5D48]/30 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
//             >
//               Free Audit
//             </Link>

//             {/* Hamburger — mobile & tablet */}
//             <button
//               onClick={() => setShowSidebar(true)}
//               className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B5D48]/8 border border-[#0B5D48]/15 text-[#0B5D48] hover:bg-[#0B5D48]/14 active:scale-95 transition-all"
//               aria-label="Open navigation menu"
//             >
//               <Menu size={18} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ── MOBILE / TABLET SIDEBAR ──────────────────────────────────── */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 z-[9999] bg-black/35 backdrop-blur-sm"
//           onClick={(e) => { if (e.target === e.currentTarget) setShowSidebar(false); }}
//         >
//           {/* Panel */}
//           <div className="absolute right-0 top-0 bottom-0 w-[min(300px,82vw)] sm:w-[min(340px,78vw)] bg-white/90 backdrop-blur-2xl border-l border-white/70 shadow-2xl flex flex-col overflow-hidden">

//             {/* Panel header */}
//             <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-100/80 bg-white/50">
//               <Link href="/" onClick={() => setShowSidebar(false)} className="relative block w-28 h-9">
//                 <Image src="/images/logo.svg" fill alt="Logo" className="object-contain" />
//               </Link>
//               <button
//                 onClick={() => setShowSidebar(false)}
//                 className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/80 hover:bg-gray-200/80 text-gray-500 transition-all active:scale-95"
//               >
//                 <X size={15} />
//               </button>
//             </div>

//             {/* Scrollable body */}
//             <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4">

//               {/* Nav icon grid — 3 cols */}
//               <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
//                 {navLinks.map((item, i) => {
//                   const active = isActive(item.link);

//                   /* Services button — toggles accordion */
//                   if (item.text === "Services") {
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => setShowMobileServices(!showMobileServices)}
//                         className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all duration-200 active:scale-95 ${
//                           active || showMobileServices
//                             ? "bg-[#0B5D48]/10 border-[#0B5D48]/22"
//                             : "bg-gray-50/80 border-gray-100 hover:bg-gray-100/80"
//                         }`}
//                       >
//                         <div className="relative w-7 h-7">
//                           <Image src={active ? item.active : item.present} fill alt={item.text} className="object-contain" />
//                         </div>
//                         <span className={`text-[10px] sm:text-[11px] font-semibold ${active || showMobileServices ? "text-[#0B5D48]" : "text-gray-600"}`}>
//                           {item.text}
//                         </span>
//                         <ChevronDown
//                           size={9}
//                           className={`-mt-0.5 transition-transform duration-200 ${showMobileServices ? "rotate-180 text-[#0B5D48]" : "text-gray-400"}`}
//                         />
//                       </button>
//                     );
//                   }

//                   return (
//                     <Link
//                       key={i}
//                       href={item.link}
//                       onClick={() => setShowSidebar(false)}
//                       className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all duration-200 active:scale-95 ${
//                         active
//                           ? "bg-[#0B5D48]/10 border-[#0B5D48]/22"
//                           : "bg-gray-50/80 border-gray-100 hover:bg-gray-100/80"
//                       }`}
//                     >
//                       <div className="relative w-7 h-7">
//                         <Image src={active ? item.active : item.present} fill alt={item.text} className="object-contain" />
//                       </div>
//                       <span className={`text-[10px] sm:text-[11px] font-semibold ${active ? "text-[#0B5D48]" : "text-gray-600"}`}>
//                         {item.text}
//                       </span>
//                     </Link>
//                   );
//                 })}
//               </div>

//               {/* Services accordion */}
//               {showMobileServices && (
//                 <div className="mt-3 rounded-2xl border border-gray-100/80 overflow-hidden bg-white/60">
//                   <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0B5D48]/5 border-b border-gray-100">
//                     <div className="h-px w-4 bg-[#20c589]" />
//                     <span className="text-[9px] font-bold text-[#0B5D48] tracking-[0.16em] uppercase">All Services</span>
//                   </div>
//                   <div className="divide-y divide-gray-50/80">
//                     {servicesDropdown.map((service, idx) => (
//                       <Link
//                         key={idx}
//                         href={service.link}
//                         onClick={() => setShowSidebar(false)}
//                         className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#0B5D48]/5 active:bg-[#0B5D48]/8 group/s transition-colors"
//                       >
//                         <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] border border-[#0B5D48]/10 flex items-center justify-center flex-shrink-0">
//                           <Image src={service.icon} alt={service.title} width={17} height={17} className="object-contain" />
//                         </div>
//                         <span className="text-[12.5px] font-semibold text-gray-600 group-hover/s:text-[#0B5D48] transition-colors">
//                           {service.title}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar footer CTA */}
//             <div className="px-3 sm:px-4 pb-5 pt-3 border-t border-gray-100/80 bg-white/40">
//               <Link
//                 href="/contact"
//                 onClick={() => setShowSidebar(false)}
//                 className="flex items-center justify-center w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0B5D48] to-[#16855D] text-white text-sm font-bold shadow-lg shadow-[#0B5D48]/20 hover:shadow-xl hover:shadow-[#0B5D48]/25 active:scale-[0.98] transition-all"
//               >
//                 Get a Free Audit →
//               </Link>
//               <p className="text-center text-[10.5px] text-gray-400 mt-2 font-medium">
//                 No commitment · Reply within 24 hrs
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
