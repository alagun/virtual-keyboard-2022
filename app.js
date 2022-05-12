/* eslint-disable import/extensions */
import en from './assets/en.js';
import ru from './assets/ru.js';
import keyboardHTML from './assets/keyboard.js';
import changeKeyboard from './assets/changeKeyboard.js';
import mouseClickDown from './assets/mouseClickDown.js';
import mouseClickUp from './assets/mouseClickUp.js';
import mouseClickKey from './assets/mouseClickKey.js';
import handClickDown from './assets/handClickDown.js';
import handClickUp from './assets/handClickUp.js';

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
