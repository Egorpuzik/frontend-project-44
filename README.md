### Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/5ba2460b640397291dd1/maintainability)](https://codeclimate.com/github/Egorpuzik/frontend-project-44/maintainability)
[![Actions Status](https://github.com/Egorpuzik/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Egorpuzik/frontend-project-44/actions)

# Демонстрация игры Brain Even
# Установка пакета

Чтобы установить игру, выполните следующую команду:

```bash
npm install -g brain-even```

Чтобы запустить игру, выполните следующую команду:
 brain-even

Пример победы: "Congratulations, ...!"

Пример поражения: "'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ...!" ;

# Игра: Калькулятор

Это игра, в которой нужно решить математические выражения.

# Чтобы запустить игру, выполните следующую команду:

brain-calc

В начале игры введите свое имя:

May I have your name?;

Пример победы:

Correct!
Congratulations, !

Пример поражения:

... is wrong answer;
Let's try again, !

# Игра: "Наибольший Общий Делитель" (НОД)
# Описание
Игра "НОД" — это увлекательная математическая игра, в которой игроку необходимо найти наибольший общий делитель двух случайных чисел. После каждого вопроса пользователь вводит свой ответ, и программа проверяет правильность. Игра продолжается до тех пор, пока не будут даны три правильных ответа подряд или пока игрок не ошибётся.

Как играть
1. Запустите игру командой brain-gcd.
2. Введите ваше имя, чтобы начать игру.
3. Игра предложит два случайных числа, например:
Question: 25 50
4. Ваша задача — вычислить наибольший общий делитель этих чисел и ввести его в ответ:
Your answer: 25
5. Если ответ верен, игра продолжится, а если нет, будет выведено сообщение о неправильном ответе и предложено попробовать ещё раз.;


# Описание: Игра "Арифметическая прогрессия" предлагает игроку найти недостающее число в ряду чисел, образующем арифметическую прогрессию. Одно из чисел в последовательности заменено на "..", и задача игрока — определить это число.

# Правила:

Игроку показывается ряд чисел, представляющих собой арифметическую прогрессию.
Одно случайное число заменяется на "..", и игроку необходимо угадать его.
Если ответ правильный, игра продолжается, если нет — игрок получает сообщение с правильным ответом и предложение сыграть снова.
Пример игры:

brain-progression

Возможные исходы:

Правильный ответ: игра продолжается с новым вопросом.
Неправильный ответ: выводится правильный ответ, и игра заканчивается.

Цель игры: правильно ответить на все вопросы и завершить игру победителем.

# Игра "Простое ли число?"

# Описание
"Простое ли число?" — это интерактивная игра, в которой игрок должен определить, является ли заданное число простым.

Запуск игры

Для запуска игры выполните следующие команды в терминале:

```bash
npm install
npm start brain-prime```

Yes -  простое число
No - сложное число