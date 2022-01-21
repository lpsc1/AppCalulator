import { Flex, Icon, Button as ChakraButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Button } from '../components/button'
import { ButtonTheme } from '../components/buttonTheme';
import { Math } from '../components/math';
import { Window } from '../components/window'


export default function Home() {
  const [value, setValue] = useState('');
  const [math, setMath] = useState('');
  const [simbol, setSimbol] = useState('');
  const { colorMode, toggleColorMode} = useColorMode()

  const miniWindow = math + ' ' + simbol;


  function checkValueLength() {
    
  }
  function simbolMath(){

  }

  useEffect(()=>{
    simbolMath
  },[simbol]);
  useEffect(()=>{
    checkValueLength()
  },[value]);

  return (
      <Flex w="100%" h="95vh" align="center" justify="center" flexDirection="column">
        <Flex  >
        <ButtonTheme  colorMode={colorMode} toggleColorMode={toggleColorMode} />
        </Flex>

        <Flex 
        borderRadius="xl" 
        w="20rem" h="5rem" 
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        justify="flex-end" 
        align="flex-end" 
        fontSize="3xl"
        p="0.5rem"
        mt="1rem"
        overflow="hidden"
        flexDirection="column"
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' } 

        >
           <Math miniWindow={miniWindow} colorMode={colorMode} toggleColorMode={toggleColorMode} />
           <Window value={value} colorMode={colorMode} toggleColorMode={toggleColorMode} /> 
        
        </Flex>

        <Flex
          borderRadius="xl" 
          w="20rem" 
          h="18rem" 
          bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
          mt="1rem"
          p="1rem"
          gap="0.5rem"
          direction="column"
          align="center" 
          justify='center'
          color={colorMode === 'light' ? 'gray.800' : 'gray.200' } 

          >
            <Button colorMode={colorMode} toggleColorMode={toggleColorMode} value={value} setValue={setValue} math={math} setMath={setMath} simbol={simbol} setSimbol={setSimbol} miniWindow={miniWindow} />
        
          </Flex>
          
        </Flex>
    )
    
}
