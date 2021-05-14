let number = document.getElementById('number');
    host_name = document.getElementById('name');
    month = document.getElementById('date')
    year = document.getElementById('year')
    type = document.getElementById('type')
    card_number = document.getElementById('card_number')
    card_name = document.getElementById('card_name')
    card_month = document.getElementById('card_month')
    card_year = document.getElementById('card_year')

number.addEventListener('keyup', setNumber.innerHTML)
host_name.addEventListener('keyup', setName = null)
month.addEventListener('mouseup', setMonth = null)
year.addEventListener('mouseup', setYear = null)

function isNum(num) {
    return !/[^.[0-9, " "]]*/.test(num);
};