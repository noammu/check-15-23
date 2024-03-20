import { createBoard } from '@wixc3/react-board';
import { ResponsiveAreaBump } from '@nivo/bump';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const data = [
    {
        id: 'JavaScript',
        data: [
            {
                x: 2000,
                y: 18,
            },
            {
                x: 2001,
                y: 16,
            },
            {
                x: 2002,
                y: 17,
            },
            {
                x: 2003,
                y: 10,
            },
            {
                x: 2004,
                y: 10,
            },
            {
                x: 2005,
                y: 30,
            },
        ],
    },
    {
        id: 'ReasonML',
        data: [
            {
                x: 2000,
                y: 30,
            },
            {
                x: 2001,
                y: 27,
            },
            {
                x: 2002,
                y: 15,
            },
            {
                x: 2003,
                y: 13,
            },
            {
                x: 2004,
                y: 16,
            },
            {
                x: 2005,
                y: 15,
            },
        ],
    },
    {
        id: 'TypeScript',
        data: [
            {
                x: 2000,
                y: 12,
            },
            {
                x: 2001,
                y: 12,
            },
            {
                x: 2002,
                y: 10,
            },
            {
                x: 2003,
                y: 14,
            },
            {
                x: 2004,
                y: 26,
            },
            {
                x: 2005,
                y: 25,
            },
        ],
    },
    {
        id: 'Elm',
        data: [
            {
                x: 2000,
                y: 18,
            },
            {
                x: 2001,
                y: 21,
            },
            {
                x: 2002,
                y: 14,
            },
            {
                x: 2003,
                y: 26,
            },
            {
                x: 2004,
                y: 19,
            },
            {
                x: 2005,
                y: 18,
            },
        ],
    },
    {
        id: 'CoffeeScript',
        data: [
            {
                x: 2000,
                y: 21,
            },
            {
                x: 2001,
                y: 21,
            },
            {
                x: 2002,
                y: 11,
            },
            {
                x: 2003,
                y: 21,
            },
            {
                x: 2004,
                y: 18,
            },
            {
                x: 2005,
                y: 16,
            },
        ],
    },
];

const data1 = [
    {
        id: 'Japan',
        data: [
            {
                x: 'Train',
                y: 55990,
            },
            {
                x: 'Subway',
                y: -35765,
            },
            {
                x: 'Bus',
                y: -55663,
            },
            {
                x: 'Car',
                y: -1488,
            },
            {
                x: 'Boat',
                y: -15335,
            },
            {
                x: 'Moto',
                y: 96943,
            },
            {
                x: 'Moped',
                y: 55388,
            },
            {
                x: 'Bicycle',
                y: -93129,
            },
            {
                x: 'Others',
                y: 23810,
            },
        ],
    },
    {
        id: 'France',
        data: [
            {
                x: 'Train',
                y: -91793,
            },
            {
                x: 'Subway',
                y: 13203,
            },
            {
                x: 'Bus',
                y: -74570,
            },
            {
                x: 'Car',
                y: 84789,
            },
            {
                x: 'Boat',
                y: -52214,
            },
            {
                x: 'Moto',
                y: -78768,
            },
            {
                x: 'Moped',
                y: 77416,
            },
            {
                x: 'Bicycle',
                y: 44112,
            },
            {
                x: 'Others',
                y: -27616,
            },
        ],
    },
    {
        id: 'US',
        data: [
            {
                x: 'Train',
                y: -68478,
            },
            {
                x: 'Subway',
                y: 31499,
            },
            {
                x: 'Bus',
                y: 25445,
            },
            {
                x: 'Car',
                y: -85261,
            },
            {
                x: 'Boat',
                y: -16740,
            },
            {
                x: 'Moto',
                y: 20595,
            },
            {
                x: 'Moped',
                y: 64525,
            },
            {
                x: 'Bicycle',
                y: -55915,
            },
            {
                x: 'Others',
                y: 18020,
            },
        ],
    },
    {
        id: 'Germany',
        data: [
            {
                x: 'Train',
                y: 88575,
            },
            {
                x: 'Subway',
                y: 47146,
            },
            {
                x: 'Bus',
                y: 59347,
            },
            {
                x: 'Car',
                y: 7234,
            },
            {
                x: 'Boat',
                y: -76548,
            },
            {
                x: 'Moto',
                y: 59742,
            },
            {
                x: 'Moped',
                y: 81188,
            },
            {
                x: 'Bicycle',
                y: -14126,
            },
            {
                x: 'Others',
                y: 77104,
            },
        ],
    },
    {
        id: 'Norway',
        data: [
            {
                x: 'Train',
                y: -15731,
            },
            {
                x: 'Subway',
                y: -98499,
            },
            {
                x: 'Bus',
                y: -15406,
            },
            {
                x: 'Car',
                y: 36392,
            },
            {
                x: 'Boat',
                y: -49051,
            },
            {
                x: 'Moto',
                y: 34189,
            },
            {
                x: 'Moped',
                y: -41283,
            },
            {
                x: 'Bicycle',
                y: -88017,
            },
            {
                x: 'Others',
                y: 64406,
            },
        ],
    },
    {
        id: 'Iceland',
        data: [
            {
                x: 'Train',
                y: 75590,
            },
            {
                x: 'Subway',
                y: 72893,
            },
            {
                x: 'Bus',
                y: -92747,
            },
            {
                x: 'Car',
                y: 17142,
            },
            {
                x: 'Boat',
                y: 23359,
            },
            {
                x: 'Moto',
                y: 52851,
            },
            {
                x: 'Moped',
                y: 14087,
            },
            {
                x: 'Bicycle',
                y: -41265,
            },
            {
                x: 'Others',
                y: -89617,
            },
        ],
    },
    {
        id: 'UK',
        data: [
            {
                x: 'Train',
                y: -28980,
            },
            {
                x: 'Subway',
                y: -96312,
            },
            {
                x: 'Bus',
                y: -96340,
            },
            {
                x: 'Car',
                y: 89614,
            },
            {
                x: 'Boat',
                y: -50812,
            },
            {
                x: 'Moto',
                y: -42760,
            },
            {
                x: 'Moped',
                y: 91966,
            },
            {
                x: 'Bicycle',
                y: -20668,
            },
            {
                x: 'Others',
                y: 43808,
            },
        ],
    },
    {
        id: 'Vietnam',
        data: [
            {
                x: 'Train',
                y: -5785,
            },
            {
                x: 'Subway',
                y: -91088,
            },
            {
                x: 'Bus',
                y: -9703,
            },
            {
                x: 'Car',
                y: -72053,
            },
            {
                x: 'Boat',
                y: -32044,
            },
            {
                x: 'Moto',
                y: 17260,
            },
            {
                x: 'Moped',
                y: 38076,
            },
            {
                x: 'Bicycle',
                y: 57902,
            },
            {
                x: 'Others',
                y: 55158,
            },
        ],
    },
];
export default createBoard({
    name: 'snippet',
    Board: () => (
        <div>
            <div style={{ width: '800px', height: '400px' }}>
                <div style={{ width: '800px', height: '400px' }}>
                    <ResponsiveHeatMap
                        data={data1}
                        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                        valueFormat=">-.2s"
                        axisTop={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: -90,
                            legend: '',
                            legendOffset: 46,
                        }}
                        axisRight={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 70,
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: -72,
                        }}
                        colors={{
                            type: 'diverging',
                            scheme: 'red_yellow_blue',
                            divergeAt: 0.5,
                            minValue: -100000,
                            maxValue: 100000,
                        }}
                        emptyColor="#555555"
                        legends={[
                            {
                                anchor: 'bottom',
                                translateX: 0,
                                translateY: 30,
                                length: 400,
                                thickness: 8,
                                direction: 'row',
                                tickPosition: 'after',
                                tickSize: 3,
                                tickSpacing: 4,
                                tickOverlap: false,
                                tickFormat: '>-.2s',
                                title: 'Value →',
                                titleAlign: 'start',
                                titleOffset: 4,
                            },
                        ]}
                    />
                </div>
                <ResponsiveAreaBump
                    data={data}
                    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
                    spacing={8}
                    colors={{ scheme: 'nivo' }}
                    blendMode="multiply"
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true,
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                        },
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'CoffeeScript',
                            },
                            id: 'dots',
                        },
                        {
                            match: {
                                id: 'TypeScript',
                            },
                            id: 'lines',
                        },
                    ]}
                    startLabel="id"
                    endLabel="id"
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -36,
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                />
            </div>
            SNIPPETTTTTTTTTT
        </div>
    ),
    isSnippet: true,
});
