const mainchartdata = {
  labels: ['Malaria', 'Japanese Encephalitis', 'Acute Diarrhoeal Diseases', 'Acute Respiaratory Infection', 'Viral Hepatitis'],
  datasets: [
      {
          label: ['number of people died'],
          data: [
              14624,
              7909,
              33352,
              41733,
              10254
          ],
          backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
          ]
      }
  ]
}

module.exports = mainchartdata
