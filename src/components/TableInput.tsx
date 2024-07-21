import { Input, VStack, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function TableInput() {
  const [inputs, setInputs] = useState<string[]>(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  }

  const handleChange = (event, index) => {
    const { value } = event.target;
    const onChangeValue = [...inputs];
    onChangeValue[index] = value;
    setInputs(onChangeValue);
  }

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  }

  return (
    <VStack align={'left'} margin={'20px'} width={700}>
      <Input placeholder="Título"/>
      {inputs.map((input, index) => (
        <Flex key={index} flexDirection={'row'} align={'left'}>
          <Input
            name={`input-${index}`}
            value={input}
            onChange={(e) => handleChange(e, index)}
            marginRight={1}
          />
          <Button onClick={() => handleDeleteInput(index)}>X</Button>
        </Flex>
      ))}
      <Button onClick={handleAddInput}>Adicionar Linha</Button>
    </VStack>
  )
}
