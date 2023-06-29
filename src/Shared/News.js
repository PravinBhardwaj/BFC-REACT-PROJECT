
import Slickcaro from './Slickcaro';
import Footer from './Footer';
import Sponsors from './Sponsors';
import { FaRegCalendarAlt,FaTag ,FaRegClock,FaPlay} from 'react-icons/fa';
import './News.css';
import alexstay from './webisteimg/Alexstay.jpg';
import assitcoach from './webisteimg/AssistCoach.jpeg';
import rohitstay from './webisteimg/rohitstays.jpg';
import torito from './webisteimg/TORITO.png';
import udantaleave from './webisteimg/udanta-2.png';
import asishjha from './webisteimg/Asishjha.jpg';
import shivashine from './webisteimg/shivashine.jpg';
import distribute from './webisteimg/disribute.jpg';
const News=()=>{
    return(
      <>

<section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">News</div>

		<article className="postcard light blue">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={alexstay} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title blue">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
          <FaRegCalendarAlt/> April 7,2023  
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Aleksandar Jovanovic signs on with Bengaluru FC</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light red">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={assitcoach} alt="" />	
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title red">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/>April 6,2023    
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Blues appoint Neil McDonald as Assistant Coach</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light green">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={rohitstay} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title green">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/> April 4,2023
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Rohit Kumar extends stay at Bengaluru FC</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light yellow">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={torito} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title yellow">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/>April 1,2023 
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Suresh Wangjam extends Bengaluru FC stay</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
    <article className="postcard light purple">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={udantaleave} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title yellow">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/>April 1,2023 
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Udanta Singh set to leave Bengaluru FC</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
    <article className="postcard light cadetblue">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={asishjha} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title yellow">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/>March 20,2023 
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Bengaluru FC signs attacker Ashish Jha</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
    <article className="postcard light blueviolet">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={shivashine} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title yellow">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/> March 20,2023
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Sivasakthi shines brightest at Bengaluru FC Awards Night</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
    <article className="postcard light chartreuse">
			<p className="postcard__img_link" >
				<img className="postcard__img" src={distribute} alt="" />
			</p>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title yellow">Podcast Title</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
					<FaRegCalendarAlt/> March 7,2023      
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">BFC distributes Champion t-shirts to underprivileged</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><FaTag style={{margin:'2px 3px'}}/>Podcast</li>
					<li className="tag__item"><FaRegClock style={{margin:'0px 3px 3px 0px'}}/>55 mins.</li>
					<li className="tag__item play blue">
						<FaPlay style={{margin:'2px 3px'}}/>Play Episode
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>
        <Slickcaro/>
        <Sponsors/>
       <Footer/>
        </>
    )
}
export default News;