import Dashboard from './pages/Dashboard/Dashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/Signin.jsx'
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Header from "./components/Header/Header.jsx"
import Tables from "./pages/Tables/Tables.jsx"
import Billing from "./pages/Billing/Billing.jsx"
// import Profile from "./pages/Profile/Profile.jsx"
import SignUp from './pages/SignUp/SignUp.jsx'
import "./App.css"
export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path='/dashboard*' element={<Dashboard />} />
          <Route path='/tables*' element={<Tables />} />
          <Route path='/billing*' element={<Billing />} />
          <Route path='/signin*' element={<Signin />} />
          <Route path='/signup*' element={<SignUp />} />
          {/* <Route path='/profile*' element={<Profile />} /> */}
        </Routes>
      </main>
    </>
  )
}

