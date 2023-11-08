import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

export default async function IndexPage() {
  return (
    <section className="relative isolate">
      <div className="container py-16 lg:px-8 ">
        <div className="max-w-2xl gap-x-20 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl ">
            <div className="flex items-center group flex-wrap">
              <Image
                src="/assets/hero_image_guest_v1.png"
                width="149"
                height="149"
                alt="hero_image"
                className="object-cover "
                loading="lazy"
              />
              <div className="ml-5">
                <h2 className="text-3xl font-medium text-text-sub-heading-2 mb-2">
                  Upcoming Workshop by
                </h2>
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-base font-semibold text-text-muted">
                  Frontend Architect at Apple
                </p>
              </div>
            </div>
            <h1 className="mt-2 text-[40px] font-semibold leading-tight">
              Introduction To Design System and Storybook
            </h1>
            <p className="relative mt-2 text-lg text-text-paragraph sm:max-w-md lg:max-w-none">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="mt-3 font-semibold text-text-accent">
              On 24th October at 05 : 00 AM IST
            </p>
            <form className="mt-6 flex items-center">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative flex flex-grow items-stretch">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="flex-auto w-full rounded-lg border-0  sm:text-sm sm:leading-6 ring-2 ring-inset ring-border-input h-14 pl-6"
                />
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "absolute inset-y-0 right-0 border-solid border-2 border-border"
                  )}
                >
                  Register for free &rarr;
                </button>
              </div>
            </form>
          </div>

          {/* image tiles */}

          <div className="hidden lg:flex w-full ">
            <div className="w-1/2 flex flex-col justify-center ">
              <Image
                src="/assets/hero_image_1_v1.png"
                width="254"
                height="226"
                alt="hero_image"
                className="object-cover "
                loading="lazy"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center space-y-16">
              <Image
                src="/assets/hero_image_2_v1.png"
                width="147"
                height="179"
                alt="hero_image"
                className="object-cover ml-auto"
                loading="lazy"
              />
              <Image
                src="/assets/hero_image_3_v1.png"
                width="260"
                height="274"
                alt="hero_image"
                className="object-cover "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
