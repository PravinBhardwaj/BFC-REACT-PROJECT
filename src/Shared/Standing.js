import React, { useState } from 'react'


const isl=   [
        
            
                
    {   
        "year":"2022",
        "name":"Mumbai City FC",
        "code":"MCFC",
        "country":"India",
        "MPlayed":20,
        "Won":14,
        "Lost":2,
        "Draw":4,
        "Scored":54,
        "Conceded":21,
        "GDone":33,
        "Points":46,
        "Pos":1
    },
    {
        "year":"2022",
        "name":"Hyderabad FC",
        "code":"HFC",
        "country":"India",
        "MPlayed":20,
        "Won":13,
        "Lost":4,
        "Draw":3,
        "Scored":36,
        "Conceded":16,
        "GDone":20,
        "Points":42,
        "Pos":2
    },
    {
        "year":"2022",
        "name":"MohunBagan SC",
        "code":"MBSC",
        "country":"India",
        "MPlayed":20,
        "Won":10,
        "Lost":6,
        "Draw":4,
        "Scored":24,
        "Conceded":17,
        "GDone":7,
        "Points":34,
        "Pos":3
    },
    {
        "year":"2022",
        "name":"Bengaluru FC",
        "code":"BFC",
        "country":"India",
        "MPlayed":20,
        "Won":11,
        "Lost":8,
        "Draw":1,
        "Scored":27,
        "Conceded":23,
        "GDone":4,
        "Points":34,
        "Pos":4
    },
    {
        "year":"2022",
        "name":"Kerala Blasters FC",
        "code":"KBFC",
        "country":"India",
        "MPlayed":20,
        "Won":10,
        "Lost":9,
        "Draw":1,
        "Scored":28,
        "Conceded":28,
        "GDone":0,
        "Points":31,
        "Pos":5
    },
    {
        "year":"2022",
        "name":"Odisha FC",
        "code":"OFC",
        "country":"India",
        "MPlayed":20,
        "Won":9,
        "Lost":8,
        "Draw":3,
        "Scored":30,
        "Conceded":32,
        "GDone":-2,
        "Points":30,
        "Pos":6
    },
    {
        "year":"2022",
        "name":"FC Goa",
        "code":"FCG",
        "country":"India",
        "MPlayed":20,
        "Won":8,
        "Lost":9,
        "Draw":3,
        "Scored":36,
        "Conceded":35,
        "GDone":"1",
        "Points":27,
        "Pos":7
    },
    
    {
        "year":"2022",
        "name":"Chennaiyin FC",
        "code":"CFC",
        "country":"India",
        "MPlayed":20,
        "Won":7,
        "Lost":7,
        "Draw":6,
        "Scored":36,
        "Conceded":37,
        "GDone":-1,
        "Points":27,
        "Pos":8
    },
    {
        "year":"2022",
        "name":"East Bengal FC",
        "code":"EBFC",
        "country":"India",
        "MPlayed":20,
        "Won":6,
        "Lost":13,
        "Draw":1,
        "Scored":22,
        "Conceded":38,
        "GDone":-16,
        "Points":19,
        "Pos":9
    },                
    {
        "year":"2022",
        "name":"Jamshedpur FC",
        "code":"JFC",
        "country":"India",
        "MPlayed":20,
        "Won":5,
        "Lost":11,
        "Draw":4,
        "Scored":21,
        "Conceded":32,
        "GDone":"-11",
        "Points":19,
        "Pos":10
    },
    {
        "year":"2022",
        "name":"NorthEast United FC",
        "code":"NUFC",
        "country":"India",
        "MPlayed":20,
        "Won":1,
        "Lost":17,
        "Draw":2,
        "Scored":20,
        "Conceded":55,
        "GDone":-35,
        "Points":5,
        "Pos":11
    },
    {
    "year":"2021",
    "name":"Jamshedpur FC",
    "code":"JFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"13",
    "Lost":"3",
    "Draw":"4",
    "Scored":"42",
    "Conceded":"21",
    "GDone":"21",
    "Points":"43",
    "Pos":"1"
},
{
    "year":"2021",
    "name":"Hyderabad FC",
    "code":"HFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"11",
    "Lost":"4",
    "Draw":"5",
    "Scored":"43",
    "Conceded":"23",
    "GDone":"20",
    "Points":"38",
    "Pos":"2"
},
{
    "year":"2021",
    "name":"MohunBagan SC",
    "code":"MBSC",
    "country":"India",
    "MPlayed":"20",
    "Won":"10",
    "Lost":"3",
    "Draw":"7",
    "Scored":"37",
    "Conceded":"26",
    "GDone":"11",
    "Points":"37",
    "Pos":"3"
},

{
    "year":"2021",
    "name":"Kerala Blasters FC",
    "code":"KBFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"9",
    "Lost":"4",
    "Draw":"7",
    "Scored":"34",
    "Conceded":"24",
    "GDone":"10",
    "Points":"34",
    "Pos":"4"
},
{
    "year":"2021",
    "name":"Mumbai City FC",
    "code":"MCFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"9",
    "Lost":"7",
    "Draw":"4",
    "Scored":"36",
    "Conceded":"31",
    "GDone":"5",
    "Points":"31",
    "Pos":"5"
},
{
    "year":"2021",
    "name":"Bengaluru FC",
    "code":"BFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"8",
    "Lost":"7",
    "Draw":"5",
    "Scored":"32",
    "Conceded":"27",
    "GDone":"5",
    "Points":"29",
    "Pos":"6"
},
{
    "year":"2021",
    "name":"Odisha FC",
    "code":"OFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"6",
    "Lost":"9",
    "Draw":"5",
    "Scored":"31",
    "Conceded":"43",
    "GDone":"-12",
    "Points":"23",
    "Pos":"7"
},
{
    "year":"2021",
    "name":"Chennaiyin FC",
    "code":"CFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"5",
    "Lost":"10",
    "Draw":"5",
    "Scored":"17",
    "Conceded":"35",
    "GDone":"-18",
    "Points":"20",
    "Pos":"8"
},
{
    "year":"2021",
    "name":"FC Goa",
    "code":"FCG",
    "country":"India",
    "MPlayed":"20",
    "Won":"4",
    "Lost":"9",
    "Draw":"7",
    "Scored":"29",
    "Conceded":"35",
    "GDone":"-6",
    "Points":"19",
    "Pos":"9"
},
{
    "year":"2021",
    "name":"NorthEast United FC",
    "code":"NUFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"3",
    "Lost":"12",
    "Draw":"5",
    "Scored":"25",
    "Conceded":"43",
    "GDone":"-18",
    "Points":"14",
    "Pos":"10"
},
{
    "year":"2021",
    "name":"East Bengal FC",
    "code":"EBFC",
    "country":"India",
    "MPlayed":"20",
    "Won":"1",
    "Lost":"11",
    "Draw":"8",
    "Scored":"18",
    "Conceded":"36",
    "GDone":"-18",
    "Points":"11",
    "Pos":"11"
}


]
const Standing =()=>{

    const [yearFilter, setYearFilter] = useState(null);
    
    const handleYearFilter = (event) => {
        const selectedYear = event.target.value;
        setYearFilter(selectedYear ? parseInt(selectedYear, 10) : null);
      };

      const tablestyle={
                    border:"1px solid black",
                    padding:"10px",
                    textaling:"center "
                }  
                const filteredData = yearFilter
                ?  isl.filter((item) => item.year === yearFilter)
                : isl; 
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start',marginTop:'100px' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
            <select value={yearFilter || " "} onChange={handleYearFilter}>
                 <option value="2022 ">IndianSuperLeague2022-23</option>
                 <option value="2021 ">IndianSuperLeague2021-22</option>
            </select>
            </div>
           
            <table style={tablestyle}> 
                    <thead style={tablestyle}>
                        <tr>
                            <th style={tablestyle}>Pos</th>
                            <th style={tablestyle}>Club</th>
                            <th style={tablestyle}>M</th>
                            <th style={tablestyle}>W</th>
                            <th style={tablestyle}>D</th>
                            <th style={tablestyle}>L</th>
                            <th style={tablestyle}>GF</th>
                            <th style={tablestyle}>GA</th>
                            <th style={tablestyle}>GD</th>
                            <th style={tablestyle}>PTS</th>
                        </tr>

                    </thead>
                    
                    <tbody>
                    {filteredData.map((item,elem) =>{
                        return(
//  console.log(item.Pos),
 <tr key={elem}>
 <td style={tablestyle}>{item.Pos}</td>
 <td style={tablestyle}>{item.name}</td>
 <td style={tablestyle}>{item.MPlayed}</td>
 <td style={tablestyle}>{item.Won}</td>
 <td style={tablestyle}>{item.Draw}</td>
 <td style={tablestyle}>{item.Lost}</td>
 <td style={tablestyle}>{item.Scored}</td>
 <td style={tablestyle}>{item.Conceded}</td>
 <td style={tablestyle}>{item.GDone}</td>
 <td style={tablestyle}>{item.Points}</td>
</tr>
                        )
                    } 
                        
                )}
                    </tbody>
                </table>
           
        </div>
    )
}
    export default Standing

   