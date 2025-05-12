import { useState } from 'react';
import './styles.css'

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked, rootData }) => { 

  const handeChange = (isCheck, node) => { 
    
    setChecked((pre) => {
      const newCheck = { ...pre, [node.id]: isCheck };
      // return newCheck; 

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newCheck[child.id] = isCheck
          child.children && updateChildren(child)
        })
      }
      updateChildren(node)   

      const verifyCheck = (node) => {
        if (!node.children) return newCheck[node.id] || false; 
        const allChildrenCheckde = node.children.every((child) => verifyCheck(child))
        newCheck[node.id] = allChildrenCheckde;
        return allChildrenCheckde
      }
      rootData.forEach((node) => { verifyCheck(node) });
      
      return newCheck;   
  }) 
  }
  return (
    <div > 
      {
        data.map((node) => (
          <div key = {node.id} className = "parent">
            <input type="checkbox"
            checked={checked[node.id] || false}
onChange = {(e)=> handeChange(e.target.checked , node)}
            /> 
            <span>{node.label}</span>
            {node.children && <Checkboxes data={node.children} checked={checked} setChecked={setChecked} rootData={rootData} />}
        </div>
      ))
    }
    </div>
  );
};

export default function NestedCheckbox() { 

  const [checked , setChecked] = useState({})

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData} checked = {checked} setChecked = {setChecked} rootData = {CheckboxesData}
      />
    </div>
  );
}
