import React from 'react'

const WithoutJSX = () => {
    // React.createElement(tag name, object of key value pairs that will applied to the element, content)
    // React.createElement(
    //     'div',
    //     {id: 'hello'},  // create ID attribute with a value of hello
    //     'Hello Without JSX')
    const h1 = React.createElement('h1', null, 'Hello Without JSX');
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        h1
    );
}

export default WithoutJSX