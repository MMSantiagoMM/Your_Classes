let memory = JSON.parse(sessionStorage.getItem("dates"));
let Container = document.getElementById("contenedor");


memory.forEach(item => {
    let row = document.createElement("section")
    row.classList.add("row")
    row.classList.add("col-md-6")
    row.classList.add("col-sm-12")
    row.classList.add("longitud")
    let colOne = document.createElement("section")
    colOne.classList.add("col-4")
    let colTwo = document.createElement("section")
    colTwo.classList.add("col-8")
    let boton = document.createElement("button")
    boton.classList.add("btn")
    boton.classList.add("btn-danger")
    boton.classList.add("botoncito")
    boton.textContent = "Quitar"
    boton.addEventListener("click", ()=>{
        memory.splice(item,1)
        sessionStorage.setItem("dates", JSON.stringify(memory))
        setTimeout(()=>{
            location.reload();
        },1000)
        
    })
    let edit = document.createElement("button");
    edit.classList.add("btn")
    edit.classList.add("btn-success")
    edit.classList.add("editar")
    edit.textContent = "Editar"
    let title = document.createElement("h1")
    title.textContent = "Su clase"
    let name = document.createElement("p")
    name.textContent = "Nombre: "+ item.Name
    let docu = document.createElement("p")
    docu.textContent = "Documento: " + item.Docu
    let phone = document.createElement("p")
    phone.textContent = "Teléfono: " + item.Phone
    let email = document.createElement("p")
    email.textContent = "Email: " + item.Email
    let date = document.createElement("p")
    date.textContent = "Fecha de agendamiento: " + item.Date
    let hour = document.createElement("p")
    hour.textContent = "Hora de su clase" + item.Hour
    let matter = document.createElement("p")
    matter.textContent = "Usted agendó una clase de: " + item.Matter
    if(item.Matter == "Historia"){
        row.classList.add("history")
    } else if(item.Matter == "Matematicas"){
        row.classList.add("math")
    } else if (item.Matter == "Filosofía"){
        row.classList.add("philosophy")
    }
    edit.addEventListener("click", ()=>{
        
    } )
    Container.appendChild(row)
    row.appendChild(colOne)
    row.appendChild(colTwo)
    colOne.appendChild(title)
    colTwo.appendChild(name)
    colTwo.appendChild(docu)
    colTwo.appendChild(phone)
    colTwo.appendChild(email)
    colTwo.appendChild(date)
    colTwo.appendChild(hour)
    colTwo.appendChild(matter)
    colOne.appendChild(boton)
    colOne.appendChild(edit)
    
});

