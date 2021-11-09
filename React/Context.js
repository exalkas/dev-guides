/**
 * Task: create a state anywhere in the app and use it in any child component without having to pass it from parent to child via props
 * 
 * Context API
 * 
 * 1. Build the context 
 */

 import React, { createContext, useState } from 'react'

 // each app could have more than one context
export const ContextName = createContext() // context is being created and exported

export default function ContextProvider({children}) {

    const [state, setState] = useState('defaultValuesIfAny')

    // function to be used in the child component that will consume the context
    const callbackFunction = item => {

        setState(...state, item)
    }

    return (
        <ContextName.Provider value = {{state, callbackFunction}}>
            {children}
        </ContextName.Provider>
    )

}

/**
 * 2. Wrap Main component with Context provider (e.g. in index.js)
 */

 import ReactDOM from 'react-dom';
 import { BrowserRouter } from 'react-router-dom';

 import ContextProvider from './components/context';
 
 ReactDOM.render(
   <BrowserRouter>
       <ContextProvider>
            <Routes />
       </ContextProvider>
   </BrowserRouter>
 , document.getElementById('root'));

 /**
  * 3. update the global state from some component using the exported callback function
  */
import {useState, useContext} from "react";
import { ContextName } from "./context";

export default function () {

    // destructure the callback function that is exported from the context
    const {callbackFunction} = useContext(ContextName)

    // create some state to bind the input element
    const [value, setValue] = useState('')

    // use the callBack function and add to the context the local value from the local state
    const handleClick = () => callbackFunction(value)

    return (
        <>
            <input type="text" value = {value} onChange={e => setValue(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

 /**
  * 4. Consume Context in a child component (child to the context provider)
  */

export default function ConsumeContext() {

    // destructure state from Content Provider and pass ContextName to useContext hook
    const {state} = useContext(ContextName)

    return (
        <div>Consume state: {state}</div>
    )
}