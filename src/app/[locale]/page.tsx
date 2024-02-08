import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import Client from "./client";

export default async function Home() {
  const t = await getTranslations('Index');

  return (
    <main className="flex min-h-screen flex-col p-24 max-w-md">
      <div>
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <div>
          <h3>Change language</h3>
          <Link href="/" locale='en'>English</Link> |
          <Link href="/" locale='nl'>Dutch</Link>
        </div>
      </div>
      <Client />
    </main>
  );
}
