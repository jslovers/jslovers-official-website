import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

export default async function IndexPage() {
  return (
    <section className="relative isolate">
      <div className="container px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="flex items-center group flex-shrink-0">
              <div>
                <img
                  className="inline-block h-40 w-40 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h2 className="text-2xl font-medium text-text-sub-heading-2 mb-2">
                  Upcoming Workshop by
                </h2>
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-base font-semibold text-text-muted">
                  Frontend Architect at Apple
                </p>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-wide">
              Introduction To Design System and Storybook
            </h1>
            <p className="relative mt-6 text-lg text-text-paragraph sm:max-w-md lg:max-w-none">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="mt-4 font-semibold text-text-accent">
              On 24th October at 05 : 00 AM IST
            </p>
            <form className="mt-8 flex items-center">
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
        </div>
      </div>
    </section>
  );
}
