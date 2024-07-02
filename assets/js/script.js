function findClosestToZero() {
    const input = document.getElementById("numbers").value; // Get input value

    if (!input.trim()) { // Check if input is empty
        document.getElementById("result").innerText = "Input cannot be empty. Please enter valid temperatures as numbers."; // Display error message
        return;
    }

    const numbers = input.split(",").map(num => parseFloat(num)); // Convert comma-separated input to an array of numbers

    if (numbers.some(isNaN)) { // Check for invalid input
        document.getElementById("result").innerText = "Invalid input. Please enter valid temperatures as numbers."; // Display error message
        return;
    }

    let closestToZero = numbers[0]; // Initialize closestToZero to first number
    let positiveNumbers = numbers.filter(num => num >= 0); // Filter positive numbers
    let negativeNumbers = numbers.filter(num => num < 0); // Filter negative numbers

    for (let i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) < Math.abs(closestToZero) ||
            (Math.abs(numbers[i]) === Math.abs(closestToZero) && numbers[i] > 0 && closestToZero < 0)) {
            closestToZero = numbers[i]; // Find number closest to zero
        }
    }

    document.getElementById("result").innerText = `Closest number to zero is: ${closestToZero}`; // Display closest number to zero

    // Charting positive and negative numbers
    const ctx = document.getElementById('chart').getContext('2d'); // Get chart canvas context

    const chart = new Chart(ctx, { // Create new Chart instance
        type: 'bar', // Bar chart type
        data: {
            labels: numbers.map(num => num.toString()), // Use numbers as labels
            datasets: [{
                label: 'Temperatures',
                data: numbers, // Use numbers for data
                backgroundColor: numbers.map(num => num >= 0 ? 'rgba(255, 174, 66, 1)' : 'rgba(0, 0, 128, 1)'), // Color based on positive or negative
                borderColor: numbers.map(num => num >= 0 ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 1)'),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false, // Start at 0 but now we go upwards for positive and downwards for negative
                    ticks: {
                        callback: function(value, index, values) {
                            if (value > 0) {
                                return value + ' (Hot)';
                            } else {
                                return value + ' (Cold)';
                            }
                        }
                    }
                }
            }
        }
    });
}
