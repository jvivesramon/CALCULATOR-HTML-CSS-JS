const displayedNumber = document.querySelector('.screen-container')
const numberSigns = Array.from(document.querySelectorAll('button'))

const resetAfterError = () => {
	if(displayedNumber.textContent === 'ERROR') {
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
					displayedNumber.textContent = eval(displayedNumber.textContent)
				} catch {
					displayedNumber.style.color = 'red'
					displayedNumber.textContent = 'ERROR'
				}
			break;
			default:
				resetAfterError()
				if(displayedNumber.innerText.toString().length < 13){
					displayedNumber.textContent += event.target.innerText;
				}
			break;
		}
	})
})
