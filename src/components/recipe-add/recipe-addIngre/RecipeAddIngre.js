import React, { useState } from "react";
import "./RecipeAddIngre.scss";

const RecipeAddImg = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const onAdd = () => {
    if (name !== "") {
      setIngredients([...ingredients, { name, add }]);
      setName("");
      setAdd("");
    }
  };

  const onDelete = e => {
    let index = e.target.previousSibling.dataset.key;
    let newIngredients = ingredients.filter(
      ingredient => ingredient !== ingredients[index]
    );
    setIngredients(newIngredients);
  };

  const Ingredient = (name, add, key) => {
    return (
      <li className="recipeAddIngre__item" key={key}>
        <p className="recipeAddIngre__info" data-key={key}>
          {name} {add ? <span>({add})</span> : null}
        </p>
        <span
          className="recipeAddIngre__remove"
          onClick={e => onDelete(e)}
        ></span>
      </li>
    );
  };

  return (
    <React.Fragment>
      <div className="recipeAddIngre__inputgroup">
        <input
          className="recipeAddIngre__input recipeAddIngre__ingredient"
          type="text"
          placeholder="Thêm nguyên liệu..."
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <input
          className="recipeAddIngre__input recipeAddIngre__quantity"
          type="text"
          placeholder="Số lượng"
          value={add}
          onChange={e => setAdd(e.target.value)}
        ></input>
      </div>
      <div>
        <button
          type="button"
          className="recipeAddIngre__btn"
          onClick={() => onAdd()}
        >
          Thêm
        </button>
      </div>
      <ul>
        {ingredients.map((ingredient, index) => {
          return Ingredient(ingredient.name, ingredient.add, index);
        })}
      </ul>
    </React.Fragment>
  );
};

export default RecipeAddImg;
