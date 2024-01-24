// components/BlogCard.tsx
"use client"
import { useState } from 'react';
import { Box, Image, Heading, Text, IconButton, HStack, VStack, Collapse } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface BlogCardProps {
  title: string;
  imageUrl: string;
  content: string;
  date: string;
  author: string;
  authorPhoto: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, content, date, author, authorPhoto }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
      <Image src={imageUrl} alt={title} h="200px" w="100%" objectFit="cover" />
      <Box p={4}>
        <Heading as="h3" fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Collapse in={isExpanded} startingHeight={100}>
          <Text mb={2}>{content}</Text>
        </Collapse>
        <HStack spacing={2}>
          <IconButton
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            icon={isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={handleToggle}
          />
        </HStack>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {date}
        </Text>
        <HStack spacing={2} align="center" mb={4}>
          <Image src={authorPhoto} alt={author} boxSize="30px" objectFit="cover" borderRadius="full" />
          <Text fontWeight="bold">{author}</Text>
        </HStack>
        <HStack spacing={2}>
          <IconButton
            aria-label="Share on Facebook"
            icon={<FaFacebook />}
            variant="outline"
            colorScheme="facebook"
            size="sm"
          />
          <IconButton
            aria-label="Share on Twitter"
            icon={<FaTwitter />}
            variant="outline"
            colorScheme="twitter"
            size="sm"
          />
          <IconButton
            aria-label="Share on LinkedIn"
            icon={<FaLinkedin />}
            variant="outline"
            colorScheme="linkedin"
            size="sm"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default BlogCard;

