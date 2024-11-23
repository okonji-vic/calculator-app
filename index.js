let input = document.querySelector('input');
let button = document.querySelectorAll('button');


button.forEach((btn) => {
    
  btn.addEventListener('click', () => {
    if (btn.textContent === '1') {
        input.value += btn.textContent;
    }
    else if (btn.textContent === '2') {
        input.value += '2';
    }
    else if (btn.textContent === '3') {
        input.value += '3';
    }
    else if (btn.textContent === '4') {
        input.value += '4';
    }
    else if (btn.textContent === '5') {
        input.value += '5';
    }
    else if (btn.textContent === '6') {
        input.value += '6';
    }
    else if (btn.textContent === '7') {
        input.value += '7';
    }
    else if (btn.textContent === '8') {
        input.value += '8';
    }
    else if (btn.textContent === '9') {
        input.value += '9';
    }
    else if (btn.textContent === '0') {
        input.value += '0';
    }
    else if (btn.textContent === '+') {
        input.value += '+';
    }
    else if (btn.textContent === '-') {
        input.value += '-';
    }
    else if (btn.textContent === '*') {
        input.value += '*';
    }
    else if (btn.textContent === '/') {
        input.value += '/';
    }
    else if (btn.textContent === '.') {
        input.value += '.';
    }
    else if (btn.textContent === 'C') {
        input.value = '';
        input.classList.remove('result');
    }
    else if (btn.textContent === '=') {
        try {
            input.value = eval(input.value);
            input.classList.add('result');
        } catch (error) {
            alert('Invalid input');
        }
    }
});
});

// buttons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       input.value += btn.textContent;
//     });
//   });
