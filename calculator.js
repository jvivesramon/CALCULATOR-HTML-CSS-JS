const displayedNumber = document.querySelector('label')
const numberSigns = Array.from(document.querySelectorAll('button'))

let displayedNumbersToCheck = ''

const lastCharacter = () => displayedNumbersToCheck.slice(-1)
const isLastCharacterASign = () => isNaN(Number(displayedNumbersToCheck.slice(-1)))
const isLessThanScreenLength = () => displayedNumber.innerText.toString().length < 17

const resetClassListAfterError = () => {
	const isError = displayedNumber.innerText === 'ERROR'
	const isNotDivided = displayedNumber.innerText === 'cannot divide by 0'

	if(isError || isNotDivided) {
		displayedNumber.innerText = ''
		displayedNumber.classList.remove('screen-container-error')
		displayedNumber.classList.add('screen-container')
	}
}

numberSigns.map(button => {
	button.addEventListener('click', (event) => {
		resetClassListAfterError()

		switch (event.target.innerText) {
			case 'AC':
				displayedNumber.textContent = '';
				displayedNumbersToCheck = ''
			break;
			case '←':
				if(displayedNumber.innerHTML) {
					displayedNumber.textContent = displayedNumber.innerText.slice(0, -1)
					displayedNumbersToCheck = displayedNumber.innerText.slice(0, -1)
				}
			break;
			case '=':
				try{
					const result = eval(displayedNumber.textContent).toString()
						if(result === 'Infinity'){
							displayedNumber.textContent = 'cannot divide by 0'
							displayedNumber.classList.remove('screen-container')
							displayedNumber.classList.add('screen-container-error')
						} else {
							displayedNumber.textContent = result
							displayedNumbersToCheck = result
						}
				} catch {
					displayedNumber.classList.remove('screen-container')
					displayedNumber.classList.add('screen-container-error')
					displayedNumber.textContent = 'ERROR'
				}
			break;
			case '+':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '+' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += event.target.innerText;
					}
				}
			break;
			case '-':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '-' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += event.target.innerText;
					}
				}
			break;
			case '*':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '*' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += event.target.innerText;
					}
				}
			break;
			case '/':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '/' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += event.target.innerText;
					}
				}
			break;
			case '.':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '.' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += event.target.innerText;
					}
				}
			break;
			default:
				if(isLessThanScreenLength()){
					displayedNumber.textContent += event.target.innerText;
					displayedNumbersToCheck += event.target.innerText;
				}
			break;
		}
	})
})
