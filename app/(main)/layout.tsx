import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";

import { Provider } from "@/components/ui/provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Stack } from "@chakra-ui/react";

const alexandria = Alexandria({
  variable: "--font-Alexandria",
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
})

// TODO: add social-media support
export const metadata: Metadata = {
  title: "AlMojid",
  description: "دروس ملخصات امتحانات بسهولة",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
    <body
      className={`${alexandria.variable}
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
