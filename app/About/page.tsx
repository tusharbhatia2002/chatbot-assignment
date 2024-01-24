"use client"
import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Collapse,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
};

const teamMembers = [
  {
    name: 'Prof. Anubha Gupta',
    role: 'Co-Founder & CEO',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor erat. Nulla porttitor urna nec est laoreet tincidunt. Suspendisse nec velit tellus.',
    image: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    social: {
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
      facebook: 'https://www.facebook.com',
    },
  },
  {
    name: 'Dheeraj Kaushik',
    role: 'Co-Founder & CTO',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor erat. Nulla porttitor urna nec est laoreet tincidunt. Suspendisse nec velit tellus.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    social: {
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
      facebook: 'https://www.facebook.com',
    },
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={8}
      boxShadow="md"
    >
      <Flex justifyContent="center" alignItems="center" height="200px">
        <Image
          src={member.image}
          alt={member.name}
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
        />
      </Flex>

      <Box p={4}>
        <Heading as="h4" fontSize="xl" mb={2} textAlign="center">
          {member.name}
        </Heading>
        <Text mb={2} textAlign="center">
          {member.role}
        </Text>

        <Collapse in={isExpanded} startingHeight={20}>
          <Text mb={4}>{member.bio}</Text>
        </Collapse>

        <Flex justifyContent="center" mb={4}>
          <IconButton
            as={Link}
            href={member.social.linkedin}
            isExternal
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            size="sm"
            mr={2}
          />
          <IconButton
            as={Link}
            href={member.social.twitter}
            isExternal
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            size="sm"
            mr={2}
          />
          <IconButton
            as={Link}
            href={member.social.facebook}
            isExternal
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            size="sm"
          />
        </Flex>

        <IconButton
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
          icon={<ChevronDownIcon />}
          onClick={handleToggleExpand}
          variant="ghost"
          size="sm"
          alignSelf="center"
        />
      </Box>
    </Box>
  );
};

const HeroSection = () => {
  return (
    <Box
      bg="linear-gradient(180deg, #000000 0%, #101010 100%)"
      color="white"
      py={16}
      textAlign="center"
    >
      <Container maxW="container.lg">
        <Heading as="h1" fontSize="6xl" mb={4}>
          About Mirae.ai
        </Heading>
        <Text fontSize="xl">
          Mirae.ai is a leading artificial intelligence company dedicated to providing innovative solutions for businesses.
        </Text>
      </Container>
    </Box>
  );
};

const About = () => {
  return (
    <>
      <HeroSection />

      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" mb={12}>
          <Box flex="1">
            <Heading as="h2" fontSize="4xl" mb={4}>
              Welcome to Mirae.ai
            </Heading>
            <Text fontSize="lg">
              Mirae.ai is a leading artificial intelligence company dedicated to providing innovative solutions for businesses.
            </Text>
            <Text fontSize="lg" mt={4}>
              Our team of experts specializes in developing advanced AI algorithms and applications that can transform your business operations and improve efficiency.
            </Text>
            <Text fontSize="lg" mt={4}>
              We offer a wide range of AI-powered solutions, including natural language processing, computer vision, predictive analytics, and machine learning.
            </Text>
            <Text fontSize="lg" mt={4}>
              By harnessing the power of data and AI, we help businesses gain valuable insights, automate processes, and make data-driven decisions.
            </Text>
            <Text fontSize="lg" mt={4}>
              At Mirae.ai, we are committed to delivering exceptional results for our clients. We work closely with you to understand your business objectives and tailor our solutions to meet your specific needs.
            </Text>
          </Box>
          <Box flex="1" ml={{ base: 0, lg: 12 }}>
            <Image src="./pexels-gustavo-fring-6285078.jpg" alt="About" />
          </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between" mb={12}>
          <Box flex="1" mr={{ base: 0, md: 6 }} mb={{ base: 6, md: 0 }}>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Our Mission
            </Heading>
            <Text fontSize="lg">
              Our mission is to revolutionize industries through the power of artificial intelligence. We strive to empower businesses with intelligent solutions that drive growth, improve productivity, and unlock new opportunities.
            </Text>
          </Box>
          <Box flex="1" ml={{ base: 0, md: 6 }}>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Our Vision
            </Heading>
            <Text fontSize="lg" mb={4}>
              Our vision is to be at the forefront of AI innovation, continuously pushing the boundaries of what&apos;s possible. We aim to be the trusted partner for businesses seeking to leverage AI technologies to gain a competitive edge and thrive in the digital era.
            </Text>
          </Box>
        </Flex>

        <Heading as="h2" fontSize="3xl" mb={6}>
          Our Team
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} flexWrap="wrap" justifyContent="space-between">
          {teamMembers.map((member, index) => (
            <TeamMemberCard member={member} key={index} />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default About;








