import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.MouseHover = this.MouseHover.bind(this);
        this.Modify = this.Modify.bind(this);
        this.Delete = this.Delete.bind(this);
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.state = {
            pre: this.props.text
        }
    }

    inputFormHandler(e) {
        
        //this.setState({ [e.target.name] : e.target.value });
        this.setState({ pre : e.target.value });
    }

    MouseHover(e) {
        e.preventDefault();
        this.props.onHover(e.target.dataset.id, e.target.dataset.todo, e.target.dataset.completed, e.target.dataset.ishover, "read");
    }

    Modify(e) {
        e.preventDefault();
        this.props.onModify(e.target.dataset.id, e.target.dataset.todo,
            e.target.dataset.completed, e.target.dataset.ishover, 'none-content');
            this.setState({ pre : this.props.text });
    }

    Delete(e) {
        e.preventDefault();
        this.props.onDelete(e.target.dataset.id, e.target.dataset.todo,
            e.target.dataset.completed, e.target.dataset.ishover);
    }

    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            var isCom = (data[i].Completed === '1') ? "com" : "nCom";

            /*      read       */
            if (data[i].mode === 'read') {
                
                lists.push(
                    <li className={i} key={data[i].id} data-id={data[i].id} data-todo={data[i].todo}
                        data-completed={data[i].Completed} data-ishover={data[i].isHover}
                        onMouseEnter={this.MouseHover} onMouseLeave={this.MouseHover}>

                        <p data-id={data[i].id} data-todo={data[i].todo} data-completed={data[i].Completed} data-ishover={data[i].isHover}
                            className={isCom} onClick={function (e) {
                                e.preventDefault();

                                this.props.onClick(e.target.dataset.id, e.target.dataset.todo, e.target.dataset.completed, e.target.dataset.ishover, "read");
                            }.bind(this)}
                        >{data[i].todo}</p>

                        <div class="btn">
                            <div>
                                <button className={data[i].isHover === "1" ? "list-hover1": "list-leave1"}
                                    data-id={data[i].id} data-todo={data[i].todo} data-completed={data[i].Completed} data-ishover={data[i].isHover}
                                    onClick={this.Modify}>수정</button>
                            </div>
                            <div>
                                <button className={data[i].isHover === "1" ? "list-hover2": "list-leave2"}
                                data-id={data[i].id} data-todo={data[i].todo} data-completed={data[i].Completed} data-ishover={data[i].isHover}
                                    onClick={this.Delete}>삭제</button>
                            </div>
                        </div>
                    </li>)

            /*      update       */
            } else if (data[i].mode === 'update') {
                
                lists.push(
                    <li className='ModiMode' key={data[i].id}>
                        <form method="post" data-id={data[i].id} data-completed={data[i].Completed} data-ishover={data[i].isHover}
                            onSubmit={function (e) {
                                e.preventDefault();
                                if (e.target.mtodo.value == "") {
                                    alert("입력해주세요!");
                                } else {
                                    this.props.onSubmit(e.target.dataset.id, e.target.mtodo.value, e.target.dataset.completed, e.target.dataset.ishover);
                                    
                                }

                            }.bind(this)}>
                            <div className="UDbtn">
                                <input type="text" name="mtodo" className="modi" value={this.state.pre} onChange={this.inputFormHandler}></input>
                                <input type="submit" value="수정" className="modi"></input>
                            </div>
                        </form>
                    </li>
                )
            }
            i = i + 1;
        } 

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TodoList;