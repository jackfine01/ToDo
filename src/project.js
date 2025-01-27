class Project { 
    constructor (title, tasks){
    this.title = title;
    this.tasks = tasks;
    };

    getTitle(){
        return this.title;
    };

    addTask( Task ){
        this.tasks.push(Task);
    };
};
export { Project };