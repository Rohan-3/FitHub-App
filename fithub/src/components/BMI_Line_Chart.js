import React from "react"
import {Line} from "react-chartjs-2"
import { Chart as Chartjs } from "chart.js/auto"


const BMILineChart=({chartData})=>
{
    return(<Line data={chartData} options={{elements:{line:{tension:0.5,}}}}/>)
}
export default BMILineChart