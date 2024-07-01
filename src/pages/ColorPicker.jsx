import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const Change = (args) =>  (
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
)

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker" />
      
      <div className='text-center'>
        <div id="preview">
        </div>
        <div className='flex justify-center items-center gap-20 flex-wrap flex-row'>
          <div className='flex flex-wrap items-center flex-col'>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
              <ColorPickerComponent
                id="inline-pallete"
                mode="Palette"
                modeSwitcher={false}
                inline={true}
                showButtons={false}
                change={Change}
              />
            
          </div>
          <div className='flex flex-wrap justify-center items-center flex-col'> 
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
              <ColorPickerComponent
                id="inline-pallete"
                mode="Picker"
                modeSwitcher={false}
                inline={true}
                showButtons={false}
                change={Change}
              />
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ColorPicker