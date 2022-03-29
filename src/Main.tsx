import { CheckCircleIcon, LockIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ListTasks from "./ListTasks";
import { cleanUser } from "./services/storage";
import { RootState } from "./store";
import { signOut } from "./store/User.store";

const Main = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.name);

  function handleSignOut() {
    cleanUser();
    dispatch(signOut());
  }

  return (
    <Flex flex={1} h={"100vh"} direction="column" bg={"gray.100"}>
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        alignSelf="stretch"
        h="80px"
        minH="80px"
        paddingInline="20px"
        bg={"white"}
      >
        <Flex alignItems={"center"}>
          <CheckCircleIcon fontSize={"25px"} color="green.300" />
          <Text fontSize="25px" ml="5px">
            Tasked
          </Text>
        </Flex>

        <Flex alignItems={"center"}>
          <Text fontSize="18px" ml="5px" mr={"20px"}>
            Hello {userName}
          </Text>
          <Button
            leftIcon={<LockIcon />}
            variant="outline"
            onClick={handleSignOut}
            colorScheme="blue"
            size={"sm"}
          >
            Sign Out
          </Button>
        </Flex>
      </Flex>

      <ListTasks />
    </Flex>
  );
};

export default Main;
