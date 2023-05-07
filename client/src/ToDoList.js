import React, {Component} from "react";
import axios from "axios";
import {Card, Header, Form, Input, Icon} from "semantic-ui-react";

let endpoint = "http://localhost:9000";

class ToDoList extends Component{
    constructor(props){
        super(props);

        this.state={
            task:"",
            item:[],
        };
    }
    ComponentDidMount(){
        this.getTask();
    }
    render(){
        return(
            <div>
                <div className="row">
                    <Header className="header" as="h2" color="yello">
                        TO DO LIST
                    </Header>
                </div>
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <Input type="text"
                         name="task" 
                         onChange={this.onChange} 
                         value={this.state.task} 
                         fluid 
                         placeholader="Create Task"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;