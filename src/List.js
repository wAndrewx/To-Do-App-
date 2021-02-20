import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, FormControl, Button, HStack } from "@chakra-ui/react"

class ToDoList extends React.Component {
    delete(id) {
        this.props.delete(id)
    }

    render() {
        return (

            <FormControl>


                {
                    this.props.inputVal.map((curr, index) => {
                        return <List key={index} spacing={3} margin="0.5em" align="center">
                            <HStack spacing="5px" >

                                <ListItem>{curr}</ListItem>
                                <Button onClick={this.delete.bind(this,curr)} margin="0.5em" size="sm">X</Button>
                            </HStack>
                        </List>
                    })

                }



            </FormControl>


        )
    }
}

export default ToDoList;