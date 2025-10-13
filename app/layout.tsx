"use client";
import { Provider as ChakraProvider } from "../components/ui/provider"; // ton provider Chakra
import { I18nextProvider, i18n } from "../utils/i18n";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <title>Arnaud Schellekens - Portfolio</title>
      <body>
        <I18nextProvider i18n={i18n}>
          <ChakraProvider>{children}</ChakraProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
