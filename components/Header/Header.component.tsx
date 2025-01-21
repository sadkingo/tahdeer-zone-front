import { FC } from 'react';
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const Header: FC = () => {
  return (
    <Flex
      mt="30px"
      px="30px"
      w="full"
      align="center"
      justify="space-between"
      borderBottom="1px solid gray.200"
      as="header"
    >
      <Link
        display="flex"
        href="#"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Icon icon="mdi:education-outline" width="60" height="60"/>
        <Heading fontSize="3xl" letterSpacing="tight">تحضير زون</Heading>
      </Link>
      <Flex>
        <ul className="flex gap-4">
          <li>
            <Link href="#">المعلومات</Link>
          </li>
          <li>
            <Link href="#">التواصل</Link>
          </li>
          <li>
            <Link href="#">المساعدة</Link>
          </li>
          <li>
            <Link href="#">تسجيل الدخول</Link>
          </li>
          <li>
            <Link href="#">التسجيل</Link>
          </li>
        </ul>
      </Flex>
      <ColorModeButton/>

    </Flex>
  )
}

export default Header;