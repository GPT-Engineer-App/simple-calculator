import React, { useState } from "react";
import { Box, Button, Grid, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <VStack spacing={4}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Text mb={2}>Simple Calculator</Text>
        <Input value={input} readOnly placeholder="Enter calculation" />
        <Text fontSize="2xl" my={2}>
          {result}
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <Button onClick={() => handleInput("1")}>1</Button>
        <Button onClick={() => handleInput("2")}>2</Button>
        <Button onClick={() => handleInput("3")}>3</Button>
        <Button onClick={() => handleInput("+")} colorScheme="blue">
          +
        </Button>
        <Button onClick={() => handleInput("4")}>4</Button>
        <Button onClick={() => handleInput("5")}>5</Button>
        <Button onClick={() => handleInput("6")}>6</Button>
        <Button onClick={() => handleInput("-")} colorScheme="blue">
          -
        </Button>
        <Button onClick={() => handleInput("7")}>7</Button>
        <Button onClick={() => handleInput("8")}>8</Button>
        <Button onClick={() => handleInput("9")}>9</Button>
        <Button onClick={() => handleInput("*")} colorScheme="blue">
          *
        </Button>
        <Button onClick={() => handleInput("0")}>0</Button>
        <Button onClick={clearInput} colorScheme="red">
          C
        </Button>
        <Button onClick={calculateResult} colorScheme="green">
          =
        </Button>
        <Button onClick={() => handleInput("/")} colorScheme="blue">
          /
        </Button>
      </Grid>
    </VStack>
  );
};

export default Index;
