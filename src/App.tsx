import React, { useState, useEffect } from 'react';
import TableInput from './components/TableInput';
import DataInput from './components/DataInput';

const App = () => {
  const [tablesData, setTablesData] = useState<any>(null);
  const [dataInput, setDataInput] = useState<any>(null);

  const handleTablesData = (data: any) => {
    setTablesData(data);
  };

  const handleDataInput = (data: any) => {
    setDataInput(data);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSomeData();
      handleTablesData(data);
    };

    fetchData();
  }, []); // Ensure this useEffect has an empty dependency array or proper dependencies

  return (
    <div className="mainpage">
      <div className="forms" style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
        <TableInput onValuesChange={handleTablesData} />
        <DataInput onChange={handleDataInput} />
      </div>
      <div className="buttons">
        <button onClick={sendDataToBackend}>Gerar PDF</button>
        <button>Gerar DOCX</button>
      </div>
    </div>
  );
};

export default App;