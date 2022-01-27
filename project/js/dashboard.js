const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
            label: 'Order Count',
            data: [2, 3, 9, 4, 4, 4],
            backgroundColor: [
               
                'rgba(75, 192, 192)',
              
            ],
            borderColor: [
               
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0
        },
        {
            label: 'Viewer Count',
            data: [4, 10, 5, 7, 6, 8],
            backgroundColor: [
                
                '#65d29b',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 2,
            tension: 0
            
        }
    ]
    },
    options: {
        scales: {
            xAxes: [{
              display: false,
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          },
        legend: {
            display: true,
          position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        }
        
    }
});

const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(75, 192, 192)',
                '#65d29b',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                
            ],
            borderColor: [
              'rgba(75, 192, 192)',
              '#65d29b',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        },
      legend: {
          display: true,
        position: 'bottom',
          labels: {
              fontColor: '#333',
              usePointStyle: true,
          }
      }
      
  }
});

