import "./styles.css";
import { Task} from "./todo.js"
import { createProjectArray, addToProject, Project, checkProject } from "./project.js"

const newProjectDOM = document.getElementById('newToDo');
newProjectDOM.addEventListener('click', function(){
    createTaskDOM();
    console.log('creating toDo');
});

const projectArray = createProjectArray();
console.log(projectArray);

const ProjectOne = new Project('Project 1', [])



const TaskFour = new Task('Task Four', 'Lorem Ipsyum', '1/1/4444', 'Project 1')
console.log(TaskFour.project)
console.log(ProjectOne.title)

addToProject(TaskFour, projectArray);
console.log(projectArray);

// console.log('i live')

// const TaskOne = new Task('Task One', "Lorem Ipsum", '1/1/1111')
// console.log(TaskOne);

// const TaskTwo = new Task('Task Two', "Lorem Ipsum", '2/2/2222')
// console.log(TaskTwo);

// const TaskThree = new Task('Task Three', "Lorem Ipsum", '3/3/3333')
// console.log(TaskThree);

// const ProjectOne = new Project('title,', [])
// console.log(ProjectOne);

// ProjectOne.addTask(TaskOne)
// ProjectOne.addTask(TaskTwo)
// ProjectOne.addTask(TaskThree)

// TaskOne.title = "Task One";
// TaskTwo.date = '03/20/2000';
// TaskThree.description = 'She Lorem till I ipsum';

// ProjectOne.deleteTask(TaskTwo);
// console.log(ProjectOne._tasks);

// console.log(generateID)
// generateID(Math.random());
