
import React from 'react'; 
import RecipeTemplate from '../../components/RecipeTemplate'; // Import the RecipeTemplate component

function Yoghurtbowl() { // Create the Yoghurtbowl component
  const ingredients = [ // Create the ingredients array
    '• 160g unsweetened protein yoghurt',
    '• 135g low fat yoghurt (I used 0.3%)',
    '• 1 scoop protein powder (27g)',
    '• 55g muesli',
    '• 23g date (3 dates)',
    '• 35g blueberries',
    '• 27g raspberries',
  ];

  const instructions = [ // Create the instructions array
    'Whip your protein yoghurt with the low fat yoghurt and protein powder together.',
    'Once done, top it with muesli, dates, blueberries, and raspberries.',
    'And there you have it! Simple as that.',
  ];

  return (
    <RecipeTemplate // Return the RecipeTemplate component
      title="Yoghurt Bowl"
      description="A delicious and nutritious protein-packed yoghurt bowl topped with muesli, dates, and berries. Perfect for a quick breakfast or snack!"
      imagePath="/images/yoghurtbowl.jpg"
      prepTime="5 minutes"
      cookTime="0 minutes"
      servings="1"
      totalTime="5 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Yoghurtbowl;

