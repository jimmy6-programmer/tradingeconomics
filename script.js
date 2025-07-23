// Initialize Lottie loader
const loader = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json' // Lottie animation link
  });
  
  let chart = null;
  
  async function getGDPData() {
    const country1 = document.getElementById('country1').value;
    const country2 = document.getElementById('country2').value;
  
    // Show loader
    document.getElementById('loader').style.display = 'block';
    loader.play();
  
    try {
      const response = await fetch(`http://127.0.0.1:5000/gdp?countries=${country1},${country2}`);
  
      if (!response.ok) throw new Error("Failed to fetch GDP data.");
  
      const data = await response.json();
  
      const labels = Object.keys(data);
      const values = Object.values(data);
  
      // Update Chart
      updateChart(labels, values);
  
      // Update Table
      updateTable(labels, values);
  
    } catch (error) {
      console.error("Error fetching GDP data", error);
      alert("Error fetching GDP data");
    } finally {
      // Hide loader
      loader.stop();
      document.getElementById('loader').style.display = 'none';
    }
  }
  
  function updateChart(labels, values) {
    const ctx = document.getElementById('gdpChart').getContext('2d');
  
    if (chart) chart.destroy();
  
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'GDP Growth (%)',
          data: values,
          backgroundColor: ['#4e79a7', '#f28e2c'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'GDP Growth Comparison',
            font: { size: 18 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '% Growth'
            }
          }
        }
      }
    });
  }
  
  function updateTable(labels, values) {
    const tbody = document.querySelector("#gdpTable tbody");
    tbody.innerHTML = '';
  
    labels.forEach((country, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${country}</td><td>${values[i]}</td>`;
      tbody.appendChild(row);
    });
  }
  