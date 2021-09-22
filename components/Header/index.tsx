import { Flex, Link, Image, Spacer, Heading } from "@chakra-ui/react"

export function Header() {
    return (
        <Flex w="100%" bg="gray.900" p="4" borderBottom="1px" borderBottomColor="white">

            <Flex w="100%" as="header" justify="space-between" align="center" p="4">
                <Image src="images/logo.svg" alt="logo" />

                <Heading as="h1" size="md" fontWeight="normal">Tiago Oliveira</Heading>
            </Flex>

        </Flex>
    )
}