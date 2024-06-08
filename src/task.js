
class Task {
    constructor(name,discription,dueDate,priority){
        this.name = name;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    get getInfo(){
        return [this.name,this.discription,this.dueDate,this.priority];
    }
    get formatedTask(){
        const formated = document.createElement("div");
        formated.classList.add("task");
        const header = document.createElement("div") 
        header.classList.add("taskheader");

        const name = Object.assign(document.createElement("h2"),{innerText: this.name});
        const discription = Object.assign(document.createElement("p"),{innerText: this.discription});
        discription.classList.add("taskDiscription");
        const dueDate = Object.assign(document.createElement("h5"),{innerText: this.dueDate})
        if (this.priority == "urgent"){
            formated.classList.add("urgent");
        }
        else if (this.priority == "not urgent"){
            formated.classList.add("notUrgent");
        }
        header.append(dueDate);
        formated.append(name,header,discription);
        return formated;
    }
}
export default function createTask(name,discription,dueDate,priority){
    const task = new Task(name,discription,dueDate,priority);
    return task;
}