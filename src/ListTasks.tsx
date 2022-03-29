import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import randomPhrase from "./services/lorem";
import { RootState } from "./store";
import { addToList } from "./store/Task.store";

const ListTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);

  function handleAddTask() {
    dispatch(addToList(randomPhrase()));
  }

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={5} padding="20px">
      <Button
        height="100px"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        borderRadius={"10px"}
        backgroundColor={"green.300"}
        boxShadow={"1px 1px 5px #00000020"}
        cursor="pointer"
        onClick={handleAddTask}
      >
        <AddIcon fontSize={20} />
      </Button>

      {tasks.map((task) => (
        <Flex
          height="100px"
          key={task.id}
          flex={1}
          alignItems={"center"}
          justifyContent="center"
          flexDirection={"column"}
          borderRadius={"10px"}
          backgroundColor={"green.300"}
          boxShadow={"1px 1px 5px #00000020"}
          textAlign="center"
          padding={"5px"}
        >
          {task.title}
        </Flex>
      ))}
    </Grid>
  );
};

export default ListTasks;
