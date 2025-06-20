import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
// import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  
`;

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <List >
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
