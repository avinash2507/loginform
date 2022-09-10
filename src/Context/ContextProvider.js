import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
import { ACTION_TYPE } from './contextType';

const initialState = {
  users: []
}

export const StoreContext = createContext(initialState);

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  // Actions
  function deleteUser(id) {
    dispatch({
      type: ACTION_TYPE.DELETE_USER,
      payload: id
    })
  }
  
  function addUser(payload) {
    dispatch({
      type:ACTION_TYPE.ADD_USER,
      payload
    })
  }
  function getUsers() {
    dispatch({
      type:'GET_USERS'
    })
  }


  return (
    <StoreContext.Provider value={{
      users: state.users,
      addUser,
      deleteUser,
      getUsers,
  

    }}>
      {children}
    </StoreContext.Provider>
  )
}