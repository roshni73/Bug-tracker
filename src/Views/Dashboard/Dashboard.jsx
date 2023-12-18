import React, { useState, useEffect } from 'react';
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import Badge from '../Badge/Badge';
import './Dashboard.css';

const Dashboard = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('formData');
        if (localStorageData) {
            setBugs(JSON.parse(localStorageData));
        }
    }, []);

    const bugStatusCounts = bugs.reduce((counts, bug) => {
        counts[bug.status]++;
        return counts;
    }, { Open: 0, 'In progress': 0, Closed: 0 });

    const bugPriorityCounts = bugs.reduce((counts, bug) => {
        counts[bug.priority]++;
        return counts;
    },
        { High: 0, Medium: 0, Low: 0 }
    );

    const bugStatusCountsValues = Object.values(bugStatusCounts);
    const isAllZeroStatus = bugStatusCountsValues.every(val => val === 0);

    const data = {
        labels: ["Open", "InProgress", "Complete"],
        datasets: [{
            label: "No of Bugs",
            data: isAllZeroStatus ? [1, 1, 1] : bugStatusCountsValues,
            backgroundColor: isAllZeroStatus ? ['transparent', 'transparent', 'transparent'] : ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
    };

    const priorityData = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                label: 'Priority of Bugs',
                data: Object.values(bugPriorityCounts),
                backgroundColor: ['#e27164', ' #ecc66c', ' #48a16d'],
            },
        ],
    };

    return (
        <section className="dashboard">
            <div className="dashboard-cards">
                <Badge icon="fas fa-bug" text="Active Bugs" count={bugStatusCounts.Open} />
                <Badge icon="fas fa-spinner" text="Running Bugs" count={bugStatusCounts['In progress']} />
                <Badge icon="fas fa-check-circle" text="Completed Bugs" count={bugStatusCounts.Closed} />
            </div> 
            <div className="dashboard-charts"> 
                <div className="pie-chart">
                    <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                 </div>
                <div className="bar-chart">
                    <Bar data={priorityData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;