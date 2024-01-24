"use client";
import { Box, Button, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <Flex align="center" direction={{ base: "column-reverse", lg: "row" }} minHeight="100vh" background="black" color="white" paddingX={4}>
      <Box flex="1" p={8} textAlign={{ base: "center", lg: "left" }}>
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants}>
            <Heading fontSize="5xl" mb={6} fontWeight="bold" color="teal.300" letterSpacing="-2px" textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)">
              Empowering the Future with AI Solutions
            </Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Text fontSize="2xl" mb={8} lineHeight="1.8" color="gray.300" textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)">
              Welcome to Mirae.ai, your partner in AI-driven solutions. Our advanced AI technologies empower businesses
              and individuals to achieve their goals more efficiently and effectively. Let us build the future together.
            </Text>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/RequestDemo">
            <Button
              colorScheme="teal"
              size="lg"
              _hover={{ transform: "scale(1.05)" }}
              _focus={{ outline: "none" }}
              fontWeight="bold"
              boxShadow="lg"
            >
              Get Started
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Box>
      <Box flex="1" p={8} textAlign="center">
        <Image
          src="./pexels-tofroscom-257853.jpg"
          alt="Mirae.ai"
          borderRadius="xl"
          shadow="lg"
          width={650}
          height={550}
          py={0}
          mb={-4}
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;


