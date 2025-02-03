"use client"
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import colors from "@/config/colors";
import DotedShape from "../components/doted-shape";
import { Button } from "@/components/ui/button";
import ArrowShape from "@/components/arrow-shape";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <Stack
      flexDir="column" justifyContent="space-between"
      color="bg.inverted"
      as="main"
      flex={1}
      pos="relative"
    >
      {renderHeading()}
      <Stack gap={0} as="section">
        <Carousel className="h-[400px]"/>
      </Stack>
    </Stack>
  );

  function renderHeading() {
    return (
      <Box mx="auto" pos="relative" w="full" h="320px">
        <Flex
          w="full"
          gap={12}
          flexDir="column"
          pos="relative"
          // pos="absolute" insetEnd="50%" transform="translateX(50%)"
          // _rtl={{transform: "translateX(-50%)"}}
          textAlign="center"
          p={0}
        >
          {renderShapes()}
          <Heading
            color={colors.accent}
            fontSize="6xl" fontWeight="bold"
          >
            المُجِد
          </Heading>
          <Box>
            <Text fontSize="2xl" fontWeight="semibold">
              مكانك الأول للدراسة
            </Text>
            <Text m="auto" maxW="350px" opacity={0.9}>
              نوفر لك بيئة تعليمية مثالية ومصادر متنوعة تساعدك على تحقيق أهدافك الأكاديمية وتطوير مهاراتك.
              مع المُجِد، النجاح يصبح أقرب مما تتخيل. 🌟
            </Text>
            <Box pos="relative">
              <ArrowShape
                className="
                absolute -z-10 inset-x-[calc(50%-290px)] -inset-y-32 max-md:-inset-y-14 max-md:inset-x-[calc(50%-215px)]
                dark:text-white text-black
                w-52 h-52 max-md:w-32 max-md:h-32"
              />
              <Button
                rounded="16px"
                px="40px" py="30px" mt={8}
                bg={colors.accent}
                fontWeight="bold" color="black" fontSize="20px"
              >
                <Text>سجل الآن</Text>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>)
  }

  function renderShapes() {
    return (
      <>
        <DotedShape
          height={100}
          width={100}
          className="
          rotate-45
          absolute inset-x-[calc(50%-175px)] -z-10
         dark:text-gray-600 text-gray-300
          text-5xl"
        />
        <DotedShape
          height={100}
          width={100}
          className="
         rotate-45
         absolute inset-y-[50%] inset-x-[calc(50%+120px)] -z-10
         dark:text-gray-600 text-gray-300
         text-5xl"
        />
      </>
    )
  }
}