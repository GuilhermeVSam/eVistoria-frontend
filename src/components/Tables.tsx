import { useState } from 'react'; // Import useState
import { VStack, Button } from "@chakra-ui/react";
import TableInput from "./TableInput";

export default function Tables() {
  // Initialize state with an array containing a single identifier
  const [tableInputs, setTableInputs] = useState([1]); // Use numbers as identifiers for simplicity

  // Function to add a new TableInput identifier to the state
  const addTableInput = () => {
    setTableInputs([...tableInputs, tableInputs.length + 1]); // Add a new identifier
  };

  return (
    <div style={{maxHeight: '700px', overflowY: 'auto', alignItems: 'center'}}>
      <VStack>
        {tableInputs.map((id) => (
          <TableInput key={id} /> // Render a TableInput for each identifier
        ))}
      </VStack>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button onClick={addTableInput}>Nova Tabela</Button>
    </div>
    </div>
  );
}
