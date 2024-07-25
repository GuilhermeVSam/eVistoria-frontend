import React, { useState } from 'react'
import { VStack, Flex, Input, Text, Select, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper } from "@chakra-ui/react"
import { createPortal } from 'react-dom';
import { complex } from 'framer-motion';

// Define the props type, including the onChange function
type DataInputProps = {
  onChange: (data: any) => void;
};

// Update the function component to accept props
export default function DataInput({ onChange }: DataInputProps) {
  const [formData, setFormData] = useState({
    tipoDeVistoria: '', // Initial state for the select input
    locador: '',
    locadorCpfCnpj: '',
    locatario: '',
    locatarioCpfCnpj: '',
    tipoImovel: '',
    cep: '',
    numero: '',
    endereco: '',
    complemento: '',
    nQuartos: '',
    nBanheiros: '',
    nVagas: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onChange(updatedFormData);
  };

  const handleNumberInputChange = (fieldName, valueString) => {
    const value = parseInt(valueString, 10);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };

  return (
    <VStack margin={10} alignItems={'left'}>
      <VStack align={'left'}>
        <Select name='tipoDeVistoria' placeholder='Tipo de Vistoria' value={formData.tipoDeVistoria} onChange={handleInputChange}>
          <option value='entrada'>Entrada</option>
          <option value='saida'>Saída</option>
          <option value='entrada-saida'>Entrada e Saída</option>
        </Select>
      <Text>Dados</Text>
        <Flex direction={"row"}>
          <Input name='locador' placeholder="Locador" marginRight={1} value={formData.locador} onChange={handleInputChange}/>
          <Input name='locadorCpfCnpj' placeholder="CPF/CNPJ" width={500} value={formData.locadorCpfCnpj} onChange={handleInputChange}/>
        </Flex>
        <Flex direction={"row"}>
          <Input name='locatario' placeholder="Locatário" marginRight={1} value={formData.locatario} onChange={handleInputChange}/>
          <Input name='locatarioCpfCnpj' placeholder="CPF/CNPJ" width={500} value={formData.locatarioCpfCnpj} onChange={handleInputChange}/>
        </Flex>
      </VStack>
      <VStack align={'left'}>
        <Text>Dados do Imóvel</Text>
        <Select name='tipoImovel' placeholder='Tipo de Imóvel' value={formData.tipoImovel} onChange={handleInputChange}>
          <option value='casa'>Casa</option>
          <option value='apartamento'>Apartamento</option>
          <option value='comercial'>Comercial</option>
        </Select>
        <Flex direction={"row"} gap={2}>
          <Input placeholder="CEP" width={200}/>
          <Input placeholder="Número" width={100}/>
        </Flex>
        <Flex direction={"row"}>
          <Input name='endereco' placeholder="Endereço" value={formData.endereco} onChange={handleInputChange}/>
        </Flex>
        <Flex direction={"row"}>
          <Input name='complemento' placeholder="Complemento" value={formData.complemento} onChange={handleInputChange}/>
        </Flex>
        <Flex direction={"row"} alignItems={"center"} margin={5} gap={5}>
          <Text>Quartos</Text>
          <NumberInput name='nQuartos' width={20} value={formData.nQuartos} onChange={(valueString) => handleNumberInputChange('nQuartos', valueString)}
  min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>Banheiros</Text>
          <NumberInput name='nBanheiros' width={20} value={formData.nBanheiros} onChange={(valueString) => handleNumberInputChange('nBanheiros', valueString)}
  min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>Vagas</Text>
          <NumberInput name='nVagas' width={20} value={formData.nVagas} onChange={(valueString) => handleNumberInputChange('nVagas', valueString)}
  min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </VStack>
    </VStack>
  )
}
