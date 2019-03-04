let choice;
menu();

function fibonacci_loop(n) {
    let first_num = 1;
    let second_num = 1;
    let next;
    for (let i = 2; i <= n; i++) {
        next = first_num + second_num;
        first_num = second_num;
        second_num = next;
    }
    return next;
}

function fibonacci_recurtion(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci_recurtion(n - 1) + fibonacci_recurtion(n - 2);
}

function fibonacci_array(n) {
    let fibNums = [1, 1];
    for (let i = 2; i <= n; ++i) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

function menu() {
    const n = parseInt(prompt('Enter Fibonacci number'));
    do {
        choice = parseInt(prompt('1. To count Fibonacci-Loop\n2. To count Fibonacci-Recurtion\n3. To count Fibonacci-Array\nEnter your choice: '));
        switch (choice) {
            case 1:
                alert('Number is: ' + fibonacci_loop(n));
                break;
            case 2:
                alert('Number is: ' + fibonacci_recurtion(n));
                break;
            case 3:
                alert('Number is: ' + fibonacci_array(n));
                break;
            default:
                alert('Please enter number 1, 2 or 3');
        }
    } while (choice < 1 || choice > 3)
}
