import React, { useState } from 'react';
import { useEffect } from 'react';

const DynamicForm = ({ formData, formType, onSubmit, onClose }) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (field, value) => {
        console.log(field, value);
        console.log(formValues);
        setFormValues({ ...formValues, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValuesCopy = { ...formValues, type: formType };
        onSubmit(formValuesCopy);
    };

    useEffect(() => {
        const currentFormData = formData[formType];
        let formValuesCopy = {};
        Object.keys(currentFormData).forEach((field) => {
            const { type, options } = currentFormData[field];
            if (type === 'select') {
                formValuesCopy[field] = options[0];
            } else {
                formValuesCopy[field] = null;
            }

        });
        setFormValues(formValuesCopy);
    }, [])

    const currentFormData = formData[formType];

    if (!currentFormData) {
        return <div>Error: Form type not found.</div>;
    }

    return (
        <div className="bg-white py-4 mt-44 pb-60 ">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">ADD {formType.toUpperCase()}</h2>
                    {Object.keys(currentFormData).map((field, fieldIndex) => {
                        const { label, type, unit, options } = currentFormData[field];
                        return (
                            <div key={fieldIndex} className="mb-2">
                                <label className="block text-sm font-medium text-gray-600">{label}</label>
                                {type === 'select' ? (
                                    <select
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    >
                                        {options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={type}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                )}
                                {/* {unit && <p className="text-xs text-gray-500">{unit}</p>} */}
                            </div>
                        );
                    })}
                </div>
                <div className='my-8'></div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
                <button onClick={()=>onClose()} className="mx-4 bg-red-500 text-white px-4 py-2 rounded-md">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default DynamicForm;
