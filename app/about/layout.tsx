import Link from "next/link";
import { buttonVariants } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/navigation/MainNav";
import { ABOUT } from "@/config/about";
import { Work_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
const workSans = Work_Sans({ subsets: ["latin"] });

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({
  children,
}: AboutLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-32 items-center justify-between py-6">
          <MainNav items={ABOUT.Navigation} />
          <nav>
            <Link
              href="/register"
              className={cn(
                buttonVariants(),
                "border-solid border-2 border-border"
              )}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
