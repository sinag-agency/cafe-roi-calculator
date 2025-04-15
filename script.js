document.getElementById('roiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const startupCost = parseFloat(document.getElementById('startupCost').value);
  const customersPerDay = parseFloat(document.getElementById('customersPerDay').value);
  const avgSpend = parseFloat(document.getElementById('avgSpend').value);
  const monthlyCosts = parseFloat(document.getElementById('monthlyCosts').value);

  const monthlyRevenue = customersPerDay * avgSpend * 30;
  const monthlyProfit = monthlyRevenue - monthlyCosts;
  const roiMonths = Math.ceil(startupCost / (monthlyProfit || 1));

  document.getElementById('monthlyRevenue').textContent = monthlyRevenue.toFixed(2);
  document.getElementById('monthlyProfit').textContent = monthlyProfit.toFixed(2);
  document.getElementById('roiMonths').textContent = monthlyProfit > 0 ? roiMonths : 'N/A';

  document.getElementById('results').classList.remove('hidden');
});