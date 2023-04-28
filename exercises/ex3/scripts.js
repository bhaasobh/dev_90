

function init()
{
   console.log("'bahaa sobh'");
  
   createdivsGame(7);
   createdivsHeader();
   
}

function createdivsGame( size )
{
    const gameLetters =["A","B","C"]
    const theGamediv = document.getElementById("theGame");
    theGamediv.style.display = "flex";
    theGamediv.style.flexWrap = "wrap";
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

   let width = 80;
   let height =80;
   let margenTop =21;
   let margenLeft = 1336; 
  
    let div=document.createElement("div");
    div.id = "more";
    div.style.width = width + "px";
      div.style.height = height + "px";
     div.style.marginLeft = margenLeft + "px";
      div.style.marginTop = margenTop +"px";
     div.style.backgroundColor = "black";
    header.appendChild(div);

    document.getElementById("more").onclick = function()
{
    console.log("baahaa");
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
    console.log("black section clicked");
    letter.style.color = "white";
    if(firstLetterId == null)
    {
        firstLetterId =   letterID;
        firstDevId = divID;
        console.log("first letter and dev saved");
          return;
    }else
    {
        console.log("first letter is not null = "+document.getElementById(firstLetterId).innerHTML);
        console.log("second letter is = "+letter.innerHTML);
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
            
            console.log("first and second is deffirnts");
            console.log("first letter is = "+document.getElementById(firstLetterId).innerHTML);
            console.log("second letter is = "+letter.innerHTML);
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
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }