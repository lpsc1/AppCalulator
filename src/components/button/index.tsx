import { Button as ChakraButton, ColorModeProviderProps, Flex, Icon} from '@chakra-ui/react'
import { RiDivideLine, RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9, RiSubtractLine } from 'react-icons/ri';


interface ButtonProps {
    value: string;
    setValue: (amount:string) => void;
    math: string;
    setMath: (amount:string) => void;
    simbol: string;
    setSimbol: (amount:string) => void;
    miniWindow: string;
    colorMode: string; 
    toggleColorMode: () => void;
}


export function Button({value, setValue, math, setMath, simbol, setSimbol, miniWindow, colorMode, toggleColorMode}: ButtonProps) {
 function checkValueLength(params:string) {
     
        if(value.length < 15) {
            setValue(value+params);
        }
        return;
 }
 
function simbolMath(typeOfSimbol:string) {
    if(simbol === '+'){
        const result = Number(math) + Number(value);
        setValue(String(result));
        setMath(String(result));
    }
    if(simbol === '-'){
        const result = Number(math) - Number(value);
        setValue(String(result));
        setMath(String(result));
    }
    if(simbol === '/'){
        const result = Number(math) / Number(value);
        setValue(String(result));
        setMath(String(result));
    }
    if(simbol === '*'){
        const result = Number(math) * Number(value);
        setValue(String(result));
        setMath(String(result));
    }

    if(value.length === 0 ){
    setMath('');
    }else{
    setSimbol(typeOfSimbol);
    setValue('');}
    
}


 function stringMath(params?:string) {
   
    if(value.length === 0  ){
    setValue(params+value);
    setSimbol('');
    }
    else {
        setMath(value);
    }
}

function resultMath() {
    if(simbol === '+'){
        const result = Number(math) + Number(value);
         setValue(String(result)), setMath(''), setSimbol('');
         return;
    } 
    if(simbol==='-') {
        const result = Number(math) - Number(value);   
        setValue(String(result)), setMath(''), setSimbol('');
        return;
    } 
    if(simbol==='/'){
        const result = Number(math) / Number(value);   
         setValue(String(result)), setMath(''), setSimbol('');
         return;
    } 
    if(simbol === '*') {
        const result = Number(math) * Number(value);   
         setValue(String(result)), setMath(''), setSimbol('');
         return;
    }
}

 function deleteValue () {
    const deleteLastValue = value.slice(0, -1)
    setValue(deleteLastValue) 
     
 }

 function resetValue () {
    return setValue(''), setMath(''), setSimbol('');
 }
 
 return(
<>
 <Flex gap="1rem"  align="center" justify='center'>

      <ChakraButton  
        w="3.5rem" 
        h="3rem" 
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }
        fontSize="xl" 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.700' : 'cyan.500' }}  
        type='button' 
        onClick={() => checkValueLength('7')}
      >
        <Icon as={RiNumber7}/>
      </ChakraButton>

      <ChakraButton  
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.700' : 'cyan.500' }}    
        onClick={() => checkValueLength('8')}
      >
        <Icon as={RiNumber8}/>
      </ChakraButton>

      <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.700' : 'cyan.500' }}    
        onClick={() => checkValueLength('9')}
        >
        <Icon as={RiNumber9}/>    
      </ChakraButton>

      <ChakraButton  
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }  
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'red.600' : 'red.600' }} 
        onClick={() => deleteValue()}
      >
        DEL
     </ChakraButton>

    </Flex>

        <Flex gap="1rem"  align="center" justify='center'>

        <ChakraButton 
         w="3.5rem" 
         h="3rem" 
         fontSize="xl"
         bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
         color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
         _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.700' : 'cyan.500' }}    
         onClick={() => checkValueLength('4')}
         >
            <Icon as={RiNumber4}/>
        </ChakraButton>

        <ChakraButton  
        w="3.5rem" 
        h="3rem"
        fontSize="xl" 
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }  
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.700' : 'cyan.500' }}    
        onClick={() => checkValueLength('5')}
        >
            <Icon as={RiNumber5}/>
        </ChakraButton>

        <ChakraButton  
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }}    
        onClick={() => checkValueLength('6')}
        >
            <Icon as={RiNumber6}/>
        </ChakraButton>

        <ChakraButton  
        w="3.5rem" 
        h="3rem"
        fontSize="2xl" 
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        p="1.30rem" 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'pink.500' : 'pink.500' }}    
        onClick={() =>{ stringMath('+'); simbolMath('+') }}
        >
            +
        </ChakraButton>

     </Flex>

        <Flex gap="1rem"  align="center" justify='center'>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }}  
        onClick={() => checkValueLength('1')}
        >
            <Icon as={RiNumber1}/>
        </ChakraButton>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }  
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }}  
        onClick={() => checkValueLength('2')}
        >
            <Icon as={RiNumber2}/>
        </ChakraButton>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }  
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }}
        onClick={() => checkValueLength('3')}
        >
            <Icon as={RiNumber3}/>
         </ChakraButton>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }  
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'pink.500' : 'pink.500' }}  
        onClick={() =>{ stringMath('-'); simbolMath('-')}}
        >
            <Icon as={RiSubtractLine}/>
        </ChakraButton>

    </Flex>

        <Flex gap="1rem"  align="center" justify='center'>

        <ChakraButton 
        w="3.5rem"
         h="3rem" 
         fontSize="xl"
         bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
         color={colorMode === 'light' ? 'gray.800' : 'gray.50' } 
         _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }}
         onClick={() => checkValueLength('.')}
         >
            .
        </ChakraButton>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }  
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' } 
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'cyan.400' : 'cyan.500' }} 
        onClick={() => checkValueLength('0')}
        >
            <Icon as={RiNumber0}/>
        </ChakraButton>

        <ChakraButton
        w="3.5rem" 
        h="3rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'pink.500' : 'pink.500' }} 
        onClick={() =>{ stringMath('/'); simbolMath('/')}}
        >
            <Icon as={RiDivideLine}/>
        </ChakraButton>

        <ChakraButton 
        w="3.5rem" 
        h="3rem" 
        p="1.25rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' } 
        _hover={{bg:colorMode === 'light' ? 'gray.300' : 'gray.900', color: colorMode === 'light' ? 'pink.500' : 'pink.500' }}
        onClick={() =>{ stringMath('*'); simbolMath('*')}}
        >
            X
        </ChakraButton>

    </Flex>

        <Flex gap="1rem" align="center" justify='center'>

        <ChakraButton 
        w="7rem" 
        fontSize="xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' } 
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }  
        _hover={{bg:colorMode === 'light' ? 'gray.200' : 'gray.800', color: colorMode === 'light' ? 'red.600' : 'red.600' }} 
        onClick={()=> resetValue()}
        >
            CLEAR
            </ChakraButton>

        <ChakraButton
        w="7rem" 
        fontSize="2xl"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.900' }
        color={colorMode === 'light' ? 'gray.800' : 'gray.50' }   
        _hover={{bg:'red.600', color:colorMode === 'light' ? 'gray.200' : 'gray.100'}} 
        onClick={()=> resultMath() }
        >
            =
            </ChakraButton>


            </Flex>   
            </>
    );
}