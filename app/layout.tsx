import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Inter }  from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VitalEdge",
  description: "be fitter, stronger, healthier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} bg-neutral-100 text-black dark:bg-black  dark:text-white h-full duration-500`}
>
        <Providers>
          <Navbar />
          <main className="max-w-screen-2xl mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
