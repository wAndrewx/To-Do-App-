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
// import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(data) {

    this.setState({
      inputValue: data
    })

  }

  render() {
    return (
      <ChakraProvider theme={theme}>


        <Stack divider={<StackDivider borderColor="black" borderWidth="medium" />} align="center" direction="column" maxH="100vh" maxW="25%" borderColor="black" borderWidth="2px" borderRadius="10px">

          <ToDoInput dataInput={this.handleInput} />
          <ToDoList dataInfo={this.state.inputValue}/>
        </Stack>
      </ChakraProvider>
    );
  }
}

export default App;
