import { NextPage } from 'next'
import React from 'react'
import { RecipePage } from '../../components/RecipePage'

const data = [
  {
    name: 'French Onion Soup',
    intro: `We have been trying French onion soup in restaurants for
    years and my family and friends agree none can compare to my recipe for
    taste and simplicity of preparation.`,
    image: '/french-soup/soup.jpg',
    recipe_image: '/french-soup/recipe-info.png',
    cooking_image: '/french-soup/cooking-info.png',
    ul: [
      '1 / 2 cup unsalted butter',
      '2 tablespoons olive oil ',
      '4 cups sliced onions ',
      '4(10.5 ounce) cans beef broth ',
      '2 tablespoons dry sherry(optional) ',
      '1 teaspoon dried thyme salt and pepper to taste',
      '4 slices French bread 4 slices provolone cheese ',
      '2 slices Swiss cheese, diced',
      '1 / 4 cup grated Parmesan cheese',
    ],
    ol: [
      `Melt butter with olive oil in an 8 quart stock pot on medium heat. 
      Add onions and continually stir until tender and translucent.
       Do not brown the onions.`,
      `Add beef broth, sherry and thyme. Season with salt and pepper, and simmer for 30 minutes.`,
      `Heat the oven broiler.`,
      `Ladle soup into oven safe serving bowls and place one slice of bread 
      on top of each (bread may be broken into pieces if you prefer). Layer each slice of
      provolone, 1/2 slice diced Swiss and 1 tablespoon Parmesan cheese. Place bowls
      on cookie sheet and broil in the preheated oven until cheese bubble and
      browns slightly.`,
    ],
    next_recipe: '/recipes/apple-pie',
  },
]

const FrenchSoup: NextPage = () => {
  return (
    <>
      <RecipePage data={data} />
    </>
  )
}

export default FrenchSoup
