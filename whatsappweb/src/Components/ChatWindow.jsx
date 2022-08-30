import {
  Avatar,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";

import { SearchIcon } from "@chakra-ui/icons";
import { BsMicFill } from "react-icons/bs";

const ChatWindow = (props) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <Box
      width={"100%"}
      height="100%"
      backgroundImage={
        "https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png"
      }
    >
      <HStack minW={"100%"} p={"10px"} bg={"#e9edef"} justifyContent={"left"}>
        <Avatar name={props.Data.name} src={props.Data.profile} />
        <Text fontWeight={600}>{props.Data.name}</Text>
        <Spacer />
        <HStack gap={4}>
          <SearchIcon size={"25px"} />
          <AiOutlineMore size={"25px"} />
        </HStack>
      </HStack>
      <Box p={"2%"} maxW="100%" maxH={"100%"}>
        <Text
          bg="#25d366"
          float={"right"}
          clear="both"
          p="10px"
          borderRadius={"10px"}
          w={"fit-content"}
          fontWeight={600}
          color="black"
        >
          Hello
        </Text>
        <br />
        <br />
        <Text
          float={"left"}
          clear="both"
          bg={"#FFFF"}
          p="10px"
          borderRadius={"10px"}
          w={"fit-content"}
          fontWeight={600}
          color="#25d366"
        >
          {props.Data.name}
          <br />
          <span style={{ color: "black", fontSize: "14px" }}>
            Hello {userInfo.name}
          </span>
        </Text>
      </Box>
      <HStack
        position={"absolute"}
        bottom={0}
        width="70%"
        bg={"#e9edef"}
        p={"10px"}
      >
        <InputGroup
          size="md"
          minW={"100%"}
          borderRadius="10px"
          border={"#e9edef"}
        >
          <InputLeftAddon
            gap={4}
            children={
              <>
                <BsEmojiSmile size={"20px"} /> <GrAttachment size={"20px"} />
              </>
            }
          />
          <Input
            placeholder="Type a message"
            bg={"#FFFF"}
            borderRadius="10px"
          />
          <InputRightAddon children={<BsMicFill size={"20px"} />} />
        </InputGroup>
      </HStack>
    </Box>
  );
};

export default ChatWindow;
