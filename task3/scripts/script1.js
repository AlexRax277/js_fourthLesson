const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout});
let number = Math.floor(Math.random() * 10);
let num = 0;
console.log(number);

let foo = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (quest) => {
            resolve(quest);
        })
    });
}

let func = async () => {
    while (true) {
        const userInput = await foo('Введите значение:\n');
        if (!isNaN(userInput) && userInput.trim().length > 0) {
            if (parseInt(userInput) === number){
                num += 1;
                break;
            } else {
                if (parseInt(userInput) < number) {
                    num += 1;
                    console.log('Больше...\n');
                } else if (parseInt(userInput) > number) {
                    num += 1;
                    console.log('Меньше...\n')
                } else {
                    num += 1;
                    break;
                }
            }
        } else {
            num += 1;
            console.log(`${userInput} - это не подойдёт, введите число!\n`);   
        }
    }
    console.log(`Успех! Вы угадали. Общее количество попыток: ${num}.`);
    rl.close()
}

func();


