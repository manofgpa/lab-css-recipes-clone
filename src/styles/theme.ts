import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Nunito',
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: 'gray.900',
        fontSize: '25',
      },
    },
  },
})
