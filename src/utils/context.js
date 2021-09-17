
import * as React from 'react'

const Context = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: (value) => { },
});

const ContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const value = { isMenuOpen, setIsMenuOpen };

  return <Context.Provider value={value}>{children}</Context.Provider>

}

export { Context, ContextProvider }