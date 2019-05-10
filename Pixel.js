document.addEventListener('DOMContentLoaded', function () {
    var brushColor="pink"
    var paintZone = document.querySelector("#pixelPainter")
    var paintSize = 40
    for(let i=0;i<paintSize;i++){
        var newRow=document.createElement("div");
        newRow.style.height="14px";
        paintZone.appendChild(newRow);
        for(let j=0;j<paintSize;j++){
            var newCell=document.createElement("div");
            newCell.classList.add("square");
            newRow.appendChild(newCell);
        }
    }
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