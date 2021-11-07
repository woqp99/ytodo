import React, { Component, createContext, useState } from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 0;
    this.state = {
      contents: [],
      text: '',
      class: 'content'
    }
  }


  render() {

    var _article = null, _list = null;


    _article = <AddTodo onSubmit={function (_todo) {
      this.max_content_id += 1;
      var _contents = this.state.contents.concat({
        id: this.max_content_id,
        todo: _todo,
        Completed: '0',
        isHover: '0',
        mode: 'read'
      })

      this.setState({
        contents: _contents
      })

    }.bind(this)} ></AddTodo>

    _list = <TodoList data={this.state.contents} text={this.state.text} onClick={function (_id, _todo, _Completed, _isHover, _mode) {
      var i = 0;
      var cts = this.state.contents;
      var exam = _todo;
      while (i < cts.length) {
        if (Number(cts[i].id) === Number(_id)) {
          (_Completed == "0") ? _Completed = '1' : _Completed = '0';
          cts[i] = { id: _id, todo: _todo, Completed: _Completed, isHover: _isHover, mode: _mode };
          break;
        }
        i += 1;
      }
      this.setState({
        contents: cts,
        text: exam
      })

    }.bind(this)}

      onHover={function (_id, _todo, _Completed, _isHover, _mode) {
        var i = 0;
        var cts = this.state.contents;
        var exam = _todo;
        while (i < cts.length) {
          if (Number(cts[i].id) === Number(_id)) {
            (_isHover == "0") ? _isHover = '1' : _isHover = '0';
            cts[i] = { id: _id, todo: _todo, Completed: _Completed, isHover: _isHover, mode: _mode };
            break;
          }
          i += 1;
        }
        this.setState({
          contents: cts,
          text: exam
        })
      }.bind(this)}

      onModify={function (_id, _todo, _Completed, _isHover, _class) {
        var i = 0;
        var cts = this.state.contents;
        while (i < cts.length) {
          if (cts[i].mode === 'update') {
            cts[i] = { id: cts[i].id, todo: cts[i].todo, Completed: cts[i].Completed, isHover: "0", mode: "read" };
          }
            if (Number(cts[i].id) === Number(_id)) {
              cts[i] = { id: _id, todo: _todo, Completed: _Completed, isHover: "1", mode: "update" };
              //break;
            } 
              
          
          i += 1;
        }
        this.setState({
          class: _class
        })
      }.bind(this)}

      onSubmit={function (_id, _todo, _Completed, _isHover) {
        var i = 0;
        var cts = this.state.contents;
        while (i < cts.length) {
          if (Number(cts[i].id) === Number(_id)) {
            cts[i] = { id: _id, todo: _todo, Completed: _Completed, isHover: "1", mode: "read" };
            break;
          }
          i += 1;
        }
        this.setState({
          contents: cts
        })
      }.bind(this)}

      onDelete={function (_id, _todo, _Completed, _isHover) {
        if(window.confirm('삭제하시겠습니까?')){
        var i = 0;
        var cts = Array.from(this.state.contents);
        while (i < cts.length) {
          if (Number(cts[i].id) === Number(_id)) {
            cts.splice(i, 1);
            break;
          }
          i += 1;
        }
        this.setState({
          contents: cts
        })
      }
      }.bind(this)}
    ></TodoList>


    return (
      <div className="App">
        <div className="wrap">
        {_article}
          <div className="content">
            {_list}
          </div>
        </div>
      </div>
    );
  }
}
export default App;