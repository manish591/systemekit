import { auth } from '@/auth';
import { notFound } from 'next/navigation';

export default async function PaymentStatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    return notFound();
  }

  return <>{children}</>;
}
