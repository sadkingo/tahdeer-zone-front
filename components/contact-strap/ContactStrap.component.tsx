import { Center, ClipboardRoot, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ClipboardLink } from "../ui/clipboard";
import { BiPhoneCall } from "react-icons/bi";

const ContactStrap = () => {
  const phoneNumber = "(555-555-555)";
  return (
    <Center bg={{_light: "fg", _dark: "fg"}} w="vw" gap={2} p={2}>
      <BiPhoneCall className="animate-wiggle"/>
      <Text color="fg.inverted" fontWeight="bold">
        تحتاج مساعدة؟ متوفرون للمساعدة 24/7 :
      </Text>
      <Stack color="white">
        <ClipboardRoot value={phoneNumber}>
          <ClipboardLink
            value={phoneNumber}
            color="fg.inverted"
            fontWeight="bolder"
            textStyle="sm"
          />
        </ClipboardRoot>
      </Stack>
    </Center>
  );
};

export default ContactStrap;
