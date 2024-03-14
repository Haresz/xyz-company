import React from "react";
import {
  HStack,
  Box,
  Heading,
  Link,
  useDisclosure,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
      className="md:px-20 px-8"
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
        <LinkCustom title="Services" link="/services" />
        <LinkCustom title="Our Teams" link="/our-teams" />
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
              <LinkCustom title="Services" link="/services" />
            </MenuItem>
            <MenuItem>
              <LinkCustom title="Our Teams" link="/our-teams" />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </HStack>
  );
}
