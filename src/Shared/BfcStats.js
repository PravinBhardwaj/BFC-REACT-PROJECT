import React,{useState} from 'react'
import CountUP from 'react-countup';
import ScrollTriger from 'react-scroll-trigger';
const BfcseasonStats=[
    {"GP":24,
        "Goals":32,
        "Crosses":264,
        "CleanSheets":7,
        "ChancesCreated":204,
        "Draws":1,
        "Fouls":236,
        "Losses":10,
        "Saves":71,
        "Shots":305,
        "SuccessfulPasses":5977,
        "Tackles":226,
        "Wins":13,
        "YellowCards":38,
        "Touches":12527
    }
]


const BfcStats=()=>{
    const [counterOn, setCounterOn]= useState(false);
    return(
        <div className='main_div_stats'>
            <h1>Our Stats</h1>
            <div className='stats_div'>
                {BfcseasonStats.map((item,index)=>{
                    // console.log(BfcseasonStats)
                    return(
                        <ScrollTriger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                             <>
                        <div className='mainstats-1'>
                        <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.GP} duration={2} delay={0}/>}</p><p>Game Played</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Wins}duration={2} delay={0}/>}</p><p>Wins</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Draws}duration={2} delay={0}/>}</p><p>Draws</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Losses}duration={2} delay={0}/>}</p><p>Losses</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Goals}duration={2} delay={0}/>}</p><p>Goals</p></div>
                        {/* </div>
                       <div className='mainstats-2'> */}
                       <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.ChancesCreated}duration={2} delay={0}/>}</p><p>Chances Created</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Crosses}duration={2} delay={0}/>}</p><p>Crosses</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Shots}duration={2} delay={0}/>}</p><p>Shots</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Saves}duration={2} delay={0}/>}</p><p>Saves</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.SuccessfulPasses}duration={2} delay={0}/>}</p><p>Successful Passes</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Tackles}duration={2} delay={0}/>}</p><p>Successful Tackles</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Fouls}duration={2} delay={0}/>}</p><p>Fouls</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.CleanSheets}duration={2} delay={0}/>}</p><p>CleanSheets</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.YellowCards}duration={2} delay={0}/>}</p><p>Yellow Cards</p></div>
                    <div className='stats-box'><p className='stats_num'>{counterOn && <CountUP start={0} end={item.Touches}duration={2} delay={0}/>}</p><p>Touches</p></div>
                       </div>
                    
                    </>
                        </ScrollTriger>
                       
                    )
                    
                    })}
            </div>
        </div>
    )
}
export default BfcStats