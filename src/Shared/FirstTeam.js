import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Footer from './Footer';

import Sponsors from './Sponsors';

import Gurprit from './webisteimg/gurprit1.png';
import Amrit from './webisteimg/amri1.png';
import Lara from './webisteimg/larasharma.png';
import Sunil11 from './webisteimg/legend.png';
import Udanta from './webisteimg/udanta.png';
import RoyKrishna from './webisteimg/roykrishna.png';
import Shiva from './webisteimg/shivashakti.png';
import Bruno from './webisteimg/bruonoramirez.png';
import Jayesh from './webisteimg/jayeshrane.png';
import Suresh from './webisteimg/sureshw.png';
import Javi from './webisteimg/havihernen.png';
import Pablo from './webisteimg/pabloperez.png';
import Rohit from './webisteimg/rohitk.png';
import Leon from './webisteimg/leon1.png';
import Parag from './webisteimg/paragsri.png';
import Sandesh from './webisteimg/sandeshjhingan.png';
import Alex from './webisteimg/alex.png';
import Alan from './webisteimg/alancosta.png';
import Roshan from './webisteimg/noremroshon.png';
import Bhutia from './webisteimg/namgyalbhutia.png';
import Prabir from './webisteimg/prabirdas.png';
import Simon from './webisteimg/simon.png';
const FirstTeam=()=>{
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

    const bfcsquad={
        "team_name": "Bengaluru FC",
        "players": {
            "Goalkeeper":[
                {
                    "id":"1",
                    "name": "1.Gurpreet Singh Sandhu",
                    "position": "Goalkeeper",
                    "nationality": "India",
                    "age": 31,
                    "image":Gurprit
                  },
                  {
                    "id":"2",
                    "name": "13. Amrit Gope",
                    "position": "Goalkeeper",
                    "nationality": "India",
                    "age":23 ,
                    "image": Amrit
                  },
                  {
                    "id":"3",
                    "name": "30. Lara Sharma",
                    "position": "Goalkeeper",
                    "nationality": "India",
                    "age": 24,
                    "image": Lara
                  }
            ],
          "strikers": [
            {
                "id":"4",
              "name": "11.Sunil Chhetri",
              "position": "Forward",
              "nationality": "India",
              "age": 37,
              "image": Sunil11
            },
            {
                "id":"5",
              "name": "21. Udanta Singh",
              "position": "Forward",
              "nationality": "India",
              "age": 26,
              "image": Udanta
            },
            {
                "id":"6",
                "name": "22. Roy Krishna",
                "position": "Forward",
                "nationality": "Fiji",
                "age": 35,
                "image": RoyKrishna
              },
              {
                "id":"7",
                "name": "39. Sivasakthi Narayanan",
                "position": "Forward",
                "nationality": "India",
                "age": 21,
                "image": Shiva
              }
          ],
          "midfielders": [
            {
                "id":"8",
              "name": "6. Bruno Ramires",
              "position": "Midfielder",
              "nationality": "Brazil",
              "age": 29,
              "image": Bruno
            },
            {
                "id":"9",
                "name": "7. Jayesh Rane",
                "position": "Midfielder",
                "nationality": "India",
                "age": 30,
                "image": Jayesh
            },
            {
                "id":"10",
                "name": "8. Suresh Singh Wangjam",
                "position": "Midfielder",
                "nationality": "India",
                "age": 22,
                "image": Suresh
            },
            {
                "id":"11",
                "name": "10. Javi Hernandez",
                "position": "Midfielder",
                "nationality": "Spain",
                "age": 34,
                "image": Javi
            },
            {
                "id":"12",
                "name": "23.Pablo Pérez",
                "position": "Midfielder",
                "nationality": "Spain",
                "age": 29,
                "image": Pablo
            },
            {
                "id":"13",
                "name": "18. Rohit Kumar",
                "position": "Midfielder",
                "nationality": "India",
                "age": 26,
                "image": Rohit
            },
            {
                "id":"14",
                "name": "31. Leon Augustine",
                "position": "Midfielder",
                "nationality": "India",
                "age": 24,
                "image": Leon
            }
          ],
          "defenders": [
            {
                "id":"15",
                "name": "2. Parag Shrivas",
                "position": "Defender",
                "nationality": "India",
                "age": 26,
                "image": Parag
            },
            {
                "id":"16",
              "name": "3. Sandesh Jhingan",
              "position": "Defender",
              "nationality": "India",
              "age": 29,
              "image": Sandesh
            },
            {
                "id":"17",
              "name": "4. Aleksandar Jovanovic",
              "position": "Defender",
              "nationality": "Australia",
              "age": 33,
              "image": Alex
            },
            {
                "id":"18",
                "name": "5. Alan Costa",
                "position": "Defender",
                "nationality": "Brazil",
                "age": 32,
                "image": Alan
            },
            {
                "id":"19",
                "name": "32. Naorem Roshan Singh",
                "position": "Defender",
                "nationality": "India",
                "age": 24,
                "image": Roshan
            },
            {
                "id":"20",
                "name": "25. Namgyal Bhutia",
                "position": "Defender",
                "nationality": "India",
                "age": 23,
                "image": Bhutia
            },
            {
                "id":"21",
                "name": "33. Prabir Das",
                "position": "Defender",
                "nationality": "India",
                "age": 29,
                "image": Prabir
            }
          ],
          "Coach":[
            {
                "id":"22",
                "name": "Simon Grayson",
                "position": "Head Coach",
                "nationality": "England",
                "age": 53,
                "image": Simon
            }
          ]
        }
      }
     
      const handleModalOpen = (player) => {
        setSelectedPlayer(player);
        setShowModal(true);
      };
       

    return(
      <>
      <div className='main_squadpage'>
        <div className='squadmembers'>
        <h1 className='animate-charcter' >The First Team</h1>
        <div className='players'>
          
        {bfcsquad.players.Goalkeeper.map((item,index)=>(
           
                 
           <div class="Goalkeepers" >
              <div className='bfc' onClick={() => handleModalOpen(item)}>
                <img src={item.image} alt=''/>
                <div class="namebox" >{item.name}</div>
              </div>
           </div>
        
          ))}
      </div>  
      <div className='players2'>
      {bfcsquad.players.defenders.map((item,index)=>(
           
           <div class="Defenders" >
              <div className='bfc'  onClick={() => handleModalOpen(item)}>
                <img src={item.image} alt=''/>
                <div class="namebox" >{item.name}</div>
              </div>
           </div>
        ))}
      </div>
      <div className='players3'>
      {bfcsquad.players.midfielders.map((item,index)=>(
           
           <div class="Midfielders">
              <div className='bfc'  onClick={() => handleModalOpen(item)}>
                <img src={item.image} alt=''/>
                <div class="namebox" >{item.name}</div>
              </div>
           </div>
        ))}
      </div>
       <div className='players4'>
        {bfcsquad.players.strikers.map((item,index)=>(
           
           <div class="Forwards" >
              <div className='bfc'  onClick={() => handleModalOpen(item)}>
                <img src={item.image} alt=''/>
                <div class="namebox" >{item.name}</div>
              </div>
           </div>
        ))}
        </div>
        
        <div className='players5'>
        {bfcsquad.players.Coach.map((item,index)=>(
            
           <div class="Coaching Staff"  onClick={() => handleModalOpen(item)} >
              <div className='bfc'>
                <img src={item.image} alt=''/>
                <div class="namebox" >{item.name}</div>
              </div>
           </div>
        ))}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
   
    <Modal.Title>{selectedPlayer ? selectedPlayer.name : 'No player selected'}</Modal.Title>
   
  </Modal.Header>
  <Modal.Body>
    <img src={selectedPlayer ? selectedPlayer.image : '' } alt='' />
  <p>Position: {selectedPlayer ? selectedPlayer.position : ''}</p>
              <p>Nationality: {selectedPlayer ? selectedPlayer.nationality : ''}</p>
              <p>Age: {selectedPlayer ? selectedPlayer.age : ''}</p>
  </Modal.Body>
 
</Modal>
        </div>
        
       
         

        </div>

      </div>
      <Sponsors/>
       <Footer/>
      </>
    )
}
export default FirstTeam