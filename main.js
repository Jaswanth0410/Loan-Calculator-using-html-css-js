window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculateLoan)
    })
}

function calculateLoan() {
    const principal = document.querySelector("#amount").value;
    const interest = document.querySelector("#interest").value;
    const tenure = document.querySelector("#tenure").value;

    if (!principal || !interest || !tenure) return;

    const monthlyInterest = interest / 100 / 12;
    const emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / (Math.pow(1 + monthlyInterest, tenure)- 1);

    const totalamt = emi * tenure;
    const totalinterest = totalamt - principal;

    document.querySelector('#emi').innerText = 'EMI : ₹' + emi.toFixed(2);
    document.querySelector('#totalamt').innerText = 'Total Amount: ₹' + totalamt.toFixed(2);
    document.querySelector('#totalinterest').innerHTML = 'Total Interst : ₹' + totalinterest.toFixed(2);
}