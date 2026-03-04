import { useState } from "react";
import { Menu, X } from "lucide-react";
import LeftPanel from "../components/auth/LeftPanel";
import RightPanel from "../components/auth/RightPanel";

export default function Login() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(1800px 1200px at 120% 110%,
            rgba(255,110,30,0.95) 0%,
            rgba(255,80,20,0.85) 25%,
            rgba(120,30,50,0.65) 45%,
            rgba(60,20,60,0.55) 60%,
            transparent 75%
          ),
          radial-gradient(1600px 1000px at 110% -10%,
            rgba(20,184,166,0.35),
            transparent 60%
          ),
          linear-gradient(180deg,
            #01030A 0%,
            #020617 60%,
            #01040F 100%
          )
        `
      }}
    >

      {/* Mobile Hamburger */}
      <div className="xl:hidden absolute top-6 right-6 z-50">
        {!open && (
          <button onClick={() => setOpen(true)}>
            <Menu size={28} className="text-white" />
          </button>
        )}
      </div>

      <div className="flex min-h-screen">

        {/* LEFT PANEL */}
        <div className="w-full xl:w-1/2">
          <LeftPanel />
        </div>

        {/* RIGHT PANEL DESKTOP */}
        <div className="hidden xl:flex w-1/2 items-start justify-center">
          <div className="-mt-20">
            <RightPanel />
          </div>
        </div>

        {/* RIGHT PANEL MOBILE / TABLET */}
        <div
          className={`xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#060A14] overflow-y-auto transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </button>

            <div className="min-h-full flex items-center justify-center py-16">
              <RightPanel />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}