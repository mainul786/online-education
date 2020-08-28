import React from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/student';
import { useState } from 'react';
import Course from './Components/Course/Course';
import Price from './Components/Price/Price';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  const firts15=fakeData.slice(0,15);
  const [students,setStudents]=useState(firts15);

  const [items,setItems]=useState([])

  const enrollButton=(students)=>{
    const newItems=[...items,students]
    setItems(newItems)
  //  console.log('couses added',students);
  }

  return(
    <div className="container" style={{textAlign:'center'}}>
    <h2>Total course diplay:{students.length}</h2>
    {/* <h3>cart:{items.length}</h3> */}
    <Price items={items}></Price>
 
      {
      students.map((students)=><Course students={students} key={students.id} enrollButton={enrollButton}></Course>)
    }
       </div>
    
  );
 };
export default App;
