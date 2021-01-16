import React from 'react'
import Child from './Child'

// define useContext
let TemaSitus = React.createContext('light')

const App = () => {
    return (
        <div>
            <TemaSitus.Provider value={'light'}>
                <Child />
            </TemaSitus.Provider>
        </div>
    )
}

export default App
