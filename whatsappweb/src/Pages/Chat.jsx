import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  SearchIcon,
  HamburgerIcon,
  RepeatIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { MdMessage } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { AiOutlineMore } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersData } from "../Redux/getUsers/action";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ChatWindow from "../Components/ChatWindow";

const Chat = () => {
  const [chatUser, setChatUser] = useState({});
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userid = localStorage.getItem("userid");
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((store) => store.users);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userid) {
      navigate("/login");
    }
    dispatch(getUsersData());
  }, []);

  const handleData = (data) => {
    setChatUser(data);
    setShow(true);
  };

  return (
    <>
      <Flex h={"100vh"} width={"100%"}>
        <Box
          width={"430px"}
          boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        >
          <VStack>
            <HStack
              minW={"100%"}
              p={"10px"}
              bg={"#e9edef"}
              justifyContent={"left"}
            >
              {userInfo && (
                <Avatar name={userInfo.name} src={userInfo.profile} />
              )}
              <Spacer />
              <HStack gap={4}>
                <TbCircleDashed size={"25px"} />
                <MdMessage size={"25px"} />
                <AiOutlineMore size={"25px"} />
              </HStack>
            </HStack>
            <Box p={"10px"} minW={"100%"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.500" />}
                />
                <Input
                  bg={"#e9edef"}
                  type="tel"
                  placeholder="Search or start new chat"
                  borderRadius={"10px"}
                />

                <InputRightElement
                  pointerEvents="none"
                  children={<BsFilter color="gray.300" />}
                />
              </InputGroup>
            </Box>
            <hr />
            <Box minW={"100%"} maxH="80vh" overflowY="auto" cursor="pointer">
              {loading ? (
                <Center>
                  <Spinner size="xl" />
                </Center>
              ) : error ? (
                <Text fontWeight={600}>Something went wrong...</Text>
              ) : (
                users &&
                users.map((elem) => (
                  <HStack
                    onClick={() => handleData(elem)}
                    p={"10px"}
                    minW={"100%"}
                    justifyContent={"left"}
                    key={elem._id}
                    borderBottom={"1px solid #e9edef"}
                  >
                    <Avatar src={elem.profile} />
                    <Text color={"black"} fontWeight={600}>
                      {elem.name}
                    </Text>
                  </HStack>
                ))
              )}
            </Box>
          </VStack>
        </Box>
        <Box minW={"70%"} backgroundImage="https://i.imgur.com/zp9Kszb.png">
          {show && <ChatWindow Data={chatUser} />}
        </Box>
      </Flex>
    </>
  );
};

export default Chat;
