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
        case "threth-tab":
            closeAll();
            document.getElementById("threth-tab-content").style.display = "flex";
            break;
        case "forth-tab":
            closeAll();
            document.getElementById("forth-tab-content").style.display = "flex";
            break;
        case "fith-tab":
            closeAll();
            document.getElementById("fith-tab-content").style.display = "flex";
            break;
        case "sixt-tab":
            closeAll();
            document.getElementById("sixt-tab-content").style.display = "flex";
            break;
    }
}