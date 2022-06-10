import React from 'react'
import { useState } from 'react'

function useForm(initialData) {

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }
  return {
    formData,
    setFormData,
    handleChange
}
}

export default useForm