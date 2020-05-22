import React from "react";
import style from "./recipe.module.css";
export default function Recipe({ title, calories, image, ingredients, link }) {
  let i = 0;
  let cal = Math.round(calories);
  let calElm = cal > 2500 ? { color: "red" } : { color: "green" };
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol className={style.text}>
        {ingredients.map((element) => {
          i++;
          return <li key={i}>{element.text}</li>;
        })}
      </ol>
      {}
      <p style={calElm}>{cal} cal</p>
      <a className={style.container} href={link}>
        <img className={style.image} src={image} alt={image}></img>
        <div className={style.middle}>
          <div className={style.linktext}>Link to the recipe</div>
        </div>
      </a>
      {/* </div> */}
    </div>
  );
}
