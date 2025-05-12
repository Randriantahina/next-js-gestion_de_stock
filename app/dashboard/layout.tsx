import DasboardNav from '@/src/components/dashboard-nav';
import Nav from '@/src/components/nav';

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {' '}
      <Nav />
      <section className="max-w-[1200px] mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2  ">
        <DasboardNav />
        <div className="w-full h-full">{children}</div>
      </section>
    </>
  );
}
