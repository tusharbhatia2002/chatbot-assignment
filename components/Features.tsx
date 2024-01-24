import { Flex, Box, Text, SimpleGrid, Icon, useColorModeValue, Container } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const features: Feature[] = [
  // Add your features here
  {
    title: "Business Planning",
    description: "Plan and strategize your business for success. Create and manage business models, analyze financial projections, and set achievable goals.",
    icon: <Icon as={IoAnalyticsSharp} w={8} h={8} color="teal.500" />,
  },
  {
    title: "Financial Planning",
    description: "Create and manage your financial plans with ease. Monitor your expenses, investments, and savings to achieve financial security.",
    icon: <Icon as={IoLogoBitcoin} w={8} h={8} color="green.500" />,
  },
  {
    title: "Market Analysis",
    description: "Create and manage your financial plans with ease. Monitor your expenses, investments, and savings to achieve financial security.",
    icon: <Icon as={IoSearchSharp} w={8} h={8} color="purple.500" />,
  },
];

const Features: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.100", "gray.800")} id="features">
      <Flex direction="column" align="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="black">
          Discover Our Key Features
        </Text>
        <Container maxW="5xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  );
};

interface FeatureCardProps extends Feature {
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flex
        direction="column"
        align="center"
        p={8}
        rounded="xl"
        bg={useColorModeValue("white", "gray.700")}
        color={useColorModeValue("gray.800", "white")}
        boxShadow="lg"
        transition="all 0.3s ease"
      >
        <Box mb={4} p={4} bg={useColorModeValue("gray.200", "gray.600")} rounded="full">
          {icon}
        </Box>
        <Text fontSize="2xl" fontWeight="semibold" mb={4} color={useColorModeValue("gray.800", "white")}>
          {title}
        </Text>
        <Text textAlign="center" color={useColorModeValue("gray.600", "gray.400")}>
          {description}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Features;
