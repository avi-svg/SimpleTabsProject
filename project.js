document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("main-tabs-content").style.visibility = "visible";
})

function onClick(id){
    switch(id){
        case "first-tab":
            document.getElementById(id).style.visibility = "visible";
    }
}