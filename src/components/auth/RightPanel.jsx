import { FaApple } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function RightPanel() {

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[490px] bg-[#ECECEC] rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-12 mt-32 lg:mt-36">

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">
                Sign up
            </h2>

            <p className="text-sm text-gray-600 text-center mb-8">
                Already have an account?{" "}
                <span className="text-[#0CC8A8] font-medium cursor-pointer">
                    Log in
                </span>
            </p>

            {/* Name Fields */}
            <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="First name*"
                    className="bg-white h-[56px] border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
                />
                <input
                    type="text"
                    placeholder="Last name*"
                    className="bg-white h-[56px] border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
                />
            </div>

            {/* Email */}
            <input
                type="email"
                placeholder="Email address*"
                className="w-full h-[56px] bg-white border border-gray-300 rounded-lg px-4 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            {/* Password */}
            <div className="relative mb-8">
                <input
                    type="password"
                    placeholder="Password (8+ characters)*"
                    className="w-full h-[56px] bg-white border border-gray-200 rounded-lg px-5 text-sm focus:outline-none focus:border-[#0CC8A8] focus:ring-4 focus:ring-[#0CC8A8]/20 transition"
                />
                <img
                    src="/eye_icon.png"
                    alt="toggle password"
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-4 opacity-70 cursor-pointer"
                />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-6">
                <input type="checkbox" className="mt-1 accent-[#0CC8A8]" />
                <p>
                    I agree to{" "}
                    <span className="text-blue-600 underline cursor-pointer">
                        Terms & Conditions
                    </span>{" "}
                    and acknowledge the{" "}
                    <span className="text-blue-600 underline cursor-pointer">
                        Privacy Policy
                    </span>
                </p>
            </div>

            {/* CTA */}
            <button
                onClick={() => navigate("/dashboard")}
                className="w-full bg-[#0CC8A8] hover:bg-[#0bb39a] text-white font-medium py-4 rounded-full transition mb-2"
            >
                Create account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-between gap-4">

                <button className="flex-1 bg-black text-white rounded-full py-3 flex items-center justify-center">
                    <FaApple className="text-lg" />
                </button>

                <button className="flex-1 bg-white border border-gray-300 rounded-full py-3 flex items-center justify-center">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                </button>

                <button className="flex-1 bg-[#4267B2] text-white rounded-full py-3 flex items-center justify-center">
                    <SiMeta className="text-lg" />
                </button>

            </div>

        </div>
    );
}