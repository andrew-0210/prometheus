"use client";
import Image from "next/image";
import prometheus_logo from "@/assets/prometheus_logo.svg";
import Link from "next/link";
import { dashlinks } from "@/constants/links";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex h-dvh w-full max-w-[200px] flex-col gap-[1.875rem] p-[1.125rem]">
      <div className="relative h-[50px] w-[50px]">
        <Image
          src={prometheus_logo}
          alt="company logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-[8px] border border-[#2a2a2a] bg-[#1a1a1a] p-[0.5rem] text-[0.75rem] outline-0"
        />
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <ul>
          {dashlinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li
                onClick={() => {
                  router.push(link.href);
                }}
                key={i}
                className={clsx(
                  isActive ? "rounded-[8px] bg-[#1a1a1a] transition-all" : "",
                  "w-full cursor-pointer px-[0.75rem] py-[0.875rem] text-[0.75rem]",
                )}
              >
                {link.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Link href="/login" className="text-red-500">
          Sign Out
        </Link>
      </div>
    </nav>
  );
}
