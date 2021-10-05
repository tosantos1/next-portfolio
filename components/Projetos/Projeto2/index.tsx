import { Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, Button, Flex, ModalFooter, Heading, HStack, VStack, Image, Text, IconButton, Link, Spacer, useDisclosure } from "@chakra-ui/react";
import { FiGithub, FiYoutube, FiLink2, FiPlus } from 'react-icons/fi'


export function Projetos2() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex direction="column" m="auto" w="100%">
        <HStack px={14}>
          <Heading mt={2} display="flex" alignItems="center">
            <Image src="images/lr.png" alt="Logo LR Robótica" mr={6} />
            Academia de Robótica

          </Heading>
          <Spacer />
          <Link
            target="_blank"
            _hover={{ textDecoration: "none" }}
            href="https://academiaderobotica.com/">
            <Text
              bg="#342680"
              p={2}
              borderRadius={8}
            >
              Acessar Site</Text>
          </Link>

        </HStack>

        <Flex justify="space-between" align="center" p={14} >
          <Image src="images/lrimg.png" alt="Projeto 1" w="400px" h="400px" borderRadius="8" />
          <VStack w="800px" mr="0" >
            <HStack >
              <VStack m="2" w="400px" h="200px" alignItems="left">
                <Image src="images/react.png" alt="ReactJS Logo" w="50px" h="45px" />
                <Text>
                  React JS
                </Text>
                <Text w="400px">
                  O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário
                </Text>
              </VStack>
              <VStack m="2" w="400px" h="200px" alignItems="left">
                <Image src="images/sc.png" alt="Segun Adebayo" w="50px" h="50px" />
                <Text>
                  Styled Components
                </Text>
                <Text w="400px" >
                  Styled Components é uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript 💅🏾
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
                  Mirage JS é uma biblioteca de simulação de API que permite construir, testar e compartilhar um aplicativo JavaScript funcional completo sem ter que depender de nenhum serviço de back-end.
                </Text>
              </VStack>
              <VStack m="2" w="400px" h="200px" alignItems="left">
                <Image src="images/axios.svg" alt="Segun Adebayo" w="50px" h="50px" />
                <Text>
                  Axios
                </Text>
                <Text w="400px">
                  Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.
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
                    <Heading size="md">Componentização</Heading>
                    <Text fontSize="sm" py={2}>Separação por componentes, header, summary e transactions table, para uma boa prática para o projeto...</Text>
                  </Box>
                  <Box py={2}>
                    <Heading size="md">Consumindo API</Heading>
                    <Text fontSize="sm" py={2}>Criando um front-end sem back-end, configurando MirageJS e também cliente do Axios...</Text>
                  </Box>
                  <Box py={2}>
                    <Heading size="md">Contextos e hooks</Heading>
                    <Text fontSize="sm" py={2}>Aplicando A Context API no React, carregando transações, movendo criação para o context, criando hook...</Text>
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