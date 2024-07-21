import { ChakraProvider, Flex } from '@chakra-ui/react'
import Tables from './components/Tables'
import DataInput from './components/DataInput'

function App() {
  return (
    <>
      <ChakraProvider>
        <Flex direction={'row'} align={'center'} justify={'center'} gap={70} marginTop={25}>
          <Tables/>
          <DataInput/>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default App
