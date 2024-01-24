"use client"
import { SetStateAction, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Perform your newsletter signup logic here
    // For demonstration purposes, we'll just show a success message
    toast({
      title: 'Subscribed successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Reset the email input
    setEmail('');
  };

  return (
    <Box py={16} bg="white">
      <Box maxW="container.lg" mx="auto" px={[4, 8]}>
        <Flex
          direction={['column', 'row']}
          justify="space-between"
          align="center"
        >
          <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
            <Heading as="h2" fontSize={['2xl', '4xl']} mb={4}>
              Join Our Newsletter
            </Heading>
            <Text fontSize={['md', 'lg']}>
              Get the latest updates, news, and insights from Mirae.ai delivered
              straight to your inbox.
            </Text>
          </Box>
          <Box flex="1" w="100%" maxW={['full', 'md']}>
            <form onSubmit={handleSubmit}>
              <Flex>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  focusBorderColor="blue.400"
                  borderRadius="full"
                />
                <Button
                  type="submit"
                  ml={2}
                  colorScheme="blue"
                  borderRadius="full"
                >
                  Subscribe
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewsletterSignup;


