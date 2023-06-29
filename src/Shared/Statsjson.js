import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const Statsofbfc = () => {
    const stats = {
      club: "Bengaluru FC",
      season: "2022-2023",
      logo: "bfc.png",
      results: [
        {
          matchday:" 25 April 2023",
          Place:"EMS Stadium,Kozhikode",
          opponent: "Team A",
          opponentLogo: "ofc.png",
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
          opponentLogo: "jfc.png",
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
          opponentLogo: "kbfc.png",
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
            opponentLogo: "rgpj.png",
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
  
    return (
      <>
       <div className='resultdiv'>
            {stats.results.map((a,b)=>{
               const homePossession = parseInt(a.stats.possession.home, 10); // Convert percentage to a number
               const awayPossession = parseInt(a.stats.possession.away, 10); // Convert percentage to a number
               const homeshotsontarget=parseFloat(a.stats.shotsOnTarget.home*15)
               const awayshotsontarget=parseFloat(a.stats.shotsOnTarget.away*15)
              // console.log(a)
              return(
                <div className='result_card' >
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
                <div className='statsdiv'>
                  <div className='homestats'>
                  <p>{a.stats.possession.home}</p>
                  <p>{a.stats.shotsOnTarget.home}</p>
                  <p>{a.stats.shots.home}</p>
                  <p>{a.stats.goals.home}</p>
                  <p>{a.stats.offside.home}</p>
                  <p>{a.stats.corners.home}</p>
                  <p>{a.stats.fouls.home}</p>
                  </div>
                  <div className='progressbar'>
                  <p>Possession</p>
                  <p><LinearProgress variant="determinate" value={homePossession} /></p>
                  <p>Shots On Target</p>
                  <p><LinearProgress variant="determinate" value={a.stats.shotsOnTarget.home*5} /></p>
                  <p>Shots</p>
                  <p> <LinearProgress variant="determinate" value={a.stats.shots.home*5} /></p>
                  <p>Goals</p>
                  <p> <LinearProgress variant="determinate" value={a.stats.goals.home*10} /></p>
                  <p>Offside</p>
                  <p><LinearProgress variant="determinate" value={a.stats.offside.home*10} /></p>
                  <p>Corners</p>
                  <p> <LinearProgress variant="determinate" value={a.stats.corners.home*10} /></p>
                  <p>Fouls</p>
                  <p> <LinearProgress variant="determinate" value={a.stats.fouls.home*5} /></p>
                  </div>
                  <div className='awaystats'>
                  <p>{a.stats.possession.away}</p>
                  <p>{a.stats.shotsOnTarget.away}</p>
                  <p>{a.stats.shots.away}</p>
                  <p>{a.stats.goals.away}</p>
                  <p>{a.stats.offside.away}</p>
                  <p>{a.stats.corners.away}</p>
                  <p>{a.stats.fouls.away}</p>
                  </div>
                  
                </div>
               
          </div>
          
              )
            })}
            
       </div>
      
      </>
    );
  };
  export default Statsofbfc
  
  