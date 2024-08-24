function ListName({listName}) {
  return (
    <ul className="list-name">
      {
        listName.map((item, index) => {
          return <li key={index} className="list-name-item">{item}</li>
        })
      }
    </ul>
  );
}

export default ListName;
