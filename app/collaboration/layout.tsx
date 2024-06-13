import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/navigation/MainNav";
import { SPEAKERS } from "@/config/speakers";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

interface CollabortionLayoutProps {
  children: React.ReactNode;
}

export default async function SpeakersLayout({
  children,
}: CollabortionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-32 items-center justify-between py-6">
          <MainNav items={SPEAKERS.Navigation} />
        </div>
      </header>
      <main className={`${workSans.className} flex-1`}>{children}</main>
      <Footer />
    </div>
  );
}
