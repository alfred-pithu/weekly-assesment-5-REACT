import React, { useEffect, useState } from 'react';
import AddTopic from './AddTopic';
import SingleTopic from './SingleTopic';
import axios from 'axios';

const Homepage = () => {
    const [allTopics, setAllTopics] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/topics')
            .then(res => setAllTopics(res.data))

    }, [])


    // Removing deleted data from state
    const removeDeleteDataFromState = (id) => {
        const filteredArray = [...allTopics].filter(t => t._id != id)
        setAllTopics(filteredArray)
    }

    // Adding newly created topic to state
    const addNewTopicToState = (topic) => {
        setAllTopics((prev) => [...prev, topic])

    }

    const updateStateForUpDownVote = (topic) => {
        const filteredArr = [...allTopics].filter(t => t._id != topic._id)
        setAllTopics([...filteredArr, topic]);
    }

    return (
        <div >
            <AddTopic addNewTopicToState={addNewTopicToState}></AddTopic>
            <div>
                {
                    [...allTopics].sort((a, b) => b.score - a.score).map(topic => <SingleTopic updateStateForUpDownVote={updateStateForUpDownVote} removeDeleteDataFromState={removeDeleteDataFromState} topic={topic} key={topic._id}></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default Homepage;