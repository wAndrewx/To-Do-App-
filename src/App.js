import React from 'react';
import {
  ChakraProvider,
  Stack,
  Box,
  Grid,
  theme,
  StackDivider,
} from '@chakra-ui/react';
import ToDoInput from './Input.js';
import ToDoList from './List.js'

function App() {
  return (
    <ChakraProvider theme={theme}>


      <Stack divider={<StackDivider borderColor="black" borderWidth="medium"/>} align="center" direction="column" maxH="100vh" >
        {/* 
          TODO-INPUT
          TODO-LIST
          */}
        <ToDoInput />
        <ToDoList />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
