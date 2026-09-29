import React from 'react';import ChildComponent from './ChildComponent'; function 
ParentComponent() { 
const name = "Afifa Shaik"; 
 
 
return ( 
<div style={{ textAlign: 'center', marginTop: '50px' }}> 
<h2>Parent Component</h2> 
<p>Passing name to child component using props...</p> 
 
 
{/* Passing props to child */} 
<ChildComponent userName={name} /> 
</div> 
); 
} 
export default ParentComponent; 