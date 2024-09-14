"use client";

import React, { useEffect, useState } from 'react'
import filterdata from '@/fakers/filterdata.json'
import { FilterArrowDownIcon, FilterArrowUpIcon, FilterCheckBoxIcon } from '@/icons';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}
interface Props {
  filters: string[];
  onChange: (newFilters: string[]) => void;
}

const FilterBar = ({ filters, onChange }: Props) => {

  const [index, setIndex] = useState<number | null>(null);
  const [selectedSubOptions, setSelectedSupOptions] = useState<string[]>(filters);

  useEffect(() => {
    setSelectedSupOptions(filters);
  }, [filters])

  const handleIndex = (filterIndex: number) => {
    setIndex(filterIndex === index ? null : filterIndex);
  };

  const handleSubOptions = (subOption: string) => {
    let subOptions = [...selectedSubOptions];

    subOptions.includes(subOption)
      ? subOptions = subOptions.filter(item => item !== subOption)
      : subOptions.push(subOption);

    setSelectedSupOptions(subOptions);
    onChange(subOptions);
  };


  const [value, setValue] = React.useState<number[]>([20, 60]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const marks = [
    { value: 0, label: '0' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 150, label: '150' },
    { value: 200, label: '200' }
  ];

  return (
    <div className='mt-[55px] w-full max-w-[204px] hidden lg:block'>
      {filterdata.map((filter, filterIndex) =>
        <div key={filter.option} className='mb-[35px]'>

          <div
            className='flex gap-2 cursor-pointer'
            onClick={() => handleIndex(filterIndex)}
          >
            <h1 className='font-Gotham capitalize leading-5 text-2xl'>{filter.option}</h1>
            {filterIndex === index ? <FilterArrowDownIcon /> : <FilterArrowUpIcon />}
          </div>

          {filterIndex === index && (filter.option === "Price"
            ?
            <Box sx={{ width: 200, marginTop: 4 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={200}
                marks={marks}
                sx={{
                  color: '#F174A7',
                  '& .MuiSlider-thumb': {
                    color: '#FFFFFF',
                  },
                  '& .MuiSlider-valueLabel': {
                    backgroundColor: '#F174A7',
                    width:"35px",
                    height:"23.593px",
                    color: 'white',
                    fontWeight:"bold",
                    borderRadius: '8px',
                    '& *': {
                      borderRadius: 'inherit',
                    },
                  },
                  '& .MuiSlider-markLabel': {
                    fontSize: '12px',
                    color: 'black',
                    opacity: 0.2,
                  },
                }}
              />
            </Box>  
            :
            <div className='flex flex-col gap-[31px] my-[31px]'>

              {filter.subOptions.map(subOption =>

                <div
                  key={subOption}
                  className='flex items-center gap-[15px] cursor-pointer'
                  onClick={() => handleSubOptions(subOption)}
                >

                  {selectedSubOptions.includes(subOption) ? <FilterCheckBoxIcon />
                    : <p className='w-[37px] h-[37px] bg-[#FFD89F]'></p>
                  }
                  <h1 className='capitalize text-xl leading-5'>{subOption}</h1>

                </div>

              )}

            </div>)
          }

        </div>
      )}
    </div>
  )
}

export default FilterBar