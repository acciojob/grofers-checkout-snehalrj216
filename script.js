function calculateTotal() {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += parseInt(price.innerText) || 0;
  });

  document.getElementById("ans").innerText = total;
}