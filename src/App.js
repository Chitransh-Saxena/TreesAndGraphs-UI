import React, { useState } from 'react';
import BinaryTree from './BinaryTree';
import axios from "axios";

function App() {
  const [root, setRoot] = useState(null);

  const fetchTree = async () => {

    let input = [1,2,3,4,5,6,7,8];

    axios.get('http://localhost:8080/trees/buildTree', {
      params: {
        numbers: input.join(','),
      },
    })
    .then(response => {
      const data = response.data;
      setRoot(data)

    })
    .catch(error => {
      console.log(error)
    });

  };

  return (
    <div>
      <h1>Binary Tree Viewer</h1>
      <button onClick={fetchTree}>Fetch Tree</button>
      {root && <BinaryTree root={root} />}
    </div>
  );
}

export default App;
