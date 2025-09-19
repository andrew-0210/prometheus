"use client";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import prometheus_logo from "@/assets/prometheus_logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useGSAP(() => {
    gsap.to("#nav", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <header className="fixed z-50 w-full">
      <nav
        className="container mx-[0.5rem] flex -translate-y-20 items-center justify-between px-[1.25rem] py-[1rem] opacity-0"
        id="nav"
      >
        <div className="relative h-[3.75rem] w-[3.75rem] transition-all md:h-[5rem] md:w-[5rem]">
          <Image
            src={prometheus_logo}
            alt="company logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <ul className="hidden flex-1 justify-center md:flex">
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
                  "cursor-pointer px-[1rem] py-[0.5rem] font-medium transition-all hover:text-[#1072ce]",
                )}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden gap-[2rem] md:flex">
          <Button
            className="cursor-pointer text-[#1072ce]"
            eventHandler={handleSignUp}
          >
            Create an account
          </Button>
          <Button
            className="cursor-pointer rounded-full bg-[#1072ce] px-[1.5rem] py-[0.75rem]"
            eventHandler={handleLogin}
          >
            Login
          </Button>
        </div>
        <div className="md:hidden" onClick={handleMenu}>
          <AiOutlineMenu color="#1072ce" size={24} />
        </div>
        {isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}
      </nav>
    </header>
  );
}
