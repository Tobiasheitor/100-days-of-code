import React, {useState, useContext, createContext} from 'react';

const HightLightContext = createContext();

export default function HightLightProvider({children}) {
    const [hightlight, setHightLight] = useState(false);

    return (
        <HightLightContext.Provider
            value={{
                hightlight,
                setHightLight
            }}
        >
            {children}
        </HightLightContext.Provider>
    )
}

export function useHightLight() {
    const context = useContext(HightLightContext);
    const {hightlight, setHightLight} = context;

    return {hightlight, setHightLight};
}