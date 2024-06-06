export class Wizard{
    get displayWizard(){
        const body = document.querySelector("html");
        const wizard = document.createElement("div");
        wizard.classList.add("wizard");
        const hideButton = document.createElement("button");
        hideButton.innerText = "hide";
        hideButton.addEventListener("click",()=>{
            this.hideWizard;
        })
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