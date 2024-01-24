"use client"
// pages/blog.tsx
import { Container, VStack, Box, Heading, Text, Button } from '@chakra-ui/react';
import BlogCard from './BlogCard';


const BlogPage = () => {
  const blogs = [
    {
      title: 'Blog1',
      imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      date: 'August 15, 2023',
      author: 'Jane Smith',
      authorPhoto: 'https://100k-faces.glitch.me/random-image',
    },
    {
      title: 'Blog2',
      imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      date: 'August 15, 2023',
      author: 'Jane Smith',
      authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },
    {
      title: 'Blog3',
      imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      date: 'August 15, 2023',
      author: 'Xyz Smith',
      authorPhoto: 'https://100k-faces.glitch.me/random-image',
    },
    // Add more blogs as needed
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="black" color="white" py={24}>
          <Container maxW="container.xl" textAlign="center">
            <Heading as="h1" size="4xl" mb={8}>
            Welcome to Mirae.ai Blog
            </Heading>
            <Text fontSize="xl" mb={8}>
            Explore our latest blog posts and stay updated with the latest trends in AI and technology.
            </Text>
          </Container>
        </Box>
    
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        
        {/* Blog Cards */}
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </VStack>
    </Container>
</Box>
  );
};

export default BlogPage;
