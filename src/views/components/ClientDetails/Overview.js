import React from 'react';
import DashboardOverviewBx from '../DashboardOverviewBx/DashboardOverviewBx';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ClientOverview = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='repeat-white-bx'>
                        <h2> Overview </h2>
                        <div className='row'>
                            <div className='col-lg-4 mb-5'>
                                <DashboardOverviewBx
                                    title="Credits"
                                    value="1,234"
                                    icon="pidva-icons/credits-icon.svg"
                                    color="#9B55E5"
                                />
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <DashboardOverviewBx
                                    title="Interim Reports"
                                    value="2,691"
                                    icon="pidva-icons/interim-icon.svg"
                                    iconClass="white-icon"
                                    color="#F9327A"
                                />
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <DashboardOverviewBx
                                    title="BGC"
                                    value="3,456"
                                    icon="pidva-icons/bgc-servicies-icon.svg"
                                    color="#42DABF"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <DashboardOverviewBx
                                    title="Final Reports"
                                    value="885"
                                    icon="pidva-icons/reports-icon.svg"
                                    color="#FCC103"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <DashboardOverviewBx
                                    title="Alerts"
                                    value="2,69"
                                    icon="pidva-icons/alerts-icon.svg"
                                    color="#69C848"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <DashboardOverviewBx
                                    title="KYC"
                                    value="1,234"
                                    icon="pidva-icons/kyc-services-icon.svg"
                                    color="#35BAE9"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='repeat-white-bx mt-5'>
                        <h2> Metrics </h2>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <Bar
                                    data={{
                                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                        datasets: [{
                                            label: "Final Reports",
                                            type: "bar",
                                            stack: "Jan",
                                            backgroundColor: "#FCC103",
                                            data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
                                        }, {
                                            label: "BGC",
                                            type: "bar",
                                            stack: "Jan",
                                            backgroundColor: "#42DABF",
                                            data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
                                        }, {
                                            label: "Interim Reports",
                                            type: "bar",
                                            stack: "Jan",
                                            backgroundColor: "#F9327A",
                                            data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
                                        }, {
                                            label: "Credits",
                                            type: "bar",
                                            stack: "Jan",
                                            backgroundColor: "#9B55E5",
                                            data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
                                        }]
                                    }}
                                    height={125}
                                    options={{
                                        scales: {
                                            x: {
                                                stacked: true,
                                            },
                                            y: {
                                                stacked: true,
                                                beginAtZero: true
                                            }
                                        },
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        },
                                        barThickness: 25
                                    }}
                                />
                                <h4 className='mt-3 text-center mb-0'>Annual Number of Requests</h4>
                            </div>
                            <div className='col-lg-12 mt-5'>
                                <Bar
                                    data={{
                                        labels: ['ID', 'Education', 'Employment', 'Criminal', 'Company Reg', 'Credit', 'Social Media', 'Business Reg'],
                                        datasets: [{
                                            data: [12, 30, 25, 5, 12, 11, 9, 5],
                                            backgroundColor: [
                                                '#35BAE9',
                                                '#9B55E5',
                                                '#F9327A',
                                                '#FCC103',
                                                '#42DABF'
                                            ],
                                            borderColor: [
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    }}
                                    height={100}
                                    options={{
                                        scales: {
                                            y: {
                                                beginAtZero: true
                                            }
                                        },
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        },
                                        barThickness: 30
                                    }}
                                />
                                <h4 className='mt-3 text-center mb-0'>Annual Requests</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 d-flex'>
                    <div className='repeat-white-bx'>
                        <div className='clientDetails'>
                            <div className='clientProfileImg'>
                                <img src="/images/bfa-logo-xl.png" alt="logo" />
                                <h2>BFA Global Group</h2>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h4>Phone Number</h4>
                                    <p>0712 345 671</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h4>Email Address</h4>
                                    <p>ali@Codinput.co</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h4>Date Created</h4>
                                    <p>17 Oct 2021</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h4>Created By</h4>
                                    <p>Christy Yen</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h4>Date Verified</h4>
                                    <p>17 Oct 2021</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h4>Verified By</h4>
                                    <p>Jane Doe</p>
                                </div>
                                <div className='col-lg-12'>
                                    <h4>Country Of Incorporation</h4>
                                    <p>Kenya</p>
                                </div>
                                <div className='col-lg-12'>
                                    <h4>Office Address</h4>
                                    <p className='mb-0'>3rd Floor Reliance Centre, Woodvale, Westlands Nairobi Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ClientOverview;