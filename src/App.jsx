import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ScanDetail from "./pages/ScanDetail"
import AuthLayout from "./layouts/AuthLayout"
import AppLayout from "./layouts/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/scan/:scanId"
          element={
            <AppLayout>
              <ScanDetail />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App