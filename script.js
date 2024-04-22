function displayUkBox() {
    document.getElementById("ukBox").style.display = "block";
}
function hideUkBox() {
    document.getElementById("ukBox").style.display = "none";
}
function displayGermanyBox() {
    document.getElementById("germanyBox").style.display = "block";
}
function hideGermanyBox() {
    document.getElementById("germanyBox").style.display = "none";
}
function displayPolandBox() {
    document.getElementById("polandBox").style.display = "block";
}
function hidePolandBox() {
    document.getElementById("polandBox").style.display = "none";
}
function displayItalyBox() {
    document.getElementById("italyBox").style.display = "block";
}
function hideItalyBox() {
    document.getElementById("italyBox").style.display = "none";
}
function displayDenmarkBox() {
    document.getElementById("denmarkBox").style.display = "block";
}
function hideDenmarkBox() {
    document.getElementById("denmarkBox").style.display = "none";
}


function zoomIn(element){
    element.style.zIndex = '-1';
    element.style.transform = 'scale(1.2)';
}
function zoomOut(element){
    element.style.transform = 'scale(1)';
    element.style.zIndex = 'auto';
}
