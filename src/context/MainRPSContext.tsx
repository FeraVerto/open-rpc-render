import React from 'react';

const MainRPSContext = React.createContext({
    getJSON: () => ({} as Promise<any>)
});

export const MainRPSProvider = ({children}: { children: JSX.Element }) => {
    async function getJSON() {
        return
    }

    return (
        <MainRPSContext.Provider value={{getJSON}}>
            {children}
        </MainRPSContext.Provider>
    )
};