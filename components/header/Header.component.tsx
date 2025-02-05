import { FC } from 'react';
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { ColorModeButton } from "@/components/ui/color-mode";
import colors from "@/config/colors";

const Header: FC = () => {
  return (
    <Flex
      pos="absolute" top="0" left="0" right="0" zIndex={99}
      px={{base: "80px", mdDown: "30px"}} py="56px"
      justifyContent="space-between"
      alignItems="center"
      color="bg.inverted"
    >
      <Flex gap={6} alignItems="center">
        <FaGraduationCap className="h-[56px] w-[56px] hover:text-accent cursor-pointer"/>
        <Heading
          _hover={{color: colors.accent}} cursor="pointer"
          fontSize="3xl" fontWeight="bold"
        >
          المُجِد
        </Heading>
      </Flex>
      {/* TODO: create paths and change to next js link*/}
      <Flex
        pos="absolute" left="50%" transform="translateX(-50%)"
        transition="all"
        fontSize="24px"
        gap="40px"
        xlDown={{fontSize: "20px", position: "static", transform: "translate(0,0)"}}
        lgDown={{display: "none"}}
      >
        {renderMenuLink("الرئيسية", "/")}
        {renderMenuLink("الاختبارات", "/exams")}
        {renderMenuLink("دروس", "/lessons")}
        {renderMenuLink("تواصل معنا", "/")}
      </Flex>
      <Flex alignItems="center" gap={8}>
        <MdGTranslate className="hover:text-accent cursor-pointer hover:scale-110" size="30"/>
        <IoMdSearch className="hover:text-accent cursor-pointer hover:scale-110" size="30"/>
        <ColorModeButton className="hover:text-accent cursor-pointer hover:scale-110"/>
        <Button
          mdDown={{display: "none"}}
          rounded="16px"
          px="40px" py="30px"
          bg={colors.accent}
          fontWeight="bold" color="black" fontSize="20px"
          lgDown={{display: "none"}}
        >
          <Text>سجل الآن</Text>
        </Button>
        <RxHamburgerMenu className="lg:hidden flex w-12 h-12"/>
      </Flex>
    </Flex>
  )

  function renderMenuLink(title: string, link: string) {
    return (
      <Link
        href={link}
        transitionDuration="slower"
        _hover={{color: colors.accent, scale: "1.15"}}
      >
        {title}
      </Link>
    )
  }
}

export default Header;