import createProject, { addTaskToProject, newProject, renderProject } from "./project";
import createTask from "./task";

export default function saveProjectToLocalStorage(project){
    const projectInfo = {
        name: project.name,
        tasks: project.getTasks
    };
    localStorage.setItem(project.getName,JSON.stringify(projectInfo));
}
export function rednerFromLocalStorage(){
    if (window.localStorage.length != 0){
        Object.keys(localStorage).forEach(function(key){
            const projectInfo = JSON.parse(localStorage.getItem(key));
            if (projectInfo.name == undefined) {projectInfo.name = "undefined"}
            const tasks = projectInfo.tasks;
            const project = createProject(projectInfo.name);
            tasks.forEach(task =>{
                console.log(task)
                addTaskToProject(project,createTask(task["name"],task["discription"],task["dueDate"],task["priority"]));
            })
        });
    }
}