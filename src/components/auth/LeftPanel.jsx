import { Check } from "lucide-react";

export default function LeftPanel() {
    return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">

            {/* Background
            <div
                className="absolute inset-0 -z-20"
                style={{
                    background: `
                        radial-gradient(1000px 700px at 85% 20%, rgba(20,184,166,0.35), transparent 60%),
                        radial-gradient(900px 700px at 95% 95%, rgba(255,95,31,0.85), transparent 65%),
                        linear-gradient(180deg, #040813 0%, #060A14 60%, #070B16 100%)
    `
                }}
            /> */}

            {/* Grain */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')"
                }}
            />

            {/* Logo */}
            <div className="absolute top-5 left-5 lg:top-[20px] lg:left-[20px] flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#14B8A6] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-[22px] font-medium tracking-tight -translate-y-[3px]">
                    aps
                </span>
            </div>

            {/* Content Wrapper */}
            <div className="px-6 lg:px-0 lg:absolute lg:top-[235px] lg:left-[88px] pt-40 lg:pt-0 max-w-full lg:w-[540px]">

                {/* Heading */}
                <h1 className="text-[34px] leading-[44px] lg:text-[42px] lg:leading-[54px] font-medium mb-10 lg:mb-12">
                    Expert level Cybersecurity <br />
                    in <span className="text-[#14B8A6]">hours</span> not weeks.
                </h1>

                {/* Section Title */}
                <p className="text-[15px] text-white-500 font-medium mb-6">
                    What’s included
                </p>

                {/* Bullet List */}
                <div className="space-y-3 text-[15px] text-white-300/90">

                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-[#10B981] mt-[4px] flex-shrink-0" />
                        <span className="block leading-[1.35]">
                            Effortlessly spider and map targets to uncover hidden security flaws
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-[#10B981] mt-[4px] flex-shrink-0" />
                        <span className="block leading-[1.35]">
                            Deliver high-quality, validated findings in hours, not weeks.
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-[#10B981] mt-[4px] flex-shrink-0" />
                        <span className="block leading-[1.35]">
                            Generate professional, enterprise-grade security reports automatically.
                        </span>
                    </div>

                </div>
            </div>

            {/* Trustpilot */}
            <div className="px-6 lg:px-0 mt-16 lg:mt-0 lg:absolute lg:bottom-[70px] lg:left-[88px]">

                <div className="flex items-center gap-2 text-white-500">
                    <span className="text-[#10B981]">★</span>
                    <span>Trustpilot</span>
                </div>

                <div className="mt-2 text-white font-semibold text-xl">
                    Rated 4.5/5.0{" "}
                    <span className="text-gray-500 font-normal text-xs">
                        (100k+ reviews)
                    </span>
                </div>

            </div>

        </div>
    );
}