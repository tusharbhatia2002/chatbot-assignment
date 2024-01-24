import { Box, Flex, Text } from "@chakra-ui/react";

const SocialMediaStatistics: React.FC = () => {
  return (
    <Box textAlign="center" py={-8} background="black" mt={-8}>
      <Flex justify="space-around">
        <Box textAlign="center">
          <Text fontSize="6xl" color="teal.300" fontWeight="bold" textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)">
            50%
          </Text>
          <Text color="gray.300" mt={2} textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)" mb={10} mr={4}>
            of people under 25 go to social media first when researching brands (rather than search).
            <br />
            We’ll help you stand out.
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="6xl" color="green.300" fontWeight="bold" textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)">
            72%
          </Text>
          <Text color="gray.300" mt={2} textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)" mr={8}>
            of businesses say customer service on social media is the responsibility of marketers.
            <br />
            We’ll help you keep up.
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="6xl" color="purple.300" fontWeight="bold" textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)">
            56%
          </Text>
          <Text color="gray.300" mt={2} textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)" mr={8}>
            of recruiters say they find the majority of new candidates using social media.
            <br />
            We’ll help you find top talent.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SocialMediaStatistics;
