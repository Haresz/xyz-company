// app/layout.tsx
import { fonts } from "./fonts";
import { Providers } from "./providers/page";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.montserrat.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
