/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    const lower = Math.min(start, end);
    const upper = Math.max(start, end);
    let sum = 0;

    for (let number = lower + (lower % 2); number <= upper; number += 2) {
        sum += number;
    }

    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;
    let value = a;

    while (value > 0.1) {
        value /= 2;
        count++;
    }

    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    const symbols = Array.from(message);
    let index = 2;

    do {
        if (index < symbols.length) {
            symbols[index] = '_';
        }
        index += 3;
    } while (index < symbols.length);

    return symbols.join('');
}
