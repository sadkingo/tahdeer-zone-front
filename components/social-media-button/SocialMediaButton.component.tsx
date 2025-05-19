import React, { FC } from 'react';
import { Button } from "@/components/ui/button";

const SocialMediaButton: FC<{ children?: React.ReactNode }> = ({children}) => {
  return (
    <Button
      _dark={{borderColor: "gray.600"}}
      dir="ltr"
      _hover={{color: "blue.600"}}
      gap={8}
      display="flex" justifyContent="start"
      rounded="sm"
      py={4}
      px={12}
      border="1px solid black"
      lgDown={{w: "350px"}}
    >
      {children}
    </Button>
  )
}

export default SocialMediaButton;