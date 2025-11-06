import React, { useState } from 'react'
import {useNavigate} from 'react-router'

const MailBoxForm = ({onAddBox}) => {
    const navigate = useNavigate()
    const[formData,setFormData]=useState({
        boxSize: 0,
        boxHolder: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        onAddBox(formData)
        setFormData({
            boxSize:0,
            boxHolder:''
        })
        navigate('/mailboxes')
    
    }

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <>
        <h2>New Maibox</h2>
        <form onSubmit={handleSubmit}>
            
                <label htmlFor="boxHolder">Enter a Boxholder</label>
                <input type="text" id='boxHolder' name='boxHolder' onChange={handleChange} value={formData.boxHolder}/>
            
            
                <label htmlFor="boxSize">Select a Box Size</label>
                <select name="boxSize" id="boxSize" onChange={handleChange} value={formData.boxSize}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            <button type='submit'>Submit</button>
        </form>
    
    </>
  )
}

export default MailBoxForm