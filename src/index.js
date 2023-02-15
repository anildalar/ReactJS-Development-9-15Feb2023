import React from 'react';
import ReactDOM from 'react-dom/client';

//1. import { someNamedImport } from somelocation/somelibrary

//2. import someDefaultImport from somelocation/somelibrary
import A from './components/A';




const root = ReactDOM.createRoot(document.getElementById('anil'));
root.render(<A name="Anil" surname="Dollor">Data2</A>);