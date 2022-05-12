import en from './assets/en';
import ru from './assets/ru';
import keyboardHTML from './assets/keyboard';
import changeKeyboard from './assets/changeKeyboard';
import mouseClickDown from './assets/mouseClickDown';
import mouseClickUp from './assets/mouseClickUp';
import mouseClickKey from './assets/mouseClickKey';
import handClickDown from './assets/handClickDown';
import handClickUp from './assets/handClickUp';

async function runApp() {
  localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  const layout = localStorage.getItem('lang') === 'en' ? en : ru;

  const virtualKeyboard = document.getElementById('virtual__keyboard');
  virtualKeyboard.insertAdjacentHTML('afterbegin', keyboardHTML);

  const row = document.querySelector('.row');
  const keyboard = document.querySelector('.keyboard');

  const mode = 'normal';
  keyboard.addEventListener('mousedown', mouseClickDown);
  keyboard.addEventListener('mouseup', mouseClickUp);
  keyboard.addEventListener('click', mouseClickKey);

  document.addEventListener('keydown', handClickDown);
  document.addEventListener('keyup', handClickUp);

  changeKeyboard(mode, layout, row);
  const textarea = document.querySelector('textarea');
  textarea.focus();
}

runApp();
