import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>  
        </header>           
    )
}

const headerStyle = {
    padding: '5px',
    background: 'black',
    color: 'white',
    textAlign: 'center'
}

export default Header;