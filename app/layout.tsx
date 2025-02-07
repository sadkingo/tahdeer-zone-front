import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import { Provider } from "@/components/ui/provider";
import Header from "../components/header";
import { Toaster } from "@/components/ui/toaster";
import { Stack } from "@chakra-ui/react";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
})

// TODO: add social-media support
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
      className={`${cairo.variable}
       antialiased
       flex flex-col
       min-h-screen w-full
       m-auto
       overflow-x-hidden
       `}
    >
    <Provider>
      <Stack
        as="main"
        minH="dvh"
      >
        <Header/>
        {children}
        <Toaster/>
      </Stack>
    </Provider>
    </body>
    </html>
  );
}
