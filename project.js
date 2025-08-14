document.addEventListener("DOMContentLoaded", function(){
closeAll();
document.getElementById("first-tab-content").style.display = "flex";
})

function closeAll(){
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.style.display = "none";
})
}

function onClick(id){
    switch(id){
        case "first-tab":
            closeAll();
            document.getElementById("first-tab-content").style.display = "flex";
            break;
        case "second-tab":
            closeAll();
            document.getElementById("second-tab-content").style.display = "flex";
            break;
    }
}