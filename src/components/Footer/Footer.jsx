import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box bg='#1f1f1f' color='white' w='100%' h="20vh">
            <Flex gap='4' p='20px 80px'>
                <Box align='start'>
                    <Heading>Block Header</Heading>
                    <Text>Block Content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quidem cupiditate quibusdam sint et minus eos quas quisquam nihil ut unde, reprehenderit repudiandae itaque nostrum. Alias expedita earum officiis odio!</Text>
                </Box>
                <Spacer />
                <Box align='start'>
                    <Heading>Block Header</Heading>
                    <Text>Block Content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quidem cupiditate quibusdam sint et minus eos quas quisquam nihil ut unde, reprehenderit repudiandae itaque nostrum. Alias expedita earum officiis odio!</Text>
                </Box>
                <Spacer />
                <Box align='start'>
                    <Heading>Block Header</Heading>
                    <Text>Block Content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quidem cupiditate quibusdam sint et minus eos quas quisquam nihil ut unde, reprehenderit repudiandae itaque nostrum. Alias expedita earum officiis odio!</Text>
                </Box>
            </Flex>
        </Box>
    );
};


export default Footer;