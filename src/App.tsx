import './App.css';
import {Button} from './button/Button';
import {SelectImageButton} from './button/SelectImageButton';
import {Timer} from './Timer/Timer';

function App() {
  return (
      <div className="App">
        <Timer />
        <Button
            text={'Залогировать'}
            onClick={() => console.log('Залогировал')}
        />
        <SelectImageButton />
      </div>
  );
}

export default App;
