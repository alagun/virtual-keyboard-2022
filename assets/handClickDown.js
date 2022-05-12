import en from './en.js'
import ru from './ru.js'
import changeKeyboard from './changeKeyboard.js'
import language from './switchLang.js'
import modeSetGet from './mode.js'
import point from './point.js'

let mode = 'normal';
const setMode =  true;

export default function handClickDown(event) {

	const row = document.querySelector('.row');

	localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
	let layout = localStorage.getItem('lang') === 'en' ? en : ru;

	let curr = event;
	let prevMode;


	document.querySelector(`[data-code="${curr.code}"]`).classList.add('active')
	
	// console.log(curr)	
	//console.log(curr.key)
	
	if (curr.code === 'Tab') {
	  curr.preventDefault()
	}

	// if (key.key === 'Shift' && key.key === 'Alt'){
	// 	console.log('Shift+ALT')
	// }

	//let key = event.target.closest('.key');
	// console.log(key)
	//console.log(mode)

	if (curr.code === 'CapsLock') {
		if (mode === 'normal'){
			mode = 'caps';
			changeKeyboard(mode, layout, row);
		} else {
			mode = 'normal';
			document.querySelector(`[data-code="CapsLock"]`).classList.remove('active')
			changeKeyboard(mode, layout, row);
		}
	}
	if (curr.code === 'ShiftLeft' || curr.code === 'ShiftRight') {
		if (mode === 'normal' || mode === 'shift'){
			mode = 'shift';
			changeKeyboard(mode, layout, row);
			point('shift');
		} else if (mode === 'caps') {
			
			mode = 'capsOnShift';
			changeKeyboard(mode, layout, row);
		}
	}
	if ( curr.code === 'AltLeft') {
		point('alt');
		//let r = language();
		//console.log(r)
		//console.log('смена языка')

	
	}
	// if (mode !== 'caps'){
	// 	if (curr.code === 'CapsLock') {
	// 		console.log('asdafasd=---------------------')
	// 		mode = 'caps';
	// 		changeKeyboard(mode, layout, row);
	// 	} else {
	// 		mode = 'normal';
	// 		document.querySelector(`[data-code="CapsLock"]`).classList.remove('active')
	// 		changeKeyboard(mode, layout, row);
	// }}

		


	//console.log(mode)
	modeSetGet(mode, setMode);
	// return mode
} 




