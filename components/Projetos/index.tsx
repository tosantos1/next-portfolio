import { Flex, Heading, HStack, VStack, Image, Text, IconButton, Link, Spacer } from "@chakra-ui/react";
import { FiGithub, FiYoutube, FiLink2 } from 'react-icons/fi'


export function Projetos() {
    return (
        <>
            <Flex direction="column" m="auto" w="100%">
                <HStack px={14}>
                    <Heading mt={2} align="start" display="flex">
                        <Image src="images/dtmoney.png" mr={6} />
                        dt money - Ignite

                    </Heading>
                    <Spacer />
                    <Link href="https://dtmoney-ignite.vercel.app/">
                        <IconButton
                            bg="#5429CC"
                            aria-label="default"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiLink2 />}
                        />
                    </Link>
                    <Link href="https://github.com/tosantos1/dtmoney-ignite/tree/master">
                        <IconButton
                            bg="#333"
                            aria-label="Github"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiGithub />}
                        />
                    </Link>
                    <Link href="https://github.com/tosantos1/dtmoney-ignite/tree/master">
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
                            <VStack p="8" alignItems="left">
                                <Image src="images/react.png" alt="ReactJS Logo" w="50px" h="45px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="8" alignItems="left">
                                <Image src="images/sc.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack p="8" alignItems="left">
                                <Image src="images/miragejs.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="8" alignItems="left">
                                <Image src="images/axios.svg" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Flex>


            </Flex>

            <div>
                {/* <Example /> */}
            </div>
        </>
    );
}