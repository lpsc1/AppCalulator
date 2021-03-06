import { ColorModeProviderProps, Text } from "@chakra-ui/react";

interface WindowProps {
    value: string;
    colorMode: string; 
    toggleColorMode: () => void;
}

export function Window({value}: WindowProps) { 

      //const valueLocation = Number(value).toLocaleString('pt-BR')
      
    return (
    

      <Text>{value.length > 14 ? Number(value).toPrecision(4) : value }</Text>
    

      
    );
}