import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { AccountNavLinks } from './account-nav-links';

export default async function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session?.user) {
    return redirect('/login');
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-4 pb-24">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground">My Account</h1>
          <p className="text-foreground/60 text-sm">
            Manage your account settings and billing information
          </p>
        </div>

        {/* sidebar and content section */}
        <div className="grid grid-cols-[170px_1fr] gap-12 items-start">
          <AccountNavLinks />
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
