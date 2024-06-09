import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Workshop from "@/components/Workshop";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { MARKETING } from "@/config/marketing";
import SignupForMeetupCard from "@/components/SignupForMeetupCard";

export default async function IndexPage() {
  return (
    <>
      <section className="isolate">
        <div className="container py-4">
          <div className="max-w-2xl justify-between lg:flex lg:max-w-full lg:items-center gap-x-20">
            <Workshop
              workshopData={MARKETING.WorkshopData}
              className={"w-full lg:w-1/2 max-w-2xl lg:shrink-0"}
            />

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
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {MARKETING.Achievements.map((achievement) => {
              return (
                <div key={achievement.title} className="flex flex-col">
                  <dt className="text-xl  xl:text-2xl text-center font-semibold">
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
                    <p className="text-sm lg:text-base text-center text-text-paragraph">
                      {achievement.description}
                    </p>
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
          <div className="carousel carousel-center max-w-full flex flex-wrap justify-between gap-7 xl:gap-8 py-5">
            {MARKETING.PreviousTalks.map((previousTalk, index) => {
              return (
                <div
                  key={`previousTalk.title + ${index}`}
                  className="carousel-item border-2 border-border rounded-lg p-5 lg:p-7"
                >
                  <div className="w-60 h-60  md:w-70 md:h-70 xl:w-80 xl:h-80  flex flex-col">
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

      {/* todo: have a discussion on how to handle multiple type of joinees and make changes to form according to that */}

      <section className="isolate">
        <div className="container py-16 ">
          <div className="flex flex-col-reverse gap-16 sm:gap-y-20 lg:flex-row">
            <form
              action="#"
              method="POST"
              className="lg:flex-auto w-full lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-4xl xl:text-5xl text-text-sub-heading font-semibold text-center lg:text-left ">
                Wanna be a JSLover ?
              </h2>
              <p className="mt-6 text-base lg:text-lg text-center lg:text-left tracking-wide w-full xl:w-3/4">
                We welcome everyone to join JSLover whether as a sponsor,
                speaker or to be a part of JSLover core team. We welcome you.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-base lg:text-xl text-text-label font-medium"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border text-sm lg:text-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-base lg:text-xl text-text-label font-medium"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border text-sm lg:text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-base lg:text-xl text-text-label font-medium"
                  >
                    Designation
                  </label>
                  <div className="mt-1">
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border text-sm lg:text-lg"
                      placeholder="Enter your designation"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-base lg:text-xl text-text-label font-medium"
                  >
                    LinkedIn
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      className="block w-full rounded-md h-11 px-3.5 shadow-sm ring-2 ring-inset ring-border text-sm lg:text-lg"
                      placeholder="Enter your profile"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "border-2 border-border h-[50px] xl:h-14 w-2/3 sm:w-2/6 md:w-2/4  xl:w-1/3 justify-between text-base lg:text-xl font-medium"
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
      <SignupForMeetupCard />
      {/* <section className="isolate bg-lavenderRose">
        <div className="container max-w-2xl mx-auto py-16 text-center">
          <h2 className="text-2xl lg:text-[40px] font-semibold leading-tight">
            Introduction To Design System and Storybook
          </h2>
          <p className="mt-3 text-base lg:text-lg text-text-paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="mt-3 text-sm lg:text-xl font-semibold text-text-accent">
            On 24th October at 05 : 00 AM IST
          </p>
          <form className="mt-6 flex items-center">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <div className="relative flex flex-col lg:flex-row flex-grow space-y-4 lg:space-y-0">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="flex-auto w-full rounded-lg border-0  text-sm lg:text-lg  ring-2 ring-inset ring-border-input ring-black h-12 lg:h-16 pl-6 placeholder:text-sm lg:placeholder:text-lg "
              />
              <button
                type="submit"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "bg-indigo-300 lg:absolute lg:inset-y-0 lg:right-0 border-solid border-2 border-border text-sm lg:text-lg h-12 lg:h-16 justify-between "
                )}
              >
                <span>Register for free</span>
                <span>&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </>
  );
}
