const displayedNumber = document.querySelector('label')
const numberSigns = Array.from(document.querySelectorAll('button'))

let displayedNumbersToCheck = ''
let displayedSignsToOperate = ''

const stopTheDotButton = () => {
	const valuesOfNumbers = displayedNumbersToCheck.split(' ')
	const lastNumberValue = Number(valuesOfNumbers.pop())
	const isInteger = Number.isInteger(lastNumberValue)
	return isInteger
}

const getResult = () => {
	const valuesOfNumbersToOperateWith = displayedNumbersToCheck.split(' ')
    let resultValue = Number(valuesOfNumbersToOperateWith[0])

	valuesOfNumbersToOperateWith.map((value, index) => {
	const sign = displayedSignsToOperate[index]
		switch (sign) {
		case '+':
			resultValue = resultValue + Number(valuesOfNumbersToOperateWith[index + 1])
		break;
		case '-':
			resultValue = resultValue - Number(valuesOfNumbersToOperateWith[index + 1])
		break;
		case '*':
			resultValue = resultValue * Number(valuesOfNumbersToOperateWith[index + 1])
		break;
		case '/':
			resultValue = resultValue / Number(valuesOfNumbersToOperateWith[index + 1])
		break;
		}
	})
	return resultValue.toString()
}

const lastCharacter = () => displayedNumbersToCheck.slice(-1)
const isLastCharacterASign = () => displayedNumbersToCheck.slice(-1) === ' '
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
					let result = getResult()

					if(result === 'Infinity'){
						displayedNumber.textContent = 'cannot divide by 0'
						displayedNumber.classList.remove('screen-container')
						displayedNumber.classList.add('screen-container-error')
					} else {
						displayedNumber.textContent = result
						displayedNumbersToCheck = result
						displayedSignsToOperate = ''
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
						displayedNumbersToCheck += ' '
						displayedSignsToOperate += event.target.innerText;
					}
				}
			break;
			case '-':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '-' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += ' '
						displayedSignsToOperate += event.target.innerText;
					}
				}
			break;
			case '*':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '*' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += ' '
						displayedSignsToOperate += event.target.innerText;
					}
				}
			break;
			case '/':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '/' && !isLastCharacterASign()) {
						displayedNumber.textContent += event.target.innerText;
						displayedNumbersToCheck += ' '
						displayedSignsToOperate += event.target.innerText;
					}
				}
			break;
			case '.':
				if(isLessThanScreenLength()){
					if(lastCharacter() !== '.' && !isLastCharacterASign()) {
						if(stopTheDotButton()) {
							displayedNumber.textContent += event.target.innerText;
							displayedNumbersToCheck += event.target.innerText;
						}
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
