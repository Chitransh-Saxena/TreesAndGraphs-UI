// This component will denote the entire Binary Tree

import React from 'react';
import styled from 'styled-components';
import TreeNode from './TreeNode';

// Children will be centered horizontally using justify-content: center
const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BinaryTree = ({ root }) => {
  const renderTree = (node) => {
    if (!node) {
      return null;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TreeNode value={node.value} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80px' }}>
          {renderTree(node.left)}
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <TreeContainer>
      {renderTree(root)}
    </TreeContainer>
  );
};

export default BinaryTree;
