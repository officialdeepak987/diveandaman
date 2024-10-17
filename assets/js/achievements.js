// Function to animate counters
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current + (id === "count1" ? "%" : "+");
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start counting when the page loads
window.onload = function () {
    animateCounter("count1", 0, 100, 2000);  // Happy Clients
    animateCounter("count2", 0, 50, 2000);   // Expert Instructors
    animateCounter("count3", 0, 1278, 2000); // Positive Reviews
    animateCounter("count4", 0, 40, 2000);   // Awards Win
}