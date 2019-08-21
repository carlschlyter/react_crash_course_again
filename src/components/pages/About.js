import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div style={aboutStyle}>
                <h1 >About</h1>
                <p>This is my TodoList App v1.0.0, part of a React crash course.</p>            
            </div>
        </React.Fragment>
    )
}

const aboutStyle = {
    padding: '10px'
}

export default About;