import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function CinnamonRolls() {
  const ingredients = [
    'FOR THE DOUGH:',
    '• 2/3 cup heavy cream',
    '• 1 cup milk',
    '• 1 large egg',
    '• 1/3 cup sugar',
    '• 4 cups flour',
    '• 1 tablespoon yeast',
    '• 1 1/2 teaspoons salt',
    '',
    'FOR THE FILLING:',
    '• 2/3 cup dark brown sugar',
    '• 1 1/2 tablespoons ground cinnamon',
    '• 1/2 cup unsalted butter (softened at room temperature)',
    '• 1/8 teaspoon salt',
    '',
    'FOR THE ICING:',
    '• 80 grams cream cheese',
    '• 3 tablespoons salted butter (at room temperature)',
    '• 2 teaspoons vanilla extract',
    '• 2/3 cup powdered sugar',
    '• 3 1/2 tablespoons milk',
  ];

  const instructions = [
    'In the bowl kneed room temperature heavy cream, milk, and egg, sugar, flour, bread flour, yeast, and salt together.',
    'Kneed until dough is fluffy.',
    'Cover the bowl with a damp towel and place in a warm spot for 1-2 hours, or until it has doubled in size.',
    'In the meantime, grease your desired baking pan with some butter.',
    'Next, mix the cinnamon sugar filling. In a medium bowl, combine the brown sugar, cinnamon, butter, and salt until it’s a brown paste. If you need to, microwave the butter for 15-20 seconds to make it easier to stir.',
    'After the dough has doubled in size, put it back in the mixer, and stir for another 5 minutes to get rid of any air bubbles.',
    'Roll the dough out into a rectangle. Using a butter knife, spread the brown sugar filling evenly over the dough leaving about a ½-inch of border on the sides. Roll it tightly into a big cigar, and cut it into equal pieces.',
    'Arrange the buns in the buttered baking pan with about ¾-inch between each bun. Let rest for another 15-20 minutes.',
    'Arrange a rack in the middle of the oven, and preheat to 175°C. After the buns have rested, bake for 25-30 minutes.',
    'While the buns are baking, make the cream cheese icing. Whip the cream cheese and butter until fluffy and pale yellow. Add the vanilla extract and powdered sugar.',
    'When the buns are done baking, remove from the oven. Drizzle icing evenly over the buns as desired. Serve warm!',
  ];

  return (
    <RecipeTemplate
      title="Cinnamon Rolls"
      description="Fluffy, gooey cinnamon rolls topped with creamy cream cheese icing. Perfect for breakfast or dessert!"
      imagePath="/images/cinnamonrolls.jpg"
      prepTime="20 minutes"
      cookTime="30 minutes"
      servings="8"
      totalTime="50 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default CinnamonRolls;
