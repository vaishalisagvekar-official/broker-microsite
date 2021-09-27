
// import SlideShow from './SlideShow';
// import styles from './styles.scss';
// var styles = require('./SlideShow');
// require('./SlideShow.js')
// import * as Babel from '@babel/standalone';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const banner = [
      "https://d1an7tx677lu0y.cloudfront.net/2021/07/22-copy-min.jpg",
      "https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg" ,
      "https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg",
    ]

    const aboutUsData = {
      id : "about", 
      title : "The Chambers", 
      description : `Step into ‘The Chambers’- the premium commercial office space for entrepreneurs located at the iconic architectural marvel of Kohinoor Square. ‘The Chambers’ is located in Kohinoor Square from the 4th to the 13th floor with offices starting from 769 sq.ft to 1331 sq.ft (RERA Carpet Area). And here’s why it is probably a good decision to buy a Chambers office whether it is for end-use or for investment.

      Kohinoor Square is one of the tallest commercial towers in the country and is an iconic structure located at the centre of the city. Investments in iconic commercial properties appreciate faster and depreciate slower than the market.
      
      The location is congestion-free and will give you easy access to trains, metros and airports.`, 
      brochureLink : "https://project-microsite-data.s3.amazonaws.com/kohinoor_abcd/about/Vaishali's Resume.pdf",
      image : 'https://d1an7tx677lu0y.cloudfront.net/2021/07/image2.jpg'
    }

    const amenitiesData = {
      id : "amenities", 
      title : "Amenities", 
      list : [
          {
              "icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
              "title" : "amenity title 1"
          },
		  {
			"icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
			"title" : "amenity title 1"
		},
		{
			"icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
			"title" : "amenity title 1"
		},
		{
			"icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
			"title" : "amenity title 1"
		},
		{
			"icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
			"title" : "amenity title 1"
		},
		{
			"icon" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png", 
			"title" : "amenity title 1"
		}
      ], 
      images : [
          "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t3-min.jpg", 
          "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t2-min.jpg",
          "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t1-min.jpg",
          "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view1-min.jpg",
      ]
  	}

	const virtualTourData = {
		id : "virtualTour", 
		title : "Virtual Tour", 
		list : [
			{
				"tourImageLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view3-min.jpg", 
				"tourLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/lobby/"
			}, 
			{
				"tourImageLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/3bhk-min.png", 
				"tourLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/3bhk/"
			}, 
			{
				"tourImageLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/2bhk.jpg", 
				"tourLink" : "https://cp.rajshree11east.com/dinesh-sanghvi/2bhk/"
			}
		]
	  }

	const floorPlanData = {
		id : "floorPlans", 
		title : "Flooe Plans ", 
		images : [
			"https://d1an7tx677lu0y.cloudfront.net/2021/07/4thfloor-min.png",
			"https://d1an7tx677lu0y.cloudfront.net/2021/07/5thfloor-min.png",
			"https://d1an7tx677lu0y.cloudfront.net/2021/07/6thfloor-1-min.png"
		]
	}

  const footerData = {
	id : "footer", 
	title : "Footer", 
	description : `This Project is Developed By M/s. Panchsheel 1 Upgrade LLP, Group Company of Rajshree Builders.

	The Project is registered as Rajshree Eleven East with MahaRERA Registration No. P51800030117, Available at http://maharera.mahaonline.gov.in`, 
	disclaimer : `This is not an offer, invitation to offer, and/or commitment of any nature and the content hereof is not and should not be constructed as an offer/invitation to offer/contract or any intention thereof and/or any disclosure under any statute of any nature whatsoever. All plans, designs, Images, renders, specification, dimensions, facilities and other details herein are artistic impressions and stock images and purely for illustrative and representational purpose and indicative in nature and the intended recipient should note that these are to be treated as purely provisional and informative and as such only tentative subject to approval from respective authorities. No warranty is expressly or impliedly given that the completed development will comply in any degree with such artist’s impression as depicted. The photographs contained herein are stock/standard photography and may have been taken at at location other that the project site and are used to indicate a conceptual lifestyles. The actual images/views have been enhanced/touched up/airbrushed for visual, illustrative and creative purposes. All specifications of the flat/project shall be as per the final agreement between the parties. Recipients are advised to use their discretion in relying on the information/amenities described/described/shown herein. The visitor/recipient is aware that the furniture, fittings and fixtures displayed in the sample/show flat/ show residence at the sales pavilion /brouchers are only for the purpose of showcasing the flats and we shall not be liable, required and/or obliged to procide any further, fittings as displayed in the sample/show flat/show residence at the sales pavilion/brochuers. The color shades of wall, tiles etc., are for representational purpose and will vary in planning and designing and upon actual construction. The render for internal spaces is only to serve as an example of the suggested space management and possible utilization of space. Any party desirous/interested in the project need to enter into agreement for sale and the development/transaction shall be governed by the terms and conditions of the agreement for sale. Project Financed by Bajaj Home Finance Ltd. (BHFL). *Government taxes as applicable. *Terms and Conditions apply.`
  }
    return (
      <div>
        <SlideShow section="banner" imgArray={banner} cssClass={'bannerContainer'}></SlideShow>
        <AboutUs section="aboutUs" aboutUsData={aboutUsData} cssClass={'verticallyMiddle'}></AboutUs>
        <Amenities section="amenities" amenitiesData={amenitiesData} imageCss="amenityIcon" containerCss="verticallyMiddle"></Amenities>
		<VirtualTour section="virtualTour" virtualTourData={virtualTourData}></VirtualTour>
		<FloorPlan section="floorPlan" floorPlanData={floorPlanData}></FloorPlan>
		<Footer section="footer" footerData={footerData} cssClass={'verticallyMiddle'}></Footer>
      </div>
    )
  }
}

class SlideShow extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
          slideIndex : 0,
        }

        for (let index = 0; index < props.imgArray.length; index++) {
          this[`imageRef${index}`] = React.createRef();
          this[`dotRef${index}`] = React.createRef();
        }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.showSlides(),
      8000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { imgArray, cssClass } = this.props;
    return (
      <div>
        <div className="slideshow-container" >
          {
            imgArray.map((image, index) => {
              return <div className={`mySlides fadeImg ${cssClass}`}
                        ref={this[`imageRef${index}`]}
                        key={index}>
                        {/* <div className="numbertext">1 / 3</div> */}
                        <img src={image} style={{ width: 'inherit', height: 'inherit'}} />
                        {/* <div className="text">Caption Text</div> */}
                      </div>
            })
          }
        </div>
        <br/>
        <div style={{ textAlign:'center'}}>
          {
            imgArray.map((image, index) => {
              return <span className="dot" 
                        ref={this["dotRef" + index]}
                        key={index}>
                      </span>
            })
          }
        </div>
      </div> 
      
    )
  }

  showSlides = () => {
    const { imgArray } = this.props;

    var imageIndex = this.state.slideIndex;

    imgArray.forEach((image, index) => {

        if(this[`imageRef${index}`] !== undefined) {
          if(this[`imageRef${index}`].current !== null){
            this[`imageRef${index}`].current.style.display = "none";
          }
        }
      })
      
      imageIndex = imageIndex + 1;
      if (imageIndex > imgArray.length) {
        imageIndex = 1
      }
      imgArray.forEach((image, index) => {
        if(this[`dotRef${index}`].current !== null){
          this[`dotRef${index}`].current.className = this[`dotRef${index}`].current.className.replace(" active", "");
        }
      })

      if(this[`imageRef${imageIndex-1}`].current !== null){
        this[`imageRef${imageIndex-1}`].current.style.display = "block"; 
      }

      if(this[`dotRef${imageIndex-1}`].current){
        this[`dotRef${imageIndex-1}`].current.className += " active";
      }

      this.setState({ slideIndex : imageIndex });   
  }
}

class AboutUs extends React.Component {
  constructor(props) {
      super(props);
        console.log("came in aabout us constructor ",props)
  }

  componentDidMount(){
  }

	render() {
		const { id, title, image, description, brochureLink} = this.props.aboutUsData;
		return (
			<div>
				<h4 className="sectionTitle">About Us</h4>
				<div className="row">
				<div className="col-md-6 col-xs-12">
					<img src={image} style={{ width: 'inherit', height: 'inherit'}} />
				</div>
				<div className={`col-md-6 col-xs-12 ${this.props.cssClass}`}>
					<h3>{title}</h3>
					<div>{description}</div>
						<button className="btn" onClick={(e) => window.open(brochureLink)}>Download Brochure</button>
					</div>
				</div>
			</div>
		)
	}
}

class Amenities extends React.Component {
  constructor(props) {
      super(props);
        console.log("came in amenities constructor ",props)
  }

  componentDidMount(){
  }

  render() {
    const { id, title, list, images} = this.props.amenitiesData;
    return (
      <div className="amenityContainer">
        <h4 className="sectionTitle">{title}</h4>
        <div className="row" style={{padding:'30px'}}>
          {
            list.map((amenityObj, index) => {
              return <div className={`col-md-2 col-sm-4 col-xs-6 ${this.props.containerCss} amenityIconContainr`} style={{textAlign: 'center'}} key={index}>
                        <img className={this.props.imageCss} src={amenityObj.icon} />
                        <div className="amenityTitle">{amenityObj.title}</div>
                      </div>
            })
          }
        </div>  
		<Carousel sectionId={id} list={images}>
			<h5>...</h5>
			<p>...</p>
		</Carousel>     
      </div>
    )
  }
}

class VirtualTour extends React.Component {
	constructor(props) {
		super(props);
		  console.log("came in virtual tour constructor ",props)
	}
  
	componentDidMount(){
	}
  
	render() {
	  const { id, title, list} = this.props.virtualTourData;
	  return (
		<div className="amenityContainer">
			<h4 className="sectionTitle">{title}</h4>
			<Carousel sectionId={id} list={list}>

			</Carousel>     
		</div>
	  )
	}
  }

  class FloorPlan extends React.Component {
	constructor(props) {
		super(props);
		  console.log("came in floor plan constructor ",props)
	}
  
	componentDidMount(){
	}
  
	render() {
	  const { id, title, images} = this.props.floorPlanData;
	  return (
		<div className="amenityContainer">
			<h4 className="sectionTitle">{title}</h4>
			<Carousel sectionId={id} list={images}>

			</Carousel>     
		</div>
	  )
	}
  }

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		  console.log("came in carousel constructor ",props)
	}
  
	componentDidMount(){
		$(`#${this.props.sectionId}`).carousel()
	}
  
	render() {
	  const { sectionId, list} = this.props;
	  return (
		<div id={sectionId} className="carousel slide" data-ride="carousel">
			{
				list.map((item, index) => {
					return (
						<ol className="carousel-indicators" key={index}>
							<li data-target="#carouselExampleIndicators" data-slide-to={index} className="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
							<li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
						</ol>
					)
				})
			}
      		<div className="carousel-inner">
				{
					list.map((item, index) => {
						let source = '';
						var snippet = '';
						if(typeof(item) == 'string'){
							source = item
						} else if(sectionId == 'virtualTour'){
							source = item.tourImageLink;
							snippet = <div>
										<h4></h4>
										<button className="btn" onClick={(e) => window.location.href=`${item.tourLink}`}>Enter Virtual Tour</button>
									</div>
							
						}
						

						// const src = typeof(item) == 'string' ? item : ;
						return (
							<div className={`carousel-item ${index == 0 ? 'active' : ''}`} key={index}>
								<img className="d-block w-100" src={source} alt="First slide" />
								<div className="carousel-caption d-none d-md-block">
									{snippet}
								</div>
							</div>
						)
					})
				}
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>

	  )
	}
  }

  class Footer extends React.Component {
	constructor(props) {
		super(props);
		  console.log("came in footer constructor ",props)
	}
  
	componentDidMount(){
	}
  
	  render() {
		  const { description, disclaimer} = this.props.footerData;
		  return (
			  <div>
				  <div className="row footer">
				  		{description}
						<br/><br/>
						<div>Disclaimer</div>
				  </div>

			  </div>
		  )
	  }
  }
//   var output = Babel.transform(<Home />, { presets: ["env"] }).code;

ReactDOM.render(
	<Home />,
  document.getElementById('root')
);

