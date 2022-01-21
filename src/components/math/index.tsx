import { ColorModeProviderProps, Text } from "@chakra-ui/react";


interface MathProps {
    miniWindow: string;
    colorMode: string; 
    toggleColorMode: () => void;
    
}

export function Math({miniWindow, colorMode, toggleColorMode}: MathProps) {

    return(
        <Text fontSize="sm" justify="flex-end" align="center"
        color={colorMode === 'light' ? 'gray.800' : 'gray.200' } 
        >{ miniWindow }</Text>
    );
}