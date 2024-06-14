function showChaosInfo(){
      const results = <%- JSON.stringify(results) %>;
            console.log(results); // JavaScript konsolunda verileri kontrol et
            const ctx = document.getElementById('myChart').getContext('2d');
            const labels = results.map(result => `Request ${result.request}`);
            const data = results.map(result => result.responseTime === 'error' ? null : result.responseTime);

            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Response Time (ms)',
                        data: data,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value === null ? 'Error' : value;
                                }
                            }
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                const value = data.datasets[0].data[tooltipItem.index];
                                return value === null ? 'Error' : `${value} ms`;
                            }
                        }
                    }
                }
            });
}