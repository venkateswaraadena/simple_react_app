import React,{Component} from 'react';
import Create from './Create';
import List from './List';

export default class Books extends Component {
 

    render() {
        return (
            <div>
                <Create />
                <List />
            </div>
        )
    }
}