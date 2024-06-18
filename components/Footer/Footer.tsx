import Link from "next/link";
import { Icons } from "../Icons";
import { FOOTER } from "@/config/footer";
import { cn } from "@/lib/utils";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <h5 className="sr-only">Footer</h5>
      <div className="container px-6 pt-2 sm:pt-8 lg:px-8 lg:pb-16">
        <section className="lg:grid lg:grid-cols-3 lg:gap-8">
          <section className="space-y-4">
            <Icons.logo />
            <p className="text-normal leading-6">
              Community for developers by developers.
            </p>
          </section>
          <section className="mt-6 grid grid-cols-1 gap-8 lg:col-span-2 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 md:space-y-0">
              <section className="lg:text-center">
                <h3 className="text-lg font-medium leading-6">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.QuickLinks.map((item) => (
                    <li key={item.title}>
                      <Link className="text-gray-500 hover:underline" href={item.href || ""}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="lg:text-center">
                <h3 className="text-lg font-medium leading-6">Follow Us</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.FollowUs.map((item) => (
                    <li key={item.title}>
                      <Link className="text-gray-500 hover:underline" href={item.href || ""}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-6 sm:mt-0 lg:text-center">
                <h3 className="text-lg font-medium leading-6">Sponsors</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.Sponsors.map((item) => {
                    return (
                      <li key={item.title} className="flex lg:justify-center">
                        <span className="sr-only text-gray-500">{item.title}</span>
                        {item.logo}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
}
