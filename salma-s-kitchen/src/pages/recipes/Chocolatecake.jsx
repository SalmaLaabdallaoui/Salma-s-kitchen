
import React from 'react';
import RecipeTemplate from '../../components/RecipeTemplate';

function Chocolatecake() {
  const ingredients = [
    'FOR THE CAKE:',
    '2 cups flour',
    '1/2 cup cocoa powder',
    '1 tbsp baking powder',
    '1/2 salt',
    '1 cup butter',
    '1 1/2 cup sugar',
    '4 large eggs',
    '4 tsp vanilla',
    '1 cup buttermilk',
    '100ml milk',
    'FOR THE CHOCOLATE GANACH:',
    '200g cream',
    '200g 50%+ dark chocolate',
    '2-3 packs of Chocolate chip cookies (optional)',
  ];

  const instructions = [
    'Preheat the oven to 350°F (180°C).',
    'Begin by combining the butter and sugar. Mix until smooth.',
    'Add the eggs one at a time, mixing well after each addition. Then add the vanilla extract.',
    'Combine the flour, cocoa powder, salt, and baking powder in a separate bowl.',
    'Gradually add the flour mixture to the wet ingredients in thirds, alternating with the buttermilk. Mix until you do not see any flour, but do NOT over-mix.',
    'Pour the batter into two separate baking pans and bake for 28-30 minutes in your preheated oven.',
    'While the cakes are baking, heat the cream and add the chocolate. Stir until the chocolate is completely melted and incorporated into the cream.',
    'Allow the ganache mixture to cool in the fridge for 2-3 hours.',
    'Once the cakes are baked, remove them from the oven and let them cool for up to an hour.',
    'After the ganache has chilled, take it out of the fridge and whip it using an electric whisk until light and fluffy.',
    'Trim any domed tops off the cakes to level them. Place the trimmed pieces into a separate bowl.',
    'Smash the cookies into crumbs and chunks, then add them to the bowl with the cake crumbs.',
    'Mix 1-2 tablespoons of the whipped ganache into the cookie crumb mixture and combine thoroughly.',
    'Lightly sprinkle milk over the surface of the cakes to keep them moist. Spread the cookie crumb mixture onto one of the cakes, followed by a layer of whipped ganache. Place the second cake on top.',
    'Ice the entire cake with the whipped ganache and decorate as desired.',
    'Lastly, don’t forget to enjoy!',
  ];


  return (
    <RecipeTemplate
      title="Chocolate Cake"
      description="The absolute best chocolate cake Ever!"
      imagePath="/images/choccake.jpg"
      prepTime="30 minutes"
      cookTime="30 minutes"
      servings="8"
      totalTime="210 minutes"
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}

export default Chocolatecake;
