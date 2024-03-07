import React from "react";
import { ChakraProvider, Box, Flex, Heading, Input, Button, InputGroup, InputLeftElement, VStack, HStack, Text, IconButton, useColorMode, useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaUserMd } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <ChakraProvider>
      <Box p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>Healthcare Recruiting Portal</Heading>
          <IconButton icon={useColorModeValue(<FaSun />, <FaMoon />)} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
        </Flex>
        <Box my={8} textAlign="center">
          <Button colorScheme="blue" mb={4}>
            Post a Job <FaUserMd />
          </Button>
        </Box>
        <VStack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input type="text" placeholder="Search for healthcare jobs" />
          </InputGroup>
          <Button width="full" colorScheme="blue">
            Search
          </Button>
        </VStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} my={8}>
          {/* Simulating job cards */}
          {Array.from({ length: 9 }).map((_, index) => (
            <GridItem key={index} bg={formBackground} p={4} borderRadius="md">
              <VStack>
                <Heading size="md">Job Title {index + 1}</Heading>
                <Text>Hospital Name</Text>
                <Text>Location</Text>
                <Button colorScheme="teal" size="sm">
                  Apply Now
                </Button>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
