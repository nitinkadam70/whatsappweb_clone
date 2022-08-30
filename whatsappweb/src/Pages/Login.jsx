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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Progress } from "@chakra-ui/react";
import { getAuthToken } from "../Redux/auth/Login/action";

export default function Register() {
  const { loading, auth, error } = useSelector((store) => store.auth);
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});

  const toast = useToast();

  useEffect(() => {
    if (auth !== null) {
      toast({
        title: "Logged in success",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      window.location.reload();
    }
    if (error) {
      toast({
        title: "Wrong credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (userid) {
      navigate("/");
    }
  }, [auth, userid, error]);

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
    dispatch(getAuthToken(payload));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.800", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color="#FFFF">
            Login
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
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
                    Login
                  </Button>
                )}
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                If you do not have an account?{" "}
                <Link to="/register" color={"blue.400"}>
                  Register here
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
