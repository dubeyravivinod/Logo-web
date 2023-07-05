import { Flex, Box, Text, Heading, Image, Spacer } from "@chakra-ui/react";

const Body = () => {
  return (
    <Box p={10} w={'80%'} m='auto'>
      <Flex>
        <Box flex='1' width="600px" p={20}>
          <Heading fontSize={90}>Header Footer</Heading>
          <Text align='start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            illum vero obcaecati nisi libero neque expedita hic consectetur,
            amet facilis laudantium est quis unde quia. Quo autem delectus eaque
            ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolores nisi minus accusantium maiores dolorem incidunt soluta necessitatibus esse magnam, totam voluptatibus suscipit? Similique quis suscipit tempora corporis, voluptatem unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis cupiditate perferendis dolorem consectetur harum sint, totam praesentium quas quod sed dolorum nulla rerum officia consequatur quidem laudantium eius numquam.
          </Text>
        </Box>
        {/* <Spacer /> */}
        <Box flex='1'>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"  boxSize='100%' />
        </Box>
      </Flex>
    </Box>
  );
};

export default Body;
