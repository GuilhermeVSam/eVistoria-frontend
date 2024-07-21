import { VStack, Flex, Input, Text, Button, Select, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper } from "@chakra-ui/react"

export default function DataInput(){
  return (
    <VStack margin={10} alignItems={'left'}>
      <VStack align={'left'}>
        <Select placeholder='Tipo de Vistoria'>
          <option value='entrada'>Entrada</option>
          <option value='saida'>Saída</option>
          <option value='entrada-saida'>Entrada e Saída</option>
        </Select>
      <Text>Dados</Text>
        <Flex direction={"row"}>
          <Input placeholder="Locador" marginRight={1}/>
          <Input placeholder="CPF/CNPJ" width={500}/>
        </Flex>
        <Flex direction={"row"}>
          <Input placeholder="Locatário" marginRight={1}/>
          <Input placeholder="CPF/CNPJ" width={500}/>
        </Flex>
      </VStack>
      <VStack align={'left'}>
        <Text>Dados do Imóvel</Text>
        <Select placeholder='Tipo de Imóvel'>
          <option value='casa'>Casa</option>
          <option value='apartamento'>Apartamento</option>
          <option value='comercial'>Comercial</option>
        </Select>
        <Flex direction={"row"} gap={2}>
          <Input placeholder="CEP" width={200}/>
          <Input placeholder="Número" width={100}/>
        </Flex>
        <Flex direction={"row"}>
          <Input placeholder="Endereço" />
        </Flex>
        <Flex direction={"row"}>
          <Input placeholder="Complemento" />
        </Flex>
        <Flex direction={"row"} alignItems={"center"} margin={5} gap={5}>
          <Text>Quartos</Text>
          <NumberInput width={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>Banheiros</Text>
          <NumberInput width={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>Vagas</Text>
          <NumberInput width={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </VStack>
      <Flex direction={'column'} marginTop={163}>
        <Button marginBottom={2}>Gerar PDF</Button>
        <Button>Gerar DOCX</Button>
      </Flex>
    </VStack>
  )
}
