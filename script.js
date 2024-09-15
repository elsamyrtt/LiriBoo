var clickBar = false;

function showBar() {
    if(clickBar == false){
        bar = document.getElementById("barmenu");
        bar.style.display = "block";
        clickBar = true;
    }else{
        bar = document.getElementById("barmenu");
        bar.style.display = "none";
        clickBar = false;
    }
}