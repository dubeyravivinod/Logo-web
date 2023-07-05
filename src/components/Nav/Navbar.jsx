import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <Flex bg='#f1f1f1'>
      <Box p="5">
        <Heading fontFamily="cursive" color='#c0c0c0'>Logo</Heading>
      </Box>
      <Spacer />
      <Box p="5">
        <Flex gap={10}>
          <Heading color="#7c9fbc">Home</Heading>
          <Heading>About</Heading>
          <Heading>Contact</Heading>
        </Flex>
      </Box>
      <Spacer />
      <Box p="5">
        <Flex gap={4}>
          <IconButton>
            <Heading>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<FaFacebook />}
              />
            </Heading>
          </IconButton>
          <IconButton>
            <Heading>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<LuInstagram />}
              />
            </Heading>
          </IconButton>
          <IconButton>
            <Heading>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<BsTwitter />}
              />
            </Heading>
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
