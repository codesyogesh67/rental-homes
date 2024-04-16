'use client';

import Select from 'react-select'

// import useCountries from '@/hooks/useCountries'

// export type CountrySelectValue = {
//   flag: string;
//   label: string;
//   latlng: number[],
//   region: string;
//   value: string
// }

interface InputSelectProps {
  value?: string,
    onChange: (value: string) => void,
    placeholder: string,
    options: []
}

const InputSelect:React.FC<InputSelectProps> = ({
  value,
    onChange,
  placeholder,options
}) => {


  return ( 
    <div>
      <Select
        placeholder={placeholder}
        isClearable
        options={options}
        value={value}
        onChange={(value:string) => onChange(value as string)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
              classNames={
              {
          control: () => '!border-none !focus:outline-0',
          input: () => 'text-lg !border-none !focus:outline-0',
                      option: () => 'text-lg',
          indicatorSeparator: () => '!w-0'
                  }
              }
            
        theme={(theme) => ({
          ...theme,
            // borderRadius: 10,
          borderWidth: 0,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}
 
export default InputSelect;