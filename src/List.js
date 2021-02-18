import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, FormControl, FormLabel } from "@chakra-ui/react"

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        // this.createItem = this.createItem.bind(this)
        this.state = {
            list: []
        }
    }

    // createItem(data) {
    //     console.log("submitted?")

    //     return 
    // }

    render() {
        let information = this.props.dataInfo;
        return (
            <FormControl>
                <List spacing={3} >
                    <ListItem>{information}</ListItem>
                </List>
            </FormControl>
        )
    }
}

export default ToDoList;