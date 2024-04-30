import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function AddAQuestion() {
    const [topic, setTopic] = useState("")
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [correctOption, setCorrectOption] = useState("")
    const [buttonName, setButtonName] = useState("New Topic?")
    const [showTopics, setShowTopics] = useState(false)
    const [newTopic, setNewTopic] = useState(false)
    const [topics, setTopics] = useState([])
    const handleToggleAndTopicSelection=(event)=>{
        event.preventDefault();
        if(buttonName == "New Topic?"){
            setButtonName("Select an existing Topic")
            setShowTopics(false)
            setNewTopic(true)
        }else{
            setButtonName("New Topic?")
            setShowTopics(true)
            setNewTopic(false)
        }
    }
    const fetchTopics = async () => {
        try {
          const response = await axios.post('http://localhost:4000/fetchAllTheTopics', {}, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
         
          
        const data = response.data
        setTopics(data.topics)
                
        } catch (error) {
          console.error('Error fetching all dresses:', error);
        }
      };
    useEffect(()=>{
        fetchTopics()
    },[])
    return (
        <>
        <div className="container-fluid m-3">
            <form>
                <div className="mb-3">

                    { showTopics && (<select className="form-select" aria-label="Default select example">
                        <option defaultValue="none">Select a Topic</option>
                        {topics.map((topic, index)=>{
                            return <option value={topic} key={index} >{topic}</option>
                            
                        })}
                    </select>)
                    }
                    {
                        newTopic && (
                            <div className="mb-3">
                    <label htmlFor="newTopic" className="form-label">Add the New Topic Name:</label>
                    <input type="text" className="form-control" id="newTopic" />
                </div>
                        )
                    }
                    <button className='btn btn-primary mt-3' onClick={handleToggleAndTopicSelection} >{buttonName}</button>
                </div>
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">Question</label>
                    <input type="text" className="form-control" id="question" />
                </div>
                <div className="mb-3">
                    <label htmlFor="option1" className="form-label">Option1:</label>
                    <input type="text" className="form-control" id="option1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="option2" className="form-label">Option2:</label>
                    <input type="text" className="form-control" id="option2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="option3" className="form-label">Option3:</label>
                    <input type="text" className="form-control" id="option3" />
                </div>
                <div className="mb-3">
                    <label htmlFor="option4" className="form-label">Option4:</label>
                    <input type="text" className="form-control" id="option4" />
                </div>
                <div className="mb-3">
                    <label htmlFor="correctOption" className="form-label">Correct Option:</label>
                    <input type="text" className="form-control" id="option4" />
                </div>

                <button type="submit" className="btn btn-primary">Add Question</button>
            </form>
        </div>
        </>
    )
}
