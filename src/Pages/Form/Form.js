import React from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Form = () => {

    const [formData,setFormData] = useState({})
    const [errorName,setErrorName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [arrr,setArrr] = useState([])

    const selectedOption = e => {
        const newData = {...formData}
        newData.gender = e.target.value
        setFormData(newData)
    }
    const multiple = e => {
        const newArrr = [...arrr]
        if (e.target.checked) {
            newArrr.push(e.target.value)
        }
        setArrr(newArrr)

    }

    const handleFormData = e => {
        const field = e.target.name
        const value = e.target.value
        const newData = {...formData}
        newData[field] = value
        setFormData(newData)
    }

    
    const handleForm = e => {
        setErrorEmail('')
        setErrorName('')
        if (!formData.name) {
            setErrorName('empty name field')
            document.getElementById('name').style.border = '1px solid red'
        }else if (!formData.email) {
            setErrorEmail('empty Email field')
            document.getElementById('email').style.border = '1px solid red'
        }
        const newFormData = {...formData}
        newFormData.skill = arrr
        setFormData(newFormData)
        e.preventDefault()
        console.log(newFormData)
 
    }





    return (
        <div>
            <Container>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="w-50 mx-auto">
                        <form className="w-100 mx-auto" onSubmit={handleForm}>
                            <input className="w-100" placeholder="Your Name" onBlur={handleFormData} type="text" name="name" id="name" /><br /><br />
                            <small className="text-danger">{errorName}</small>
                            <input className="w-100" placeholder="Your Email" onBlur={handleFormData} type="email" name="email" id="email" /><br /><br />
                            <small className="text-danger">{errorEmail}</small>
                            <p className="m-0">Skills</p>
                            <div className="d-flex py-2">
                            <div className="me-3">
                                <input type="checkbox" className="form-check-input me-3" onClick={multiple}  value='javascript' name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    javascript
                                </label>
                            </div>
                            <div className="me-3">
                                <input type="checkbox" className="form-check-input me-3" onClick={multiple}  value='React' name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    React
                                </label>
                            </div>
                            <div className="me-3">
                                <input type="checkbox" className="form-check-input me-3" onClick={multiple}  value='Node' name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Node
                                </label>
                            </div>
                            </div>
                            <div className="d-flex">
                            <div className="me-3">
                                <input className="form-check-input" onClick={selectedOption}  value='Male' type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div  className="me-3">
                                <input className="form-check-input" onClick={selectedOption} value='Female' type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Form;