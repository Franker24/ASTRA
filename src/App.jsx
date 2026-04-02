import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { NavLayoutProvider, useNavLayout } from './context/NavLayoutContext'
import { HomePage } from './pages/HomePage'
import { EarthPage } from './pages/EarthPage'
import { SolarSystemPage } from './pages/SolarSystemPage'
import { UniversePage } from './pages/UniversePage'

function Layout({ children }) {
  const { sidebarMode, sidebarExpanded } = useNavLayout()
  const padWhenDock = sidebarMode && sidebarExpanded
  return (
    <div className="bg-background min-h-svh font-body">
      <NavBar />
      <div
        className={`transition-[padding] duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${padWhenDock ? 'md:pl-64 md:[&>main]:!pt-6' : ''}`}
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NavLayoutProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/earth"
            element={
              <Layout>
                <EarthPage />
              </Layout>
            }
          />
          <Route
            path="/solar-system"
            element={
              <Layout>
                <SolarSystemPage />
              </Layout>
            }
          />
          <Route
            path="/universe"
            element={
              <Layout>
                <UniversePage />
              </Layout>
            }
          />
        </Routes>
      </NavLayoutProvider>
    </BrowserRouter>
  )
}
