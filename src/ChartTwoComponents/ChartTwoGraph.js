
import { Line } from 'react-chartjs-2';



const ChartTwoGraph = ({graphTwoData}) =>{
    
    let amountArr = [];

    graphTwoData.forEach(data=>{
        amountArr = [...amountArr, data.amount];
    })

    return(
        <div className = 'chart--container'>
            <Line
                data = {{
                    labels: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'amount',
                        data: amountArr,
                        backgroundColor: ["red"],
                        borderColor: ["green"],
                        borderWidth: 2,
                        lineTension: 0.4
                    },
                    {
                        label: 'target',
                        data: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
                        backgroundColor: ["orange"],
                        borderColor: ["blue"],
                        borderWidth: 2,
                        lineTension: 0.4
                    }]
                }}
                    height = {350}
                    width = {900}
                    options = {{
                        animation: {
                            duration: 0
                        },
                        maintainAspectRatio: false,
                        scales : {
                            y : {
                                beginAtZero: true
                            }
                        }
                }}
            />
    </div>

    );
}

export default ChartTwoGraph;