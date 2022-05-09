import en from './en.js'
import ru from './ru.js'
import changeKeyboard from './changeKeyboard.js'
import language from './switchLang.js'

let mode = 'normal';

export default function handClickDown(event) {

	const row = document.querySelector('.row');

	localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  let layout = localStorage.getItem('lang') === 'en' ? en : ru;

	let curr = event;

	document.querySelector(`[data-code="${curr.code}"]`).classList.add('active')
	
	console.log(curr)	
	console.log(curr.key)
	
	if (curr.code === 'Tab') {
	  curr.preventDefault()
	}

	// if (key.key === 'Shift' && key.key === 'Alt'){
	// 	console.log('Shift+ALT')
	// }

	//let key = event.target.closest('.key');
	// console.log(key)
	console.log(mode)
	if (mode !== 'caps'){
		if (curr.code === 'CapsLock') {
			console.log('asdafasd=---------------------')
			mode = 'caps';
			changeKeyboard(mode, layout, row);
		} else {
			mode = 'normal';
			document.querySelector(`[data-code="${curr.code}"]`).classList.remove('active')
			changeKeyboard(mode, layout, row);
	}}

		





} 




