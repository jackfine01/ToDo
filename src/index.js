import "./styles.css";
import { Task } from "./todo.js"
import { Project } from "./project.js"

const newTaskDOM = document.getElementById('newToDo');
newTaskDOM.addEventListener('click', function(){
    console.log('creating task');
});

const newProjectDOM = document.getElementById('newProj');
newProjectDOM.addEventListener('click', function(){
    console.log('creating project');
});

console.log('i live')

const TaskOne = new Task('Title', "Lorem Ipsum", '1/1/1111')
console.log(TaskOne);

const TaskTwo = new Task('Title', "Lorem Ipsum", '2/2/2222')
console.log(TaskTwo);

const TaskThree = new Task('Title', "Lorem Ipsum", '3/3/3333')
console.log(TaskThree);

const ProjectOne = new Project('title,', [])
console.log(ProjectOne);

ProjectOne.addTask(TaskOne)
console.log(ProjectOne);

ProjectOne.addTask(TaskTwo)
console.log(ProjectOne);

ProjectOne.addTask(TaskThree)
console.log(ProjectOne);

TaskOne.title = "Task One";
TaskTwo.date = '03/20/2000';
TaskThree.description = 'She Lorem till I ipsum';
console.log(ProjectOne);
