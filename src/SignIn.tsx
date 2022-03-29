import { CheckCircleIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "./services/storage";
import { signIn } from "./store/User.store";

const SignIn = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignin() {
    if (mail !== "teste@email.com" && password !== "123456") {
      toast({
        title: "Invalid credentials",
        status: "error",
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      saveUser({
        mail,
        name: "Jefferson",
      });
      dispatch(signIn("Jefferson"));
    }, 1000);
  }

  return (
    <Center h="100vh">
      <Flex direction={"column"} w="350px" alignItems={"center"}>
        <Flex w="350px" alignItems={"center"} justifyContent="center" mb="20px">
          <CheckCircleIcon fontSize={"20px"} color="green.300" />
          <Text fontSize="20px" ml="5px">
            Tasked
          </Text>
        </Flex>

        <InputGroup mb={"10px"}>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="gray.300" />}
          />
          <Input
            variant="filled"
            type="text"
            value={mail}
            placeholder="Mail"
            onChange={(e) => setMail(e.currentTarget.value)}
          />
        </InputGroup>
        <InputGroup mb={"20px"}>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />

          <Input
            variant="filled"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSignin();
              }
            }}
          />
        </InputGroup>

        <Button
          isLoading={loading}
          onClick={handleSignin}
          colorScheme="blue"
          alignSelf={"stretch"}
        >
          Sign In
        </Button>
      </Flex>
    </Center>
  );
};

export default SignIn;
