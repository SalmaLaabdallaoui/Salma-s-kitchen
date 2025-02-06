import React, { useState, useEffect } from "react";

function RecipeTemplate({ title, description, imagePath, prepTime, cookTime, servings, totalTime, ingredients, instructions }) {
  const [rating, setRating] = useState(0); // User's selected rating
  const [averageRating, setAverageRating] = useState(0); // Average rating from backend
  const [totalReviews, setTotalReviews] = useState(0); // Total number of reviews

  // Generate a unique recipeId based on the title
  const recipeId = title.toLowerCase().replace(/\s+/g, "_");

  useEffect(() => {
    // Check if a userId exists in local storage, if not, generate one
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = `user_${Math.random().toString(36).substr(2, 9)}`; // Generate a random userId
      localStorage.setItem("userId", userId);
    }

    // Fetch average rating and total reviews from the backend
    fetch(`http://127.0.0.1:8090/api/collections/recipe_reviews/records?filter=recipeId="${recipeId}"`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          const totalRatings = data.items.reduce((sum, review) => sum + review.rating, 0); // Calculate total ratings
          const average = totalRatings / data.items.length || 0; // Calculate average rating
          setAverageRating(average); // Set average rating
          setTotalReviews(data.items.length); // Set total reviews
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error)); // Log any errors
  }, [recipeId]); 

  const handleRating = (star) => {
    setRating(star);

    // Get userId from local storage
    const userId = localStorage.getItem("userId");

    // Send the star rating to the backend
    fetch(`http://127.0.0.1:8090/api/collections/recipe_reviews/records`, { // Send a POST request to the backend
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId, rating: star, userId }),
    })
      .then((res) => res.json()) // Parse the JSON response
      .then(() => {
        // Re-fetch updated average rating and total reviews
        fetch(`http://127.0.0.1:8090/api/collections/recipe_reviews/records?filter=recipeId="${recipeId}"`)
          .then((res) => res.json()) 
          .then((data) => { 
            if (data && data.items) {
              const totalRatings = data.items.reduce((sum, review) => sum + review.rating, 0);
              const average = totalRatings / data.items.length || 0;
              setAverageRating(average);
              setTotalReviews(data.items.length);
            }
          });
      })
      .catch((error) => console.error("Error submitting review:", error)); // Log any errors
  };

  return (
    <div className="recipe-template"> 
      <h1 className="recipe-title">{title}</h1> 

      {/* Star Rating Input */}
      <div className="star-rating"> 
        <p>Rate this recipe:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? "filled" : ""}`}
            onClick={() => handleRating(star)}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
          >
            ★
          </span>
        ))}
      </div>
      {/* Display Average Rating */}
      <div className="average-rating">
        <p>Average Rating: {averageRating.toFixed(1)} / 5 ({totalReviews} reviews)</p>
      </div>

      <p className="recipe-description">{description}</p>
      <div className="recipe-image">
        <img src={imagePath} alt={title} />
      </div> 
      <div className="recipe-details"> 
        <div>🕒 Prep Time: {prepTime}</div> 
        <div>🔥 Cook Time: {cookTime}</div> 
        <div>🍴 Servings: {servings}</div> 
        <div>⏳ Total Time: {totalTime}</div> 
      </div>
      <div className="ingredients"> 
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => ( // Add the ingredients
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          {instructions.map((instruction, index) => ( // Add the instructions
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeTemplate;
