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
        > 
        <Icon 
        color={colorMode === 'light' ? 'gray.800' : 'gray.200' } 
        fontSize="2.5rem"  
        as={colorMode === 'light' ? RiSunLine : RiMoonLine }/> 

         </ChakraButton>
    )
}