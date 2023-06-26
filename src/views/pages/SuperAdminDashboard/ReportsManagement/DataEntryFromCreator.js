import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import $ from "jquery";
import { useEffect } from 'react';
import './FormBuilder.scss'
// import '../../../components/Button/Button.scss'

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");


const DataEntryFromCreator = () => {
	const fb = useRef();
	const formData = [];

	useEffect(() => {
		$(fb.current).formBuilder({ formData });
	}, [])
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Verified Data Entry From creator</h1>
				<div className='repeat-white-bx'>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="form_name"
									placeholder="Enter Form Name"
									pattern=".{1,}"
									error="Form Name Required!"
									required="required"
									labelText="Form Name"
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="services_ind"
									required="required"
									labelText="Sub Service"
									error="Please Select Sub Service!"
									optionData={
										<>
											<option value="" hidden>Select Industry</option>
											<option value="">Degree Education</option>
											<option value="">Employment</option>
											<option value="">Kenya Criminal History</option>
										</>
									}
								/>
							</div>
						</div>
						<div id="fb-editor" ref={fb} />
					</Form>
				</div>

			</section>
		</>
	);
}

export default DataEntryFromCreator
