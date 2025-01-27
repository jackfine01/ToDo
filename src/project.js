class Project { 
    constructor (title, tasks){
    this._title = title;
    this._tasks = tasks;
    };

    get Title(){
        return this._title;
    };

    addTask( Task ){
        this._tasks.push(Task);
    };
};
export { Project };