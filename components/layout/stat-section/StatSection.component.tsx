import { FC } from 'react';
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import colors from "@/config/colors";

const StatSection: FC = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      w="4xl"
      mx="auto"
      mdDown={{
        w: "fit",
      }}
      gap={4}
    >
      <Flex
        justifyContent="center"
        mdDown={{
          flexDir: "column",
          w: "md",
        }}
        w="full" gap={4}
        mt={4}
        textAlign="center"
      >
        {renderStat("درس", "1000")}
        {renderStat("اختبار", "1500")}
        {renderStat("ملخص", "1700")}
      </Flex>
      <Flex
        mdDown={{
          flexDir: "column",
          w: "xs",
        }}
        w="full">
        <Flex
          justifyContent="center"
          alignItems="center"
          w="full"
          gap={1}
          bg="bg.panel"
          p={8}
          rounded="xl"
          color={colors.accent}
        >
          <Text fontWeight="bold" fontSize="4xl">4.8</Text>
          <Flex>
            <FaStar className="w-8 h-8"/>
            <FaStar className="w-8 h-8"/>
            <FaStar className="w-8 h-8"/>
            <FaStar className="w-8 h-8"/>
            <FaRegStarHalfStroke className="w-8 h-8"/>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  )

  function renderStat(title: string, stat: string) {
    return (
      <Box flex={1} bg="bg.panel" p={8} rounded="xl">
        <Heading
          mb={2}
          fontSize="3xl"
          fontWeight="bold"
          color={colors.accent}
        >
          اكثر من {stat}
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="semibold"
        >
          {title}
        </Text>
      </Box>
    )
  }
}

export default StatSection;