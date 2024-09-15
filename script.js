var clickBar = false;

function showBar() {
    if(clickBar == false){
        bar = document.getElementById("barmenu");
        bar.style.display = "block";
        clickBar = true;
        exitbt = document.getElementById("CloseOpcID");
        exitbt.style.display = "block";
    }else{
        bar = document.getElementById("barmenu");
        bar.style.display = "none";
        clickBar = false;
    }
}
function ExitButton(){
    exitbt = document.getElementById("CloseOpcID");
    exitbt.style.display = "none";
    bar = document.getElementById("barmenu");
    bar.style.display = "none";
    clickBar = false;
}