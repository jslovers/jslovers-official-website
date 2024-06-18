import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

const SignupForMeetupCard = () => {
    return <section className="isolate bg-lavenderRose">
    <div className="container max-w-2xl mx-auto py-16 text-center">
      <h2 className="text-2xl lg:text-[40px] font-semibold leading-tight">
        Introduction to Design System and Storybook
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
  </section>
}

export default SignupForMeetupCard
