import './App.css';
import {Button} from './button/Button';
import {SelectImageButton} from './button/SelectImageButton';

function App() {
  return (
      <div className="App">
        <Button
            text={'Залогировать'}
            onClick={() => console.log('Залогировал')}
        />
        <SelectImageButton />
      </div>
  );
}

export default App;
