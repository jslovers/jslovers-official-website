import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { MARKETING } from "@/config/marketing";

export default async function IndexPage() {
  return (
    <>
      <section className="isolate">
        <div className="container py-16">
          <div className="max-w-2xl justify-between lg:flex lg:max-w-full lg:items-center gap-x-20">
            {/* todo:make the below a separate dumb component  */}

            <div className="w-1/2 max-w-2xl lg:shrink-0 ">
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
                    className="flex-auto w-full rounded-lg border-0  sm:text-sm sm:leading-6 ring-2 ring-inset ring-border-input h-16 pl-6 placeholder:text-lg placeholder:text-"
                  />
                  <button
                    type="submit"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "absolute inset-y-0 right-0 border-solid border-2 border-border text-lg "
                    )}
                  >
                    Register for free &rarr;
                  </button>
                </div>
              </form>
            </div>

            {/*  image tiles */}

            <div className="hidden lg:flex w-1/2 ">
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
      <section className="isolate">
        <div className="container py-16 space-y-16">
          <SectionHeader header="Our Achivements" className="w-min mx-auto" />
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {MARKETING.Achievements.map((achievement) => {
              return (
                <div key={achievement.title} className="flex flex-col">
                  <dt className="text-2xl text-center font-semibold">
                    {achievement.title}
                  </dt>
                  <dd className="flex flex-col items-center">
                    <div className="h-40 flex items-center">
                      <Image
                        src={achievement.image.src}
                        alt={achievement.title}
                        width={achievement.image.width}
                        height={achievement.image.height}
                      />
                    </div>
                    <p className="text-center">{achievement.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    </>
  );
}
