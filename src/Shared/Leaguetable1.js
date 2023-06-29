import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Leaguetable1.css'
import bfc from './webisteimg/bfc.png';
import rgpj from './webisteimg/rgpj.png';
import kbfc from './webisteimg/kbfc.png';
import jfc from './webisteimg/jfc.png';
import ofc from './webisteimg/ofc.png';
const stats = {
    club: "Bengaluru FC",
    season: "2022-2023",
    logo: "bfc.png",
    results: [
      {
        matchday:" 25 April 2023",
        Place:"EMS Stadium,Kozhikode",
        opponent: "Team A",
        opponentLogo: ofc,
        result: "Loss",
        score: "1-2",
        stats: {
          possession: {
            home: "52%",
            away: "48%",
          },
          shots: {
            home: 12,
            away: 8,
          },
          shotsOnTarget: {
            home: 5,
            away: 3,
          },
          corners: {
            home: 6,
            away: 4,
          },
          fouls: {
            home: 10,
            away: 15,
          },
          offside: {
            home: 3,
            away: 1,
          },
          yellowCards: {
            home: 2,
            away: 1,
          },
          goals: {
            home: 1,
            away: 2,
          },
        },
      },
      {
        matchday: "21 April 2023",
        Place:"EMS Stadium,Kozhikode",
        opponent: "jfc.png",
        opponentLogo: jfc,
        result: "Win",
        score: "2-0",
        stats: {
          possession: {
            home: "48%",
            away: "52%",
          },
          shots: {
            home: 9,
            away: 7,
          },
          shotsOnTarget: {
            home: 3,
            away: 4,
          },
          corners: {
            home: 4,
            away: 6,
          },
          fouls: {
            home: 15,
            away: 12,
          },
          offside: {
            home: 1,
            away: 2,
          },
          yellowCards: {
            home: 1,
            away: 2,
          },
          goals: {
            home: 2,
            away: 0,
          },
        },
      },
      {
        matchday: "16 April 2023",
        Place:"EMS Stadium,Kozhikode",
        opponent: "Team C",
        opponentLogo: kbfc,
        result: "draw",
        score: "1-1",
        stats: {
          possession: {
            home: "40%",
            away: "60%",
          },
          shots: {
            home: 6,
            away: 15,
          },
          shotsOnTarget: {
            home: 2,
            away: 8,
          },
          corners: {
            home: 2,
            away: 7,
          },
          fouls: {
            home: 12,
            away: 8,
          },
          offside: {
            home: 2,
            away: 3,
          },
          yellowCards: {
            home: 3,
            away: 1,
          },
          goals: {
            home: 1,
            away: 1,
          },
        },
      },
      {
          matchday: "12 April 2023",
          Place:"EMS Stadium,Kozhikode",
          opponent: "Team C",
          opponentLogo:rgpj,
          result: "win",
          score: "2-0",
          stats: {
            possession: {
              home: "60%",
              away: "40%",
            },
            shots: {
              home: 16,
              away: 5,
            },
            shotsOnTarget: {
              home: 12,
              away: 3,
            },
            corners: {
              home: 8,
              away: 2,
            },
            fouls: {
              home: 6,
              away: 12,
            },
            offside: {
              home: 2,
              away: 3,
            },
            yellowCards: {
              home: 2,
              away: 3,
            },
            goals: {
              home: 2,
              away: 0,
            },
          },
        },
    ],
  };  


    const CustomProgressBar = ({ value }) => {
        const [progress, setProgress] = useState(0);
       
        
        useEffect(() => {
          setProgress(value);
        }, [value]);
        ;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LinearProgress variant="determinate" value={progress}  sx={{
              width: '100%',
              marginRight: 1,
              "& .MuiLinearProgress-bar": {
                transition: "none",
               
              },
            }} />
           
          </Box>
        );
      };




const Leaguetable1 = ()=>{
  const [progress, setProgress] = useState(0);

        useEffect(() => {
          const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                return 0;
              }
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 100);
            });
          }, 500);
      
          return () => {
            clearInterval(timer);
          };
        }, []);
      
        const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null); 
    } else {
      setSelectedCardIndex(index); 
      
    }
  };

  return(
    <div className='flexboxforresult'>
     <div className='resultdiv1'>
              <h1 className='animate-charcter'>Results</h1>
           {stats.results.map((a,index)=>{
              const homePossession = parseInt(a.stats.possession.home, 10); // Convert percentage to a number
              const awayPossession = parseInt(a.stats.possession.away, 10); // Convert percentage to a number
              // console.log(a)
              return(
                <>
                
                <div className='result_card1' key={index} onClick={() => handleCardClick(index)}>
                <div className='card_head'>
                  <span>{a.matchday}</span>
                </div>
                <div className='card_content'>
                  <div className='team_A'>
                    <img src={bfc} alt=""/>
                    
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
                    {/* <LinearProgress variant="determinate" value={homePossession}  /> */}
                    <CustomProgressBar value={homePossession} />
                    </p>
                   <p>Shots On Target</p>
                   <p>
                   <CustomProgressBar value={a.stats.shotsOnTarget.home*8} />
                       {/* <LinearProgress variant="determinate" value={a.stats.shotsOnTarget.home*8} ref={countUpRef}/> */}
                    </p>
                   <p>Shots</p>
                   <p> <CustomProgressBar value={a.stats.shots.home*5} />
                    {/* <LinearProgress variant="determinate" value={a.stats.shots.home*5} /> */}
                    </p>
                   
                   <p>Offside</p>
                   <p><CustomProgressBar value={a.stats.offside.home*10} />
                    {/* <LinearProgress variant="determinate" value={a.stats.offside.home*10} /> */}
                    </p>
                   <p>Corners</p>
                   <p><CustomProgressBar value={a.stats.corners.home*10} /> 
                    {/* <LinearProgress variant="determinate" value={a.stats.corners.home*10} /> */}
                    </p>
                   <p>Fouls</p>
                   <p><CustomProgressBar value={a.stats.fouls.home*5} />
                     {/* <LinearProgress variant="determinate" value={a.stats.fouls.home*5} /> */}
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
          )})}
                
     </div>
    </div>
  )
}

export default Leaguetable1;