import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { InputText } from '../InputText/InputText';
import { useHistory } from 'react-router-dom'

function 
Company(props) {
    console.log("props data is",props)
    const [Password, SetPassword] = useState(false);
	const [ConfirmPassword, SetConfirmPassword] = useState(false);
	const [signUpField, setSignUpField] = useState({
		first_name: "",
		middle_name: "",
		last_name: ""
	});
    const history = useHistory()
	const ShowPassword = () => SetPassword(!Password);
	const ConfirmShowPassword = () => SetConfirmPassword(!ConfirmPassword);
    
	const onChange = (e) => {
		const {name, checked ,value} = e.target;
		if(name == "t_c"){
			setSignUpField((preValue) => {
				return {
					...preValue,
					[name]: checked
				}
			})
		}
		else {
			setSignUpField((preValue) => {
				return {
					...preValue,
					[name]: value
				}
			})
		}
	}

	const SignUPSubmit = (e) => {
		history.push(`/psmt/company-information$`);
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
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="mName"
                        placeholder="Middle Name"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-4'>
                    <InputText
                        type="text"
                        name="lName"
                        placeholder="Last Name"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type="number"
                        name="IdNumber"
                        placeholder="ID Number"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type="number"
                        name="pNumber"
                        placeholder="Phone Number"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type="email"
                        name="email"
                        placeholder="Company Email Address"
                        label=""
                        hasLabel={true}
                        onChange={onChange}
                    />
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
                    />
                </div>
                <div className='col-lg-6'>
                    <InputText
                        type={ConfirmPassword ? "text" : "password"}
                        name="cPassword"
                        placeholder="Confirm Password"
                        isPassword="true"
                        onClick={ConfirmShowPassword}
                        ChangeClass={ConfirmPassword ? "show-hide active" : "show-hide"}
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

export default Company