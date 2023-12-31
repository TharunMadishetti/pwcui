import React, { useState } from 'react'
function App() {
 const handleSubmit = (event) => {
    event.preventDefault();
 }
 const [ file, setFile ] = useState(null);
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center' onSubmit={handleSubmit}>
    <div className='bg-white flex flex-col p-5 justify-center items-center'>
    <form className='flex flex-col space-y-3 px-5 py-2 w-96'>
        <p className='p-2 font-semibold text-center' >Drag and Drop your file here </p>
        <br/>
        
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        <input id="dropzone-file" type="file" class="hidden" onChange={(e)=>{setFile(e.target.files[0].name)}}/>
        {file && <p className='font-bold text-white'>{file}</p>}
        
        </div>
    </label>
</div> 

    </form>
    <br/>
    <button className='bg-blue-500  rounded-md p-2 font-semibold hover:bg-red-500'>Submit</button>
    </div>
    
</div>
  )
}

export default App
