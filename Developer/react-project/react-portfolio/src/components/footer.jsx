import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const footer = () => {
  return (
    <div className="flex justify-center bg-stone-500">
      <div className="my-7 flex flex-row justify-between max-w-md">
        <p className="flex flex-row justify-center items-center mx-5">
          <CopyrightIcon />
          2024 Yuta Asai
        </p>
      </div>
    </div>
  )
}

export default footer