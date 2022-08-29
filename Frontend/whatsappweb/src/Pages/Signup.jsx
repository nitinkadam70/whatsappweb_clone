import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  useToast,
  Img,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Progress } from "@chakra-ui/react";

export default function Signup() {
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});

  const loading = false;
  const toast = useToast();

  useEffect(() => {
    if (token) {
      navigate("/login");
      toast({
        title: "Thanks for signing up. Welcome to our community.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (userid) {
      navigate("/task");
    }
  }, [token, userid]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = JSON.stringify(userData);
    console.log(payload);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.800", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"#FFFF"}>
            Sign up
          </Heading>
          <Img
            w={"50px"}
            src="https://th.bing.com/th/id/R.35ffa6e353468280a59e5b4672b8aba0?rik=7hSGUWDIrp%2bhLg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWhatsApp-PNG-Picture.png&ehk=deet7YvWTlFf4Xe0LZBhIsS4NJ84GeEnFqKz44GkR%2bo%3d&risl=&pid=ImgRaw&r=0"
          />
        </HStack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={handleChange} name="name" type="text" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name="email" onChange={handleChange} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {loading ? (
                  <Progress size="xs" isIndeterminate />
                ) : (
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                )}
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
