function init()
{
   createdivsGame(7);
   createdivsHeader();   
}
function createdivsGame( size )
{
    const gameLetters =["A","B","C"]
    const theGamediv = document.getElementById("theGame");
    theGamediv.style.display = "flex";
    theGamediv.style.flexWrap = "wrap";
    theGamediv.style.justifyContent = "self-start";
    theGamediv.style.alignContent = "self-start";
    theGamediv.style.alignItems = "self-start";
   let width = 80;
   let height =80;
   let margenTop =123;
   let margenLeft = 64; 
    let div=document.createElement("div");
    div.id = "firstDiv";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.marginLeft = margenLeft + "px";
    div.style.marginTop = margenTop +"px";
    div.style.backgroundColor = "black";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    let letter=document.createElement("a");
    var randomNumber = Math.floor(Math.random()*gameLetters.length);
    letter.innerHTML = gameLetters[randomNumber];
    letter.id = "firstLetter";
    letter.style.fontSize = 50+"px";
    letter.style.fontFamily ="Amiko";
    letter.style.fontStyle ="normal";
    letter.style.color = "black";
    letter.style.alignItems = "center";
    div.appendChild(letter);
    div.onclick =function()
    {
         remember(letter.id,div.id);
    }
    theGamediv.appendChild(div);
   for(i=1;i<size;i++)
   {
    let div=document.createElement("div");
    div.id = "div_"+i;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.width = width+20*i + "px";
    div.style.height = height+20*i + "px";
    if(i==4)
    {
        div.style.marginLeft = margenLeft + "px";  
    }else{
        div.style.marginLeft = margenLeft+68 + "px";  
    }
    div.style.marginTop = margenTop +"px";
    div.style.backgroundColor = "black";
    let letter=document.createElement("a");
    var randomNumber = Math.floor(Math.random()*gameLetters.length);
    letter.innerHTML = gameLetters[randomNumber];
    letter.id = "letter_"+i;
    letter.style.fontSize = 50+"px";
    letter.style.fontFamily ="Amiko";
    letter.style.fontStyle ="normal";
    letter.style.color = "black";
    letter.style.alignItems = "center";
    div.appendChild(letter);
    div.onclick =function()
    {
         remember(letter.id,div.id);
    }
    theGamediv.appendChild(div);

   }
}
function createdivsHeader()
{
    const header = document.getElementById("header_layout3");
    header.style.display = "flex";
    header.style.justifyContent = "flex-end";
   let width = 80;
   let height =80;
   let margenTop =21;
   let margenRight = 21; 
    let div=document.createElement("div");
    div.id = "more";
    div.style.width = width + "px";
      div.style.height = height + "px";
     div.style.marginRight = margenRight + "px";
      div.style.marginTop = margenTop +"px";
     div.style.backgroundColor = "black";
    header.appendChild(div);
    document.getElementById("more").onclick = function()
{
    createdivsGame(3);
}
}
var firstLetterId = null;
var firstDevId = null;
var clear = false;
var secLetterId=null;
function remember(letterID,divID)
{
if(clear)
{
secLetterId.style.color = "black";
}
let div =document.getElementById(divID);
let letter = document.getElementById(letterID);
if(div.style.backgroundColor == "black")
{
   
    letter.style.color = "white";
    if(firstLetterId == null)
    {
        firstLetterId =   letterID;
        firstDevId = divID;
        console.log("first letter and dev saved");
          return;
    }else
    {
      
        if(letter.innerHTML==document.getElementById(firstLetterId).innerHTML)
        {
            div.style.backgroundColor = "red";
            let secdiv = document.getElementById(firstDevId);
            secdiv.style.background = "red";
            clear = false;
            firstLetterId = null;
            firstDevId = null;
            return;
        }
        else{
            letter.style.color = "white";
           secLetterId = letter;
            document.getElementById(firstLetterId).style.color = "black";
           clear = true;
            firstLetterId = null;
            firstDevId = null;
            return;
        }
    }
}
}
