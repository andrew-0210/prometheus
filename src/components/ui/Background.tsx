import Image from "next/image";
import app_background from "@/assets/prometheus_app_background.svg";

export default function AppBackground({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative h-dvh md:overflow-x-hidden md:py-[2rem]">
      <div className="md:-translate-1/4 absolute -z-50">
        <div className="relative hidden h-[500px] w-[500px] md:block md:h-full md:w-full">
          <Image
            src={app_background}
            alt="prometheus logo in the background"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 h-dvh bg-gradient-to-b from-transparent to-[#0a0a0a] to-70% backdrop-blur-[4px]" />
      {children}
    </div>
  );
}
