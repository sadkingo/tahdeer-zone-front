import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import {
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "@/components/layout/dashboard/header/Header.component";
import { FaGraduationCap } from "react-icons/fa6";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";

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
const studyLevel = [
  {
    label: "التعليم الإبتدائي", count: "38",
    subLevels: [
      {label: "اولى ابتدائي", count: "13"},
      {label: "ثانية ابتدائي", count: "10"},
      {label: "ثالثة ابتدائي", count: "8"},
      {label: "رابعة ابتدائي", count: "3"},
      {label: "خامسة ابتدائي", count: "4"},
    ],
  },
  {
    label: "التعليم المتوسط", count: "30",
    subLevels: [
      {label: "اولى متوسط", count: "10"},
      {label: "ثانية متوسط", count: "8"},
      {label: "ثالثة متوسط", count: "6"},
      {label: "رابعة متوسط", count: "6"},
    ],
  },
  {
    label: "التعليم الثانوي", count: "25",
    subLevels: [
      {label: "اولى ثانوي", count: "9"},
      {label: "ثانية ثانوي", count: "8"},
      {label: "ثالثة ثانوي", count: "8"},
    ],
  },
  {
    label: "التعليم الجامعي", count: "20",
    subLevels: [
      {label: "السنة الأولى", count: "6"},
      {label: "السنة الثانية", count: "5"},
      {label: "السنة الثالثة", count: "4"},
      {label: "السنة الرابعة", count: "3"},
      {label: "ماستر", count: "2"},
    ],
  },
];

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
        <Flex>
          <Stack
            bg={{base: "gray.200", _dark: "bg.panel"}}
            gap={8}
            alignItems="Center"
            h="vh"
            w="280px"
            overflowX="hidden"
          >
            <Flex
              justifyContent="center" alignItems="center" gap={2}
              bg="deepskyblue"
              // shadow={{base: "0 4px 10px 0 rgba(0, 0, 0, 0.3);", _dark: "0 3px 10px 0 rgba(255, 255, 255, 0.2);"}}
              w="full"
              p={2} px={8}
            >
              <Text>المُجِد</Text>
              <FaGraduationCap className="h-8 w-8"/>
            </Flex>
            <Stack textAlign="center" px={2}>
              <Text color="fg.info">موقع المجد</Text>
              <Text fontSize="xs">الموقع الأول لتحضير الفروض والاختبارات في الجزائر</Text>
            </Stack>
            <Stack px={8} w="full">
              <AccordionRoot collapsible defaultValue={["b"]}>
                {studyLevel.map((level, index) => (
                  <AccordionItem key={index} value={level.label}>
                    <AccordionItemTrigger>
                      <Flex
                        flexDir="row-reverse"
                        _rtl={{flexDir: "row"}}
                        w="full"
                        justifyContent="space-between"
                      >
                        <Text>{level.count}</Text>
                        <Text>{level.label}</Text>
                      </Flex>
                    </AccordionItemTrigger>
                    <AccordionItemContent _rtl={{textAlign: "end"}}>
                      {level.subLevels.map((subLevel, index) => (
                        <Flex
                          key={index}
                          flexDir="row-reverse"
                          _rtl={{flexDir: "row"}}
                          justifyContent="space-between"
                          w="full"
                        >
                          <Text>{subLevel.count}</Text>
                          <Text>{subLevel.label}</Text>
                        </Flex>
                      ))
                      }
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <Header/>
            {children}
          </Stack>
        </Flex>
        <Toaster/>
      </Stack>
    </Provider>
    </body>
    </html>
  );

}
