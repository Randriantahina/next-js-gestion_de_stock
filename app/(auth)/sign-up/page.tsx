import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { getSession, signUp } from '@/src/lib/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getSession();
  if (session) redirect('/');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="w-full max-w-sm mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

          {/* Email/Password Sign In */}
          <form
            className="space-y-4"
            action={async (formData) => {
              'use server';
              await signUp(formData);
            }}
          >
            <Input
              name="email"
              placeholder="Email"
              type="email"
              required
              autoComplete="email"
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              required
              autoComplete="current-password"
            />
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="text-center">
            <Button asChild variant="link">
              <Link href="/sign-in">Already have an account ? Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
