document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;

            if (value === '=') {
                try {
                    const result = eval(display.value);
                    display.value = result !== undefined ? result : '';
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (value === 'AC') {
                display.value = '';
            } else if (value === 'CE') {
                display.value = display.value.toString().slice(0, -1);
            } else {
                display.value += value;
            }
        });
    });
});