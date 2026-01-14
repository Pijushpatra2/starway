"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-full bg-white py-30">
            <div className="max-w-[80%] mx-auto px-6">
                {/* Top Grid */}
                <div className="flex justify-evenly">
                    {/* LEFT IMAGES */}
                    <div className="w-[40%] flex flex-col gap-2">
                        <div>
                            <img
                                src="/images/HERO2.png"
                                alt="Team discussion"
                                className="rounded-2xl object-cover w-full h-56"
                            />
                        </div>
                        <div className="w-full max-w-[70%]">
                            <img
                                src="/images/HERO2.png"
                                alt="Team work"
                                className="rounded-2xl object-cover w-full h-56"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-[50%]">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                            About Us
                        </span>

                        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Empowering Your Success <br /> with Digital Expertise
                        </h2>

                        <p className="text-gray-600 mb-8 max-w-xl">
                            We help businesses grow through smart digital solutions, strong
                            strategy, and reliable execution across marketing, design, and
                            development.
                        </p>

                        {/* PROGRESS BARS */}
                        <div className="space-y-5">
                            <Progress label="Marketing & Business Growth" value={85} />
                            <Progress label="Creativity & Innovation" value={80} />
                            <Progress label="Business & Financial Management" value={95} />
                        </div>

                        <button className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-700 transition">
                            About Us →
                        </button>
                    </div>
                </div>

                {/* STATS */}
                {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <Stat value="3k+" label="Successful Projects" />
                    <Stat value="200+" label="Expert Team" />
                    <Stat value="350+" label="Happy Customers" />
                    <Stat value="16+" label="Years of Experience" />
                </div> */}
            </div>
        </section>
    );
}

/* Progress Bar Component */
function Progress({ label, value }) {
    return (
        <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

/* Stat Component */
function Stat({ value, label }) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            <p className="text-gray-600 text-sm mt-1">{label}</p>
        </div>
    );
}
