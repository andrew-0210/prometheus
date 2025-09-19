"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import prometheus_logo from "@/assets/prometheus_logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Login() {
  useGSAP(() => {
    gsap.to("#login", {
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      y: 0,
    });
  }, []);

  return (
    <main className="p-[1.25rem] lg:px-[3rem]">
      <section className="mx-auto grid h-dvh max-w-[1400px] content-center gap-[2rem] lg:grid-cols-12">
        <div
          className="translate-y-20 rounded-[20px] bg-gradient-to-b from-[#666666] to-[#000000] p-[1px] opacity-0 lg:col-span-5 lg:col-start-7"
          id="login"
        >
          <div className="flex flex-col gap-[1.875rem] rounded-[20px] bg-gradient-to-b from-[#172533] to-[#05070A] p-[1.25rem] md:p-[2.5rem]">
            <div className="relative h-[3.75rem] w-[3.75rem] md:h-[5rem] md:w-[5rem]">
              <Image
                src={prometheus_logo}
                alt="prometheus_logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-[0.75rem]">
              <h2 className="text-[1.5rem] font-semibold leading-[1.1] tracking-[-1.25] md:text-[2rem]">
                Welcome back.
              </h2>
              <p className="text-[0.875rem] leading-[-0.5] md:text-[0.938rem]">
                <span className="text-[#747474]">
                  Don&apos;t have an account?
                </span>{" "}
                <Link href="/signup" className="font-semibold text-[#1072ce]">
                  Create new account &rarr;
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-[0.75rem]">
              <Input
                type="text"
                label="Email"
                className="leading-1 min-w-[20rem] rounded-[8px] bg-[#172533] px-[1rem] py-[1rem] outline-0 focus:ring focus:ring-[#1072ce] lg:py-[1.125rem]"
                placeholder="Enter email address"
              />
              <div className="mb-[1rem]">
                <Input
                  type="password"
                  label="Password"
                  className="leading-1 min-w-[20rem] rounded-[8px] bg-[#172533] px-[1rem] py-[1rem] outline-0 focus:ring focus:ring-[#1072ce] lg:py-[1.125rem]"
                  placeholder="Enter password"
                />
                <Link
                  href="/forgot-password"
                  className="mt-[0.25rem] block text-right font-medium text-[#1072ce]"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="flex">
              <Button className="leading-2.5 flex-1 cursor-pointer rounded-[8px] bg-[#1072ce] py-[1rem] font-semibold lg:py-[1.125rem]">
                Login
              </Button>
            </div>

            <div className="flex items-center justify-center gap-[1rem]">
              <div className="h-[1px] w-full bg-[#2a2a2a]" />
              <span className="text-[0.75rem] text-[#747474] md:text-[0.938rem]">
                OR
              </span>
              <div className="h-[1px] w-full bg-[#2a2a2a]" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Button className="leading-2.5 cursor-pointer rounded-[8px] border border-[#2a2a2a] bg-[#1a1a1a] py-[1rem] font-semibold hover:bg-[#2a2a2a] md:py-[1.125rem]">
                Sign in with Google
              </Button>

              <Button className="leading-2.5 cursor-pointer rounded-[8px] border border-[#2a2a2a] bg-[#1a1a1a] py-[1rem] font-semibold hover:bg-[#2a2a2a] md:py-[1.125rem]">
                Sign in with Apple
              </Button>
            </div>

            <div>
              <p className="text-center text-[#747474]">
                By signing in, you agree to the Prometheus{" "}
                <Link
                  href="/"
                  className="font-semibold text-[#1072ce] underline underline-offset-2"
                >
                  Terms of Service
                </Link>
                ,{" "}
                <Link
                  href="/"
                  className="font-semibold text-[#1072ce] underline underline-offset-2"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/"
                  className="font-semibold text-[#1072ce] underline underline-offset-2"
                >
                  Data usage policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
