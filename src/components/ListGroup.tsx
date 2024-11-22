import React, { useState } from "react";


function ListGroup() {
    let items = ["NY", "SF", "Tokyo", "Taipei", "London", "Paris"];
    let selectedIndex = 0;
    //Hook
    const [arr] = useState(-1);
    arr[0] //var selectedIndex
    arr[1] //updater func
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? 'list-group-item active' : 'list-group-item'}
          key={item}
          onClick={() => {selectedIndex :index;}}
          >
            {item}
            </li>
        ))}
      </ul>
    </>
  );
}


export default ListGroup;