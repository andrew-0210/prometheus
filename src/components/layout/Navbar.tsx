"use client";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <header className="fixed z-50 w-full">
      <nav className="container mx-[0.5rem] my-[1rem] flex items-center px-[1.25rem] py-[1rem]">
        <p className="bg-gradient-to-r from-[#fff] to-[#2a2a2a] bg-clip-text text-[1.75rem] font-semibold uppercase leading-[1] tracking-[-1.25] text-transparent">
          Prometheus
        </p>
        <ul className="hidden flex-1 justify-center sm:flex">
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
        <div className="flex gap-[2rem]">
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
      </nav>
    </header>
  );
}
