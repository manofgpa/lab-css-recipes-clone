import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export const HeroSection = () => {
  return (
    <Box>
      <Box
        bgImage="linear-gradient(rgba(0, 0, 0, 0.252),rgba(0, 0, 0, 0.5)),
        url('/apple-pie/apple-pie.jpg')"
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPosition='50%'
        align='center'
        lineHeight='50'
        m='0 auto'
        h={800}
        w={1280}>
        <Text
          color='gray.50'
          fontSize='80'
          fontWeight='500'
          display='inline-block'
          lineHeight='normal'>
          Apple pie
        </Text>
      </Box>
    </Box>
  )
}
