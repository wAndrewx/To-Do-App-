import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, FormControl, FormLabel } from "@chakra-ui/react"

class ToDoList extends React.Component {
    render() {
        return (
            <FormControl>
                <List spacing={3} margin="0.5em" >
                    
                    <ListItem>{this.props.inputVal}</ListItem>
                    

                </List>
            </FormControl>
        )
    }
}

export default ToDoList;