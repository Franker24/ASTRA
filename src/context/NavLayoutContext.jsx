import { createContext, useContext, useMemo, useState } from 'react'

const NavLayoutContext = createContext(null)

export function NavLayoutProvider({ children }) {
  const [sidebarMode, setSidebarMode] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const value = useMemo(
    () => ({ sidebarMode, setSidebarMode, sidebarExpanded, setSidebarExpanded }),
    [sidebarMode, sidebarExpanded]
  )
  return <NavLayoutContext.Provider value={value}>{children}</NavLayoutContext.Provider>
}

export function useNavLayout() {
  const ctx = useContext(NavLayoutContext)
  if (!ctx) {
    return {
      sidebarMode: false,
      setSidebarMode: () => {},
      sidebarExpanded: false,
      setSidebarExpanded: () => {},
    }
  }
  return ctx
}
