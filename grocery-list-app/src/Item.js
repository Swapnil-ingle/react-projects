import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Item = ({ item, removeItem, editItem }) => {
  const { id, title } = item;
  return (
    <div className="item">
      <small>{title}</small>
      <section className="item-ud">
        <button className="edit-btn" onClick={() => editItem(id)}>
          <MdEdit />
        </button>
        <button className="delete-btn" onClick={() => removeItem(id)}>
          <MdDelete />
        </button>
      </section>
    </div>
  );
};

export default Item;
