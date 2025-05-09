// import './RecipeList.css';

// const RecipeList = ({ recipes }) => {
//   return (
//     <div className='recipe-list'>
//     {recipes.length > 0 ? (
//       recipes.map((recipe, index) => (
//         <div className='recipe-card' key={index}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.ingredients}</p>
//           <p><strong>Instructions:</strong> {recipe.instructions} || 'N/A'</p>
//         </div>
//       ))
//     ) : (
//       <p>No recipes found.</p>
//     )}
//     </div>
//   );
// }
// export default RecipeList;

import './RecipeList.css';
import { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const [showFull, setShowFull] = useState(false);
  const toggleShow = () => setShowFull(!showFull);

  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
  } = recipe;

  return (
    <div className='recipe-card' key={idMeal}>
      <img src={strMealThumb} alt={strMeal} className='recipe-img' />
      <h3>{strMeal}</h3>
      <p><strong>Category:</strong> {strCategory}</p>
      <p><strong>Area:</strong> {strArea}</p>
      <p>
        <strong>Instructions:</strong>{' '}
        {showFull ? strInstructions : `${strInstructions.slice(0, 200)}...`}
        <button className="toggle-btn" onClick={toggleShow}>
          {showFull ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};

const RecipeList = ({ recipes }) => {
  if (recipes === null) return <p>No recipes found.</p>; // when API returns null
  if (recipes.length === 0) return null; // if it doesn't show anything until search is made

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

{/* <div className='recipe-list'>
{recipes.length > 0 ? (
  recipes.map((recipe) => (
    <RecipeCard key={recipe.idMeal} recipe={recipe} />
  ))
) : (
  <p>No recipes found.</p>
)}
</div> */}