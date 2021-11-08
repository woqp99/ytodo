import React, { Component } from 'react';

class AddTodo extends Component {
    render() {

        return (
            <form method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    if(e.target.todo.value==""){
                        alert("입력해주세요!");
                    }else{
                        this.props.onSubmit(e.target.todo.value);
                        e.target.reset()
                    }
                    
                }.bind(this)}>
                <div class="add todo_text">
                    <input class="todo-text" type="text" name="todo" placeholder="Todo"></input>

                    <input type="submit" class="todo-submit" value="추가" ></input>
                </div>
            </form>


        );
    }
}

export default AddTodo;
