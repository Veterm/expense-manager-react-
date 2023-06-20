import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as CartJS } from 'chart.js/auto';
import empty from "../img/empty.png"



function Statistics({chartData, income, comparsion}){
    
 

    const lupa = <div className="flex px-20 py-4  ">
  <img className=" " src={empty} alt="" />
</div>;
  //  console.log(chartData.labels)
  //  console.log(chartData.datasets)
    return(
        <div className="mt-4">
        <div className="flex text-zinc-300 text-lg justify-between">
        <h1 className="  mb-1 ml-6 " >Comparison</h1>
        <h1 className="  mb-1 mr-6 " >Statistics</h1>
        </div>
        <div className=" flex  flex-wrap   justify-between  ">
            
            <div className="bg-white w-auto rounded-lg h-56">
            <Bar data={comparsion} options={ {
                    plugins: {
                      title: {
                        display: true,
                        text: "Monthly Comparison"
                      },
                        legend: {
                          display: true,
                          position: 'top',
                        }
                      }
                    }}/>
            </div>
            
            <div className="flex bg-white w-auto rounded-lg h-56 justify-between">
            
            {chartData.labels.length == 0 ? <div className='flex flex-col my-20 ml-24  text-pink-900 font-bold'>No data for expense statistics{lupa}</div>:       <Doughnut data={chartData} options={ {
                    plugins: {
                      title: {
                        display: true,
                        text: "Expenses  (PLN)"
                      },
                        legend: {
                          display: true,
                          position: 'left',
                        }
                      }
                    }}/>}

      
{income.labels.length == 0 ? <div className='flex flex-col my-20 mr-24  text-pink-900 font-bold'>No data for income statistics{lupa}</div> :
  <Line data={income} options={ {
                    plugins: {
                      title: {
                        display: true,
                        text: "Revenue (PLN)"
                      },
                        legend: {
                          display: true,
                          position: 'top',
                        }
                      }
                    }}/> }
                    
            </div>
        </div>
        </div>
    )
}
export default Statistics;