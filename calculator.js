const displayedNumber = document.querySelector('.screen-container')
const numberSigns = Array.from(document.querySelectorAll('button'))

const resetAfterError = () => {
	if(displayedNumber.style.color === 'red') {
		displayedNumber.innerHTML = ''
		displayedNumber.style.color = '#575454'
	}
}

numberSigns.map(button => {
	button.addEventListener('click', (event) => {
		switch (event.target.innerText) {
			case 'AC':
				resetAfterError()
				displayedNumber.textContent = '';
			break;
			case '←':
				resetAfterError()
				if(displayedNumber.innerHTML) {
					displayedNumber.textContent = displayedNumber.innerText.slice(0, -1)
				}
			break;
			case '=':
				resetAfterError()
				try{
					const result = eval(displayedNumber.textContent)
						if(result === Infinity){
							displayedNumber.textContent = 'cannot divide by 0'
							displayedNumber.style.color = 'red'
						} else {
							displayedNumber.textContent = result
						}
				} catch {
					displayedNumber.style.color = 'red'
					displayedNumber.textContent = 'ERROR'
				}
			break;
			default:
				resetAfterError()
				if(displayedNumber.innerText.toString().length < 17){
					displayedNumber.textContent += event.target.innerText;
				}
			break;
		}
	})
})
