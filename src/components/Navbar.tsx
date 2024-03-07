import React from "react";
import {
  HStack,
  Box,
  Heading,
  Link,
  Drawer,
  useDisclosure,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import "../app/globals.css";

const LinkCustom = (props: any) => {
  return (
    <Link className="focus:text-black" href={props.link}>
      {props.title}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      className="md:px-20 px-12"
      justifyContent="space-between"
      bg="white"
      boxShadow="md"
      paddingY={6}
    >
      <Heading as="h4" size="md">
        <span className="text-primary">XYZ </span>Company
      </Heading>
      <Box className="hidden md:inline-block font-semibold text-base menus text-primary space-x-8">
        <LinkCustom title="Home" link="/" />
        <LinkCustom title="About" link="/about" />
        <LinkCustom title="Services" link="/servoces" />
      </Box>
      <div className="md:hidden inline-block">
        <Menu>
          <MenuButton colorScheme="messenger" as={Button}>
            <Icon as={HamburgerIcon} />
          </MenuButton>
          <MenuList className="font-semibold text-base menus text-primary">
            <MenuItem>
              <LinkCustom title="Home" link="/" />
            </MenuItem>
            <MenuItem>
              {" "}
              <LinkCustom title="About" link="/about" />
            </MenuItem>
            <MenuItem>
              <LinkCustom title="Services" link="/servoces" />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </HStack>
  );
}
