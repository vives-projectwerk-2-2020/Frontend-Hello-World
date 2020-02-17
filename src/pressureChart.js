const pressurexvalues = [];
const pressureyvalues = [];



chartIt();
async function chartIt() {
    await getData();
    const ctx = document.getElementById('pressureChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: pressurexvalues,
            datasets: [{
                label: 'Pressure',
                data: pressureyvalues,
                fill: false,
                backgroundColor:
                    'rgba(0, 20, 13, 0.2)',
                borderColor:
                    'rgba(0, 20, 13, 0.2)',
                borderWidth: 1
            }]
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
        pressurexvalues.push(year);
        const temp = columns[1];
        pressureyvalues.push(parseFloat(temp) + 14);
        console.log(year, temp);
    })
}
