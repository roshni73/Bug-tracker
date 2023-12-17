import React, { useState, useEffect } from 'react';
import { Chart as Chartjs } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
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

    const bugCounts = bugs.reduce((counts, bug) => {
        counts[bug.status]++;
        return counts;
    }, { Open: 0, 'In progress': 0, Closed: 0 });

    const data = {
        labels: ["Open", "InProgress", "Complete"],
        datasets: [{
            label: "No of Bugs",
            data: Object.values(bugCounts),
        }],
    };

    return (
        <section className="dashboard">
                <Badge icon="fas fa-bug" text="Active Bugs" count={bugCounts.Open} />
                <Badge icon="fas fa-spinner" text="Running Bugs" count={bugCounts['In progress']} />
                <Badge icon="fas fa-check-circle" text="Completed Bugs" count={bugCounts.Closed} />
            
            <div className="pie-chart">
                <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </section>
    );
}

export default Dashboard;