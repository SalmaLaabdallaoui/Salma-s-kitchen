import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function Pancake() {
  const ingredients = [
    '• 1 banana',
    '• 30g protein powder',
    '• 1 egg',
    '• 68g spelt flour/oat flour',
    '• 4g coconut oil for frying',
    '• 25g raspberries',
    '• 50g blueberries',
    '• 7g honey',
  ];

  const instructions = [
    'Mix the spelt flour, banana, protein powder, and egg together until smooth.',
    'Heat your pan, then add the coconut oil to it. Cook the pancakes on each side for 2-3 minutes.',
    'Top your pancakes with honey, raspberries, and blueberries.',
    'And there you have it! Super simple yet highly nutritious breakfast 🥞',
  ];

  return (
    <RecipeTemplate
      title="Protein Pancakes"
      description="Quick, easy, and nutritious protein pancakes made with spelt or oat flour, protein powder, and topped with fresh berries and honey. A perfect start to your day!"
      imagePath="/images/pancake.jpg"
      prepTime="5 minutes"
      cookTime="10 minutes"
      servings="1"
      totalTime="15 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Pancake;
