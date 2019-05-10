document.addEventListener('DOMContentLoaded', function () {
    var brushColor="pink"
    var paint = function(event){
        if(event.target.classList.contains("square")){
            event.target.style.backgroundColor=brushColor;
        }
    }
    window.addEventListener("click",paint);

    var switchBrush = function(event){
        if(event.target.classList.contains("circle")){
            brushColor=event.target.style.backgroundColor
        }
    }
    window.addEventListener("click",switchBrush);
})