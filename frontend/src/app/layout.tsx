'use client'
import Providers from '@/components/Providers';
import StyledComponentsRegistry from '../lib/registry';
import Headers from '@/components/Header/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <Headers />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}