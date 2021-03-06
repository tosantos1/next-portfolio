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
                    <VStack w="800px" mr="0" >
                        <HStack >
                            <VStack m="2" w="400px" h="200px" alignItems="left">
                                <Image src="images/react.png" alt="ReactJS Logo" w="50px" h="45px" />
                                <Text>
                                    React JS
                                </Text>
                                <Text w="400px">
                                    O React ?? a biblioteca mais popular do JavaScript e ?? usada para construir uma interface de usu??rio (IU). Ela oferece uma resposta excelente para o usu??rio
                                </Text>
                            </VStack>
                            <VStack m="2" w="400px" h="200px" alignItems="left">
                                <Image src="images/sc.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Styled Components
                                </Text>
                                <Text w="400px" >
                                    Styled Components ?? uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever c??digos CSS dentro do Javascript ????????
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack align="center" justify="center">
                            <VStack m="2" w="400px" h="200px" alignItems="left">
                                <Image src="images/miragejs.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Mirage JS
                                </Text>
                                <Text w="400px" >
                                    Mirage JS ?? uma biblioteca de simula????o de API que permite construir, testar e compartilhar um aplicativo JavaScript funcional completo sem ter que depender de nenhum servi??o de back-end.
                                </Text>
                            </VStack>
                            <VStack m="2" w="400px" h="200px" alignItems="left">
                                <Image src="images/axios.svg" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Axios
                                </Text>
                                <Text w="400px">
                                    Axios ?? um cliente HTTP baseado em Promises para fazer requisi????es. Pode ser utilizado tanto no navegador quando no Node.js.
                                </Text>
                            </VStack>
                        </HStack>
                        <Button
                            onClick={onOpen}
                            bg="gray.900"
                            p={4}
                            align="center"
                            _hover={{ bg: "#342680" }}
                        >
                            <FiPlus />
                            <Text ml={2}>Tecnologias</Text>
                        </Button>

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent bg="gray.900">
                                <ModalHeader>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box py={2}>
                                        <Heading size="md">Componentiza????o</Heading>
                                        <Text fontSize="sm" py={2}>Separa????o por componentes, header, summary e transactions table, para uma boa pr??tica para o projeto...</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Consumindo API</Heading>
                                        <Text fontSize="sm" py={2}>Criando um front-end sem back-end, configurando MirageJS e tamb??m cliente do Axios...</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Contextos e hooks</Heading>
                                        <Text fontSize="sm" py={2}>Aplicando A Context API no React, carregando transa????es, movendo cria????o para o context, criando hook...</Text>
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