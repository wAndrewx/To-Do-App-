import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

class ToDoList extends React.Component {

    render() {
        return (
            <List spacing={3}>
                <ListItem>
                    <ListIcon colorScheme="brand" color="blue.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            </List>
        )
    }
}

export default ToDoList;