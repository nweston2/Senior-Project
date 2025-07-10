function calculate() {
    // Here's the thing we will be changing
    const printIt = document.getElementById("prediction");

    // Here's the user input numbers
    const cost = document.getElementById("projectedCost").value;
    const hours = document.getElementById("projectedHours").value;

    // Radio button inputs
    const paymentButtons = document.querySelectorAll('input[name="halfFirst"]');
    let payment = 0;  // if paying half up front, ===1, otherwise 0
    for (const paymentButton of paymentButtons) {
        if (paymentButton.checked) {
            payment = paymentButton.value;
            break;
        }
    }

    const branchButtons = document.querySelectorAll('input[name="branch"]');
    let branch;
    for (const branchButton of branchButtons) {
        if (branchButton.checked) {
            branch = branchButton.value;
            break;
        }
    }

    // branch math-ified
    let gulf = 0;
    let hunt = 0;
    if (branch === "golf") {
        gulf = 1;
    } else if (branch === "nimrod") {
        hunt = 1;
    }

    // Betas
    const b0 = 194.1417; // intercept
    const b1 = 0.5984; // cost
    const b2 = 33.2870; // hours
    const b3 = 621.8839; // payment
    const b4 = -0.0764; // cost:gulf
    const b5 = 0.0915; // cost:hunt
    const b6 = -3.8486; // hours:payment

    // Do some calculations
    let calculation = b0 + b1*cost + b2*hours + b3*payment + b4*cost*gulf + b5*cost*hunt + b6*hours*payment;

    // Update the prediction
    printIt.innerHTML = "$" + Math.round(calculation);
}