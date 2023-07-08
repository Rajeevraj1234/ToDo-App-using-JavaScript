var display = document.querySelector("#input-wala");
var displayButton = document.querySelector("#input-button");
var content = document.querySelector(".item-list");


displayButton.addEventListener("click",function(){

    var li = document.createElement("LI");
    var txtValue = display.value;
    var txt = document.createTextNode(txtValue);
    li.appendChild(txt);
    if(txtValue === ""){
        alert("kuch likh tho bhadwe ..!!");
    }else{
        content.appendChild(li);
    }

    var span = document.createElement("SPAN");
    var spanValue= document.createTextNode("");
    span.appendChild(spanValue);
    span.className = "spanClosed";
    li.appendChild(span);


    // var span = document.createElement("SPAN");
    // var spanValue= document.createTextNode("");
    // span.appendChild(spanValue);
    // span.className = "spanTick";
    // li.appendChild(span);
    

    display.value="";
    storeData();
})

content.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
}, false)


const storeData  = () =>{
    localStorage.setItem("data",content.innerHTML); 
}

const showData = () =>{
    content.innerHTML = localStorage.getItem("data");
}

showData();





