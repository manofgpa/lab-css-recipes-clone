import type { NextPage } from 'next'
import { RecipePage } from '../../components/RecipePage'

const data = [
  {
    name: 'Apple Pie',
    intro: ` This was my grandmother's apple pie recipe. I have never seen another
          one quite like it. It will always be my favorite and has won me
          several first place prizes in local competitions. I hope it becomes
          one of your favorites as well!`,
    image: '/apple-pie/apple-pie.jpg',
    recipe_image: '/apple-pie/recipe-info.png',
    cooking_image: '/apple-pie/cooking-info.png',
    ul: [
      '1 recipe pastry for a 9 inch double crust pie',
      '1/2 cup unsalted butter',
      '3 tablespoons all-purpose flour',
      '3 tablespoons all-purpose flour',
      '1/4 cup water',
      '1/2 cup white sugar',
      '1/2 cup packed brown sugar',
      '8 Granny Smith apples - peeled, cored and sliced',
    ],
    ol: [
      `Preheat oven to 425 degrees F° (220 degrees C°). Melt the butter
      in a saucepan. Stir in flour to form a paste. Add water, white
      sugar and brown sugar, and bring to a boil. Reduce temperature .
      slightly and let simmer.`,
      `Cover with a lattice work crust. Gently pour the sugar
      and butter liquid over the crust. Pour slowly so that it does
      not run off.`,
      `Bake 15 minutes in the preheated oven. Reduce the temperature to
      350 degrees F° (175 degrees C°). Continue baking for 35 to 45
      minutes, until apples are soft.`,
    ],
    next_recipe: '/recipes/french-soup',
  },
]

const ApplePie: NextPage = () => {
  return (
    <>
      <RecipePage data={data} />
    </>
  )
}

export default ApplePie
