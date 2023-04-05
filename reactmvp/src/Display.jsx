import React from 'react';


const Display = ({data})=>{

return (
<div>{data.map(p=>(
    <div key={p}>{p}</div>
))}</div>
)
}














export default Display;