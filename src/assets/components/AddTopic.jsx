import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddTopic = ({ addNewTopicToState }) => {
    const [inputData, setInputData] = useState('')

    const handleSubmit = async () => {
        if (inputData) {
            const fullData = {
                title: inputData,
                score: 0,
                published_at: new Date().toISOString(),
            }
            axios.post('http://localhost:5000/topics', fullData)
                .then(res => {
                    addNewTopicToState(res.data)
                    setInputData('')
                })

        }
    }
    const handleInput = (event) => {
        event.preventDefault();
        setInputData(event.target.value.trim());

    }


    return (
        <div className=' flex justify-end me-20 gap-x-8 my-8'>
            <input value={inputData} onChange={() => handleInput(event)} className='border border-gray-300 rounded w-80  px-3' type="text" />
            <button onClick={handleSubmit} className='border px-5 py-2 rounded  text-white bg-blue-500'>Add Topic</button>
        </div>
    );
};

export default AddTopic;