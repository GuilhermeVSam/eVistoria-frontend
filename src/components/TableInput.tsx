import React, { useState, useEffect } from 'react';
import { VStack, Input, Flex, Button } from '@chakra-ui/react';
import '../css/tableInput.css'

interface InputField {
  id: number;
  value: string;
}

// Adjusting the Table structure to include a title
interface Table {
  title: string;
  fields: InputField[];
}

interface DynamicInputFormProps {
  onValuesChange: (values: { title: string; fields: string[] }[]) => void;
}

const DynamicInputForm: React.FC<DynamicInputFormProps> = ({ onValuesChange }) => {
  const [tables, setTables] = useState<Table[]>([]);

  const addTable = () => {
    // Include an initial title value for new tables
    const newTable: Table = { title: '', fields: [{ id: Date.now(), value: '' }] };
    setTables([...tables, newTable]);
  };

  const removeTable = (tableIndex: number) => {
    const updatedTables = tables.filter((_, index) => index !== tableIndex);
    setTables(updatedTables);
  };

  const addInputField = (tableIndex: number) => {
    const newInputField: InputField = { id: Date.now(), value: '' };
    const updatedTables = tables.map((table, index) => {
      if (index === tableIndex) {
        return { ...table, fields: [...table.fields, newInputField] };
      }
      return table;
    });
    setTables(updatedTables);
  };

  const handleInputChange = (tableIndex: number, fieldId: number, value: string) => {
    const updatedTables = tables.map((table, index) => {
      if (index === tableIndex) {
        return {
          ...table,
          fields: table.fields.map(field => {
            if (field.id === fieldId) {
              return { ...field, value };
            }
            return field;
          }),
        };
      }
      return table;
    });
    setTables(updatedTables);
  };

  const handleTitleChange = (tableIndex: number, value: string) => {
    const updatedTables = tables.map((table, index) => {
      if (index === tableIndex) {
        return { ...table, title: value };
      }
      return table;
    });
    setTables(updatedTables);
  };

  useEffect(() => {
    const fetchData = async () =>{
      const values = tables.map(table => ({
        title: table.title,
        fields: table.fields.map(field => field.value),
      }));
      onValuesChange(values);
    }

    fetchData();
  }, [tables, onValuesChange]);

  return (
    <div className='container'>
      <form>
        {tables.map((table, tableIndex) => (
          <div className='tables' key={tableIndex} align={'left'} display={'flex'}>
            <input className='titleInput'
              placeholder='Título'
              value={table.title}
              onChange={(e) => handleTitleChange(tableIndex, e.target.value)}
            />
            <div className='inputTable'>
              {table.fields.map((field) => (
                <input className='inputs'
                  key={field.id}
                  type="text"
                  value={field.value}
                  onChange={(e) => handleInputChange(tableIndex, field.id, e.target.value)}
                />
              ))}
              <div className='buttons'>
                <button onClick={() => addInputField(tableIndex)}>Add Input</button>
                <button onClick={() => removeTable(tableIndex)} color='ff0000'>Remove Table</button>
              </div>
            </div>
          </div>
        ))}
        <Button onClick={addTable}>Add Table</Button>
      </form>
    </div>
  );
};

export default DynamicInputForm;