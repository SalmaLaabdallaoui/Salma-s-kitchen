import React, { useState } from 'react';

function RecipeTemplate({ title, description, imagePath, prepTime, cookTime, servings, totalTime, ingredients, instructions }) {
  const [rating, setRating] = useState(0); // State for star rating

  const handleRating = (star) => {
    setRating(star); // Update rating when a star is clicked
  };

  return (
    <div className="recipe-template">
      {/* Recipe Title */}
      <h1 className="recipe-title">{title}</h1>

      {/* Star Rating */}
      <div className="star-rating">
        <p>Rate this recipe:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? 'filled' : ''}`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Recipe Description */}
      <p className="recipe-description">{description}</p>

      {/* Recipe Image */}
      <div className="recipe-image">
        <img src={imagePath} alt={title} />
      </div>

      {/* Recipe Details (Grid) */}
      <div className="recipe-details">
        <div>🕒 Prep Time: {prepTime}</div>
        <div>🔥 Cook Time: {cookTime}</div>
        <div>🍴 Servings: {servings}</div>
        <div>⏳ Total Time: {totalTime}</div>
      </div>

      {/* Ingredients Section */}
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => {
            const isSectionTitle = ingredient.endsWith(':'); // Detect section titles
            return (
              <li
                key={index}
                className={isSectionTitle ? 'section-title' : ''} // Apply class for section titles
              >
                {ingredient}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeTemplate;
