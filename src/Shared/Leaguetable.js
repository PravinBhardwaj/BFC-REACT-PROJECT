import React, { useState,useEffect } from 'react'
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// import CountUP from 'react-countup';
// import ScrollTriger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';
// import { keyframes } from '@emotion/react';
import bfc from './webisteimg/bfc.png';
import rgpj from './webisteimg/rgpj.png';
import kbfc from './webisteimg/kbfc.png';
import jfc from './webisteimg/jfc.png';
import ofc from './webisteimg/ofc.png';
const pointsTableData = [
    { Pos:1,year: 2022, team:'Mumbai City FC',MPlayed:20, Won:14,Lost:2,Draw:4,Scored:54,Conceded:21,GDone:33, Points:46, },
    { Pos:2,year: 2022, team: 'Hyderabad FC',MPlayed:20, Won:13,Lost:4,Draw:3,Scored:36,Conceded:16,GDone:20, Points:42,  },
    { Pos:3,year: 2022, team: 'MohunBagan SC',MPlayed:20, Won:10,Lost:6,Draw:4,Scored:24,Conceded:17,GDone:7, Points:34, },
    { Pos:4,year: 2022, team: 'Bengaluru FC',MPlayed:20, Won:11,Lost:8,Draw:1,Scored:27,Conceded:23,GDone:4, Points:34, },
    { Pos:5,year: 2022, team: 'Kerala Blasters FC',MPlayed:20, Won:10,Lost:9,Draw:1,Scored:28,Conceded:28,GDone:0, Points:31,  },
    { Pos:6,year: 2022, team: 'Odisha FC',MPlayed:20, Won:9,Lost:8,Draw:3,Scored:30,Conceded:32,GDone:-2, Points:30, },
    { Pos:7,year: 2022, team: 'FC Goa',MPlayed:20, Won:8,Lost:9,Draw:3,Scored:36,Conceded:35,GDone:1, Points:27,  },
    { Pos:8,year: 2022, team: 'Chennaiyin FC',MPlayed:20, Won:7,Lost:7,Draw:6,Scored:36,Conceded:37,GDone:-1, Points:27, },
    { Pos:9,year: 2022, team: 'East Bengal FC',MPlayed:20, Won:6,Lost:13,Draw:1,Scored:22,Conceded:38,GDone:-16, Points:19,  },
    { Pos:10,year: 2022, team: 'Jamshedpur FC',MPlayed:20, Won:5,Lost:11,Draw:4,Scored:21,Conceded:32,GDone:-11, Points:19, },
    { Pos:11,year: 2022, team: 'NorthEast United ',MPlayed:20, Won:1,Lost:17,Draw:2,Scored:20,Conceded:55,GDone:-35, Points:5,  },
    // ... more data for 2022
    
    { Pos:1,year: 2021, team: 'Jamshedpur FC',MPlayed:20, Won:13,Lost:3,Draw:4,Scored:42,Conceded:21,GDone:21, Points:43, },
    { Pos:2,year: 2021, team: 'Hyderabad FC',MPlayed:20, Won:11,Lost:4,Draw:5,Scored:43,Conceded:23,GDone:20, Points:38,  },
    { Pos:3,year: 2021, team: 'MohunBagan SC',MPlayed:20, Won:10,Lost:3,Draw:7,Scored:37,Conceded:26,GDone:11, Points:37, },
    { Pos:4,year: 2021, team: 'Kerala Blasters FC',MPlayed:20, Won:9,Lost:4,Draw:7,Scored:34,Conceded:24,GDone:10, Points:34, },
    { Pos:5,year: 2021, team: 'Mumbai City FC',MPlayed:20, Won:9,Lost:7,Draw:4,Scored:36,Conceded:31,GDone:5, Points:31,  },
    { Pos:6,year: 2021, team: 'Bengaluru FC',MPlayed:20, Won:8,Lost:7,Draw:5,Scored:32,Conceded:27,GDone:5, Points:29, },
    { Pos:7,year: 2021, team: 'Odisha FC',MPlayed:20, Won:6,Lost:9,Draw:5,Scored:31,Conceded:43,GDone:-12, Points:23,  },
    { Pos:8,year: 2021, team: 'Chennaiyin FC',MPlayed:20, Won:5,Lost:10,Draw:5,Scored:17,Conceded:35,GDone:-18, Points:20, },
    { Pos:9,year: 2021, team: 'FC Goa',MPlayed:20, Won:4,Lost:9,Draw:7,Scored:29,Conceded:35,GDone:-6, Points:19,  },
    { Pos:10,year: 2021, team: 'NorthEast United',MPlayed:20, Won:3,Lost:12,Draw:5,Scored:25,Conceded:43,GDone:-18, Points:14, },
    { Pos:11,year: 2021, team: 'East Bengal FC',MPlayed:20, Won:1,Lost:11,Draw:8,Scored:18,Conceded:36,GDone:-18, Points:11,  },
    // ... more data for 2021
    
    // Data for other years
  ];
  // const stats = {
  //   club: "Bengaluru FC",
  //   season: "2022-2023",
  //   logo: "bfc.png",
  //   results: [
  //     {
  //       matchday:" 25 April 2023",
  //       Place:"EMS Stadium,Kozhikode",
  //       opponent: "Team A",
  //       opponentLogo: "ofc.png",
  //       result: "Loss",
  //       score: "1-2",
  //       stats: {
  //         possession: {
  //           home: "52%",
  //           away: "48%",
  //         },
  //         shots: {
  //           home: 12,
  //           away: 8,
  //         },
  //         shotsOnTarget: {
  //           home: 5,
  //           away: 3,
  //         },
  //         corners: {
  //           home: 6,
  //           away: 4,
  //         },
  //         fouls: {
  //           home: 10,
  //           away: 15,
  //         },
  //         offside: {
  //           home: 3,
  //           away: 1,
  //         },
  //         yellowCards: {
  //           home: 2,
  //           away: 1,
  //         },
  //         goals: {
  //           home: 1,
  //           away: 2,
  //         },
  //       },
  //     },
  //     {
  //       matchday: "21 April 2023",
  //       Place:"EMS Stadium,Kozhikode",
  //       opponent: "jfc.png",
  //       opponentLogo: "jfc.png",
  //       result: "Win",
  //       score: "2-0",
  //       stats: {
  //         possession: {
  //           home: "48%",
  //           away: "52%",
  //         },
  //         shots: {
  //           home: 9,
  //           away: 7,
  //         },
  //         shotsOnTarget: {
  //           home: 3,
  //           away: 4,
  //         },
  //         corners: {
  //           home: 4,
  //           away: 6,
  //         },
  //         fouls: {
  //           home: 15,
  //           away: 12,
  //         },
  //         offside: {
  //           home: 1,
  //           away: 2,
  //         },
  //         yellowCards: {
  //           home: 1,
  //           away: 2,
  //         },
  //         goals: {
  //           home: 2,
  //           away: 0,
  //         },
  //       },
  //     },
  //     {
  //       matchday: "16 April 2023",
  //       Place:"EMS Stadium,Kozhikode",
  //       opponent: "Team C",
  //       opponentLogo: "kbfc.png",
  //       result: "draw",
  //       score: "1-1",
  //       stats: {
  //         possession: {
  //           home: "40%",
  //           away: "60%",
  //         },
  //         shots: {
  //           home: 6,
  //           away: 15,
  //         },
  //         shotsOnTarget: {
  //           home: 2,
  //           away: 8,
  //         },
  //         corners: {
  //           home: 2,
  //           away: 7,
  //         },
  //         fouls: {
  //           home: 12,
  //           away: 8,
  //         },
  //         offside: {
  //           home: 2,
  //           away: 3,
  //         },
  //         yellowCards: {
  //           home: 3,
  //           away: 1,
  //         },
  //         goals: {
  //           home: 1,
  //           away: 1,
  //         },
  //       },
  //     },
  //     {
  //         matchday: "12 April 2023",
  //         Place:"EMS Stadium,Kozhikode",
  //         opponent: "Team C",
  //         opponentLogo: "rgpj.png",
  //         result: "win",
  //         score: "2-0",
  //         stats: {
  //           possession: {
  //             home: "60%",
  //             away: "40%",
  //           },
  //           shots: {
  //             home: 16,
  //             away: 5,
  //           },
  //           shotsOnTarget: {
  //             home: 12,
  //             away: 3,
  //           },
  //           corners: {
  //             home: 8,
  //             away: 2,
  //           },
  //           fouls: {
  //             home: 6,
  //             away: 12,
  //           },
  //           offside: {
  //             home: 2,
  //             away: 3,
  //           },
  //           yellowCards: {
  //             home: 2,
  //             away: 3,
  //           },
  //           goals: {
  //             home: 2,
  //             away: 0,
  //           },
  //         },
  //       },
  //   ],
  // };  
  

const Leaguetable=()=>{
    const [yearFilter, setYearFilter] = useState(2022);
   
    const handleYearFilter = (event) => {
      const selectedYear = event.target.value;
      setYearFilter(selectedYear ? parseInt(selectedYear, 10) : 2022);
      // console.log(selectedYear)
    };
    
   


    const filteredData = yearFilter
      ? pointsTableData.filter((item) => item.year === yearFilter)
      : pointsTableData;

  //     const [progress, setProgress] = useState(0);

  //     useEffect(() => {
  //       const timer = setInterval(() => {
  //         setProgress((oldProgress) => {
  //           if (oldProgress === 100) {
  //             return 0;
  //           }
  //           const diff = Math.random() * 10;
  //           return Math.min(oldProgress + diff, 100);
  //         });
  //       }, 500);
    
  //       return () => {
  //         clearInterval(timer);
  //       };
  //     }, []);
    
  //     const [selectedCardIndex, setSelectedCardIndex] = useState(null);
     
  // const handleCardClick = (index) => {
  //   if (selectedCardIndex === index) {
  //     setSelectedCardIndex(null); 
  //   } else {
  //     setSelectedCardIndex(index); 
      
  //   }
  // };


  // const CustomProgressBar = ({ value }) => {
  //   const [progress, setProgress] = useState(0);
   
    
  //   useEffect(() => {
  //     setProgress(value);
  //   }, [value]);
  //   ;
  //   return (
  //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //       <LinearProgress variant="determinate" value={progress}  sx={{
  //         width: '100%',
  //         marginRight: 1,
  //         "& .MuiLinearProgress-bar": {
  //           transition: "none",
           
  //         },
  //       }} />
       
  //     </Box>
  //   );
  // };
 
    return (
      <>
      <div className='mainpage_fortable_fix'>
        <div className='leaguetable_div'>
        <div className="year-filter">

          <h1>League Standing</h1>
          <select value={yearFilter || ''} onChange={handleYearFilter}>
            {/* <option value="">All Years</option> */}
            <option value="2022" style={{color:'white',backgroundColor:'#3586ff'}}>Indian Super League 2022</option>
            <option value="2021" style={{color:'white',backgroundColor:'#3586ff'}}>Indian Super League 2021</option>
            {/* Add options for other years */}
          </select>
        </div>
        <div className="table-responsive">
        <table  className="table">
          <thead >
            <tr>
              <th >Pos</th>
              <th >Club</th>
              <th >M</th>
              <th >W</th>
              <th >D</th>
              <th >L</th>
              <th >GF</th>
              <th >GA</th>
              <th >GD</th>
              <th >PTS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                  <td >{item.Pos}</td>
                <td >{item.team}</td>
                <td >{item.MPlayed}</td>
                <td >{item.Won}</td>
                <td >{item.Draw}</td>
                <td >{item.Lost}</td>
                <td >{item.Scored}</td>
                <td >{item.Conceded}</td>
                <td >{item.GDone}</td>
                <td >{item.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>
      <div className='resultdiv'>
      <h1>Results</h1>
      <Link to='/handlelink'>
      <div className='result_card'>
                <div className='card_head'>
                  <span> 25 April 2023</span>
                </div>
                <div className='card_content'>
                  <div className='team_A'>
                    <img src={bfc} alt=""/>
                    
                  </div>
                  <div className='fulltime'>
                    <span>1</span><span className='fullT'>FT</span><span>2</span>
                  </div>
                  <div className='team_B'>
                  <img src={ofc} alt=''/>
                  
                  </div>
                </div>
                <div className='card_footer'>
                  <span>EMS Stadium,Kozhikode</span>
                </div>
          </div>
          <div className='result_card'>
                <div className='card_head'>
                  <span> 21 April 2023</span>
                </div>
                <div className='card_content'>
                  <div className='team_A'>
                    <img src={bfc} alt=""/>
                    
                  </div>
                  <div className='fulltime'>
                    <span>2</span><span className='fullT'>FT</span><span>0</span>
                  </div>
                  <div className='team_B'>
                  <img src={jfc} alt=''/>
                  
                  </div>
                </div>
                <div className='card_footer'>
                  <span>EMS Stadium,Kozhikode</span>
                </div>
          </div>    
          <div className='result_card'>
                <div className='card_head'>
                  <span> 16 April 2023</span>
                </div>
                <div className='card_content'>
                  <div className='team_A'>
                    <img src={bfc} alt=""/>
                    
                  </div>
                  <div className='fulltime'>
                    <span>1</span><span className='fullT'>FT</span><span>1</span>
                  </div>
                  <div className='team_B'>
                  <img src={kbfc} alt=''/>
                  
                  </div>
                </div>
                <div className='card_footer'>
                  <span>EMS Stadium,Kozhikode</span>
                </div>
          </div>
          <div className='result_card'>
                <div className='card_head'>
                  <span> 12 April 2023</span>
                </div>
                <div className='card_content'>
                  <div className='team_A'>
                    <img src={bfc} alt=""/>
                    
                  </div>
                  <div className='fulltime'>
                    <span>2</span><span className='fullT'>FT</span><span>0</span>
                  </div>
                  <div className='team_B'>
                  <img src={rgpj} alt=''/>
                  
                  </div>
                </div>
                <div className='card_footer'>
                  <span>EMS Stadium,Kozhikode</span>
                </div>
          </div>  
        </Link>
      </div>
     

      {/* <div className='resultdiv'>
              <h1>Results</h1>
            {stats.results.map((a,index)=>{
              const homePossession = parseInt(a.stats.possession.home, 10); 
              const awayPossession = parseInt(a.stats.possession.away, 10);               
              return(
                <>
                
                <div className='result_card' key={index} onClick={() => handleCardClick(index)}>
                  <div className='card_head'>
                  <span>{a.matchday}</span>
                  </div>
                  <div className='card_content'>
                  <div className='team_A'>
                    <img src="bfc.png" alt=""/>
                    
                  </div>
                  <div className='fulltime'>
                    <span>{a.stats.goals.home}</span><span className='fullT'>FT</span><span>{a.stats.goals.away}</span>
                  </div>
                  <div className='team_B'>
                  <img src={a.opponentLogo} alt=''/>
                  
                  </div>
                  </div>
                  <div className='card_footer'>
                  <span>{a.Place}</span>
                  </div>
                </div>
          
                {selectedCardIndex === index &&  (
                  <div className='statsdiv'>
                   <div className='homestats'>
                   <p>{a.stats.possession.home}</p>
                   <p>{a.stats.shotsOnTarget.home}</p>
                   <p>{a.stats.shots.home}</p>
                  
                   <p>{a.stats.offside.home}</p>
                   <p>{a.stats.corners.home}</p>
                   <p>{a.stats.fouls.home}</p>
                   </div>
                   <div className='progressbar'>
                   <p>Possession</p>
                   <p> 
                    
                    <CustomProgressBar value={homePossession} />
                    </p>
                   <p>Shots On Target</p>
                   <p>
                   <CustomProgressBar value={a.stats.shotsOnTarget.home*8} />
                       
                    </p>
                   <p>Shots</p>
                   <p> <CustomProgressBar value={a.stats.shots.home*5} />
                    
                    </p>
                   
                   <p>Offside</p>
                   <p><CustomProgressBar value={a.stats.offside.home*10} />
                    
                    </p>
                   <p>Corners</p>
                   <p><CustomProgressBar value={a.stats.corners.home*10} /> 
                   
                    </p>
                   <p>Fouls</p>
                   <p><CustomProgressBar value={a.stats.fouls.home*5} />
                     
                     </p>
                   </div>
                   <div className='awaystats'>
                   <p>{a.stats.possession.away}</p>
                   <p>{a.stats.shotsOnTarget.away}</p>
                   <p>{a.stats.shots.away}</p>
                  
                   <p>{a.stats.offside.away}</p>
                   <p>{a.stats.corners.away}</p>
                   <p>{a.stats.fouls.away}</p>
                   </div>
                  
                 </div>
                
                )}
               
              </>
              )
            })}


       </div> */}
     
      </div>
       
     </>  
    );

   

}
export default Leaguetable