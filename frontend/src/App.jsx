import './App.css'
import { Counter } from './components/Counter/Counter'

function App() {

  return (
    <>
      <div className="mt-10 p-8 bg-secondary rounded-lg shadow-xl ml-10 mr-10 text-center flex flex-col gap-y-10">
        <h1 className='text-primary text-4xl font-bold leading-relaxed text-center'>¡Hola NoCountry!</h1>
        <h1 className='text-primary text-2xl text-center'>HandOff web - fronentd - Pruebas de clases TailwindConfig - My Doctor App</h1>
        <h1 className="text-primary text-2xl">Primary Heading + bg-secondary</h1>
        <p className="text-primary">Primary Text + bg-secondary</p>
        <div className="bg-primary text-secondary p-4 rounded-md">
          <p className="text-secondary">Secondary Text + bg-primary</p>
        </div>
      </div>

      <h1 className='text-secondary text-4xl font-bold leading-relaxed text-center mt-5'>¡Instalado y configurado Redux Toolkit! Pruebalo:</h1>

      <Counter />
    </>
  )
}

export default App
