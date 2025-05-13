import Logout from '@/src/components/logout';
import { getSession } from '@/src/lib/actions';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getSession();
  // if (session) {
  // redirect('/dashboard/notes');
  // }
  return redirect(session ? '/dashboard/acceuil' : '/sign-in');
  //    redirect('/sign-in');
  // return redirect(session ? '/dashboard/notes' : '/sign-in');
  // return (
  //   <>
  //     <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
  //       <p className="text-gray-600">Signed in as:</p>
  //       <p className="font-medium">{session.user?.email}</p>
  //     </div>

  //     <SignOut />
  //   </>
  // );
};

export default Page;
