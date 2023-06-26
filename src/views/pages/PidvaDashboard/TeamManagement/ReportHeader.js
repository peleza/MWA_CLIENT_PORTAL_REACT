import React from 'react';
import './ReportHeader.scss';

const ReportHeader = ({ reportName, reportCardStatus, verificationProgress, verificationProgressColor, profilePic, ReportDes, ProgressNumber }) => {
    const firstNameLatter = reportName[0].split()
    return (
        <>
            <div className={`reportHeader ${reportCardStatus}`}>
                <div className='reportCardHeader'>
                    <div className='reportImg'>
                        {profilePic ? <img src={profilePic} alt="" /> : <span className='firstNameLatter'>{firstNameLatter}</span>}
                    </div>
                    <div className='reportDetail'>
                        <h2>{reportName}</h2>
                        <span>{ReportDes}</span>
                    </div>
                    <div className='report-card-progress'>
                        <span className='profile-progress'>{ProgressNumber}%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset={verificationProgress} fill="none" stroke={verificationProgressColor} strokeWidth={4} /> </g> </svg>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ReportHeader;