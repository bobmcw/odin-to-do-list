import saveProjectToLocalStorage, { rednerFromLocalStorage } from "./localStorage";
import createTask from "./task";

export class Project{
    constructor(name){
        this.name = name;
        this._tasks = [];
    }
   set newTask(task){
    this._tasks.push(task);
    console.log(this._tasks.indexOf(task));
    saveProjectToLocalStorage(this)
   }
   get getTasks(){
    return this._tasks;
   } 
   set removeTask(index){
    this._tasks.splice(index,1);
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
        this.newTask = createTask(prompt("task name"),"task created from button","2024","yes");
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
    const removeProjectButton = document.createElement("button");
    const taskSection = document.querySelector(".content");
    removeProjectButton.innerText = "remove this project";
    removeProjectButton.addEventListener("click", () =>{
        localStorage.removeItem(project.getName);
        location.reload();
    });
    taskSection.innerHTML = "";
    taskSection.appendChild(removeProjectButton)
    let index = 0
    project.getTasks.forEach(task => {
       const formated = task.formatedTask;
       formated.id = index;
       index+=1;
       const delbutton = document.createElement("button");
       delbutton.innerText = "delete";
       delbutton.addEventListener("click",() => {
        project.removeTask = formated.id;
        renderProject(project);
        saveProjectToLocalStorage(project)
       })
       formated.appendChild(delbutton);
       taskSection.appendChild(formated) ;
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