import React, { useState, useEffect } from 'react';
import { convertWordsToTitleCase } from '../../services/utils';
import { images } from '../../services/assets';

const DynamicForm = ({ formData, formType, onSubmit, onClose }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (field, value) => {
    console.log(field, value);
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
  }, [formData, formType]);

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
            const { label, type, helperText, options, conditions, data } = currentFormData[field];

            if (conditions && conditions.dependsOn && conditions.showIf) {
              const dependentFieldValue = formValues[conditions.dependsOn];
              if (dependentFieldValue !== conditions.showIf) {
                return null;
              }
            }

            if (type === 'conditional-select') {
              const conditionalOptions = formData[formType][field].selections[formValues[formData[formType][field]['dependsOn']]];
              console.log(conditionalOptions)
                return (
                !conditionalOptions ? <></>: <div key={fieldIndex} className="mb-2">
                  <label className="block text-sm font-medium text-gray-600">{conditionalOptions.label}</label>
                  <select
                  required
                    value={formValues[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="null">Select</option>
                    {conditionalOptions.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {convertWordsToTitleCase(option)}
                      </option>
                    ))}
                  </select>
                  {conditionalOptions.helperText && <p className="text-xs text-gray-500">{conditionalOptions.helperText}</p>}
                </div>
              );
            }

            if (type === 'grid') {
              return (
                <div key={fieldIndex} className="mb-2">
                  <label className="block text-sm font-medium text-gray-600">{label}</label>
                  <div className="grid grid-cols-2 gap-4">
                    {type === 'grid' && data &&
                      data.map((item, index) => (
                        <label
                          key={index}
                          className={`flex items-center justify-center cursor-pointer border  rounded-lg p-4 transition duration-300 ease-in-out hover:shadow-md ${formValues[field] === item.name ? 'border-blue-500' : 'border-gray-200'}`}
                        >
                          <input
                            type="radio"
                            name={field}
                            value={item.name}
                            onChange={(e) => handleChange(field, item.name)}
                            className="sr-only"
                          />
                          <div className="w-full text-center">
                            <img src={images[formType + '_' + item.image]} alt={item.name} className="w-24 h-24 object-cover mx-auto mb-2 rounded-md" />
                            <p className="text-sm font-medium text-gray-600">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </label>
                      ))
                    }
                  </div>
                  {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
                </div>
              );
            }

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
                        {convertWordsToTitleCase(option)}
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
                {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
              </div>
            );
          })}
        </div>
        <div className="my-8"></div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
        <button onClick={() => onClose()} className="mx-4 bg-red-500 text-white px-4 py-2 rounded-md">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
