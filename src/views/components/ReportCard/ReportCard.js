import React from 'react';
import './ReportCard.scss';

const ReportCard = ({ reportName, idNumber, reportDate, reportCardStatus, verificationProgress, verificationProgressColor, missingDoc, residentialAddressStatus, professionalMembershipStatus, socialMediaStatus, criminalStatus, creditStatus, employmentStatus, educationStatus, identityStatus, onClick, profilePic }) => {
    const firstNameLatter = reportName[0].split()
    return (
        <>
            <div className={`reportCard ${reportCardStatus}`} onClick={onClick}>
                <div className='reportCardHeader'>
                    <div className='reportImg'>
                        {profilePic ? <img src={profilePic} alt="" /> : <span className='firstNameLatter'>{firstNameLatter}</span>}
                    </div>
                    <div className='reportDetail'>
                        <h2>{reportName}</h2>
                        <p>ID # {idNumber}</p>
                        <span><img src="/images/tick-icon.svg" alt="icon" /> Status</span>
                    </div>
                    <div className='report-card-progress'>
                        <span className='profile-progress'>70%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset={verificationProgress} fill="none" stroke={verificationProgressColor} strokeWidth={4} /> </g> </svg>
                    </div>
                </div>

                <h3>Report Date: {reportDate}</h3>
                <ul className='verifyStatusList'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={identityStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        Identity
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={educationStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        Credit
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={employmentStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        NSSF
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={creditStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        NHIF
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={criminalStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        Criminal
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={socialMediaStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                        Social Media
                    </li>
                    {missingDoc
                        ?
                        null
                        :
                        <>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={professionalMembershipStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                                Professional Membership
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5"> <g id="tick-icon" transform="translate(-589.25 -179.25)"> <circle id="Ellipse_2369" data-name="Ellipse 2369" cx={9} cy={9} r={9} transform="translate(590 180)" fill={residentialAddressStatus} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /> </g> </svg>
                                Residential Address
                            </li>
                        </>
                    }
                </ul>
                {missingDoc &&
                    <p className='missingDoc'>Missing candidate documents</p>
                }
            </div>
        </>
    );
}


export default ReportCard;