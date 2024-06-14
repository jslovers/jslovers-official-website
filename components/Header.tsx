import { MainNav } from "@/components/navigation/MainNav";
import { MARKETING } from "@/config/marketing";

export function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-32 items-center py-6">
        <MainNav items={MARKETING.Navigation} />
      </div>
    </header>
  );
}
