"use client"
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, ChatIcon } from '@chakra-ui/icons'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// chatbot button
// const customIconButton = defineStyle({
// background: 'orange.500',
// color: 'black',
// fontFamily: 'serif',
// fontWeight: 'normal',

// // let's also provide dark mode alternatives
// _dark: {
//   background: 'orange.300',
//   color: 'orange.800',
// }
// })

const outline = defineStyle({
  border: '2px dashed', // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: 'semibold', // change the font weight
})

export const buttonTheme = defineStyleConfig({
  //  variants: { customIconButton },
  defaultProps: {
    size: 'lg',
    variant: 'outline',
    colorScheme: 'brand',
  },
})


const Logo = (props: any) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="./Mirae_logo_black_white_horizontal_name.png"
      {...props}>
      {/* ...logo path */}
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Box as="a" href="/">
          <Image
            src='./Mirae_logo_black_white_horizontal_name-removebg-preview.png'
            alt="Mirae.ai"
            h={187}
            width={170}
          />
          <Box position='fixed'
            bottom='24px'
            right={['16px', '24px']}
            zIndex={2}
          >
            {/* <IconButton
              colorScheme='teal'
              aria-label='Call Segun'
              size='lg'
              isRound={true}
              icon={<ChatIcon />}
            /> */}
          </Box>

        </Box>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={3}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Mera.ai. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}