import React from 'react';

const Course = (props) => {
    const {course,name,price,institute}=props.students
   const enrollButton=props.enrollButton
   const courseStyle={
       border:'1px solid red',
       textAlign:'center',
        marginLeft:'20px',
        marginBottom:'20px',
        padding:'15px',
        width:'350px',
        height:'250px',
        float:'left',
        backgroundColor:'lightgray',
        boxshadow:'10px 10px lightyellow'

   }
  
    return (
        <div className="container course" style={courseStyle}>
            <h4>Course Name:{course}</h4>
            <h5>price:{price}</h5>
            <p>Course Teacher:{name}</p>
            <p>Institute Name:{institute}</p>
            <button onClick={()=>enrollButton(props.students)} className="btn btn-primary m-top:20">Enroll Now</button>
        </div>
    );
};

export default Course;