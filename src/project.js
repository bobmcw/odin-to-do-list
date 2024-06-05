import saveProjectToLocalStorage from "./localStorage";
import createTask from "./task";

export class Project{
    constructor(name){
        this.name = name;
        this._tasks = [];
    }
   set newTask(task){
    saveProjectToLocalStorage(this)
    this._tasks.push(task);
   }
   get getTasks(){
    return this._tasks;
   } 
   get getName(){
    return this.name;
   }
get addTaskButton (){
    const button = document.createElement("button");
    button.classList.add("addTask");
    const text = document.createElement("h2");
    text.innerText = "+";
    button.appendChild(text);
    button.addEventListener("click", () => {
        this.newTask = createTask("example","task created from button","2024","yes");
        renderProject(this);
    });
    return button;
}
}
export const newProject = (name) =>{
    const project = new Project(name);
    saveProjectToLocalStorage(project);
    return project;
}
export function addTaskToProject(project,task){
    project.newTask = task;
}
export const renderProject = (project) => {
    const taskSection = document.querySelector(".content");
    taskSection.innerHTML = "";
    project.getTasks.forEach(task => {
       taskSection.appendChild(task.formatedTask) 
    });
    taskSection.appendChild(project.addTaskButton)
}
export default function createProject(name){
    const project = newProject(name);
    const projectTab = document.querySelector(".sidePanel");
    const linkToProject = Object.assign(document.createElement("button"),{innerText: project.name});
    linkToProject.addEventListener("click",() => {
        renderProject(project);
    });
    projectTab.appendChild(linkToProject);
    return project

}