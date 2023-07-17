let input = document.createElement('input')
let button = document.createElement('button')
let result = document.createElement('div')

button.textContent = 'Пошук'
button.disabled = true

input.style.width = '400px'
input.style.height = '35px'
button.style.padding = '10px 20px'
result.style.fontSize = '22px'

button.addEventListener('click', () => {
    const text = input.value.trim()
    const uniqueCharacter = getUniqChar(text)

    if (uniqueCharacter) {
        result.textContent = `Унікальний символ: ${uniqueCharacter}`
    } else {
        result.textContent = 'Унікальний символ не знайдено'
    }
})

input.addEventListener('input', () => {
    button.disabled = input.value.trim() === ''
})

document.body.appendChild(input)
document.body.appendChild(button)
document.body.appendChild(result)


const getUniqChar = (str) => {
    // розбиваю вхідний текст на масив окремих слів
    const words = str.split(/\s+/)

    // масив для зберігання унікальних значень кожного слова
    const listChar = []

    // проходжусь по кожному слову
    for (let word of words) {
        let uniqChar = null

        // проходжусь по кожному символу в слові
        for (let char of word) {
            // розбиваю слово і рахую кількість повторів
            const count = word.split(char).length - 1

            //символ унікальний, якщо зустрічається один раз
            if (count === 1) {
                uniqChar = char
                break;
            }
        }
        // пушу до списку
        uniqChar && listChar.push(uniqChar)
    }

    // знаходжу перший унікальний символ
    for (let char of listChar) {
        const count = listChar.filter(el => el === char).length

        if (count === 1) {
            return char
        }
    }
    return null
};
