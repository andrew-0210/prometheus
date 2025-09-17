import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

export default function Login() {
  return (
    <main className="grid h-screen grid-cols-12 content-center gap-[2.25rem] p-[4rem]">
      <div className="col-span-6 col-start-8 flex flex-col gap-[2rem] rounded-[20px] p-[2rem]">
        <div>
          <h2 className="text-[2rem] leading-[1.2] tracking-[-1.25]">Login</h2>
          <p className="text-[#747474]">Please login to continue</p>
        </div>

        <div className="flex flex-col gap-[0.75rem]">
          <Input
            type="text"
            label="Email"
            className="min-w-[20rem] rounded-[8px] bg-[#2a2a2a] px-[1rem] py-[0.5rem] text-[0.875rem] outline-0 focus:ring focus:ring-[#1072ce]"
            placeholder="Enter email address"
          />
          <div className="mb-[1rem]">
            <Input
              type="password"
              label="Password"
              className="min-w-[20rem] rounded-[8px] bg-[#2a2a2a] px-[1rem] py-[0.5rem] text-[0.875rem] outline-0 focus:ring focus:ring-[#1072ce]"
              placeholder="Enter password"
            />
            <Link
              href="/forgot-password"
              className="mt-[0.25rem] block text-right text-[0.875rem] font-medium text-[#747474] hover:text-[#1072ce]"
            >
              Forgot Password?
            </Link>
            <div className="my-[1.25rem] flex flex-col gap-[0.5rem]">
              <div className="flex items-center gap-[0.75rem]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-[20px] w-[20px] bg-[#2a2a2a]"
                />
                <p className="text-[1.25rem] font-medium">
                  Receive feature updates and hiring tips
                </p>
              </div>
              <p className="text-[0.875rem] text-[#747474]">
                Get occasional insights, new feature releases, and smart hiring
                strategies right in your inbox.
              </p>
            </div>
          </div>
          <Button className="cursor-pointer rounded-[8px] bg-[#1072ce] py-[0.5rem]">
            Login
          </Button>
        </div>

        <div className="flex items-center justify-center gap-[1rem]">
          <div className="h-[1px] w-full bg-[#2a2a2a]" />
          <span className="text-[0.875rem] text-[#747474]">OR</span>
          <div className="h-[1px] w-full bg-[#2a2a2a]" />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <Button className="cursor-pointer rounded-[8px] border border-[#2a2a2a] bg-[#1b1b1b] py-[0.5rem] hover:bg-[#2a2a2a]">
            Login with Google
          </Button>
          <Button className="cursor-pointer rounded-[8px] border border-[#2a2a2a] bg-[#1b1b1b] py-[0.5rem] hover:bg-[#2a2a2a]">
            Login with Apple
          </Button>
        </div>

        <span className="flex justify-center gap-[0.25rem] text-[0.875rem]">
          <p className="text-[#747474]">Not signed up?</p>
          <Link href="/signup" className="font-semibold text-[#1072ce]">
            Create account now
          </Link>
        </span>
      </div>
    </main>
  );
}
