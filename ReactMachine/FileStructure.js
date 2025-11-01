import { useState } from 'react';
import FileAndFolder from "./FileAndFolder";
import './styles.css'


import { MdExpandLess, MdExpandMore, MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useState } from 'react';

const FileAndFolder = ({ data , onAdd, onRemove }) => {

  const [showitem, setShowitem] = useState({})

  const handelClick = (id) => {
    setShowitem((pre) => (
      {
        ...pre, 
          [id]: !pre[id]
        }
      ))
  }

  return (
    <div className = "folder"> 

      {
        data.map((item) => (
          <div key={item.id}>
            {
              item.isFolder ? 
                <span onClick={() => handelClick(item.name)}>
                  {showitem?.[item.name] ? <MdExpandLess /> : <MdExpandMore />}
                  {item.name}
                  <FiFolderPlus
                    onClick={() => onAdd(item.id, true)}
               data-testid={`add-folder-${item.id}`}
                  />
                  <AiOutlineFileAdd
                    onClick={() => onAdd(item.id, false)}
                     data-testid={`add-file-${item.id}`}
                  />
                  <MdDeleteOutline onClick = {() => onRemove(item.id)}  data-testid= "delete"/>
                </span> :
            <span>{item.name} <MdDeleteOutline onClick = {() => onRemove(item.id)} /> </span>
          }
            
            {showitem?.[item.name] && item?.children && <FileAndFolder data={item.children} onAdd={onAdd} onRemove={onRemove} />}
          </div>
        ))
    }
    </div>
  );
};


// export default FileAndFolder;


const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 6, name: "style.css", isFolder: true },
      { id: 5, name: "index.js", isFolder: false },
    ], 
  },
  { id: 6, name: "package.json", isFolder: false },
];

export default function FileExplorer() {
  const [data, setData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(7);
  const [showModal, setShowModal] = useState(false)
  const [modalInfo , setModalInfo] = useState({parentID: null , isFolder: false})
  const [input, setInput] = useState('')

  
  const openModal = (parentID, isFolder) => {
    
    setModalInfo({ parentID, isFolder })
    setInput('')
    setShowModal(true)
     
  }
  // console.log(modalInfo) 

  const handelSubmit = () => {
    const { parentID, isFolder } = modalInfo;
    const name = input.trim(); 
    if (!name) return; 

    const newItem = {
      id: idCounter,
      name,
      isFolder,
      ...(isFolder ? { children: [] } : {})
    };

    const updateTree = (node) => 
      node.map((node) => {
        if (node.id === parentID && node.isFolder) {
          return{...node , children: [...(node.children || []), newItem]}
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      } 
      
      )
    

    setData(updateTree(data))
    setIdCounter((pre) => pre + 1);
    setShowModal(false)
  } 


  const handelRemove = (id) => {
    const deletNode = (node) => node.filter((node) => node.id !== id).map((node) => node.children ? { ...node, children: deletNode(node.children) } : node);

    setData(deletNode(data))
  }
  return ( 
    <div>
      <h2>File Explorer</h2>
      <FileAndFolder data={data} onAdd={openModal} onRemove={handelRemove} />


     {showModal && (<div>
        <div className="modal">
          <h3>Enter {modalInfo.isFolder ? "folder" : "file"} name</h3>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
           
          />
          <div>   
            <button onClick={handelSubmit} data-testid ="add">Add</button>
            <button onClick={() => setShowModal(false)} data-testid="cancel">cancel</button>
          </div>
        </div>
      </div>)}
    </div>
  );
}
