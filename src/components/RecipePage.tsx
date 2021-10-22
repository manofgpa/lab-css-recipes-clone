import type { NextPage } from 'next'
import { HeroSection } from './HeroSection'

import {
  Text,
  Box,
  Image,
  Divider,
  ListItem,
  OrderedList,
  UnorderedList,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

type Recipe = {
  name: string
  intro: string
  image: string
  recipe_image: string
  cooking_image: string
  ul: string[]
  ol: string[]
  next_recipe: string
}

interface RecipePageProps {
  data: Recipe[]
}

export const RecipePage: NextPage = ({ data }: RecipePageProps) => {
  return (
    <>
      {data.map(recipe => (
        <Box mb='24' key={recipe.name}>
          <HeroSection image={recipe.image} name={recipe.name} />
          <Box maxWidth={900} m='0 auto' mt='12' align='center'>
            <Text>{recipe.intro}</Text>
            <Image
              alt='Introduction'
              src={recipe.recipe_image}
              h='20'
              mt='10'
            />
            <Divider m='8' borderWidth='1px' borderColor='#111' />
            <Box align='left'>
              <Text my='4' fontSize='30' mx='8'>
                Ingredients
              </Text>
              <UnorderedList fontWeight='300' ml='24'>
                {recipe.ul.map(item => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </UnorderedList>
              <Box align='center'>
                <Image
                  alt='Cooking Info'
                  src={recipe.cooking_image}
                  h='20'
                  mt='10'
                />
              </Box>
              <Divider m='8' borderWidth='1px' borderColor='#111' />
              <Box align='left'>
                <Text my='4' fontSize='30' ml='8'>
                  Directions
                </Text>
                <OrderedList fontWeight='300' ml='24'>
                  {recipe.ol.map(item => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </OrderedList>
              </Box>
            </Box>
            <Link href={recipe.next_recipe} passHref>
              <Button m='12' p='8' w='50%' colorScheme='green'>
                Next Recipe
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </>
  )
}
