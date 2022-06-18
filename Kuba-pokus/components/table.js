import data from "./data";

const column = Object.keys(data[0]);

const ThData = () =>{
    return column.map((data)=>
    {
        return <th key={data}>{data}</th>
    })
}

const tdData =() =>{
   
    return TableData.map((data)=>{
      return(
          <tr>
               {
                  column.map((v)=>{
                      return <td>{data[v]}</td>
                  })
               }
          </tr>
      )
    })
}

return (
    <table className="table">
      <thead>
       <tr>{ThData()}</tr>
      </thead>
      <tbody>
      {tdData()}
      </tbody>
     </table>
)
export default table;