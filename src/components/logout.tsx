import { redirect } from 'next/navigation';
import { logout } from '../lib/actions';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

export default function Logout() {
  const handleSignOut = async () => {
    await logout();
    redirect('/');
  };
  return (
    <div className="flex items-center justify-end mb-2 mt-3 lg:mt-0 p-3">
      <Button variant="destructive" onClick={handleSignOut}>
        <LogOut />
      </Button>
    </div>
  );
}
