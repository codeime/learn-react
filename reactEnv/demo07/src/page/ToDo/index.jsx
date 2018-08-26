import React from 'react';
import Input from '@/components/Input/index'
import List from '@/components/List/index'

class ToDo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todoList: []
        };
    }
    render() {
        return (
            <div>
                <Input commitFun={this.addToDo.bind(this)}></Input>
                <List list={this.state.todoList} removeFun={this.removeToDo.bind}></List>
            </div>
        );
    }
    addToDo(text) {
        let id = this.state.todoList.length;
        this.setState({
            todoList: this.state.todoList.concat({ id, text })
        })
    }
    removeToDo(id) {
        this.setState({
            todoList: this.state.todoList.filter(item => item.id !== id)
        })
    }
}

export default ToDo;