import React, {useState} from 'react'
import { ChakraProvider, Flex, Button } from '@chakra-ui/react'
import DataInput from './components/DataInput'
import TableInput from './components/TableInput';
import Header from './components/Header';
import './css/App.css'
import { ClassNames } from '@emotion/react';

function App() {
  const [tablesData, setTablesData] = useState({});
  const [dataInput, setDataInput] = useState({});

  const handleDataInput = (data: any) => {
    setDataInput(data);
  }

  const handleTablesData = (data: any) => {
    setTablesData(data);
  }

  const sendDataToBackend = async () => {
    const combinedData = {
      tablesData,
      dataInput
    };

    try {
      const response = await fetch('http://localhost:8080/logJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      console.log(combinedData);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Data successfully sent to the backend:', responseData);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  
  return (
    <div className="mainpage">
          <div className="forms">
            <TableInput onValuesChange={handleTablesData}/>
            <DataInput onChange={handleDataInput}/>
          </div>
          <div className="buttons">
            <Button bgColor={'red'} color={'white'} onClick={sendDataToBackend}>Gerar PDF</Button>
            <Button bgColor={'blue'} color={'white'}>Gerar DOCX</Button>
          </div>
    </div>
  )
}

export default App
