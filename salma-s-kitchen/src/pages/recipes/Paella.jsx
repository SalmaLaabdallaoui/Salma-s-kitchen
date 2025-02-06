import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function Paella() {
  const ingredients = [
    '• 1/4 cup olive Oil',
    '• 1 Onion, diced',
    '• 1 bell pepper, diced (½ red and ½ green)',
    '• 4 cloves Garlic',
    '• 3 tomatoes, very finely diced',
    '• Bay leaf',
    '• 1 teaspoon paprika',
    '• 1 pinch saffron threads',
    '• Salt and pepper to taste',
    '• 150g salmon',
    '• 150g white Fish',
    '• ¼ cup flat leaf Parsley, chopped',
    '• 2 cups Rice (Basmati or Paella Rice works best)',
    '• 5 cups Chicken Broth (or water with chicken bouillon)',
    '• 1/2 cup frozen peas',
    '• 200g Shrimp',
    '• 100g Mussels',
    '• 150g calamari rings',
    '• Lemons, for garnish',
  ];

  const instructions = [
    'Add olive oil to a skillet over medium heat. Add the onion, bell peppers, and garlic and cook until onion is translucent. Add chopped tomato, bay leaf, paprika, saffron, salt, and pepper. Stir and cook for 5 minutes. Add 1/4 cup of water and cook for 10 minutes. Taste and add salt if needed.',
    'Add salmon and white fish pieces, 2 tablespoons chopped parsley, and rice to the pot. Cook for 1 minute.',
    'Pour the broth slowly all around the pan and jiggle the pan to get the rice into an even layer. (Do not stir the mixture going forward!).',
    'Bring mixture to a boil. Reduce heat to medium low. Give the pan a gentle shake back and forth just once or twice during cooking. (We don’t stir the rice to form a crispy crust at the bottom, called a socarrat).',
    'Cook for about 15-18 minutes (uncovered), then nestle the shrimp, mussels, and calamari into the mixture, sprinkle peas on top and continue to cook (without stirring) for about 5 more minutes. Watch for most of the liquid to be absorbed and the rice at the top nearly tender. (If rice is still not cooked, add ¼ cup more water or broth and continue cooking).',
    'Remove pan from heat and cover with a lid or tinfoil.',
    'Garnish with fresh parsley and lemon slices. Serve.',
  ];

  return (
    <RecipeTemplate
      title=" Spanish Paella"
      description="A classic Spanish seafood paella packed with flavorful seafood, rice, and spices. Perfect for a festive gathering or special dinner."
      imagePath="/images/paella.jpg"
      prepTime="30 minutes"
      cookTime="40 minutes"
      servings="6"
      totalTime="1 hour 10 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Paella;
