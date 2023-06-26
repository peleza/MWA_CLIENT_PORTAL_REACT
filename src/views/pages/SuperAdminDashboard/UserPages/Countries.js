import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { ActiveInactiveCountryAction, AddCountryAction, EditCountryAction, GetCountryListAction } from '../../../../redux/actions/AdminCountryAction';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { InputText, FileUpload } from '../../../components/InputText/InputText';
import { BiDotsVerticalRounded, BiCommentEdit, BiCheckCircle, BiBlock } from 'react-icons/bi';

const Countries = () => {
	const dispatch = useDispatch()

	const CountryList = useSelector(state => state.AdminCountry.country_list.data)
	const CountryEditResponse = useSelector(state => state.AdminCountry.country_edit)
	const AddCountryResponse = useSelector(state => state.AdminCountry.country_add)
	const ActiveInactiveResponse = useSelector(state => state.AdminCountry.country_activeInactive)
	const isLoading = useSelector(state => state.AdminCountry.loading)

	console.log("ActiveInactiveResponse", ActiveInactiveResponse);

	const [fileName, setFileName] = useState();
	const [editCountryModal, setEditCountryModal] = useState(false);
	const [addCountryModal, setAddCountryModal] = useState(false);
	const [fieldData, setFieldData] = useState({
		country_id: '',
		country_flag: '',
		country_name: '',
		country_color: ''
	});

	console.log("fieldData", fieldData);
	console.log("CountryListNew", CountryList && CountryList);
	console.log("CountryEditResponse", CountryEditResponse);

	const editCountryModalOpen = (data) => {
		setEditCountryModal(true)
		setFieldData({
			country_id: JSON.stringify(data.id),
			country_name: data.country_name,
			country_flag: data.country_flag,
			country_color: data.country_color
		})
	}

	const editCountryModalClose = () => {
		setEditCountryModal(false)
		setFieldData({
			country_id: '',
			country_name: '',
			country_flag: '',
			country_color: ''
		})
	}

	const addCountryModalOpen = () => setAddCountryModal(true)
	const addCountryModalClose = () => setAddCountryModal(false)


	const onChange = (e) => {
		const { name, value } = e.target;
		setFieldData((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}

	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	useEffect(() => {
		dispatch(GetCountryListAction())
	}, [dispatch])

	const editCountry = (e) => {
		e.preventDefault();
		let formData = new FormData();

		formData.append('country_id', fieldData.country_id)
		formData.append('country_flag', fileName)
		formData.append('country_name', fieldData.country_name)
		formData.append('country_color', fieldData.country_color)

		dispatch(EditCountryAction(formData))
	}

	const addCountry = (e) => {
		e.preventDefault();
		let formData = new FormData();

		formData.append('country_id', fieldData.country_id)
		formData.append('country_flag', fileName)
		formData.append('country_name', fieldData.country_name)
		formData.append('country_color', fieldData.country_color)

		dispatch(AddCountryAction(formData))
	}

	const activeInactiveCountry = (data) => {
		dispatch(ActiveInactiveCountryAction(data))
	}

	useEffect(() => {
		if ((CountryEditResponse && CountryEditResponse.status === "200") || (AddCountryResponse && AddCountryResponse.status === "200") || (ActiveInactiveResponse && ActiveInactiveResponse.status === "200")) {
			dispatch(GetCountryListAction())
			setEditCountryModal(false)
			setAddCountryModal(false)
		}
	}, [CountryEditResponse, AddCountryResponse, ActiveInactiveResponse])
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'> Countries </h1>

				<MaterialTable
					title="Countries"
					columns={[
						{ title: 'S.NO', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{
							title: 'Country Name', field: 'country_name',
							render: (rowData) => {
								return (
									<>
										<span><img src={rowData.country_flag} width={30} alt="flag" /> {rowData.country_name}</span>
									</>
								)
							}
						},
						{ title: 'Code', field: 'country_code' },
						{
							title: 'Country Color', field: 'country_color',
							render: (rowData) => {
								return (
									<>
										{
											<span className="badge" style={{ background: rowData.country_color }}>{rowData.country_color}</span>
										}
									</>
								)

							}
						},
						{ title: 'Created by', field: 'created_by' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									<>
										{
											rowData.status == 1
												?
												<span className="badge badge-success">Active</span>
												:
												<span className="badge badge-danger">Deactivated</span>
										}
									</>
								)

							}
						},
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item' onClick={() => editCountryModalOpen(rowData)}><BiCommentEdit /> Edit</button>
											{rowData.status === 1 ?
												<button className='dropdown-item' onClick={() => activeInactiveCountry({ country_id: JSON.stringify(rowData.id), status: 2 })}><BiBlock /> Deactivate</button>
												:
												<button className='dropdown-item' onClick={() => activeInactiveCountry({ country_id: JSON.stringify(rowData.id), status: 1 })}><BiCheckCircle /> Activate</button>
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={CountryList && CountryList}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Add Country',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { addCountryModalOpen() }
						}
					]}
				/>
			</section>

			<Modal show={addCountryModal} onHide={addCountryModalClose} className="commonModal" centered keyboard="false">
				<Modal.Header closeButton>
					<Modal.Title>Add Country</Modal.Title>
				</Modal.Header>
				<Modal.Body className='pb-0'>
					<Form onSubmit={addCountry} autoComplete="false">
						<InputText
							type="text"
							FormGroupClass="form-control-md form-control-style2"
							name="country_name"
							placeholder="Country Name"
							labelText="Country"
							onChange={onChange}
							pattern=".{1,}"
							error="Country Name Required!"
							required="required"
						/>
						<InputText
							type="text"
							FormGroupClass="form-control-md form-control-style2"
							name="country_code"
							placeholder="Country Code"
							labelText="Country"
							onChange={onChange}
							pattern=".{1,}"
							error="Country Code Required!"
							required="required"
						/>

						<div className='form-group'>
							<label htmlFor="">Pick a Color</label>
							<div className='colorPicker'>
								<input type="color" name="country_color" onChange={onChange} defaultValue="#000000" />
								<span>Choose Country Color</span>
							</div>
						</div>

						<FileUpload
							fileName={fileName && fileName.name}
							labelText="Upload Country Flag"
							onChange={getFileName}
							name="comp_incop_certif_url"
							accept='Jpeg, PNG, PDF'
							error="Please Upload Country Flag!"
						/>

						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={addCountryModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
								isDisabled={isLoading}
								isLoading={isLoading}
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>

			<Modal show={editCountryModal} onHide={editCountryModalClose} className="commonModal" centered keyboard="false">
				<Modal.Header closeButton>
					<Modal.Title>Edit Country</Modal.Title>
				</Modal.Header>
				<Modal.Body className='pb-0'>
					<Form onSubmit={editCountry} autoComplete="false">
						<InputText
							type="text"
							FormGroupClass="form-control-md form-control-style2"
							name="country_name"
							placeholder="Country Name"
							labelText="Country"
							onChange={onChange}
							pattern=".{1,}"
							defaultValue={fieldData.country_name}
							error="Country Name Required!"
							required="required"
						/>

						<div className='form-group'>
							<label htmlFor="">Pick a Color</label>
							<div className='colorPicker'>
								<input type="color" name="country_color" onChange={onChange} defaultValue={fieldData.country_color} required />
								<span>Choose Country Color</span>
							</div>
						</div>

						<FileUpload
							fileName={fileName && fileName.name}
							labelText="Upload Country Flag"
							onChange={getFileName}
							name="comp_incop_certif_url"
							accept='Jpeg, PNG, PDF'
							error="Please Upload Country Flag!"
						/>

						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={editCountryModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
								isDisabled={isLoading}
								isLoading={isLoading}
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Countries
