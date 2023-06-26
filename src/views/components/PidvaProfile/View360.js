import React from 'react';
import DashboardOverviewBx from '../DashboardOverviewBx/DashboardOverviewBx';
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { SelectBox } from '../InputText/InputText';
Chart.register(...registerables);


export const View360 = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="KYC Checks conducted"
                        value="885"
                        icon="kyc-conducted-icon.svg"
                        color="#9B55E5"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="BGC Checks conducted"
                        value="2,691"
                        icon="bg-checked-icon.svg"
                        iconClass="white-icon"
                        color="#F9327A"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Alerts"
                        value="431"
                        icon="alerts-icon.svg"
                        color="#e93535"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Active Clients"
                        value="987"
                        icon="hires-icon.svg"
                        color="#FCC103"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Active Sub Services"
                        value="85"
                        icon="pidva-icons/complete-icon.svg"
                        color="#69C848"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Active Packages"
                        value="233"
                        icon="pidva-icons/complete-reports-icon.svg"
                        color="#35BAE9"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Candidates"
                        value="7,653"
                        icon="kyc-conducted-icon.svg"
                        color="#e97735"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Companies"
                        value="123"
                        icon="pidva-icons/interim-icon.svg"
                        color="#42DABF"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Days Average TAT"
                        value="7"
                        icon="pidva-icons/interim-past-icon.svg"
                        color="#9B55E5"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Team Members"
                        value="34"
                        icon="pidva-icons/nearing-tat-icon.svg"
                        color="#69C848"
                    />
                </div>
                <div className='col-lg-3 mb-5'>
                    <DashboardOverviewBx
                        title="Countries"
                        value="3"
                        icon="pidva-icons/in-progress-icon.svg"
                        color="#35BAE9"
                    />
                </div>
            </div>

            <div className='repeat-white-bx mt-5 pb-2'>
                <h2>Sub Services Spread
                    <SelectBox
                        name="filter_data"
                        FormGroupClass="mb-0 form-control-sm form-control-style2"
                        optionData={
                            <>
                                <option value="">Last 7 Days</option>
                                <option value="1"> Today  </option>
                            </>
                        }
                    />
                </h2>

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

                <ul className='chat-indicators mt-5'>
                    <li><span style={{ background: '#4472C4' }}></span> Employment</li>
                    <li><span style={{ background: '#FFC000' }}></span> Education</li>
                    <li><span style={{ background: '#00B050' }}></span> Identity</li>
                    <li><span style={{ background: '#7030A0' }}></span> Social Media </li>
                    <li><span style={{ background: '#F4B183' }}></span> Gap Analysis</li>
                    <li><span style={{ background: '#E0A8E9' }}></span> Site Visit</li>
                    <li><span style={{ background: '#FFFF00' }}></span> Criminal</li>
                    <li><span style={{ background: '#103247' }}></span> Global Watchlist </li>
                    <li><span style={{ background: '#C00000' }}></span> Credit </li>
                    <li><span style={{ background: '#00B0F0' }}></span> Company Registration </li>
                </ul>
                <Bar
                    data={{
                        labels: ['Employment', 'Education', 'Identity', 'Social Media', 'Gap Analysis', 'Site Visit', 'Criminal', 'Global Watchlist', 'Credit', 'Company Registration'],
                        datasets: [{
                            data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
                            backgroundColor: [
                                '#4472C4',
                                '#FFC000',
                                '#00B050',
                                '#7030A0',
                                '#F4B183',
                                '#E0A8E9',
                                '#FFFF00',
                                '#103247',
                                '#C00000',
                                '#00B0F0',
                            ],
                            borderColor: [
                                'rgba(68, 114, 196, 1)',
                                'rgba(255, 192, 0, 1)',
                                'rgba(0, 176, 80, 1)',
                                'rgba(112, 48, 160, 1)',
                                'rgba(244, 177, 131, 1)',
                                'rgba(224, 168, 233, 1)',
                                'rgba(255, 255, 0, 1)',
                                'rgba(16, 50, 71, 1)',
                                'rgba(192, 0, 0, 1)',
                                'rgba(0, 176, 240, 1)'
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
            </div>
        </>
    );
}
