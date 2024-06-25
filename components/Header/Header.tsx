import { MainNav } from "@/components/navigation/MainNav";
import { NAVIGATION } from "@/config/navigation";

export function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-32 items-center py-6">
        <MainNav items={NAVIGATION} />
      </div>
    </header>
  );
}
