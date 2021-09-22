import { Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, Button, Flex, ModalFooter, Heading, HStack, VStack, Image, Text, IconButton, Link, Spacer, useDisclosure } from "@chakra-ui/react";
import { FiGithub, FiYoutube, FiLink2, FiPlus } from 'react-icons/fi'


export function Projetos1() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex direction="column" m="auto" w="100%">
                <HStack px={14}>
                    <Heading mt={2} align="start" display="flex">
                        <Image src="images/dtmoney.png" alt="Logo dtmoney" mr={6} />
                        dt money - Ignite

                    </Heading>
                    <Spacer />
                    <Link
                        target="_blank"
                        _hover={{ textDecoration: "none" }}
                        href="https://dtmoney-ignite.vercel.app/">
                        <Text
                            bg="#342680"
                            p={2}
                            borderRadius={8}
                        >
                            Acessar Site</Text>
                    </Link>
                    <Link
                        target="_blank"
                        href="https://github.com/tosantos1/dtmoney-ignite/tree/master">
                        <IconButton
                            bg="#333"
                            aria-label="Github"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiGithub />}
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://github.com/tosantos1/dtmoney-ignite/tree/master">
                        <IconButton
                            colorScheme="red"
                            aria-label="Youtube"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiYoutube />}
                        />
                    </Link>
                </HStack>

                <Flex justify="space-between" align="center" p={14} >
                    <Image src="images/p1.png" alt="Projeto 1" w="400px" h="400px" borderRadius="8" />
                    <VStack w="800px" mr="0">
                        <HStack >
                            <VStack p="4" alignItems="left">
                                <Image src="images/react.png" alt="ReactJS Logo" w="50px" h="45px" />
                                <Text>
                                    React JS
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="4" alignItems="left">
                                <Image src="images/sc.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Style Component
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack p="4" alignItems="left">
                                <Image src="images/miragejs.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Mirage JS
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="4" alignItems="left">
                                <Image src="images/axios.svg" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Axios
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <Button bg="gray.900" onClick={onOpen} p={4} align="center">
                            <FiPlus />
                            <Text ml={2}>Tecnologias</Text>
                        </Button>

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </VStack>

                </Flex>


            </Flex>

            <div>
                {/* <Example /> */}
            </div>
        </>
    );
}