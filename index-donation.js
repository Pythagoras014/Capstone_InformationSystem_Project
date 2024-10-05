// Update the progress bar dynamically
function updateProgress(amount) {
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    
    let currentAmount = parseInt(progress.style.width) * 1000; // Example calculation
    let newAmount = currentAmount + amount;
    
    if (newAmount > 100000) newAmount = 100000;

    let percentage = (newAmount / 100000) * 100;
    progress.style.width = percentage + '%';
    progressText.textContent = `$${newAmount.toLocaleString()} raised so far!`;
}

// Custom donation amount function
function customDonation() {
    const customAmount = parseInt(document.getElementById('custom-donation').value);
    if (customAmount && customAmount >= 5) {
        updateProgress(customAmount * 100); // multiply by 100 for example
    }
}
