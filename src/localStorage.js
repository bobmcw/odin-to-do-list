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
            console.log(projectInfo);
            const project = createProject(projectInfo.name);
            projectInfo.tasks.forEach((task) =>{
                console.log(projectInfo.tasks)
                addTaskToProject(project,createTask(task[0],task[1],task[2],task[3]));
            })
        });
    }
}