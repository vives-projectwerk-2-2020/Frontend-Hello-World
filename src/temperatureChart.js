const xvalues = [];
const yvalues = [];



chartIt();
async function chartIt() {
    await getData();
    const ctx = document.getElementById('temperatureChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xvalues,
            datasets: [{
                label: 'Temperature',
                data: yvalues,
                fill: false,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            elements: {
                point:{
                    radius: 3
                }
            }
        }
    });
}


async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xvalues.push(year);
        const temp = columns[1];
        yvalues.push(parseFloat(temp) + 14);
        console.log(year, temp);
    })
}
