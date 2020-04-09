// Desc: output Hello World 
function say_hello() 
{
    alert("Hello World")
}

// Desc: Ask for user's name and output it after
function ask_user()
{
    let user = prompt("What's your name: ")
    alert("Hi! " + user + " Welcome to my blog");
}

// Desc: say something
function say_something() 
{
    alert("Hi! you can actually click on it!!!")
}

// Desc: change background color to green
function changeColor() 
{
    document.body.style.backgroundColor = "green"
    document.body.style.fontFamily = "Courier New"
}

// Desc: change background color back into original
function changeBack() 
{
    document.body.style.backgroundColor = ""
    document.body.style.fontFamily = ""
}


// Desc: Change the background color into pink with a single click
let clicked: boolean = false    // initialize variable to detect clicks
function changeColor2() 
{
    if (clicked)
    {
        document.body.style.backgroundColor = "pink"
        document.body.style.fontFamily = "Arial"
    }
    else 
    {
        document.body.style.backgroundColor = ""
        document.body.style.fontFamily = ""
    }
    clicked = !clicked
}

// Desc: Change the background color back into original color
function changeText() 
{
    let sen = document.getElementById("changeMe")

    sen.style.fontStyle = "italic"
    sen.style.fontWeight = "bold"
    sen.style.color = "blue"

    let sen2 = document.getElementById("changeMe2")

    sen2.style.fontStyle = "italic"
    sen2.style.fontWeight = "bold"
    sen2.style.color = "blue"
}

// Desc: change the font & color of the text back
function changeText_Back() 
{
    let sen = document.getElementById("changeMe")

    sen.style.fontStyle = ""
    sen.style.fontWeight = ""
    sen.style.color = ""

    let sen2 = document.getElementById("changeMe2")

    sen2.style.fontStyle = ""
    sen2.style.fontWeight = ""
    sen2.style.color = ""

}

// Desc: change color of the font to purple
let clicked2: boolean = false // initialize variable to detect clicks
function changeText2() 
{
    let sen = document.getElementById("changeMe")
    let sen2 = document.getElementById("changeMe2")

    if (clicked2)
    {
        sen.style.fontStyle = "italic"
        sen.style.fontWeight = "bold"
        sen.style.color = "purple"
    
        sen2.style.fontStyle = "italic"
        sen2.style.fontWeight = "bold"
        sen2.style.color = "purple"
    } 
    else 
    {
        sen.style.fontStyle = ""
        sen.style.fontWeight = ""
        sen.style.color = ""

        sen2.style.fontStyle = ""
        sen2.style.fontWeight = ""
        sen2.style.color = ""
    }
    clicked2 = !clicked2
}


let num: number = 0
function add_1() 
{
  num += 1
  document.getElementById("here").innerHTML = "Value: " + num
}

function reset()
{
  num = 0
  document.getElementById("here").innerHTML = "Value: " + num
}

let clicked3: boolean = false // initialize variable to detect clicks
function changeImg() 
{
    let img = (document.getElementById("myImg") as HTMLImageElement).src
    if (clicked3)
        img = '../images/spinach-leaves.jpg'
    else
        img = "../images/Lettuce.jpg"
    clicked3 = !clicked3
    
}

let up: boolean = true
let value: number = 0
let increment: number = 1
let ceiling: number = 10

function Add_1_til10() 
{
  if (up == true && value <= ceiling) 
  {
    value += increment
    if (value == ceiling)
      up = false
  } 
  else 
  {
      up = false
      value = 0
      if (value == 0)
        up = true
  }
  document.getElementById('metoo').innerHTML = 'Value: ' + value + '<br />'
}


let counter: number = 0
function changeimgs () 
{
  let img2 = (document.getElementById("img2") as HTMLImageElement).src
  if(counter == 0)
  {
    img2 = "images/6-Pack-Chicken-Eggs.jpg"
    counter++
  } 
  else if(counter == 1)
  {
    img2 = "images/Lettuce.jpg"
    counter++
  } 
  else if(counter == 2)
  {
    img2 = "images/Orange-Fruit-Pieces.jpg"
    counter++
  } 
  else if(counter == 3)
  {
    img2 = "images/spinach-leaves.jpg"
    counter = 0
  }
}


function add_stars()
{
  let allElmts = document.getElementsByClassName("classValue")
  let i;
  for (i=0; i < allElmts.length; i++) {  
    allElmts[i].innerHTML += "***";
  }
}


function remove_stars()
{
  let allElmts = document.getElementsByClassName("classValue");
  for (let i = 0; i < allElmts.length; i++) 
  {  
    allElmts[i].innerHTML = ""
  }
}


function add_some_stars() 
{
  let allElmts = document.getElementsByClassName("val2");
  let i;
  for (i=0; i < allElmts.length; i++) {  
    allElmts[i].innerHTML += "***"
  }
}


function RemoveOList1st() 
{
  let list = document.getElementById("myOlist")
  let list_first = (document.getElementById("myOlist").firstChild as HTMLElement).innerHTML
  
  if(list.hasChildNodes()) {
    list.removeChild(list.childNodes[0])
  }

  document.getElementById("here2").innerHTML= list_first

}


function RemoveOListLast() 
{
  let list = document.getElementById("myOlist")
  let list_last = (document.getElementById("myOlist").lastChild as HTMLElement).innerHTML

  let list_items = list.getElementsByTagName("li")
  let last = list_items[list_items.length-1]
  list.removeChild(last)

  document.getElementById("here2").innerHTML = list_last

}


function AddNewList () 
{
  let list = document.getElementById("myOlist")
  let theColor = (document.getElementById("favcolor") as HTMLInputElement).value

  let theText = (document.getElementById("listname") as HTMLInputElement).value

  let entry = document.createElement('li')
  
  entry.appendChild(document.createTextNode(theText))
  let newEntry = list.appendChild(entry)
  newEntry.style.color = theColor
}
