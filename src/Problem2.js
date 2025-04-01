import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Problem2 = () => {
    const [recordlist, setRecordList] = useState([]);
   //const [recordobj, setRecordobj] = useState[{}]
    //"name":""
    // "height": "",
    // "mass": "",
    // "hair_color": "",
    // "skin_color": "",
    // "eye_color": "",
    // "birth_year": "",
    // "gender": "",
    // "homeworld": "",
    // "films": [
    //     "",
    //     "",
    //     "",
    //     ""
    // ],
    // "species": [],
    // "vehicles": [
    //     "https://swapi.dev/api/vehicles/14/",
    //     "https://swapi.dev/api/vehicles/30/"
    // ],
    // "starships": [
    //     "https://swapi.dev/api/starships/12/",
    //     "https://swapi.dev/api/starships/22/"
    // ],
    // "created": new Date(),
    // "edited": new Date(),
    // "url": ""
   

    useEffect(() => {
        getRecords();
    }, [])

    const AddRecord = async () => {
        const response = await axios
            .post("https://swapi.dev/api/people/1");
        if (response) {
            alert("Record Added successfully");
        } else {
            alert("error on adding record");
        }
    }

    const getRecords = async () => {
        const response = await axios
            .get("https://swapi.dev/api/people/1")
        setRecordList(response.data);
    }

    const onDelete = async () => {
        const response = await axios.delete("");
        if (response) {
            alert("Record deleted successfully");
        } else {
            alert("error on deleting record");
        }
    }

    const onEdit = (data) => {
     // setRecordobj(data)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={() => getRecords()}>Get Record</button>
            <button className='btn btn-primary' onClick={() => AddRecord()}>Add Record</button>
            {JSON.stringify(recordlist)}
            <div className='card'>
                <div className='row'>
                <div className='col-8'>
                    <div className='card-header'>
                        <h2>Record List</h2>
                    </div>
                    <div className='card-body'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>RecordName</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    recordlist?.map((record,index)=>{
                                        return(<tr>
                                            <td>{record.name}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-4'>

                </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                    <div className='card-header'>
                    <h2>Add Record</h2>
                    </div>
                    </div>
                  <div className='col-4'>
                  <div className='card-body'>
                    <h3>Record Form</h3>
                    <div>
                  </div>
                  
                        <label></label>
                        <input/>
                    </div>
                    </div>
                </div>
             

            </div>
        </div>
    )
}

export default Problem2
