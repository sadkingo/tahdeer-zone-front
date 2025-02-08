import { FC } from 'react';
import { Flex, Stack, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const FeaturesSection: FC = () => {
  return (
    <Flex
      as="section"
      justifyContent="center"
      w="full"
      mb={3}
      mdDown={{
        flexDir: "column",
        w: "fit",
        m: "auto",
        alignItems: "center",
      }}
    >
      <Flex
        w="6xl"
        justifyContent="center" gap={4}
        mdDown={{
          flexDir: "column",
          w: "fit",
          m: "auto",
          alignItems: "center",
        }}
      >
        <Stack
          justifyContent="center"
          shadow="xl"
          rounded="lg"
          bg="bg.panel"
          p={16}
          fontSize={28} fontWeight="bold"
          mdDown={{
            w: "full",
            alignItems: "center",
          }}
        >
          <Text>دروس</Text>
          <Text>واختبارات</Text>
          <Text>بسهولة</Text>
        </Stack>
        <Stack
          mdDown={{px: 8}}
          shadow="xl"
          rounded="lg"
          bg="bg.panel"
          p={8}
          px={{base: 24, mdDown: 8}}
          fontSize={28}
          justifyContent="center"
        >
          <Flex gap={4} alignItems="center">
            <FaCheckCircle color="lightgreen" className="text-green-400"/>
            <Text>الاف الاختبارات بالحلول وبضغطة زر</Text>
          </Flex>
          <Flex gap={4} alignItems="center">
            <FaCheckCircle color="lightgreen" className="text-green-400"/>
            <Text>جميع المستويات الدراسية</Text>
          </Flex>
          <Flex gap={4} alignItems="center">
            <FaCheckCircle color="lightgreen" className="text-green-400"/>
            <Text>دروس وشروحات سهلة ومختصرة</Text>
          </Flex>
          <Flex gap={4} alignItems="center">
            <FaCheckCircle color="lightgreen" className="text-green-400"/>
            <Text>ملخصات ومراجعات سهلة وسريعة</Text>
          </Flex>

        </Stack>
      </Flex>
    </Flex>
  )
}

export default FeaturesSection;