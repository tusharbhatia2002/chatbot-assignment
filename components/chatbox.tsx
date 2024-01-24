"use client";
import { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  VStack,
  Flex,
  Text,
  Select,
  InputRightAddon,
} from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { useChat } from 'ai/react';


const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api',
  });

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChatbox = () => {
    setIsOpen(false);
  };



  return (
    <>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="999"
      >
        <IconButton
          icon={isOpen ? <CloseIcon /> : <ChatIcon />}
          aria-label="Open Chatbox"
          onClick={toggleChatbox}
          colorScheme={isOpen ? 'red' : 'teal'}
          size="lg"
          borderRadius="full"
        />
      </Box>
      {isOpen && (
        <Box
          position="fixed"
          bottom="80px"
          right="20px"
          width="350px"
          minHeight="400px"
          maxHeight="calc(100vh - 120px)" // Set max height to the visible screen height
          boxShadow="lg"
          borderRadius="xl"
          p={0}
          zIndex="9999"
          display="flex"
          flexDirection="column"
          bg="white"
          backgroundImage= "url('https://www.transparenttextures.com/patterns/cubes.png')" // Add the pattern image URL here
          color="black" // Set the text color to black for better contrast
        >
          {/* Header or Hero Section */}
          <Box bg="teal" color="white" py={4} px={8} borderRadius="md" mb={8}>
            <Heading as="h1" size="lg" mb={2} py={2}>
              Welcome To Mirae.ai
            </Heading>
            <Text fontSize="md" py={2}>You have any questions? We are ready to help you.</Text>
          </Box>

          {/* Chat Messages */}
          <Box
            ref={chatContainerRef}
            height="80%"
            overflowY="scroll"
            px={4}
            mb={8}
          >
            {messages.map((message) => (
              <Flex
              key={message.id}
              direction={message.role === 'user' ? 'row-reverse' : 'row'}
              mb={2}
              >
                <Box
                  bg={message.role === 'user' ? 'blue.500' : 'gray.200'}
                  p={4}
                  mb={4}
                  borderRadius="md"
                  color={message.role === 'user' ? 'white' : 'black'}
                  maxW="100%"
                >
                  {message.content}
                </Box>
              </Flex>
            ))}
          </Box>

          {/* Message Box */}
          <InputGroup mt={10} mb={2} position="fixed" bottom="16" width="350px">
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              borderRadius="xl" 
              height="50px" 
              paddingRight="80px" 
              bg="white"
            />
            <InputRightElement
              width="60px" 
              zIndex="1"
            >
              <Flex alignItems="center" justifyContent="space-between" pr={2} pl={2} pt={1} pb={1}>

                
                <span style={{ cursor: 'pointer', margin: '4px', marginRight: "10px" ,marginTop: "8px", display: 'inline-block', width: '24px', height: '24px' }}>
                  <img
                    src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-send-user-interface-kmg-design-flat-kmg-design.png" 
                    alt="send"
                    width="100%"
                    height="100%"
                    style={{ filter: 'brightness(1)' }}
                    onClick={(e) => handleSubmit(e as any)}
                  />
                </span>
              </Flex>
            </InputRightElement>
          </InputGroup>

      
        </Box>
      )}
    </>
  );
};

export default Chatbox;