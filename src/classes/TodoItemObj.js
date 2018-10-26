export default class TodoItemObj {
    constructor(title) {
        this.title = title;
        this.isDone = false;
        this.id = TodoItemObj.incrementId();
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1
        } else {
            this.latestId++
        }
        return "todoItem" + this.latestId
    }
}