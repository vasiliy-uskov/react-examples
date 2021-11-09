import './App.css';
import {Button} from './button/Button';
import {SelectImageButton} from './button/SelectImageButton';
import { InputWithStorage } from './inputWithStorage/InputWithStorage';
import {Timer} from './timer/Timer';

function App() {
  return (
<div className="App">
    <Button
        text={'Залогировать'}
        onClick={() => console.log('Залогировал')}
    />
    <SelectImageButton />
    <InputWithStorage />
    <Timer />
</div>);
}

export default App;
