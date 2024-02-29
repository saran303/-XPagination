import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './Components/Records';
import Pagination from './Components/Pagination';
// import Records from './components/Records';
// import Pagination from './components/Pagination';

function App() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    const apiUrl = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  const getData = async() => {
    try{
      const res = await axios.get(apiUrl);
      setData(res.data)
      setLoading(false)
    }catch(err){
      console.log(err);
      alert("Failed data fetch:" + {err})
    }
  }
  
  useState(() => {
    getData();
  },[])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            {loading ? "Loading Data" : <div>
            <Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>}
        </div>
    );
}

export default App;