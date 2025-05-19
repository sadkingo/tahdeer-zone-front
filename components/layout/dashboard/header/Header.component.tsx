import { FC } from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { FaHeart, FaInfoCircle } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header: FC = () => {
  return (
    <Box
      as="header"
      h="fit"
      pb={2}
      w="full"
      overflowX="hidden"
    >
      <Flex
        h="fit"
        w="full"
        alignItems="center" justifyContent="space-between"
        gap={8}
        bg="bg.inverted"
        shadow={{base: "0 4px 10px 0 rgba(0, 0, 0, 0.3);", _dark: "0 3px 10px 0 rgba(255, 255, 255, 0.2);"}}
        color="fg.inverted/80"
        px={{base: "12px", md: "24px"}}
      >
        <Flex gap={8}>
          <ColorModeButton className="hover:text-accent cursor-pointer"/>
          <Flex>
            <Flex gap={2} alignItems="center">
              <Text>أسئلة وأجوبة</Text>
              <FaInfoCircle/>
            </Flex>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <Flex>سياسة الخصوصة</Flex>
            <CiBoxList/>
          </Flex>
        </Flex>
        <Flex gap={8}>
          <Flex gap={2} alignItems="center">
            <Flex>نصائح وتوجيهات</Flex>
            <FaHeart/>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Flex>أخبار الدراسة</Flex>
            <IoIosNotifications className="h-6 w-6"/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header;