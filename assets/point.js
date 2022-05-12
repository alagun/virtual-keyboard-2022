import language from './switchLang.js'

let flagShift = false;
let flagAlt = false;
export default function point(word) {
	if (word === 'shift'){
		flagShift = true;
		// console.log('flag shift set')
	}
	if (word === 'alt'){
		flagAlt = true;
		// console.log('flag alt set')
	}
	if (flagAlt && flagShift){
		flagAlt = false;
		flagShift = false;
		language()
		// console.log('mojem pomenyat')
	}
}
