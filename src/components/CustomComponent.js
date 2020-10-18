import React, { useState } from 'react';
import axios from 'axios';

const CustomComponent = () => {
  
  const [file, setFile] = useState(null);

  const submitFile = async () => {
    try {
      if (!file) {
        alert("no se ha agregado ningun archivo !!");
      }
      const formData = new FormData();
      formData.append('file', file[0]);
      await axios.post(`http://127.0.0.1:3001/post`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <form onSubmit={submitFile}>
      <div>
        <label>Upload file</label>
      </div>
      <div>
        <input type="file" onChange={event => setFile(event.target.files)} />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
      
    </form>
  );
};

export default CustomComponent;
