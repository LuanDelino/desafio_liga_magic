let cardPriceList = [6.28, 9.39, 14.00]
const classListPrice = [".marketplace_info_price_low_value", 
                        ".marketplace_info_price_medium_value", 
                        ".marketplace_info_price_high_value"]

cardPriceList.forEach((value, index) => {
    document.querySelector(classListPrice[index]).innerHTML = (value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
})

const activeSRC = document.querySelector(".image_active").getAttribute("src")
document.querySelector(".image_main_active").setAttribute("src", activeSRC)

const checkInpValue = (number) => {
    if (number == 1) {
        document.querySelector("#btnLess").setAttribute("disabled", "")
    }

    if (number > 1) {
        document.querySelector("#btnLess").removeAttribute("disabled", "")
    }
}


let inpValue = Number(document.querySelector("#inpValue").value)

document.querySelector("#btnMore").addEventListener('click', (e) => {
    inpValue += 1
    document.querySelector("#inpValue").value = Number(inpValue)
    checkInpValue(inpValue)
})

document.querySelector("#btnLess").addEventListener('click', (e) => {
    inpValue -= 1
    document.querySelector("#inpValue").value = Number(inpValue)
    checkInpValue(inpValue)
})

document.querySelector("#inpValue").addEventListener('change', (e) => {
    inpValue = Number(document.querySelector("#inpValue").value)
    checkInpValue(inpValue)
})