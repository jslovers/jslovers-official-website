import { buttonVariants } from "@/components/Button";
import { MainNav } from "@/components/navigation/MainNav";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-32 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
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
      <footer></footer>
    </div>
  );
}
