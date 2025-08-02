import AppLayout from "./AppLayout"
import './App.css'

function App() {
  return (
    <div className="App relative min-h-[100vh] w-full h-auto overflow-hidden bg-red">
      <AppLayout />

      <img src="/assets/images/background-stars.svg" className='fixed w-full h-full object-cover'/>
    </div>
  )
}

export default App
