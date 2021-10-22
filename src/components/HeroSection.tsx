import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface HeroSectionProps {
  name: string
  image: string
}

export const HeroSection = ({ name, image }: HeroSectionProps) => {
  return (
    <Box>
      <Box
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.252),rgba(0, 0, 0, 0.5)),
        url(${image})`}
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPosition='50%'
        align='center'
        lineHeight='30'
        m='0 auto'
        h={800}
        w={1280}>
        <Text
          color='gray.50'
          fontSize='90'
          fontWeight='500'
          display='inline-block'
          lineHeight='normal'>
          {name}
        </Text>
      </Box>
    </Box>
  )
}
