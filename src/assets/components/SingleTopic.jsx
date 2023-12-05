import axios from 'axios';
import React from 'react';

const SingleTopic = ({ topic, removeDeleteDataFromState, updateStateForUpDownVote }) => {

    // Delete HTTP Request
    const handleDeleteTopic = () => {
        axios.delete(`http://localhost:5000/topics/${topic._id}`)
            .then(res => {
                if (res.status == 204) {
                    removeDeleteDataFromState(topic._id)
                }
            })
    }


    const handleUpVote = () => {
        axios.put(`http://localhost:5000/topics/${topic._id}/up`)
            .then(res => {
                updateStateForUpDownVote(res.data)
            })
    }
    const handleDownVote = () => {
        axios.put(`http://localhost:5000/topics/${topic._id}/down`)
            .then(res => {
                updateStateForUpDownVote(res.data)
            })
    }

    return (
        <div className="mt-10 border py-3 w-2/3 mx-auto my-10 flex justify-between items-center px-5">
            <div className="flex gap-x-7 items-center">
                {/* <!-- Vote section --> */}
                <div className="flex flex-col justify-center items-center gap-4">
                    {/* <!-- Upvote --> */}
                    <span
                        onClick={handleUpVote}
                        className="cursor-pointer bg-gray-200 rounded hover:bg-gray-400 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                            />
                        </svg>
                    </span>

                    <p className="font-medium">{topic.score}</p>

                    {/* <!-- DownVote --> */}
                    <span
                        onClick={handleDownVote}
                        className="cursor-pointer bg-gray-200 rounded hover:bg-gray-400 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                            />
                        </svg>
                    </span>
                </div >

                {/* < !--Title and date created-- > */}
                <div>
                    <h2 className="text-lg">{topic.title}</h2>
                    <p style={{ fontSize: "xx-small" }} className="mt-3">
                        CREATED ON
                        <span className="font-bold ms-3"></span>

                    </p>
                </div>
            </div >

            {/* < !--Delete topic-- > */}
            < span className='cursor-pointer' onClick={handleDeleteTopic} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                </svg>
            </ span>
        </div >
    );
};


export default SingleTopic;