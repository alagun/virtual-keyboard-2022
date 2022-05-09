import en from './assets/en.js'
import ru from './assets/ru.js'
import keyboardHTML from './assets/keyboard.js'
import changeKeyboard from './assets/changeKeyboard.js'
import mouseClickDown from './assets/mouseClickDown.js'
import mouseClickUp from './assets/mouseClickUp.js'
import mouseClickKey from './assets/mouseClickKey.js'
import handClickDown from './assets/handClickDown.js'

async function runApp() {
  localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  let layout = localStorage.getItem('lang') === 'en' ? en : ru;

  const virtualKeyboard = document.getElementById('virtual__keyboard');
  virtualKeyboard.insertAdjacentHTML('afterbegin', keyboardHTML);

  const row = document.querySelector('.row');
  const keyboard = document.querySelector('.keyboard');

  let mode = 'normal';
  keyboard.addEventListener('mousedown', mouseClickDown);
  keyboard.addEventListener('mouseup', mouseClickUp);
  keyboard.addEventListener('click', mouseClickKey);

  document.addEventListener('keydown', handClickDown);

  changeKeyboard(mode, layout, row);
  const textarea = document.querySelector('textarea');
  textarea.focus()
}

runApp()
alert('Добрый день, в связи с болезнью не успел полностью реализовать требования к таску. не делал Eslint, проблемы с логикой ввода с клавиатуры, функции списывать не собираюсь .буду признателен за возможность допроверки. Спасибо за понимание, с уважением Алексей.\nЗа обратную связь буду признателен\nPS контакты для связи на гитхабе')
