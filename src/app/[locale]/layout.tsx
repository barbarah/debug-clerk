import { ClerkProvider } from '@clerk/nextjs'

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <ClerkProvider>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}