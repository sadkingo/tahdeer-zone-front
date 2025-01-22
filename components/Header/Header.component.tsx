import { FC } from 'react';
import { Flex, Heading, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import colors from "@/config/colors";
import { Button } from "@/components/ui/button";

const Header: FC = () => {
  return (
    <Flex
      as="header"
      fontSize="20px"
      fontWeight="semibold"
      px="30px"
      w="full"
      align="center"
      justify="space-between"
      borderBottom="1px solid gray.200"
    >
      <Link
        color={{_hover: colors.light}}
        display="flex"
        href="#"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Icon icon="mdi:education-outline" width="60" height="60"/>
        <Heading fontSize="3xl" letterSpacing="tight">تحضير زون</Heading>
      </Link>
      <Flex as="ul" gap={4}>
        <li>
          <Link color={{_hover: colors.light}} href="#">المعلومات</Link>
        </li>
        <li>
          <Link color={{_hover: colors.light}} href="#">التواصل</Link>
        </li>
        <li>
          <Link color={{_hover: colors.light}} href="#">المساعدة</Link>
        </li>
      </Flex>
      <Flex gap={4}>
        <Link color={{_hover: colors.light}} href="#">
          <Button p={2} border="white" borderWidth={2}>
            تسجيل الدخول
          </Button>
        </Link>
        <Link color={{_hover: colors.light}} href="#">التسجيل</Link>
        <ColorModeButton color={{_hover: colors.light}}/>
      </Flex>
    </Flex>
  )
}

export default Header;