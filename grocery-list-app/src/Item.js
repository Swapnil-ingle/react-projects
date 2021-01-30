import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Item = () => {
  return (
    <>
      <div className="item">
        <small>Item#1</small>
        <section className="item-ud">
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button className="delete-btn">
            <MdDelete />
          </button>
        </section>
      </div>
      <div className="item">
        <small>Item#2</small>
        <section className="item-ud">
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button className="delete-btn">
            <MdDelete />
          </button>
        </section>
      </div>
    </>
  );
};

export default Item;
