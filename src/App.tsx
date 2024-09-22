import npdcLogo from './assets/npdc.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.nationalpolicedata.org" target="_blank">
          <img src={npdcLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>National Police Data Index</h1>
      <h2>Design System</h2>
      <div className="card">
        <a href="https://npdindex.readme.io/reference/getting-started-with-your-api"><button>
          Learn More
        </button></a>
      </div>
    </>
  )
}

export default App
