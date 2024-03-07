import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, InputGroup, InputLeftElement, Icon, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log("Logged in:", response.data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      toast({
        title: "Login Failed",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box bg="white" p={6} rounded="md" boxShadow="md" maxWidth="400px" width="100%">
        <Heading mb={6}>Login</Heading>
        <InputGroup mb={4}>
          <InputLeftElement>
            <Icon as={FaEnvelope} color="gray.500" />
          </InputLeftElement>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup mb={6}>
          <InputLeftElement>
            <Icon as={FaLock} color="gray.500" />
          </InputLeftElement>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputGroup>
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Flex>
  );
}

export default AuthScreen;
