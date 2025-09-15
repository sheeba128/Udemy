//variable for input field
const input_box=document.getElementById("input-box");
//variable for list
const list_container=document.getElementById("list");


//adding a task 
function addTask(){
    if(input_box.value ==''){
        alert("You must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value='';
    saveData();
}

// to get the task checked and also to remove it when i click on the cross button
list_container.addEventListener("click",function(e){ //list_container is the parent DOM

    //targets the li tag
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    //targets the sapn variable
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

//to save the data
function saveData(){
    localStorage.setItem("data",list_container.innerHTML);

}

//to show the list when it gets reloaded
function showData(){
    list_container.innerHTML=localStorage.getItem("data");

}
showData();