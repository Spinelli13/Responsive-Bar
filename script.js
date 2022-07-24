const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    caixaDeProcuraBtn = body.querySelector(".caixaDeProcura"),
    darkMode = body.querySelector(".toggle-troca"),
    textMode = body.querySelector(".modo-texto");


toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});

caixaDeProcuraBtn.addEventListener("click", () =>{
    sidebar.classList.remove("close");
});

darkMode.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        textMode.innerText = "Light Mode"
    }else{
        textMode.innerText = "Dark Mode" 
    }
});
