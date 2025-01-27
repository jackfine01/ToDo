class Project { 
    constructor (title, tasks = []){
    this._title = title;
    this._tasks = tasks;
    };

    get title(){
        return this._title;
    };

    set title(newTitle){
        this._title = newTitle;
    };

    get tasks(){
        return this._tasks;
    }

    addTask( Task ){
        this._tasks.push(Task);
    };
};
export { Project };