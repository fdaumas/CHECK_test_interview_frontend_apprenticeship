function changeText() {
  const elem = document.getElementById("interaction-text");
  
  if (elem.textContent == "myText")
    elem.innerText = "Hello, Check!";
  else 
    console.log("you already check this button");
}
