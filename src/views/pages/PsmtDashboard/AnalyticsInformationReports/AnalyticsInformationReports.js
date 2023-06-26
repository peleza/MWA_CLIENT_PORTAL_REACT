import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import ComingSoon from '../../../components/ComingSoon/ComingSoon';

const AnalyticsInformationReports = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTitleAction("Analytics & Information Reports"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<ComingSoon />
			</section>
		</>
	);
}

export default AnalyticsInformationReports
