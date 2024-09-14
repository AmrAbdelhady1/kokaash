import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PagePagination = () => {
  return (
    <div className='w-full flex justify-center mt-[70px] mb-5'>
      <Stack spacing={2}>
        <Pagination 
          hidePrevButton
          count={3}
          sx={{
            '& .MuiPaginationItem-icon': {
              backgroundColor: '#F174A7',
              color: 'white',
              width: 37,
              height: 37,
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            '& .MuiPaginationItem-root': {
              fontSize: 16,
              '&.Mui-selected': {
                backgroundColor: 'transparent',
                color: 'black',
                fontSize: 16,
                opacity:0.5,
              },
            },
          }}
        />
      </Stack>
    </div>
  )
}

export default PagePagination