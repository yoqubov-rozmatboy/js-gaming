// JS Codes

const button = document.querySelector(".btn");
const first_player_img = document.querySelector('.first_player')
const second_player_img = document.querySelector('.second_player')
const result = document.querySelector('.result')

result.textContent = 'You are first player . Click the button to start'

const getRandomNumber = (num) => {
    return Math.round(Math.random() * num);
}

function setImageAttribute(random_number , img) {

    if (random_number == 0) {
       img.setAttribute('src', './img/paper.png');
    }
    else if (random_number == 1) {
        img.setAttribute('src', './img/rock.png');
    }
    else {
        img.setAttribute('src', './img/scissors.png');
    }
}


button.addEventListener("click", () => {
    const first_random_number = getRandomNumber(2)
    const second_random_number = getRandomNumber(2)

    setImageAttribute(first_random_number , first_player_img)
    setImageAttribute(second_random_number , second_player_img)

    if (
        first_random_number == 0 && second_random_number == 1 ||
        first_random_number == 1 && second_random_number == 2 ||
        first_random_number == 2 && second_random_number == 0) {

        result.textContent = 'You win!'
        result.style.color = 'green'

    }
    else if (first_random_number == second_random_number) {

        result.style.color = 'blue'
        result.textContent = 'Draw'

    }
    else {

        result.textContent = 'You lose!'
        result.style.color = 'red'

    }
});