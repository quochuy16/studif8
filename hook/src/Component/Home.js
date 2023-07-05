import logo from './../logo.svg';

function Home() {
    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='subs'>
          <a href="/useStatepage"><button ><h1>useState</h1></button></a>
          <a href="/2wayBinding"><button ><h1>2wayBinding</h1></button></a>
          <a href="/toDoList"><button ><h1>toDoList</h1></button></a>
          <a href="/Mounted"><button ><h1>Mounted/Unmounted</h1></button></a>
          
        </div>
      </header>
    </div> 
    )
}

export default Home;