import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/Header";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
})

// TODO: add facebook support
export const metadata: Metadata = {
  title: "Tahdeer Zone",
  description: "دروس ملخصات امتحانات بسهولة",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
    <body
      className={`${cairo.variable} antialiased max-w-[1440px] m-auto dark:bg-amber-600 bg-amber-500`}
    >
    <Provider>
      <Header/>
      {children}
    </Provider>
    </body>
    </html>
  );
}
