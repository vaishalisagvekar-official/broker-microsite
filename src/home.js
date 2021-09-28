// import SlideShow from './SlideShow';
// import styles from './styles.scss';
// var styles = require('./SlideShow');
// require('./SlideShow.js')
// import * as Babel from '@babel/standalone';

class Home extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		
		const bannerData = {
			"id" : "banner", 
			"title" : "Home", 
			"images" : [
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/22-copy-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg"
			]
		}

		const aboutUsData = {
			id: "about",
			title: "About Us",
			description: `Step into ‘The Chambers’- the premium commercial office space for entrepreneurs located at the iconic architectural marvel of Kohinoor Square. ‘The Chambers’ is located in Kohinoor Square from the 4th to the 13th floor with offices starting from 769 sq.ft to 1331 sq.ft (RERA Carpet Area). And here’s why it is probably a good decision to buy a Chambers office whether it is for end-use or for investment.

			Kohinoor Square is one of the tallest commercial towers in the country and is an iconic structure located at the centre of the city. Investments in iconic commercial properties appreciate faster and depreciate slower than the market.
			
			The location is congestion-free and will give you easy access to trains, metros and airports.`,
			brochureLink:
				"https://project-microsite-data.s3.amazonaws.com/kohinoor_abcd/about/Vaishali's Resume.pdf",
			image: "https://d1an7tx677lu0y.cloudfront.net/2021/07/image2.jpg",
		};

		const amenitiesData = {
			id: "amenities",
			title: "Amenities",
			list: [
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
				{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1",
				},
			],
			images: [
				"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t3-min.jpg",
				"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t2-min.jpg",
				"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t1-min.jpg",
				"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view1-min.jpg",
			],
		};

		const virtualTourData = {
			id: "virtualTour",
			title: "Virtual Tour",
			list: [
				{
				tourImageLink:
					"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view3-min.jpg",
				tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/lobby/",
				},
				{
				tourImageLink:
					"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/3bhk-min.png",
				tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/3bhk/",
				},
				{
				tourImageLink:
					"https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/2bhk.jpg",
				tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/2bhk/",
				},
			],
		};

		const floorPlanData = {
			id: "floorPlans",
			title: "Floor Plans ",
			images: [
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/4thfloor-min.png",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/5thfloor-min.png",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/6thfloor-1-min.png",
			],
		};

		const galleryData = {
			id: "gallery",
			title: "Gallery",
			images: [
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/22-m-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/et-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/13-copy-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/entrance-m.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/pr-min.jpg",
				"https://d1an7tx677lu0y.cloudfront.net/2021/07/14-copy-min.jpg",
			],
		};

		const contactUsData = {
			id: "contactUs",
			title: "Contact Us",
			mapLink : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.6467646648563!2d72.9112958!3d19.0818851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e5017f4d61%3A0xd7833ccfd79b6242!2sRajshree%2011%20East!5e0!3m2!1sen!2sin!4v1632124537483!5m2!1sen!2sin"
		}

		const brokerData = { 
			"fullName" : "Dinesh M Sanghvi", 
			"mobileNumber" : "8467890321", 
			"alternateMobileNo" : "7489045673", 
			"emailId" : "dsa_properties@yahoo.com", 
			"alternateEmailId" : "vbrokerOcean@gmail.com", 
			"reraNumber" : "FGT657890", 
			"address" : "Office No. 303, Monterossa, Above IDFC Bank, Opp. Ganpati Temple, 90 Feet Road, Pantnagar, Ghatkopar (E), Mumbai-400075"
		}

		const footerData = {
			id: "footer",
			title: "Footer",
			description: `This Project is Developed By M/s. Panchsheel 1 Upgrade LLP, Group Company of Rajshree Builders.

			The Project is registered as Rajshree Eleven East with MahaRERA Registration No. P51800030117, Available at http://maharera.mahaonline.gov.in`,
			disclaimer: `This is not an offer, invitation to offer, and/or commitment of any nature and the content hereof is not and should not be constructed as an offer/invitation to offer/contract or any intention thereof and/or any disclosure under any statute of any nature whatsoever. All plans, designs, Images, renders, specification, dimensions, facilities and other details herein are artistic impressions and stock images and purely for illustrative and representational purpose and indicative in nature and the intended recipient should note that these are to be treated as purely provisional and informative and as such only tentative subject to approval from respective authorities. No warranty is expressly or impliedly given that the completed development will comply in any degree with such artist’s impression as depicted. The photographs contained herein are stock/standard photography and may have been taken at at location other that the project site and are used to indicate a conceptual lifestyles. The actual images/views have been enhanced/touched up/airbrushed for visual, illustrative and creative purposes. All specifications of the flat/project shall be as per the final agreement between the parties. Recipients are advised to use their discretion in relying on the information/amenities described/described/shown herein. The visitor/recipient is aware that the furniture, fittings and fixtures displayed in the sample/show flat/ show residence at the sales pavilion /brouchers are only for the purpose of showcasing the flats and we shall not be liable, required and/or obliged to procide any further, fittings as displayed in the sample/show flat/show residence at the sales pavilion/brochuers. The color shades of wall, tiles etc., are for representational purpose and will vary in planning and designing and upon actual construction. The render for internal spaces is only to serve as an example of the suggested space management and possible utilization of space. Any party desirous/interested in the project need to enter into agreement for sale and the development/transaction shall be governed by the terms and conditions of the agreement for sale. Project Financed by Bajaj Home Finance Ltd. (BHFL). *Government taxes as applicable. *Terms and Conditions apply.`,
		};

		const sections = [
			bannerData, aboutUsData, amenitiesData, virtualTourData, floorPlanData, galleryData, contactUsData, footerData
		]
		
		return (
		<div>
				<nav className="navbar fixed-top navbar-expand-sm navbar-light header ">
					<a className="navbar-brand" href="#">
						<img 
							className="logo"
							src="https://cp.kohinoorsquare.in/praful-jadhav/wp-content/uploads/2020/08/logo-kohinoor.png" alt="" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav d-flex justify-content-end">
							{
								sections.map((section, index) => {
									if(index == 0){
										return <li className="nav-item active" key={section.id}>
													<a className="nav-link" href={`#${section.id}`}>{section.title}
														<span className={`sr-only`}>(current)</span>
													</a>
												</li>
									} else if(section.id !== 'footer'){
										return <li className="nav-item" key={section.id}>
													<a className="nav-link" href={`#${section.id}`}>{section.title}</a>
												</li>
									}
								})
							}
						</ul>
					</div>
				</nav>
				{
					sections.map((section) => {
							switch (section.id) {
								case 'banner':
									return <SlideShow 
												key={section.id} 
												section={section.id}
												imgArray={bannerData.images} 
												cssClass={"bannerContainer"}>
											</SlideShow>
									break;

								case 'about':
									return <AboutUs 
												key={section.id}
												section={section.id} 
												aboutUsData={aboutUsData} 
												cssClass={"verticallyMiddle"}>
											</AboutUs>
									break;

								case 'amenities':
									return <Amenities 
												key={section.id}
												section={section.id} 
												amenitiesData={amenitiesData} 
												imageCss="amenityIcon" 
												containerCss="verticallyMiddle">
											</Amenities>
									break;

								case 'virtualTour':
									return <VirtualTour
												key={section.id}
												section={section.id}
												virtualTourData={virtualTourData}>
											</VirtualTour>
									break;

								case 'gallery':
									return <Gallery 
												key={section.id}
												section={section.id} 
												galleryData={galleryData}>
											</Gallery>
									break;
							
								case 'floorPlans':
									return <FloorPlan
												key={section.id}
												section={section.id}
												floorPlanData={floorPlanData}
											></FloorPlan>
									break;
						
								case 'contactUs':
									return <ContactUs
												key={section.id}
												section={section.id}
												contactUsData={contactUsData}
												brokerData={brokerData}
											></ContactUs>
									break;
						
								case 'footer':
									return <Footer
												key={section.id}
												section={section.id}
												footerData={footerData}
												cssClass={"verticallyMiddle"}
											></Footer>
									break;
							
								default:
									break;
							}
					})
				}
				<ModalContainer>
					<EnquiryForm></EnquiryForm>
				</ModalContainer>
				<div id="feedback-form" className="feedback-form" onClick={() => $('#exampleModal').modal('show')}>
					<a href="#" className="feedback-form-btn btn  btn-lg" id="OpenFormMob">ENQUIRE NOW</a>
				</div>
		</div>
		);
	}
}

class SlideShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
		};

		for (let index = 0; index < props.imgArray.length; index++) {
			this[`imageRef${index}`] = React.createRef();
			this[`dotRef${index}`] = React.createRef();
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.showSlides(), 8000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

  render() {
	const { section, imgArray, cssClass } = this.props;
	return (
	  <div id={section}>
		<div className="slideshow-container">
		  {imgArray.map((image, index) => {
			return (
			  <div
				className={`mySlides fadeImg ${cssClass}`}
				ref={this[`imageRef${index}`]}
				key={index}
			  >
				{/* <div className="numbertext">1 / 3</div> */}
				<img
				  src={image}
				  style={{ width: "inherit", height: "inherit" }}
				/>
				{/* <div className="text">Caption Text</div> */}
			  </div>
			);
		  })}
		</div>
		<br />
		<div style={{ textAlign: "center" }}>
		  {imgArray.map((image, index) => {
			return (
			  <span
				className="dot"
				ref={this["dotRef" + index]}
				key={index}
			  ></span>
			);
		  })}
		</div>
	  </div>
	);
  }

  showSlides = () => {
	const { imgArray } = this.props;

	var imageIndex = this.state.slideIndex;

	imgArray.forEach((image, index) => {
	  if (this[`imageRef${index}`] !== undefined) {
		if (this[`imageRef${index}`].current !== null) {
		  this[`imageRef${index}`].current.style.display = "none";
		}
	  }
	});

	imageIndex = imageIndex + 1;
	if (imageIndex > imgArray.length) {
	  imageIndex = 1;
	}
	imgArray.forEach((image, index) => {
	  if (this[`dotRef${index}`].current !== null) {
		this[`dotRef${index}`].current.className = this[
		  `dotRef${index}`
		].current.className.replace(" active", "");
	  }
	});

	if (this[`imageRef${imageIndex - 1}`].current !== null) {
	  this[`imageRef${imageIndex - 1}`].current.style.display = "block";
	}

	if (this[`dotRef${imageIndex - 1}`].current) {
	  this[`dotRef${imageIndex - 1}`].current.className += " active";
	}

	this.setState({ slideIndex: imageIndex });
  };
}

class AboutUs extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in aabout us constructor ", props);
	}

	render() {
		const { id, title, image, description, brochureLink } = this.props.aboutUsData;
		return (
			<div id={this.props.section}>
				<h4 className="sectionTitle">About Us</h4>
				<div className="row">
					<div className="col-md-6 col-xs-12">
						<img src={image} style={{ width: "inherit", height: "inherit" }} />
					</div>
					<div className={`col-md-6 col-xs-12 ${this.props.cssClass}`}>
						<h3>{title}</h3>
						<div>{description}</div>
						<button className="btn" onClick={(e) => window.open(brochureLink)}>
							Download Brochure
						</button>
					</div>
				</div>
			</div>
		);
	}
}

class Amenities extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in amenities constructor ", props);
	}

	render() {
		const { id, title, list, images } = this.props.amenitiesData;
		return (
			<div id={this.props.section} className="amenityContainer" >
				<h4 className="sectionTitle">{title}</h4>
				<div className="row" style={{ padding: "30px" }}>
				{
					list.map((amenityObj, index) => {
						return (
							<div className={`col-md-2 col-sm-4 col-xs-6 ${this.props.containerCss} amenityIconContainr`}
								style={{ textAlign: "center" }}
								key={index}>
								<img className={this.props.imageCss} src={amenityObj.icon} />
								<div className="amenityTitle">{amenityObj.title}</div>
							</div>
						);
					})
				}
				</div>
				<Carousel sectionId={id} list={images}>
					<h5>...</h5>
					<p>...</p>
				</Carousel>
			</div>
		);
	}
}

class VirtualTour extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in virtual tour constructor ", props);
	}

	render() {
		const { id, title, list } = this.props.virtualTourData;
		return (
			<div id={this.props.section} className="amenityContainer">
				<h4 className="sectionTitle">{title}</h4>
				<Carousel sectionId={id} list={list}></Carousel>
			</div>
		);
	}
}

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in gallery constructor ", props);
	}

	componentDidMount() {}

	render() {
		const { images } = this.props.galleryData;
		return (
			<div id={this.props.section}>
				<div className="row">
					{images.map((image, index) => {
						return (
							<div className="col-md-3 col-xs-6 col-xs-12 galleryImgDiv" key={index}>
								<img src={image} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

class FloorPlan extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in floor plan constructor ", props);
	}

	componentDidMount() {}

	render() {
		const { id, title, images } = this.props.floorPlanData;
		return (
			<div id={this.props.section} className="amenityContainer">
				<h4 className="sectionTitle">{title}</h4>
				<Carousel sectionId={id} list={images}></Carousel>
			</div>
		);
	}
}

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in contact us constructor ", props);
	}

	render() {
		const { id, title, mapLink } = this.props.contactUsData;
		const brokerData = this.props.brokerData;
		return (
			<div id={this.props.section} className="row contactUs">
				<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<EnquiryForm></EnquiryForm>
				</div>
				<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 brokerDetails">
					<div className="verticallyMiddle">
						<p>[ OUR CONTACT DETAILS ]</p>
						<h4>{brokerData.fullName}</h4>
						<p>{`An authorized channel partner of `}</p>
						<div className="row">
							<div className="col-2">
								<img src="./assets/images/place.png"/>
							</div>
							<div className="col-10">
								<div className="brokerDetailsTitle">OUR ADDRESS</div>
								<p>{brokerData.address}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<img src="./assets/images/mail.png"/>
							</div>
							<div className="col-10">
								<div className="brokerDetailsTitle">EMAIL ADDRESS</div>
								<p>{brokerData.emailId}<br/>
									{brokerData.alternateEmailId ? brokerData.alternateEmailId : ''}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<img src="./assets/images/phone.png"/>
							</div>
							<div className="col-10">
								<div className="brokerDetailsTitle">OUR PHONE</div>
								<p>{brokerData.mobileNumber}<br/>
									{brokerData.alternateMobileNo ? brokerData.alternateMobileNo : ''}
								</p>
							</div>
						</div>
						<div className="row">
						<div className="col-2">
							<img src="./assets/images/document.png"/>
						</div>
						<div className="col-10">
							<div className="brokerDetailsTitle">RERA NUMBER</div>
							<p>{brokerData.reraNumber}</p>
						</div>
					</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<iframe 
						src={mapLink} 
						className="mapLocation"
						title="Our location on google map">
					</iframe>
				</div>
			</div>
		);
	}

	onSubmitEquiryForm = (e) =>{
		e.preventDefault();
		console.log("form submitted")
	}
}

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in carousel constructor ", props);
	}

	componentDidMount() {
		$(`#${this.props.sectionId}`).carousel();
	}

  render() {
	const { sectionId, list } = this.props;
	return (
	  <div id={sectionId} className="carousel slide" data-ride="carousel">
		{list.map((item, index) => {
		  return (
			<ol className="carousel-indicators" key={index}>
			  <li
				data-target="#carouselExampleIndicators"
				data-slide-to={index}
				className="active"
			  ></li>
			  <li
				data-target="#carouselExampleIndicators"
				data-slide-to={index}
			  ></li>
			  <li
				data-target="#carouselExampleIndicators"
				data-slide-to={index}
			  ></li>
			</ol>
		  );
		})}
		<div className="carousel-inner">
		  {list.map((item, index) => {
			let source = "";
			var snippet = "";
			if (typeof item == "string") {
			  source = item;
			} else if (sectionId == "virtualTour") {
			  source = item.tourImageLink;
			  snippet = (
				<div>
				  <h4></h4>
				  <button
					className="btn"
					onClick={(e) => (window.location.href = `${item.tourLink}`)}
				  >
					Enter Virtual Tour
				  </button>
				</div>
			  );
			}

			// const src = typeof(item) == 'string' ? item : ;
			return (
			  <div
				className={`carousel-item ${index == 0 ? "active" : ""}`}
				key={index}
			  >
				<img className="d-block w-100" src={source} alt="First slide" />
				<div className="carousel-caption d-none d-md-block">
				  {snippet}
				</div>
			  </div>
			);
		  })}
		</div>
		<a
		  className="carousel-control-prev"
		  href="#carouselExampleIndicators"
		  role="button"
		  data-slide="prev"
		>
		  <span
			className="carousel-control-prev-icon"
			aria-hidden="true"
		  ></span>
		  <span className="sr-only">Previous</span>
		</a>
		<a
		  className="carousel-control-next"
		  href="#carouselExampleIndicators"
		  role="button"
		  data-slide="next"
		>
		  <span
			className="carousel-control-next-icon"
			aria-hidden="true"
		  ></span>
		  <span className="sr-only">Next</span>
		</a>
	  </div>
	);
  }
}

class Footer extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in footer constructor ", props);
	}

	componentDidMount() {}

	render() {
		const { description, disclaimer } = this.props.footerData;
		return (
			<div>
				<div className="row footer">
					{description}
					<br />
					<br />
					<div>Disclaimer</div>
				</div>
			</div>
		);
	}
}

class ModalContainer extends React.Component {
	constructor(props){
		super(props);
		this.modalRef = React.createRef();
	}

	componentDidMount(){
		console.log(this.modalRef.current)
		// this.modalRef.current.modal('show') // not working by ref
		$('#exampleModal').modal('show')
	}

	render(){
		return (
			<div>
				<div className="modal fade" ref={this.modalRef} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-body">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class EnquiryForm extends React.Component {
	constructor(props) {
		super(props);
		console.log("came in contact us constructor ", props);
		this.state = {
			name : '',
			email : '',
			phoneNo : '',
			regex : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		}
	}

	onChangeHandler = (e) => {
		const inputData = {};
		inputData[e.target.name] = e.target.value;
		this.setState(inputData);
	}

	render(){
		return (
			<React.Fragment>
				<div className="col-12">
					<h4>Get In Touch</h4>
					<div style={{marginBottom: '14px'}}>Please fill in your details below and we will get in touch with you shorlty</div>
				</div>
				<form>
					<div className="row">
						<div className="col-12">
							<label htmlFor="name" className="col-form-label">Name</label>
							<input 
								type="text" 
								name="name" 
								id="name" 
								className="form-control"
								value={this.state.name} 
								onChange={this.onChangeHandler}
								required/>
						</div>
						<div className="col-12">
							<label htmlFor="email">Email</label>
							<input 
								type="email" 
								name="email" 
								id="email" 
								className="form-control"
								value={this.state.email} 
								pattern={this.state.regex} 
								onChange={this.onChangeHandler}
								required/>
						</div>
						<div className="col-12">
							<label htmlFor="phoneNo">Phone Number</label>
							<input 
								type="tel" 
								name="phoneNo" 
								id="phoneNo" 
								className="form-control"
								value={this.state.phoneNo} 
								pattern="[0-9]{10}" 
								onChange={this.onChangeHandler}
								required/>
						</div>
						<p className="col-12 tncLabel">
							By submitting above details, you are authorizing Rajshree Builders and its associate/partner companies to call you and send transcational/promotional communicatin even though you may be registered under DNC.
						</p>	
					</div>

					<button className="btn" onClick={this.onSubmitEquiryForm}>Submit</button>
				</form>
			</React.Fragment>
		)
	}
}
//   var output = Babel.transform(<Home />, { presets: ["env"] }).code;

ReactDOM.render(<Home />, document.getElementById("root"));
