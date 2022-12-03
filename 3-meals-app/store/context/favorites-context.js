import { createContext } from "react"

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavoriteFunction: (id) => {},
})

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
