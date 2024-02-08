import { useTranslations } from 'next-intl';
import { OrganizationSwitcher, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <OrganizationSwitcher />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
      <div>
        <h1>Change language</h1>
      </div>
      <h1>{t('title')}</h1>
      </div>
    </main>
  );
}
