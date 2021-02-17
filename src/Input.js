import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, InputGroup } from "@chakra-ui/react"

class ToDoInput extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div >
                <InputGroup borderColor="black">
                    <Input placeholder="Item" margin="0.5em"></Input>
                    <Button margin="0.5em" colorScheme="twitter" size="md">Submit</Button>
                </InputGroup>

            </div>
        );
    }

}

export default ToDoInput;


