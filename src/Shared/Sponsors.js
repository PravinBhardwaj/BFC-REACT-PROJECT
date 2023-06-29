import React from 'react';
import sponsorb from './webisteimg/sponsor-b2.png';
import parimatch from './webisteimg/parimatch.png'
import dream11 from './webisteimg/dream11.png';
import sponsorb4 from './webisteimg/sponsor-b4.png';
import popeyes from './webisteimg/popeyes.png';
import toit from './webisteimg/toit.png';
import spon from './webisteimg/169x93-02.png';
import c6 from './webisteimg/sponsor-c6.png';
import act from './webisteimg/act.png';
import goldsgym from './webisteimg/goldsgym.png';
import websitelogo from './webisteimg/Website-logos-10.png';
import radiocity from './webisteimg/radiocity.png';
import fittogetther from './webisteimg/Fittogether-169x93-05.png';
import rflogo from './webisteimg/RF-Logo-01.png';
import ranger from './webisteimg/Rangers-Ready-Crest-RGB-1.png'
const Sponsors=()=>{
    return(
        <>        
        <div class="sponsor-div">
        <div>
        <h3>PRINCIPAL SPONSORS</h3>
        <img src={sponsorb} alt="" class="sponsor-img"/>
        <img src={parimatch} alt="" class="sponsor-img"/>

        </div>
        <div>
            <h3>ASSOCIATE PARTNERS</h3>
            <img src={dream11} alt="" class="sponsor-img"/>
            <img src={sponsorb4} alt="" class="sponsor-img"/>
            <img src={popeyes} alt="" class="sponsor-img"/>
            <img src={toit} alt="" class="sponsor-img"/>
            <img src={spon} alt="" class="sponsor-img"/>
            <img src={c6} alt="" class="sponsor-img"/>
            <img src={act} alt="" class="sponsor-img"/>
            <img src={goldsgym} alt="" class="sponsor-img"/>
            <img src={websitelogo} alt="" class="sponsor-img"/>
            <img src={radiocity} alt="" class="sponsor-img"/>
            <img src={fittogetther} alt="" class="sponsor-img"/>
        </div>
        <div>
            <h3>GRASSROOTS DEVELOPMENT PARTNER</h3>
            <img src={rflogo} alt="" class="sponsor-img"/>
        </div>
        <div>
            <h3>CLUB PARTNER</h3>
        <img src={ranger} alt="" class="sponsor-img" />
        </div>
    </div>
    </>

    )
} 
export default Sponsors