import "./styles.css";
import { Task } from "./todo.js"
import { Project } from "./project.js"

const newProjectDOM = document.getElementById('newProj');
newProjectDOM.addEventListener('click', function(){

    console.log('creating project');
});

console.log('i live')

const TaskOne = new Task('Task One', "Lorem Ipsum", '1/1/1111')
console.log(TaskOne);

const TaskTwo = new Task('Task Two', "Lorem Ipsum", '2/2/2222')
console.log(TaskTwo);

const TaskThree = new Task('Task Three', "Lorem Ipsum", '3/3/3333')
console.log(TaskThree);

const ProjectOne = new Project('title,', [])
console.log(ProjectOne);

ProjectOne.addTask(TaskOne)
ProjectOne.addTask(TaskTwo)
ProjectOne.addTask(TaskThree)

TaskOne.title = "Task One";
TaskTwo.date = '03/20/2000';
TaskThree.description = 'She Lorem till I ipsum';

ProjectOne.deleteTask(TaskTwo);
console.log(ProjectOne._tasks);