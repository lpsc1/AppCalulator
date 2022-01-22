import { Button as ChakraButton, color, ColorModeProviderProps, Icon, useColorMode } from "@chakra-ui/react";
import { RiCalculatorLine, RiMoonLine, RiSunLine } from "react-icons/ri";

interface ButtonThemeProps {
    colorMode: string; 
    toggleColorMode: () => void;
}

export function ButtonTheme({colorMode, toggleColorMode}: ButtonThemeProps) {
    
    return(
        <ChakraButton 
        onClick={toggleColorMode}
        variant='ghost'
        _hover={{bg:colorMode === 'light' ? 'white' : 'gray.800'}}
        > 
        <Icon 
        color={colorMode === 'light' ? 'gray.800' : 'gray.200' } 
        fontSize="2.5rem"  
        _hover={{bg:colorMode === 'light' ? 'white' : 'gray.800', color:colorMode === 'light' ? 'cyan.300' : 'gray.400'}}
        as={colorMode === 'light' ? RiSunLine : RiMoonLine }/> 

         </ChakraButton>
    )
}