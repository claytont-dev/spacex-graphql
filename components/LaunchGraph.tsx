import { ResponsiveBar } from "@nivo/bar"
import { useState, useEffect } from 'react'

const LaunchGraph = ({launchData}: any) => {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ launchByState, setLaunchByState ] = useState([])

    console.log(launchData)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    if (!isLoaded) return null

    return (
            <ResponsiveBar 
                data={launchData}
                indexBy='location.region'
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band' }}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                maxValue={65}
                isInteractive={false}
                layout='vertical'
                groupMode="grouped"
                colors={{ scheme: 'nivo' }}
                keys={['successful_launches', 'attempted_launches']}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'top',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: -50,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
    )
}

export default LaunchGraph