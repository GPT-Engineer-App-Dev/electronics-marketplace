import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Spacer />
        <HStack spacing="24px">
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding="2rem" textAlign="center">
        <Heading size="2xl" mb="4">Featured Product</Heading>
        <Image src="/path/to/featured-product.jpg" alt="Featured Product" boxSize="300px" objectFit="cover" margin="0 auto" />
        <Text fontSize="xl" mt="4">Amazing Electronic Gadget</Text>
        <Button colorScheme="blue" mt="4">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" mt="8">
        <Heading size="lg" mb="6">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/product1.jpg" alt="Product 1" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">Product 1</Text>
                <Text mt="2">$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/product2.jpg" alt="Product 2" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">Product 2</Text>
                <Text mt="2">$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/product3.jpg" alt="Product 3" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">Product 3</Text>
                <Text mt="2">$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/product4.jpg" alt="Product 4" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">Product 4</Text>
                <Text mt="2">$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" mt="8" py="4">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing="24px">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex justify="space-between" mt="4">
            <Link href="#">Contact Information</Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;