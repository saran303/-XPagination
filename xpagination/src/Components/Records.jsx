import React from 'react'

const Records = ({data}) => {

    const tableStyle = {
        width: "100%",
        margin: "0px",
    }

    const tableHeader = {
        backgroundColor: "rgb(51, 143, 114)",
        color:"white",
        height: "40px",
    }
    // const headerRow = {
    //     display:"flex", 
    //     alignItems: "center", 
    //     justifyContent:"start",
    //     padding: "10px"
    // }
  return (  
    <table className="table" style={tableStyle}>
        <thead style={tableHeader}>
            <tr>
                <th scope='col' >ID</th>
                <th scope='col' >Name</th>
                <th scope='col' >Email</th>
                <th scope='col' >Role</th>

            </tr>
        </thead>
        <tbody >
            {data.map(item => (
                <tr style={{height:"40px"}}>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.role} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records