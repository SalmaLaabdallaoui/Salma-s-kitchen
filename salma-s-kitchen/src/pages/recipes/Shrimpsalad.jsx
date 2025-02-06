import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function ShrimpSalad() {
  const ingredients = [
    '• 1 avocado',
    '• a handful of lettuce (optional)',
    '• 150 g shrimp',
    '• 2 tbsp olive oil',
    '• 1/2 pck knorr salad spice (würzige gartenkraüter)',
    '• 1/2 tbsp paprika powder',
    '• 1 tbsp garlic powder',
    '• 1 tsp pepper',
    '• 1/2 tsp salt',
  ];

  const instructions = [
    'Begin by slicing your avocados and lettuce (if you desire to use it) thinly, then mix them with 1/4 the knorr package and 1 tbsp olive oil.',
    'Grill your shrimp on medium high heat with the remaining 1 tbsp of olive oil, 1/4 package of knorr, paprika powder, garlic powder, salt and pepper.',
    'Grill the shrimp until it has absorbed all its liquid.',
    'Once done, take a smaller round shaped bowl, place your spiced shrimp in first, then the avocado mix on top. Give it a press with a spoon so that it holds tightly together. Then flip your bowl on a desired plate.',
    'Serve with a lemon slice.',
    'And there you have it, a simple yet delicious recipe. A must try!',
  ];

  return (
    <RecipeTemplate
      title="Shrimp Salad"
      description="A simple and healthy shrimp salad recipe with spiced shrimp, creamy avocado, and a hint of salad spice. Perfect as a starter or light meal."
      imagePath="/images/shrimpsalad.jpg"
      prepTime="10 minutes"
      cookTime="15 minutes"
      servings="2"
      totalTime="25 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default ShrimpSalad;
