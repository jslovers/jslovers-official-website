import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

const Form = () => {
  return (
    <form action="#" method="POST" className="w-full lg:w-1/2 lg:flex-auto">
      <h2 className="text-text-sub-heading text-center text-2xl font-semibold sm:text-4xl lg:text-left xl:text-5xl ">
        Wanna be a JSLover ?
      </h2>
      <p className="mt-6 w-full text-center text-base tracking-wide lg:text-left lg:text-lg xl:w-3/4">
        We welcome everyone to join JSLover whether as a sponsor, speaker or to
        be a part of JSLover core team. We welcome you.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="text-text-label block text-base font-medium lg:text-xl"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="block h-11 w-full rounded-md px-3.5 text-sm shadow-sm ring-2 ring-inset ring-border lg:text-lg"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="text-text-label block text-base font-medium lg:text-xl"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block h-11 w-full rounded-md px-3.5 text-sm shadow-sm ring-2 ring-inset ring-border lg:text-lg"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="designation"
            className="text-text-label block text-base font-medium lg:text-xl"
          >
            Designation
          </label>
          <div className="mt-1">
            <input
              id="designation"
              name="designation"
              type="text"
              className="block h-11 w-full rounded-md px-3.5 text-sm shadow-sm ring-2 ring-inset ring-border lg:text-lg"
              placeholder="Enter your designation"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="text-text-label block text-base font-medium lg:text-xl"
          >
            LinkedIn
          </label>
          <div className="mt-1">
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              className="block h-11 w-full rounded-md px-3.5 text-sm shadow-sm ring-2 ring-inset ring-border lg:text-lg"
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
            "h-[50px] w-2/3 justify-between border-2 border-border text-base font-medium  sm:w-2/6 md:w-2/4 lg:text-xl xl:h-14 xl:w-1/3",
          )}
        >
          <span> Apply Now</span>
          <span>&rarr;</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
