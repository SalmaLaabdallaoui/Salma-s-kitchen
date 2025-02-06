import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function Parfait() {
  const ingredients = [
    '• 200g protein yoghurt (I used Magerquark)',
    '• 30g protein powder (I used strawberry and cream protein powder)',
    '• 80g frozen raspberries',
    '• 80ml low-fat milk',
    '• 50g muesli (I used Dinkel muesli)',
  ];

  const instructions = [
    'In a blender, blend your yoghurt, along with your protein powder, and 40g of frozen raspberries.',
    'Blend until smooth, then top your yoghurt with the muesli and the rest of your frozen raspberries (40g).',
    'It does not get any simpler than that. Yet it is such a flavorful and healthy breakfast! Hope you enjoy 😉',
  ];

  return (
    <RecipeTemplate
      title="Raspberry Parfait"
      description="A simple, healthy, and flavorful protein-packed breakfast. Made with yogurt, protein powder, raspberries, and muesli, it’s perfect for a quick and nutritious start to your day."
      imagePath="/images/parfait.jpg"
      prepTime="5 minutes"
      cookTime="0 minutes"
      servings="1"
      totalTime="5 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Parfait;