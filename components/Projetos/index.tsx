import { Flex, Heading, HStack, VStack, Image, Text } from "@chakra-ui/react";


export function Projetos() {
    return (
        <>
            <Flex direction="column" m="auto" w="100%">
                <Heading px={14} mt={2} align="start">
                    Projetos
                </Heading>



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