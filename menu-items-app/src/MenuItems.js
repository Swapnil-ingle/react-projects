import React from "react";

const MenuItems = ({ activeCategory, menu }) => {
  return (
    <div className="menu-items">
      {menu.map((item) => {
        const { id, title, category, price, img, desc } = item;

        if (activeCategory !== "All" && category !== activeCategory) {
          return "";
        }

        return (
          <article key={id} className="menu-item">
            <section className="menu-item-img">
              <img className="photo" src={img} alt={title} />
            </section>
            <div className="item-info">
              <header>
                <h3>{title}</h3>
                <h4 className="price">${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;
