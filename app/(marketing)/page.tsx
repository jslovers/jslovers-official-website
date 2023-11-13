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

            <div className="w-full lg:w-1/2 max-w-2xl lg:shrink-0 ">
              <div className="flex justify-center lg:justify-start items-center group flex-wrap">
                <Image
                  src="/assets/hero_image_guest_v1.png"
                  width="149"
                  height="149"
                  alt="hero_image"
                  className="object-cover "
                  loading="lazy"
                />
                <div className="lg:ml-5 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-medium text-text-sub-heading-2 mb-2">
                    Upcoming Workshop by
                  </h2>
                  <p className="text-xl font-semibold">John Doe</p>
                  <p className="text-base font-semibold text-text-muted">
                    Frontend Architect at Apple
                  </p>
                </div>
              </div>
              <h1 className="mt-2 text-center lg:text-left text-[40px] font-semibold leading-tight">
                Introduction To Design System and Storybook
              </h1>
              <p className="relative mt-2 text-center lg:text-left text-lg text-text-paragraph sm:max-w-md lg:max-w-none">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="mt-3 font-semibold text-text-accent text-center lg:text-left">
                On 24th October at 05 : 00 AM IST
              </p>

              {/* todo:mobile view  */}

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
                    className="flex-auto w-full rounded-lg border-0  sm:text-sm sm:leading-6 ring-2 ring-inset ring-border-input  h-16 pl-6 placeholder:text-lg placeholder:text-"
                  />
                  <button
                    type="submit"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                      }),
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

      {/* Todo: A discussion with maintainers on having a custom carousel component preferably or a lib of their choosing  */}

      <section className="isolate">
        <div className="container py-16 space-y-16 flex flex-col justify-center items-center">
          <SectionHeader header="Previous talks" className="w-min" />
          <div className="carousel carousel-center max-w-full flex justify-between gap-8 py-5">
            {MARKETING.PreviousTalks.map((previousTalk) => {
              return (
                <div
                  key={previousTalk.title}
                  className="carousel-item border-2 border-border rounded-lg p-7"
                >
                  <div className="w-80 h-80 flex flex-col">
                    <div className="h-2/3 flex justify-center items-center">
                      <Image
                        src={previousTalk.image.src}
                        alt={previousTalk.title}
                        width={previousTalk.image.width}
                        height={previousTalk.image.height}
                      />
                    </div>
                    <span className="text-[20px] font-medium">
                      {previousTalk.date}
                    </span>
                    <h4 className="text-[28px] font-semibold">
                      {previousTalk.title}
                    </h4>
                    <p className="text-lg font-semibold text-text-sub-heading">
                      by {previousTalk.speaker}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* todo: have a discussion on how to handle multiple type of joinees and made changes to form according to that */}

      <section className="isolate">
        <div className="container py-16 ">
          <div className="flex flex-col-reverse gap-16 sm:gap-y-20 lg:flex-row">
            <form
              action="#"
              method="POST"
              className="lg:flex-auto w-full lg:w-1/2"
            >
              <h2 className="text-5xl text-text-sub-heading font-semibold tracking-tight ">
                Wanna be a JsLover ?
              </h2>
              <p className="mt-6 text-lg">
                We welcome everyone to join jslover whether as a sponser,
                speaker or to be a part of jslovers core team. We welcome you
              </p>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-xl text-text-label font-medium"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-xl text-text-label font-medium"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-xl text-text-label font-medium"
                  >
                    Designation
                  </label>
                  <div className="mt-1">
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border"
                      placeholder="Enter your designation"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-xl text-text-label font-medium"
                  >
                    LinkedIn
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border"
                      placeholder="Enter your profile"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className={cn(
                    buttonVariants(),
                    "border-2 border-border h-14 w-2/3 lg:w-1/3 justify-between text-xl font-medium"
                  )}
                >
                  <span> Apply Now</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
            <div className=" lg:w-1/2 flex justify-center items-center">
              <figure className="border-8 border-border lg:p-6 rounded-[10px]">
                <Image
                  src="/assets/group_demo.png"
                  alt="group demo"
                  height="324"
                  width="546"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* todo: make a dumb component out of it */}

      <section className="isolate bg-background-secondary">
        <div className="container max-w-2xl mx-auto py-16 text-center">
          <h2 className="text-[40px] font-semibold leading-tight">
            Introduction To Design System and Storybook
          </h2>
          <p className="mt-3 text-lg text-text-paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
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
      </section>
    </>
  );
}
