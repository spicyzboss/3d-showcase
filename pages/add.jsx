import { useState } from 'react'
import listModel from '../data/listModel.json';

export default function Add() {
  const [file, setFile] = useState(null);

  const AddToList = () => {
  }

  return (
    <>
      <p>not implemented yet</p>
      {/* <p>{file?.name}</p>
      <input type="file" accept=".glb" onChange={e => setFile(e.target.files[0])} />
      <button type="button" onClick={AddToList}>Haha</button> */}
    </>
  )
}
