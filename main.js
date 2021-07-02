let small = document.getElementById("small");
    let midd  = document.getElementById("midd");
    let large = document.getElementById("large");
    let cont = document.getElementById("container")
    midd.addEventListener("click",function(){
            cont.style.fontSize = 1.3 + "rem";
            cont.style.transition = 1 + "s";
        })
    large.addEventListener("click", function () {
            cont.style.fontSize = 1.6 + "rem";
            cont.style.transition = 1 + "s";
        })
    small.addEventListener("click", function () {
            cont.style.fontSize = 1 + "rem";
            cont.style.transition = 1 + "s";
        })