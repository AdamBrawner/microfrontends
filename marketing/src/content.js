import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//console.log("Hiyo from marketing");
export function mountMarketing(el) {
    ReactDOM.render(
        <App />,
        el
    );
}

// in dev, mount now
// otherwise just export
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot) mountMarketing(devRoot);
}
