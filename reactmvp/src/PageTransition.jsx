import React from 'react';


const PageTransition = ({GotoNextPage, GotoPreviousPage})=> {
//if Goto's are true then render buttons/if there is no more pokemon to display then don't render button
    return (
<div>
    {GotoPreviousPage && <button onClick={GotoPreviousPage}>Previous</button>}
    {GotoNextPage && <button onClick={GotoNextPage}>Next</button>}
</div>
    )
}


export default PageTransition;