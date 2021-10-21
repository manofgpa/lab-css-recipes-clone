import type { NextPage } from 'next'
import { HeroSection } from '../../components/HeroSection'

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

const ApplePie: NextPage = () => {
  return (
    <Box mb='24'>
      <HeroSection />
      <Box maxWidth={900} m='0 auto' mt='12' align='center'>
        <Text>
          This was my grandmother's apple pie recipe. I have never seen another
          one quite like it. It will always be my favorite and has won me
          several first place prizes in local competitions. I hope it becomes
          one of your favorites as well!
        </Text>
        <Image
          alt='Apple Pie'
          src='/apple-pie/recipe-info.png'
          h='20'
          mt='10'
        />
        <Divider m='8' borderWidth='1px' borderColor='#111' />

        <Box align='left'>
          <Text my='4' fontSize='30' mx='8'>
            Ingredients
          </Text>
          <UnorderedList fontWeight='300' ml='24'>
            <ListItem>1 recipe pastry for a 9 inch double crust pie</ListItem>
            <ListItem>1/2 cup unsalted butter</ListItem>
            <ListItem>3 tablespoons all-purpose flour</ListItem>
            <ListItem>3 tablespoons all-purpose flour</ListItem>
            <ListItem>1/4 cup water</ListItem>
            <ListItem>1/2 cup white sugar</ListItem>
            <ListItem>1/2 cup packed brown sugar</ListItem>
            <ListItem>
              8 Granny Smith apples - peeled, cored and sliced
            </ListItem>
          </UnorderedList>
          <Box align='center'>
            <Image
              alt='Cooking Info'
              src='/apple-pie/cooking-info.png'
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
              <ListItem>
                Preheat oven to 425 degrees F° (220 degrees C°). Melt the butter
                in a saucepan. Stir in flour to form a paste. Add water, white
                sugar and brown sugar, and bring to a boil. Reduce temperature
                and let simmer.
              </ListItem>
              <ListItem>
                Place the bottom crust in your pan. Fill with apples, mounded
                slightly. Cover with a lattice work crust. Gently pour the sugar
                and butter liquid over the crust. Pour slowly so that it does
                not run off.
              </ListItem>
              <ListItem>
                Bake 15 minutes in the preheated oven. Reduce the temperature to
                350 degrees F° (175 degrees C°). Continue baking for 35 to 45
                minutes, until apples are soft.
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
        <Link href='/recipes/french-soup' passHref>
          <Button m='12' p='8' w='50%' colorScheme='green'>
            Next Recipe
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default ApplePie
