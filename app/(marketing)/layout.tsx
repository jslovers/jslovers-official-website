interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40"></header>
      <main className="flex-1">{children}</main>
      <footer></footer>
    </div>
  );
}
