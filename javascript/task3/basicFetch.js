async function createList() {
  const list = await basicFetch();
  const printedElem = list.slice(0, 5);

  printedElem.map((elem) => {
    let li = document.createElement('li');
    
    if (elem.completed === true) {
      li.setAttribute('class', 'item completed')
    }
    else {
      li.setAttribute('class','item');
    }
    li.innerText = elem.title;
    
    document.getElementById('list').appendChild(li);
  })
}

async function basicFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return (data);
}

createList();

