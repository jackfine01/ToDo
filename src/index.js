import "./styles.css";
import { Task } from "./todo.js"
import { Project } from "./project.js"
console.log('i live')

const TaskOne = new Task('Title', "Lorem Ipsum", '1/1/1111')
console.log(TaskOne);

const TaskTwo = new Task('Title', "Lorem Ipsum", '2/2/2222')
console.log(TaskTwo);

const TaskThree = new Task('Title', "Lorem Ipsum", '3/3/3333')
console.log(TaskThree);

const ProjectOne = new Project('title,', [])
console.log(ProjectOne)