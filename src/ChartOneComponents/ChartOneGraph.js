
import { Line } from 'react-chartjs-2';



const ChartOneGraph = ({graphOneData}) =>{
    
    let amountArr = [];

    graphOneData.forEach(data=>{
        amountArr = [...amountArr, data.amount];
    })

    return(
        <div>
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
                    }]
                }}
                    height = {400}
                    width = {600}
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

export default ChartOneGraph;