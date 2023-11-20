import {makeAutoObservable} from 'mobx';
import {ToDoModel} from "../Model/ToDoModel";

export class ToDoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    };

    addToDo = text => {
        let newTodos = [...this.todos];
        let newItem = new ToDoModel(text);
        newTodos.push(newItem);
        this.setTodos(newTodos);
    }

    setTodos = todos => {
        this.todos = todos;
    }

    removeToDo = item => {
        let newTodos = [...this.todos];
        let index = newTodos.indexOf(item);
        delete newTodos[index];
        this.setTodos(newTodos);
    }

    get getCompletedTodos() {
        const items = [...this.todos];
        return items.filter(item => {
                if (item !== undefined) {
                    return item.isDone
                }
        }
        );
    }
}