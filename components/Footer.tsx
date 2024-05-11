import Link from "next/link";
import { Icons } from "./Icons";
import { FOOTER } from "@/config/footer";
import { cn } from "@/lib/utils";

//TODO: Redesign may be needed according to the finalised footer contnent

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <h5 className="sr-only">Footer</h5>
      <div className="container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4">
            <Icons.logo />
            <p className="text-normal leading-6">
              Community for developers by developers.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:col-span-2 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 md:space-y-0">
              <div className="lg:text-center">
                <h3 className="text-lg font-medium leading-6">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.QuickLinks.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href || ""}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg font-medium leading-6">Follow Us</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.FollowUs.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href || ""}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 sm:mt-0 lg:text-center">
                <h3 className="text-lg font-medium leading-6">Sponsors</h3>
                <ul className="mt-4 space-y-4">
                  {FOOTER.Sponsors.map((item) => {
                    return (
                      <li key={item.title} className="flex lg:justify-center">
                        <span className="sr-only">{item.title}</span>
                        {item.logo}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
