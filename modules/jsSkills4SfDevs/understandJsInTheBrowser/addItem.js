// reach into DOM and get the button, 
// input, and button
let button = document.getElementById("submit");
let newItem = document.getElementById("iteminput");
let theList = document.getElementById("thelist");

//Modify DOM by adding click to the button
button.addEventListener("click", function(event){
  
    // turn text input value into HTML text node
    let textNode = document.createTextNode(newItem.value);
  
 
    //create an li DOM node to insert into the list
    let newListItem = document.createElement("li");
  
    //insert text node into new li node
    newListItem.appendChild(textNode);
  
    //insert li into the ul list
    theList.appendChild(newListItem);
  
});
