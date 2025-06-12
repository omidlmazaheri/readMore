
let fullNews = document.querySelector(".full-news");
let readMoreBtn = document.querySelector("#readMoreBtn");
let collapseBtn = document.querySelector("#collapseBtn");
function readmore() {
    fullNews.style.display = "block";
    readMoreBtn.style.display="none";
    collapseBtn.style.display="block";
    setTimeout(() => {
        fullNews.style.opacity = "1";
        fullNews.style.maxHeight = "500px";
    }, 10);
   
}
function collapse() {
   debugger
        fullNews.style.opacity = "0";
        fullNews.style.maxHeight = "0";
        readMoreBtn.style.display="block";
        collapseBtn.style.display="none";
        setTimeout(() => {
            fullNews.style.display = "none";
        }, 500);
    
}

    
    

