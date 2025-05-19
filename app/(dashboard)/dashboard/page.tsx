import { Button, Grid, Heading, Stack, List, Box, Text, Flex } from "@chakra-ui/react";
import BackGroundShape from "@/components/background-shape";

export default function Dashboard() {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      px={4}
      pt={6}
    >
      <Box
        color="white"
        background="cyan.600"
        py={6}
        rounded="md"
        minH="300px"
        pos="relative"
      >
        <BackGroundShape/>
        <Stack gap={6} py={2} px="8">
          <Heading fontSize="3xl">أولى ثانوي</Heading>
          <List.Root
            listStyleType="disc"
          >
            <List.Item
              _marker={{
                color: 'white',
              }}
            >
              تدريبات وواجهات وحلول متاحة بالداخل !
            </List.Item>
            <List.Item
              _marker={{
                color: 'white',
              }}
            >
              جميع دروس الأولى ثانوي
            </List.Item>
          </List.Root>
        </Stack>
        <Button
          position="absolute" bottom={0} insetEnd={0}
          p={4}
          shadow={{_hover: "xs", base: "sm"}}
          m={8}
        >
          تصفح الآن
        </Button>
      </Box>
      <Box
        color="white"
        background="red.400"
        py={6}
        rounded="md"
        minH="300px"
        pos="relative"
      >
        <BackGroundShape/>
        <Stack gap={6} py={2} px="8">
          <Heading fontSize="3xl">أولى ثانوي</Heading>
          <List.Root
            verticalAlign="center"
            listStyleType="disc"
          >
            <List.Item
              _marker={{
                color: 'white',
              }}
            >
              تدريبات وواجهات وحلول متاحة بالداخل !
            </List.Item>
            <List.Item
              _marker={{
                color: 'white',
              }}
            >
              <Flex h="full">جميع دروس الأولى ثانوي</Flex>
            </List.Item>
          </List.Root>
        </Stack>
        <Button
          position="absolute" bottom={0} insetEnd={0}
          p={4}
          shadow={{_hover: "xs", base: "sm"}}
          m={8}
        >
          تصفح الآن
        </Button>
      </Box>
    </Grid>
  )
}