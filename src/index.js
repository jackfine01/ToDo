import "./styles.css";
import { Task} from "./todo.js"
import { createProjectArray, addToProject, Project, checkProject } from "./project.js"
import { createTaskDOM, generateID, createForm, createCard } from "./DOM.js"
const newProjectDOM = document.getElementById('newToDo');
newProjectDOM.addEventListener('click', function(){
    createTaskDOM();
    console.log('creating toDo');
});

const projectArray = createProjectArray();
console.log(projectArray);

function createNewTask(title, description, date, project){
    const newTask = new Task(title, description, date, project)
    addToProject(newTask, newTask.project)
    console.log(projectArray)
};

const ProjectOne = new Project('Project 1', [])
projectArray.push(ProjectOne)


const TaskOne = new Task('Task One', 'Lorem Ipsyum', '1/1/4444', 'Project 1')
console.log(TaskOne.project)
console.log(ProjectOne.title)

addToProject(TaskOne, ProjectOne);
console.log(projectArray)

