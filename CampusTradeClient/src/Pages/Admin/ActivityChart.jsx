import React, { useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import Chart from 'chart.js/auto';

const UserActivityChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels, // Array of labels for x-axis
                datasets: [
                    {
                        label: 'User Activity',
                        data: data.values, // Array of data points for y-axis
                        borderColor: 'blue', // Color of the line
                        backgroundColor: 'whitesmoke', // Fill color
                        fill: true,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Date',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Activity',
                        },
                    },
                },
            },
        });

        return () => {
            chart.destroy(); // Cleanup when component unmounts
        };
    }, [data]);

    return <>
            <Box
            sx={{
                width: "100%",
                maxWidth: "1350px",
                margin:"auto",
                display: "flex",
                padding: "10px 0px",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "lightsalmon",
            }}
        >
            <Typography variant="h4">User Activity</Typography>
        </Box>
    <div style={{ width: '60%', margin: 'auto' }}>

        <canvas ref={chartRef} />
    </div>
    </>;
};

export default UserActivityChart;
