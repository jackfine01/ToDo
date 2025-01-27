class Project { 
    constructor (title, tasks){
    this.title = title;
    this.tasks = tasks;
    };

    getTitle(){
        return this.title;
    };
};
export { Project };