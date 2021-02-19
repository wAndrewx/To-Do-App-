import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import ToDoInput from './Input.js';
// import { render } from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <ChakraProvider theme={theme}>
        <ToDoInput />
      </ChakraProvider>
    );
  }
}

export default App;
