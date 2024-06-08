import createTask from "./task";
import { renderProject } from "./project";

export class Wizard{
    set displayWizard(project){
        const xbutton = document.createElement("button");
        xbutton.classList.add("xbutton");
        xbutton.innerText = "X"
        xbutton.addEventListener("click",() => {
            //this.hideWizard
        })
        const body = document.querySelector("html");
        const wizard = document.createElement("div");
        wizard.appendChild(xbutton);
        wizard.classList.add("wizard");
        const hideButton = document.createElement("button");
        hideButton.innerText = "confirm";
        hideButton.addEventListener("click",()=>{
            const name = document.querySelector("input[name='taskName']").value;
            const discription = document.querySelector("input[name='taskDiscription']").value;
            const dueDate = document.querySelector("input[name='taskDueDate']").value;
            const urgency = document.querySelector("input[name='urgency']:checked").value;
            if (name != "" && discription != "" && dueDate != "" && urgency != null){
                console.log(name)
            project.newTask = createTask(name,discription,dueDate,urgency);
            renderProject(project);
            this.hideWizard;
            }
        })
        const taskName = document.createElement("input")
        taskName.name = "taskName";
        const nameLabel = document.createElement("label");
        nameLabel.for = "taskName";
        nameLabel.innerText = "task name";

        const taskDiscription = document.createElement("input")
        taskDiscription.name = "taskDiscription";
        const discriptionLabel = document.createElement("label");
        discriptionLabel.for = "taskDiscription";
        discriptionLabel.innerText = "discription";

        const taskDueDate = document.createElement("input");
        taskDueDate.name = "taskDueDate";
        taskDueDate.type = "date";
        const dateLabel = document.createElement("label");
        dateLabel.for = "taskDueDate";
        dateLabel.innerText = "due date";
        
        const radioContainer = document.createElement("div");
        radioContainer.classList.add("radioContainer")
        const urgent = document.createElement("input");
        urgent.type = "radio";
        urgent.name = "urgency";
        urgent.id = "urgent";
        urgent.value = "urgent";
        const notUrgent = document.createElement("input");
        notUrgent.type = "radio";
        notUrgent.name = "urgency";
        notUrgent.id = "notUrgent";
        notUrgent.value = "not urgent";
        notUrgent.checked = true;
        const urgentLabel = document.createElement("label");
        urgentLabel.for = "urgent";
        urgentLabel.innerText = "urgent";
        urgentLabel.for = "urgent";
        urgentLabel.innerText = "urgent";
        const notUrgentLabel = document.createElement("label");
        notUrgentLabel.for = "notUrgent";
        notUrgentLabel.innerText = "not urgent";
        notUrgentLabel.for = "notUrgent";
        notUrgentLabel.innerText = "not urgent";
        radioContainer.appendChild(urgent);
        radioContainer.appendChild(urgentLabel);
        radioContainer.appendChild(notUrgent);
        radioContainer.appendChild(notUrgentLabel);
        
        
        wizard.appendChild(nameLabel);
        wizard.appendChild(taskName);
        wizard.appendChild(discriptionLabel);
        wizard.appendChild(taskDiscription);
        wizard.appendChild(dateLabel);
        wizard.appendChild(taskDueDate);
        wizard.appendChild(radioContainer);
        wizard.appendChild(hideButton);
        body.appendChild(wizard);
    }
    get hideWizard(){
        const body = document.querySelector("html");
        const wizard = document.querySelectorAll(".wizard");
        wizard.forEach(element => {
            body.removeChild(element);
        });
    }
}