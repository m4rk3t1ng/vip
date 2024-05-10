import React, { useReducer } from "react";

export const SubastasContext = React.createContext<any>({
    subastas: []
});

export const subastasReducer = (prevState, action) => {
    switch (action.type) {
        case "GET_SUBASTAS":
            return {
                subastas: action.subastas
            }
    }
}