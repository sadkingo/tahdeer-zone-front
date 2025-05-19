import { FC } from 'react';
import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Carousel from "@/components/carousel";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa6";
import colors from "@/config/colors";
import SocialMediaButton from "@/components/social-media-button/SocialMediaButton.component";

const HeroSection: FC = () => {
  return (
    <Stack
      as="section"
      minH="dvh"
      flexDir="column" justifyContent="space-between"
      overflow="hidden"
      color="bg.inverted"
      flex={1}
      pos="relative"
    >
      {renderHeading()}
      <Carousel className="h-[400px]"/>
    </Stack>
  )

  function renderHeading() {
    return (
      <Flex
        pos="relative"
        mt="140px" p={0} py={12}
        bg={{_dark: "gray.900", base: "gray.100"}}
        w="full"
        justifyContent="center" alignItems="center" gap={44}
        lgDown={{flexDir: "column", gap: 12}}
      >
        <Stack textAlign="center">
          <Heading
            mb={8}
            color={colors.accent}
            fontSize="7xl" fontWeight="bold"
          >
            المُجِد
          </Heading>

          <Text fontSize="4xl" fontWeight="semibold">
            مكانك الأول للدراسة
          </Text>
          <Text fontSize="22px" maxW="450px" opacity={0.9}>
            نوفر لك بيئة تعليمية مثالية ومصادر متنوعة تساعدك على تحقيق أهدافك الأكاديمية وتطوير مهاراتك.
            مع المُجِد، النجاح يصبح أقرب مما تتخيل. 🌟
          </Text>
        </Stack>
        <Stack
          fontWeight="bold"
          my="auto"
        >
          <SocialMediaButton>
            <FcGoogle/>
            <Text>Continue with Google</Text>
          </SocialMediaButton>
          <SocialMediaButton>
            <ImFacebook2 color="#4267B2"/>
            <Text>Continue with Facebook</Text>
          </SocialMediaButton>
          <SocialMediaButton>
            <FaApple/>
            <Text>Continue with Apple</Text>
          </SocialMediaButton>
          <Link
            _hover={{color: "blue.600"}}
            mt={2} mx="auto"
          >
            Continue with email
          </Link>
          <Text
            dir="ltr"
            fontSize="10px"
            mt={2}
            textAlign="center"
            m="auto"
            maxW="320px"
          >
            By signing up you agree to Skillshare`&apos;`s Terms of Service and Privacy Policy, and agree to receive
            marketing
            communications from Skillshare at the email address provided. This page is protected by reCAPTCHA and is
            subject to Google`&apos;`s Terms of Service and Privacy Policy.
          </Text>
        </Stack>
      </Flex>)
  }
}

export default HeroSection;