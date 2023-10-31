export class ToDoModel {
    constructor(text) {
        this.text = text;
        this.isDone = false;
    }

    done() {
        this.isDone = true;
    }
}