// This comoponent represents a single node in the binary tree


import React from 'react';
import styled from 'styled-components';


/*
    Using styled-components to style the application. Using this, I can define CSS properties as react components.
*/
const NodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
`;

const TreeNode = ({ value }) => {
  return (
    <NodeContainer>
      {value}
    </NodeContainer>
  );
};

export default TreeNode;
