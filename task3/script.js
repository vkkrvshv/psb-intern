function run() {
    const result = document.getElementById('result');

    const n = parseInt(document.getElementById('n').value);
    const b = parseInt(document.getElementById('b').value);
    const m = parseInt(document.getElementById('m').value);
    const t = parseInt(document.getElementById('t').value);
    const r = parseInt(document.getElementById('r').value);

    if (b > m) {
        alert('Количество корма для одного котика не может быть больше вместимости миски!');
        return;
    }

    let time = 0;
    let currentCat = 1;
    let foodInDish = m;
    let isDishEmpty = false;

    while (currentCat <= n) {

        result.innerHTML += `<p>Котик под номером ${currentCat} подошел к миске</p>`;

        time += t;
        foodInDish -= b;

        if (foodInDish <= 0) {
            isDishEmpty = true;
            result.innerHTML += `<p>Бабушка наполняет миску</p>`;
            time += r;
            foodInDish = m;
        }

        result.innerHTML += `<p>Котик под номером ${currentCat} покушал и отошел от миски</p>`;
        currentCat++;
    }

    result.innerHTML += `<p>Все котики накормлены. Затраченное время: ${time} секунд</p>`;
}