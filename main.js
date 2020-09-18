document.addEventListener('DOMContentLoaded', function() {
        const arr = [3, 1, 4, 6, 9, 8, 5, 7, 2];
        function sortOdd(arr) {
                const sortArray = arr.filter(x => x % 2).sort((a, b) => a - b);

                let i = 0;

                return arr.map(x => (x % 2 ? sortArray[i++] : x));
        }

        console.log(sortOdd(arr));

        const str = 'AAASAFFFDIGJJJJJJJJJJEJEEEEEEEEEEEENFIIFFFFFFF';

        function mstr(str) {
                let result = '';
                let prev = str[0];
                let cor = 0;
                for (const x of str) {
                        if (x === prev) {
                                cor++;
                        } else {
                                result += prev + (cor > 1 ? cor : '');
                                prev = x;
                                cor = 1;
                        }
                }

                result += prev + (cor > 1 ? cor : '');

                return result;
        }

        console.log(mstr(str));

        function getRandomHex() {
                return `#${Math.floor(Math.random() * 2 ** 24)
                        .toString(16)
                        .padStart(0, 6)}`;
        }

        console.log(getRandomHex());
        console.log(getRandomHex());
        console.log(getRandomHex());
        console.log(getRandomHex());
        console.log(getRandomHex());

        function sumDigPow(a, b) {
                for (let index = a; index < b; index++) {
                        // eslint-disable-next-line prefer-const
                        let quantityТumbers = index.toString().length;
                        let quantitySum = 0;

                        for (let i = 0; i < quantityТumbers; i++) {
                                quantitySum += Math.pow(index, i);
                        }
                        console.log(quantitySum);
                }
        }

        console.log(sumDigPow(1, 20));

        function reverseWords(str) {
                return str
                        .split('')
                        .reverse()
                        .join('')
                        .split(' ')
                        .reverse()
                        .join(' ');
        }

        console.log(reverseWords('This is an example!'));
});
