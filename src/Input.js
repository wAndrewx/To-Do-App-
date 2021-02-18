import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, InputGroup } from "@chakra-ui/react"

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dataInput(this.state.inputVal)
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({
            inputVal: event.target.value
        })

    }

    render() {
        return (
            <div >
                <InputGroup borderColor="black">
                    <Input onChange={this.handleChange}  value={this.state.value} placeholder="Item" margin="0.5em"></Input>
                    <Button onSubmit={this.handleClick} margin="0.5em" colorScheme="twitter" size="md">Submit</Button>
                </InputGroup>

            </div>
        );
    }

}

export default ToDoInput;


