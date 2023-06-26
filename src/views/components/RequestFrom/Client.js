import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import {ClientSendEmailRegisterAction} from '../../../redux/actions/AdminClientActions'

const Client = () => {
    const [state, setState] = useState({
        emailAddress : '',
        loading : false,
    })

    const dispatch = useDispatch();
    const ServiceApiResponse = useSelector(state => state.AdminClientData.client_register_email)
    const senderData = useSelector(state => state?.auth?.set_user)

    console.log("senderData is send ",senderData.id)
    const submitData = (event) => {
  
  
        console.log("Data is called ")
        const sendData = { 
            email_id : state.emailAddress, 
            url : "http://localhost:3000/psmt/signup/",
            senderEmail : senderData.email_id,
            senderId : senderData.id,
        }
        if(state.emailAddress && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(state.emailAddress) ){
            setState({...state,loading : true})
            dispatch(ClientSendEmailRegisterAction(sendData))
        }
       
        // dispatch(ClientSendEmailRegisterAction(sendData))
    }

    useEffect(() => {
        if(ServiceApiResponse?.message == " Email Send Success"){
            setState({...state,loading : false})
        }
     }, [ServiceApiResponse])
    console.log("State is ", state)
    return (
        <>
            <div className='createClient'>
                <InputText
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    labelText="Enter Email Address of client admin"
                    FormGroupClass="mb-0"
                    pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                    error="It should be a valid email address!"
                     required="required"
                     onChange = {({target}) => {
                        setState({...state,emailAddress : target.value})
                     }}
                />
            </div>

            <Modal.Footer>
                <Button
                    btnName="Submit"
                    type="submit"
                    className="btn-secondary"
                    isDisabled={state.loading}
                    isLoading={state.loading}
                    onClick = {(event) => submitData(event)}
                />
            </Modal.Footer>
        </>
    );
}
export default Client;