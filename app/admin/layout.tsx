import { redirect } from 'next/navigation';
import { isUserAdmin } from './action';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin = await isUserAdmin();

  // if (!isAdmin) {
  //   return redirect('/');
  // }

  return <div>{children}</div>;
}
