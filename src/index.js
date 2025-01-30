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

const ProjectOne = new Project('Project 1', [])
projectArray.push(ProjectOne)


const TaskFour = new Task('Task Four', 'Lorem Ipsyum', '1/1/4444', 'Project 1')
console.log(TaskFour.project)
console.log(ProjectOne.title)

checkProject(TaskFour, projectArray)

addToProject(TaskFour, projectArray);
console.log(projectArray);