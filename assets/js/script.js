function findClosestToZero() {
    const input = document.getElementById("numbers").value; // Get input value
    const numbers = input.split(",").map(num => parseFloat(num)); // Convert comma-separated input to an array of numbers

    if (numbers.some(isNaN)) { // Check for invalid input
        document.getElementById("result").innerText = "Invalid input. Please enter valid temperatures as numbers."; // Display error message
        return;
    }

    let closestToZero = numbers[0]; // Initialize closestToZero to first number

    for (let i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) < Math.abs(closestToZero) ||
            (Math.abs(numbers[i]) === Math.abs(closestToZero) && numbers[i] > 0 && closestToZero < 0)) {
            closestToZero = numbers[i]; // Find number closest to zero
        }
    }

    document.getElementById("result").innerText = `Closest number to zero is: ${closestToZero}`; // Display closest number to zero
}