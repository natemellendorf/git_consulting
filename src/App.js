import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="card mb-3 text-white bg-dark">
      <img src={logo} class="card-img-top" alt={logo}></img>
      <div class="card-body">
        <h5 class="card-title">Welcome!</h5>
        <p class="card-text">This is a placeholder for additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
}

export default App;
