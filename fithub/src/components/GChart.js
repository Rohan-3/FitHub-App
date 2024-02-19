import GaugeChart from 'react-gauge-chart'

const GChart=({bmi})=>
{

    
        const convertBmiToPercent = () => {
          const lowerBoundary = 15; 
          const upperBoundary = 40; 
          const clampedBmi = Math.min(Math.max(parseFloat(bmi), lowerBoundary), upperBoundary); 
          const slope = 1 / (upperBoundary - lowerBoundary); 
          const intercept = -lowerBoundary * slope; 
          const percent = slope * clampedBmi + intercept; 
          return percent;
        } ;
    
    
    return(<>
    
    <GaugeChart
    id="gauge-chart"
    nrOfLevels={4}
    percent={convertBmiToPercent()}
    colors={['#FFFF00', '#228B22','#ffa500' ,'#FF0000']}
    textColor="#000000"
    textSize= "30%"
    // formatTextValue={(value) => `${mssg}`}

    needleColor="#345243"
    needleBaseColor="#345243"
    arcPadding={0.02}
    arcWidth={0.2}
    cornerRadius={6}
    maintainAspectRatio={false}
    hideText={true}
    labels={['UnderWeight','Normal','OverWeight','Obese']}
    // marginInPercent={0.1}
  />
    
    </>)
}

export default GChart;