import { Box, Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import colors from "@/config/colors";

export default function Home() {
  const triangleHeight = '400px'
  return (
    <Flex
      as="main"
      flex={1}
      maxH="screen"
      pos="relative"
    >
      <Flex
        px={12}
        h="full" w="full"
        overflow="hidden"
        justifyContent="space-between"
      >
        <Stack alignItems="center" gap={16} py={32}>
          <Heading fontSize={30} fontWeight={700}>
            كل شئ في منصة واحدة
          </Heading>
          <Heading fontSize={72} fontWeight={900}>
            تحضير زون
          </Heading>
          <Text fontSize={20}>
            مجاني 100% و يحتوي على كل ما تحتاج لتحقيق اعلى الدرجات.
          </Text>
          <Button fontSize={32} w="fit" py={8} px={16} bg={{base: colors.mediumDark, _hover: colors.medium}}>سجل
            الآن</Button>
        </Stack>
        <Icon
          className="opacity-45 absolute end-0 w-fit h-fit min-w-96 max-w-[50%] min-h-[100%]"
          icon="mdi:education-outline"
        />
      </Flex>
      {renderBottomHeroSection()}
    </Flex>
  );

  function renderBottomHeroSection() {
    return (
      <Flex
        pos="absolute" bottom={0}
        h={triangleHeight} w="full"
        justifyContent="center"
      >
        <Box pos="relative" w="full">
          <Box
            pos="absolute"
            bottom={0}
            h={triangleHeight} w="full"
            shadow="lg"
            bg={{_light: colors.mediumLight, _dark: colors.medium}}
            style={{clipPath: "polygon(0 0, 0 100%, 125% 100%)"}}/>
          <Flex
            gap={16}
            pos="absolute" left="10%" top="10%"
          >
            {renderUserTypeCard("مؤسسة", "تريد اضافة مؤسستك معنا؟", "mdi:company")}
            {renderUserTypeCard("مستخدم", "اطلع على المحتوى الدراسي")}
          </Flex>
        </Box>
      </Flex>
    )
  }

  function renderUserTypeCard(type: string, description: string, icon = "mdi:user") {
    return <Card.Root
      bg="transparent"
      shadow={"0 4px 60px 10px rgba(0, 0, 0, 0.05)"}
      rounded="4xl"
      width="200px"
    >
      <Card.Body
        roundedTop="4xl"
        p={4} gap="2"
        alignItems="center"
        bg={colors.medium}
      >
        <Icon icon={icon} width="60" height="60"/>
        <Card.Title fontSize="lg" fontWeight="bold" m="2">{type}؟</Card.Title>
        <Card.Description color="white" textAlign="center">
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer
        roundedBottom="4xl"
        justifyContent="center"
        bg={{base: colors.mediumDark, _hover: colors.dark}}
      >
        <Button m={3}>إنضم إلينا الآن</Button>
      </Card.Footer>
    </Card.Root>
  }
}
