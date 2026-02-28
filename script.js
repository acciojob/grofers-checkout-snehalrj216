function calculateTotal() {
  // Get all price elements using class name
  const priceElements = document.querySelectorAll(".prices");

  let total = 0;

  // Loop through each price
  priceElements.forEach(el => {
    // Convert text to number and add
    total += Number(el.innerText) || 0;
  });

  // Display result
  document.getElementById("ans").innerText = total;
}