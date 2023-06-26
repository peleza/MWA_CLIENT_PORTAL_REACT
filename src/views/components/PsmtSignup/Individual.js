import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { InputText } from '../InputText/InputText';
import { useDispatch, useSelector } from 'react-redux';
import {ClientRegisterAction} from '../../../redux/actions/AdminClientActions'

function Individual(props) {
    console.log("individual called ")
    const [Password, SetPassword] = useState(false);
    const [ConfirmPassword, SetConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const clientResponse = useSelector(state => state)
    console.log("Selector data is ",clientResponse)
    const [state, setState] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number_ind :"",
        id_number : "",
        email_id : "",
        certif_id_img : "",
        password : "",
        cnf_password : "",
    });
    console.log("state is",state)

    const ShowPassword = () => {
        SetPassword(!Password);
    };

    const ConfirmShowPassword = () => {
        SetConfirmPassword(!ConfirmPassword);
    };
    const stateHandler = (key, value) => {
        state[key] = value;
        setState({ ...state });
      };
  
    const SignUPSubmit = (e) => {
        console.log("e is ", e)
        e.preventDefault()
        let formData = new FormData()
        formData.append("first_name",state.first_name);
        formData.append("middle_name",state.middle_name);
        formData.append("last_name",state.last_name);
        formData.append("phone_no", state.phone_number_ind);
        formData.append("id_number", state.id_number);
        formData.append("email_id", state.email_id);
        formData.append("type", 2);
        formData.append("regType", "2");
        formData.append("role_id", "4");
        formData.append("parent_id", "5");
        formData.append("comp_incop_certif_url", state.certif_id_img);

        dispatch(ClientRegisterAction(formData))
    }
    return (
        <>
            <div className="row low-space-row">
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="fName"
                        placeholder="First Name"
                        label=""
                        hasLabel={true}
                        onChange={({ target }) =>
                        stateHandler("first_name", target.value)
                      }
                        value = {state.first_name}
                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="mName"
                        placeholder="Middle Name"
                        label=""
                        hasLabel={true}
                        onChange={({ target }) =>
                        stateHandler("middle_name", target.value)
                      }
                        value = {state.middle_name}

                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="lName"
                        placeholder="Last Name"
                        label=""
                        hasLabel={true}
                        onChange={({ target }) =>
                        stateHandler("last_name", target.value)
                      }
                        value = {state.last_name}

                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="number"
                        name="id_number"
                        placeholder="ID Number"
                        label=""
                        hasLabel={true}
                        onChange={({ target }) =>
                        stateHandler("id_number", target.value)
                      }
                        value = {state.id_number}

                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="phone_number_ind"
                        placeholder="Phone Number"
                        label=""
                        hasLabel={true}
                        value ={state.phone_number_ind}
                        onChange={({ target }) =>
                        stateHandler("phone_number_ind", target.value)
                      }
                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="email"
                        name="email_id"
                        placeholder="Email Address"
                        label=""
                        hasLabel={true}
                        onChange={({ target }) =>
                        stateHandler("email_id", target.value)
                      }
                        value = {state.email_id}
                    />
                </div>
                <div className='col-lg-12'>
                    <div className='file-upload-bx'>
                        <h6>Upload ID</h6>
                        <div className="file-upload">
                            <input type="file" className="custom-file-input" name = "certif_id_img"    onChange={({ target }) =>
                        stateHandler("certif_id_img", target.files[0])
                        } />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type={Password ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        isPassword="true"
                        onClick={ShowPassword}
                        ChangeClass={Password ? "show-hide active" : "show-hide"}
                        FormGroupClass="mb-2"
                        onChange={({ target }) =>
                        stateHandler("password", target.value)
                        } 
                        value = {state.password}
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type={ConfirmPassword ? "text" : "password"}
                        name="cnf_password"
                        placeholder="Confirm Password"
                        isPassword="true"
                        onClick={ConfirmShowPassword}
                        ChangeClass={ConfirmPassword ? "show-hide active" : "show-hide"}
                        onChange={({ target }) =>
                        stateHandler("cnf_password", target.value)
                        } 
                        value = {state.cnf_password}
                        FormGroupClass="mb-2"
                    />
                </div>
            </div>
            <div className='pass-instruction'>8+ characters 1 Uppercase character <br /> 1 Special Character 1 Number</div>

            <div className="remember-forgot-password">
                <label className="radio-check-btn checkbox-btn">
                    <input type="checkbox" name="t_c" />
                    <span>
                        <i></i>
                        I have read and agree with the <Link to="/" className="text-btn">Terms and Conditions of
                            use</Link>, <Link to="/" className="text-btn">Confidentiality & Privacy Policy</Link>.
                    </span>
                </label>
            </div>

            <div className="form-submit">
                <Button onClick={SignUPSubmit} className="btn-secondary" btnName="Get Started" />
            </div>
        </>
    )
}

export default Individual