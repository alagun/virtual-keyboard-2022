let currMode = ['normal'], x;

export default function modeSetGet(mode, setMode = false) {
	//console.log('mode - ' + mode);
	// console.log('currMode - ' + currMode);
	
	if (setMode === true){
		// if( mode === 'caps' )

//s		if( mode !== currMode[currMode.length-1]){
			currMode.push(mode)
			currMode.shift();
//		}
		// console.log('set')
		// console.log(mode)
		// console.log(setMode)
		// console.log(currMode)
		return currMode[currMode.length-1]
	} else {

		if (mode === 'shift' &&  currMode[currMode.length-1] === 'shift'){
			currMode.push('normal')
			currMode.shift();
		}else if (mode === 'capsOnShift' &&  currMode[currMode.length-1] === 'capsOnShift'){
			currMode.push('caps')
			currMode.shift();
		}
		// } else if (mode === 'shift' &&  currMode[currMode.length-1] !== 'shift'){
		// 	currMode.push('shift')
		// 	currMode.shift();
		// }
		// 	mode = currMode[currMode.length-1]
		// }
		// mode = currMode[currMode.length-1]
	// console.log('get')
		// console.log(mode)
		// console.log(setMode)
		// console.log(currMode)
		return currMode[currMode.length-1]
	}

	// if (setMode !== true){
	// 	currMode.push(mode)
	// 	currMode.shift();
	// }



	// if (setMode !== true){
	// 	if (mode === undefined){
	// 		mode = currMode[currMode.length-1]
	// 	}
	// }

	//console.log(currMode)
	// if ( mode !== currMode[currMode.length-1]) {
	// 	//console.log('suda')
	// 	currMode.push(mode);
	// 	//x = currMode[currMode.length-1];
	// 	//currMode[currMode.length-1] = mode;
	// 	console.log('1. currMode - ' + currMode);
	// 	//return currMode[currMode.length-1];
	// } else {
	// 	currMode[currMode.length-1] = mode;
	// 	console.log('2. currMode - ' + currMode[currMode.length-1]);
	// 	return currMode[currMode.length-1];
	// }
} 