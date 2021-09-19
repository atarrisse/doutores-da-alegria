
import React, { useEffect, useState } from 'react'

const Context = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: (value) => { },
  isPlayerOpen: false,
  setIsPlayerOpen: (value) => { },
  videoId: null,
  setVideoId: (value) => { }
});

const ContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    setIsPlayerOpen(videoId !== null)
  }, [videoId])

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    isPlayerOpen,
    setIsPlayerOpen,
    videoId,
    setVideoId
  };

  return <Context.Provider value={value}>{children}</Context.Provider>

}

export { Context, ContextProvider }