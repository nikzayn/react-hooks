import React, { useState } from 'react';
import ResourceList from './ResourceList';
import './App.css';

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <button style={{margin: 5, padding: 10}} onClick={() => setResource('Posts')}>Posts</button>
                <button style={{margin: 5, padding: 10}} onClick={() => setResource('Todos')}>Todos</button>
            </div>
            <div style={{marginTop: 30}}>
               <ResourceList resource={resource} />
            </div>    
        </div>
    );
}

export default App;