import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import ComingSoon from '../../../components/ComingSoon/ComingSoon';

const Recruitment = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTitleAction("Recruitment"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<ComingSoon />
			</section>
		</>
	);
}

export default Recruitment
