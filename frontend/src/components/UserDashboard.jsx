import React, { useState, useEffect } from 'react';
import './UserDashboard.css'; // Assuming you have a CSS file to style the dashboard
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for morning and evening

function UserDashboard() {
    const [medications, setMedications] = useState([
        {
            id: 1,
            name: 'Omega 3',
            dose: '1 tablet with meals (2500mg)',
            duration: '7 Days',
            taken: true,
            timeOfDay: 'morning',
        },
        {
            id: 2,
            name: 'Amitriptyline',
            dose: '1 tablet before sleep',
            duration: '7 Days',
            taken: true,
            timeOfDay: 'evening',
        },
        {
            id: 3,
            name: 'Lemborexant',
            dose: '1 tablet 1 hour before sleep',
            duration: '30 Days',
            taken: false,
            timeOfDay: 'night',
        },
    ]);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12; // convert to 12-hour format
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    };

    return (
        <div className="user-dashboard">
            <div className="dashboard-header">
                <h2>Welcome LeBron,</h2>
                <p>{time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                <p>{formatTime(time)}</p>
            </div>

            <div className="medication-list">
                {medications.map((med) => (
                    <div className={`medication-card ${med.taken ? 'taken' : ''}`} key={med.id}>
                        <div className="med-icon">
                            {med.timeOfDay === 'morning' ? <FaSun /> : med.timeOfDay === 'night' ? <FaMoon /> : <FaSun />}
                        </div>
                        <div className="med-info">
                            <h4>{med.name}</h4>
                            <p>{med.dose}</p>
                            <p>{med.duration}</p>
                            {med.taken ? <span className="status-taken">Taken!</span> : <span className="status-not-taken">Not Taken</span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pricing-comparison">
                <h4>Pricing Comparisons</h4>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Avg. Price</th>
                        <th>Comparison Link</th>
                        <th>Order More</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Advil</td>
                        <td>200mg</td>
                        <td>$12.22</td>
                        <td><button>Compare</button></td>
                        <td><button>Order</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDashboard;
