document.addEventListener('DOMContentLoaded', function () {
    var paint = function(event){
        if(event.target.classList.contains("square")){
            event.target.style.backgroundColor="green"
        }
    }
    window.addEventListener("click",paint);
})