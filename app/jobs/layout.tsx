import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/navigation/MainNav";
import { MARKETING } from "@/config/marketing";


interface JobsLayoutProps {
  children: React.ReactNode;
}

export default async function JobsLayout({ children }: JobsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="py-6">
          <MainNav items={MARKETING.Navigation} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
