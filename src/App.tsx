import './App.css';
import {Button} from './button/Button';
import {SelectImageButton} from './button/SelectImageButton';
import { InputWithStorage } from './inputWithStorage/InputWithStorage';
import {useCommonTimer} from "./customHooks/useCommonTimer";

function App() {
  const timer = useCommonTimer()
  return (
<div className="App">
    <div>{timer.getHours()}:{timer.getMinutes()}:{timer.getSeconds()}</div>
    <Button
        text={'Залогировать'}
        onClick={() => console.log('Залогировал')}
    />
    <SelectImageButton />
    <InputWithStorage />
</div>);
}

export default App;
