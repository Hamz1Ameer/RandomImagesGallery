import './App.css';
import DateTime from './Components/DateTime';
import Images from './Components/Images';
function App() {
  return (
    <div>
      <DateTime></DateTime>
      <br/>
      <h2>Images Gallery</h2>
      <Images/>
      <Images/>
      <Images/>
    </div>
  );
}

export default App;
