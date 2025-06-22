import { User } from 'lucide-react';
import { auth } from '@/auth';
import { prisma } from '@/prisma';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Profile() {
  const session = await auth();
  const userId = session?.user?.id as string;
  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userData) {
    throw new Error('Profile data not found');
  }

  const userName = userData.name ?? '';
  const nameSplit = userName.split(' ');
  const firstName = nameSplit[0];
  const lastName = nameSplit.length > 1 ? nameSplit[1] : '';

  return (
    <>
      <div className="flex items-center justify-between mt-[-4px] mb-6">
        <div>
          <h2 className="text-xl font-semibold">Profile Settings</h2>
          <p className="text-foreground/60 mt-1">
            Manage your personal information
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Your account details and contact information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={session?.user?.image ?? ''} alt="Profile" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{session?.user?.name}</h3>
              <p className="text-sm text-foregroud/60">
                Member Since: {userData?.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-sm">First Name</p>
              <div className="bg-accent/60 border px-3 py-2 rounded-md text-sm">
                {firstName}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Last Name</p>
              <div className="bg-accent/60 border px-3 py-2 rounded-md text-sm">
                {lastName}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Email</p>
              <div className="bg-accent/60 border px-3 py-2 rounded-md text-sm">
                {userData.email}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Plan</p>
              <div className="bg-accent/60 border px-3 py-2 rounded-md text-sm">
                {userData.plan}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
