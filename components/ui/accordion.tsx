import { Accordion, HStack } from "@chakra-ui/react"
import * as React from "react"
import { LuChevronDown } from "react-icons/lu"

interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
  indicatorPlacement?: "start" | "end"
}

export const AccordionItemTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(function AccordionItemTrigger(props, ref) {
  const {children, indicatorPlacement = "end", ...rest} = props
  return (
    <Accordion.ItemTrigger _rtl={{flexDir: "row-reverse"}} {...rest} ref={ref}>
      {indicatorPlacement === "start" && (
        <Accordion.ItemIndicator rotate={{base: "-90deg", _open: "0deg"}}>
          <LuChevronDown/>
        </Accordion.ItemIndicator>
      )}
      <HStack _rtl={{justifyContent: "end"}} gap="4" flex="1" textAlign="start" width="full">
        {children}
      </HStack>
      {indicatorPlacement === "end" && (
        <Accordion.ItemIndicator>
          <LuChevronDown/>
        </Accordion.ItemIndicator>
      )}
    </Accordion.ItemTrigger>
  )
})

export const AccordionItemContent = React.forwardRef<
  HTMLDivElement,
  Accordion.ItemContentProps
>(function AccordionItemContent(props, ref) {
  return (
    <Accordion.ItemContent>
      <Accordion.ItemBody flex={1} {...props} ref={ref}/>
    </Accordion.ItemContent>
  )
})

export const AccordionRoot = Accordion.Root
export const AccordionItem = Accordion.Item
