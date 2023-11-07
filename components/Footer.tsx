import Link from "next/link";
import { Icons } from "./Icons";
import { FOOTER } from "@/config/footer";

//TODO: Redesign may be needed according to the finalised footer contnent

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={className}>
      <h2 className="sr-only">Footer</h2>
      <div className="container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Icons.logo />
            <p className="text-normal leading-6">
              Community for developers by developers.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 ">
              <div className="text-center">
                <h3 className="text-lg font-medium leading-6">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER.QuickLinks.map((item) => (
                    <li key={item.TITLE}>
                      <Link href={item.HREF}>{item.TITLE}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium leading-6">Follow Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER.FollowUs.map((item) => (
                    <li key={item.TITLE}>
                      <Link href={item.HREF}>{item.TITLE}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium leading-6">Sponsors</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER.Sponsors.map((item) => {
                    return (
                      <li key={item.TITLE} className="flex justify-center">
                        <span className="sr-only">{item.TITLE}</span>
                        {item.LOGO}
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
