const img = document.createElement("img");
const windowWidth = window.innerWidth;
img.src = 'https://picsum.photos/'+windowWidth+'/350';
img.alt = "Imagen Principal"
document.getElementById("imageM").appendChild(img);

function showBar() {
        bar = document.getElementById("barmenu");
        bar.style.display = "block";
        exitbt = document.getElementById("CloseOpcID");
        exitbt.style.display = "block";
        navbar = document.getElementById("navbarID");
        navbar.style.opacity = "50%";    
}
function ExitButtonBar(){
    exitbt = document.getElementById("CloseOpcID");
    exitbt.style.display = "none";
    bar = document.getElementById("barmenu");
    bar.style.display = "none";
    navbar.style.opacity = "100%";
}