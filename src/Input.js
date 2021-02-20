import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, InputGroup, Stack, StackDivider } from "@chakra-ui/react"
import ToDoList from './List.js'

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            listArr: [],
            test: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    handleDelete(event) {

        this.setState({
            listArr: this.state.listArr.filter((index) => {
                console.log("event:" + event + "index: " + index)
                return index !== event
            }),
            // test:prevState.listArr
        })
        // console.log(this.state.test)
    }

    handleClick() {
        let newData = this.state.inputVal
        let newArr = [...this.state.listArr] // consisiting of text input values
        if (this.state.inputVal) {
            newArr.push(newData)
        }
        this.setState({
            listArr: newArr,
            inputVal: ''
        })
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({
            inputVal: event.target.value

        })

    }
    render() {
        return (
            <Stack divider={<StackDivider borderColor="black" borderWidth="sm" />}
                align="center" direction="column" maxW="25%"
                borderColor="black" borderWidth="1px" borderRadius="10px">

                <InputGroup borderColor="black">
                    <Input onChange={this.handleChange} value={this.state.inputVal} placeholder="Item" margin="0.5em"></Input>
                    <Button onClick={this.handleClick} margin="0.5em" colorScheme="twitter" size="md">Submit</Button>
                </InputGroup>

                <ToDoList inputVal={this.state.listArr} delete={this.handleDelete} />


            </Stack>

        );
    }

}



export default ToDoInput;


