import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({ config })
    /*colors: {
        gray: {
          "900": "#171923",
          "800": "#1A202C",
          "700": "#2D3748",
          "600": "#4A5568",
          "500": "#718096",
          "400": "#A0AEC0",
          "300": "#CBD5E0",
          "200": "#E2E8F0",
          "100": "#EDF2F7",
          "50": "#F7FAFC",
        }
      },
      fonts: {
        heading: 'Roboto',
        body: 'Roboto',
      },

    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.200'
            }
        }
    }
})*/
export default theme