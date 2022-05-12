/* eslint-disable import/extensions */
import en from './en.js';
import ru from './ru.js';
import changeKeyboard from './changeKeyboard.js';
import modeSetGet from './mode.js';
import point from './point.js';

let mode = 'normal';
// console.log(mode)

export default function handClickUp(event) {
  mode = modeSetGet(mode);
  // console.log('MODE в части поднятия: ' + mode)
  // console.log(event)
  const row = document.querySelector('.row');

  localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  const layout = localStorage.getItem('lang') === 'en' ? en : ru;

  const curr = event;

  if (mode === 'shift') {
    point('clearShift');
    const tey = modeSetGet(mode);
    changeKeyboard(tey, layout, row);
  }
  if (mode === 'capsOnShift' && event.code === 'ShiftLeft') {
    mode = 'caps';
    changeKeyboard(mode, layout, row);
    // console.log('чето кудато надо вернуть')
  }

  if (curr.code === 'CapsLock') {
    // console.log('capslock')
    // if (mode === 'normal'){
    // mode = 'caps';
    // changeKeyboard(mode, layout, row);
    // } else {
    // mode = 'normal';
    // document.querySelector(`[data-code="CapsLock"]`).classList.remove('active')
    // changeKeyboard(mode, layout, row);
    // }
  } else {
    document.querySelector(`[data-code="${curr.code}"]`).classList.remove('active');
  }

  if (mode === 'normal') {
    if (curr.code === 'ShiftLeft' || curr.code === 'ShiftRight') {
      mode = 'normal';
      changeKeyboard(mode, layout, row);
    }
  }

  // console.log(curr)
  // console.log(curr.code)

  // if (curr.code === 'Tab') {
  //   curr.preventDefault()
  // }

  // // if (key.key === 'Shift' && key.key === 'Alt'){
  // // console.log('Shift+ALT')
  // // }

  // //let key = event.target.closest('.key');
  // // console.log(key)
  // console.log(mode)

  // if (curr.code === 'ShiftLeft' || curr.code === 'ShiftRight') {
  // if (mode === 'capsOnShift'){
  // //console.log('asdafasd=---------------------');
  // mode = 'caps';
  // changeKeyboard(mode, layout, row);
  // }
  // }
  // } else if (mode === 'shift') {
  // mode = 'normal';
  // //document.querySelector(`[data-code="CapsLock"]`).classList.remove('active')
  // changeKeyboard(mode, layout, row);
  // }
  // }
}
