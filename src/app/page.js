import Image from "next/image";
import { cn } from "../../lib/utils";
import { Spotlight } from "./components/Spotlight";
export default function Home() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex items-center justify-center relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 sm:flex-col md:pt-0 flex-row">
        <div>
          <Image src="/logo.png" width={250} height={250} />
        </div>
        <div>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Website Under Construction <br />
          </h1>
        </div>
      </div>
    </div>
  );
}
