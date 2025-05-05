import { Route, Routes } from 'react-router'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import NavBar from './components/NavBar'
import ShowAllContacts from './components/ShowAllContacts'
import ViewContact from './components/ViewContact'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import Delete from './components/DeleteContact'

function App() {

  return (
    <>
      <div className='w-5/6 m-auto'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ShowAllContacts />} />
          <Route path="/view/:id" element={<ViewContact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/remove/:id" element={<Delete />} />
          <Route path="/update/:id" element={<EditContact />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </div>
    </>
  )
}
export default App
