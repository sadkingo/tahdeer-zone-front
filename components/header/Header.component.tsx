import { FC } from 'react';
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import colors from "@/config/colors";
import { FaGraduationCap } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { ColorModeButton } from "@/components/ui/color-mode";

const Header: FC = () => {
  return (
    <Flex
      px={{base: "80px", mdDown: "30px"}} py="56px"
      justifyContent="space-between"
      alignItems="center"
      color="bg.inverted"
    >
      <Flex gap={6} alignItems="center">
        <FaGraduationCap className="h-[56px] w-[56px]"/>
        <Heading fontSize="3xl" fontWeight="bold">
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
        <MdGTranslate size="30"/>
        <ColorModeButton/>
        <Button
          rounded="16px"
          px="40px" py="30px"
          bg={colors.accent}
          fontWeight="bold" color="black" fontSize="20px"
          lgDown={{display: "none"}}
        >
          <Text>سجل الآن</Text>
        </Button>
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