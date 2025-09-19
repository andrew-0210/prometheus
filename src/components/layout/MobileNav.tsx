import { navLinks } from "@/constants/navlinks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import prometheus_logo from "@/assets/prometheus_logo.svg";

type Props = {
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ setIsMenuOpen }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="absolute left-0 right-0 top-0 flex h-dvh flex-col justify-between bg-gradient-to-b from-[#172533] to-[#05070A] px-[1.125rem] pb-[1.5rem] pt-[1rem] transition-all">
      <div className="flex items-center justify-between">
        <div className="relative h-[3.75rem] w-[3.75rem] transition-all md:h-[5rem] md:w-[5rem]">
          <Image
            src={prometheus_logo}
            alt="company logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div
          className="inline-block rounded-full py-[0.75rem]"
          onClick={() => setIsMenuOpen?.(false)}
        >
          <AiOutlineClose color="#1072ce" size={24} />
        </div>
      </div>

      <ul className="flex flex-1 flex-col justify-center text-[1.5rem]">
        {navLinks.map((link, i) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li
              key={i}
              className={clsx(
                isActive ? "font-semibold text-[#1072ce]" : "text-[#5a5a5a]",
                "cursor-pointer py-[0.5rem] font-medium transition-all hover:text-[#1072ce]",
              )}
            >
              <Link href={link.href} onClick={()=>setIsMenuOpen?.(false)}>{link.title}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-[2rem]">
        <Button
          className="cursor-pointer text-[#1072ce]"
          eventHandler={handleSignUp}
        >
          Create an account
        </Button>
        <Button
          className="cursor-pointer rounded-full bg-[#1072ce] px-[1.5rem] py-[0.75rem] text-white"
          eventHandler={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
