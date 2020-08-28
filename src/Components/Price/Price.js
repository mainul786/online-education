import React from 'react';

const Price = (props) => {
    const items=props.items
    let totalCoursefee=0;
    for (let i = 0; i < items.length; i++) {
        const students = items[i];
        totalCoursefee=totalCoursefee + students.price;
    }
   
    return (
        <div className="container">
            <h3>total course Running:{items.length}</h3>
         <h5>total course fees:{totalCoursefee}</h5>
        </div>
    );
};

export default Price;