function doalert() {
    alert("Hello, world!");
  }
  
//var textarea=document.getElementById("textarea");

function goBig(){
    document.getElementById("textarea").style.fontSize = "24pt";
    document.getElementById("textarea").style.backgroundColor = "yellow";
}

function changeText(src){
    var textarea=document.getElementById("textarea");

    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline"
}

function reText(src){
    var textarea=document.getElementById("textarea");

    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none"
}

function makeMoo(){
    var textarea = document.getElementById("textarea");
    textarea.style.textTransform = "uppercase"

    let a = textarea.value.split(".").join("-Moo");
    textarea.value = a; 
}