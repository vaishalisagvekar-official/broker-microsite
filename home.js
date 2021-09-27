var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SlideShow from './SlideShow';
// import styles from './styles.scss';
// var styles = require('./SlideShow');
// require('./SlideShow.js')
// import * as Babel from '@babel/standalone';

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	}

	_createClass(Home, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			// this.props.refFor.current.modal('toggle')
		}
	}, {
		key: "render",
		value: function render() {

			var bannerData = {
				"id": "banner",
				"title": "Home",
				"images": ["https://d1an7tx677lu0y.cloudfront.net/2021/07/22-copy-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg"]
			};

			var aboutUsData = {
				id: "about",
				title: "About Us",
				description: "Step into \u2018The Chambers\u2019- the premium commercial office space for entrepreneurs located at the iconic architectural marvel of Kohinoor Square. \u2018The Chambers\u2019 is located in Kohinoor Square from the 4th to the 13th floor with offices starting from 769 sq.ft to 1331 sq.ft (RERA Carpet Area). And here\u2019s why it is probably a good decision to buy a Chambers office whether it is for end-use or for investment.\n\n\t\t\tKohinoor Square is one of the tallest commercial towers in the country and is an iconic structure located at the centre of the city. Investments in iconic commercial properties appreciate faster and depreciate slower than the market.\n\t\t\t\n\t\t\tThe location is congestion-free and will give you easy access to trains, metros and airports.",
				brochureLink: "https://project-microsite-data.s3.amazonaws.com/kohinoor_abcd/about/Vaishali's Resume.pdf",
				image: "https://d1an7tx677lu0y.cloudfront.net/2021/07/image2.jpg"
			};

			var amenitiesData = {
				id: "amenities",
				title: "Amenities",
				list: [{
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}, {
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}, {
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}, {
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}, {
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}, {
					icon: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
					title: "amenity title 1"
				}],
				images: ["https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t3-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t2-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t1-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view1-min.jpg"]
			};

			var virtualTourData = {
				id: "virtualTour",
				title: "Virtual Tour",
				list: [{
					tourImageLink: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view3-min.jpg",
					tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/lobby/"
				}, {
					tourImageLink: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/3bhk-min.png",
					tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/3bhk/"
				}, {
					tourImageLink: "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/2bhk.jpg",
					tourLink: "https://cp.rajshree11east.com/dinesh-sanghvi/2bhk/"
				}]
			};

			var floorPlanData = {
				id: "floorPlans",
				title: "Floor Plans ",
				images: ["https://d1an7tx677lu0y.cloudfront.net/2021/07/4thfloor-min.png", "https://d1an7tx677lu0y.cloudfront.net/2021/07/5thfloor-min.png", "https://d1an7tx677lu0y.cloudfront.net/2021/07/6thfloor-1-min.png"]
			};

			var galleryData = {
				id: "gallery",
				title: "Gallery",
				images: ["https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/22-m-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/et-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/13-copy-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/entrance-m.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/pr-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/14-copy-min.jpg"]
			};

			var contactUsData = {
				id: "contactUs",
				title: "Contact Us",
				mapLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.6467646648563!2d72.9112958!3d19.0818851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e5017f4d61%3A0xd7833ccfd79b6242!2sRajshree%2011%20East!5e0!3m2!1sen!2sin!4v1632124537483!5m2!1sen!2sin"
			};

			var brokerData = {
				"fullName": "Dinesh M Sanghvi",
				"mobileNumber": "8467890321",
				"alternateMobileNo": "7489045673",
				"emailId": "dsa_properties@yahoo.com",
				"alternateEmailId": "vbrokerOcean@gmail.com",
				"reraNumber": "FGT657890",
				"address": "Office No. 303, Monterossa, Above IDFC Bank, Opp. Ganpati Temple, 90 Feet Road, Pantnagar, Ghatkopar (E), Mumbai-400075"
			};

			var footerData = {
				id: "footer",
				title: "Footer",
				description: "This Project is Developed By M/s. Panchsheel 1 Upgrade LLP, Group Company of Rajshree Builders.\n\n\t\t\tThe Project is registered as Rajshree Eleven East with MahaRERA Registration No. P51800030117, Available at http://maharera.mahaonline.gov.in",
				disclaimer: "This is not an offer, invitation to offer, and/or commitment of any nature and the content hereof is not and should not be constructed as an offer/invitation to offer/contract or any intention thereof and/or any disclosure under any statute of any nature whatsoever. All plans, designs, Images, renders, specification, dimensions, facilities and other details herein are artistic impressions and stock images and purely for illustrative and representational purpose and indicative in nature and the intended recipient should note that these are to be treated as purely provisional and informative and as such only tentative subject to approval from respective authorities. No warranty is expressly or impliedly given that the completed development will comply in any degree with such artist\u2019s impression as depicted. The photographs contained herein are stock/standard photography and may have been taken at at location other that the project site and are used to indicate a conceptual lifestyles. The actual images/views have been enhanced/touched up/airbrushed for visual, illustrative and creative purposes. All specifications of the flat/project shall be as per the final agreement between the parties. Recipients are advised to use their discretion in relying on the information/amenities described/described/shown herein. The visitor/recipient is aware that the furniture, fittings and fixtures displayed in the sample/show flat/ show residence at the sales pavilion /brouchers are only for the purpose of showcasing the flats and we shall not be liable, required and/or obliged to procide any further, fittings as displayed in the sample/show flat/show residence at the sales pavilion/brochuers. The color shades of wall, tiles etc., are for representational purpose and will vary in planning and designing and upon actual construction. The render for internal spaces is only to serve as an example of the suggested space management and possible utilization of space. Any party desirous/interested in the project need to enter into agreement for sale and the development/transaction shall be governed by the terms and conditions of the agreement for sale. Project Financed by Bajaj Home Finance Ltd. (BHFL). *Government taxes as applicable. *Terms and Conditions apply."
			};

			var sections = [bannerData, aboutUsData, amenitiesData, virtualTourData, floorPlanData, galleryData, contactUsData, footerData];

			return React.createElement(
				"div",
				null,
				React.createElement(
					"nav",
					{ className: "navbar fixed-top navbar-expand-lg navbar-light header " },
					React.createElement(
						"a",
						{ className: "navbar-brand", href: "#" },
						React.createElement("img", {
							className: "logo",
							src: "https://cp.kohinoorsquare.in/praful-jadhav/wp-content/uploads/2020/08/logo-kohinoor.png", alt: "" })
					),
					React.createElement(
						"button",
						{ className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
						React.createElement("span", { className: "navbar-toggler-icon" })
					),
					React.createElement(
						"div",
						{ className: "collapse navbar-collapse", id: "navbarNav" },
						React.createElement(
							"ul",
							{ className: "navbar-nav d-flex justify-content-end" },
							sections.map(function (section, index) {
								if (index == 0) {
									return React.createElement(
										"li",
										{ className: "nav-item active", key: section.id },
										React.createElement(
											"a",
											{ className: "nav-link", href: "#" + section.id },
											section.title,
											React.createElement(
												"span",
												{ className: "sr-only" },
												"(current)"
											)
										)
									);
								} else if (section.id !== 'footer') {
									return React.createElement(
										"li",
										{ className: "nav-item", key: section.id },
										React.createElement(
											"a",
											{ className: "nav-link", href: "#" + section.id },
											section.title
										)
									);
								}
							})
						)
					)
				),
				sections.map(function (section) {
					switch (section.id) {
						case 'banner':
							return React.createElement(SlideShow, {
								key: section.id,
								section: section.id,
								imgArray: bannerData.images,
								cssClass: "bannerContainer" });
							break;

						case 'about':
							return React.createElement(AboutUs, {
								key: section.id,
								section: section.id,
								aboutUsData: aboutUsData,
								cssClass: "verticallyMiddle" });
							break;

						case 'amenities':
							return React.createElement(Amenities, {
								key: section.id,
								section: section.id,
								amenitiesData: amenitiesData,
								imageCss: "amenityIcon",
								containerCss: "verticallyMiddle" });
							break;

						case 'virtualTour':
							return React.createElement(VirtualTour, {
								key: section.id,
								section: section.id,
								virtualTourData: virtualTourData });
							break;

						case 'gallery':
							return React.createElement(Gallery, {
								key: section.id,
								section: section.id,
								galleryData: galleryData });
							break;

						case 'floorPlans':
							return React.createElement(FloorPlan, {
								key: section.id,
								section: section.id,
								floorPlanData: floorPlanData
							});
							break;

						case 'contactUs':
							return React.createElement(ContactUs, {
								key: section.id,
								section: section.id,
								contactUsData: contactUsData,
								brokerData: brokerData
							});
							break;

						case 'footer':
							return React.createElement(Footer, {
								key: section.id,
								section: section.id,
								footerData: footerData,
								cssClass: "verticallyMiddle"
							});
							break;

						default:
							break;
					}
				}),
				React.createElement(
					ModalContainer,
					null,
					React.createElement(EnquiryForm, null)
				)
			);
		}
	}]);

	return Home;
}(React.Component);

var SlideShow = function (_React$Component2) {
	_inherits(SlideShow, _React$Component2);

	function SlideShow(props) {
		_classCallCheck(this, SlideShow);

		var _this2 = _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).call(this, props));

		_this2.showSlides = function () {
			var imgArray = _this2.props.imgArray;


			var imageIndex = _this2.state.slideIndex;

			imgArray.forEach(function (image, index) {
				if (_this2["imageRef" + index] !== undefined) {
					if (_this2["imageRef" + index].current !== null) {
						_this2["imageRef" + index].current.style.display = "none";
					}
				}
			});

			imageIndex = imageIndex + 1;
			if (imageIndex > imgArray.length) {
				imageIndex = 1;
			}
			imgArray.forEach(function (image, index) {
				if (_this2["dotRef" + index].current !== null) {
					_this2["dotRef" + index].current.className = _this2["dotRef" + index].current.className.replace(" active", "");
				}
			});

			if (_this2["imageRef" + (imageIndex - 1)].current !== null) {
				_this2["imageRef" + (imageIndex - 1)].current.style.display = "block";
			}

			if (_this2["dotRef" + (imageIndex - 1)].current) {
				_this2["dotRef" + (imageIndex - 1)].current.className += " active";
			}

			_this2.setState({ slideIndex: imageIndex });
		};

		_this2.state = {
			slideIndex: 0
		};

		for (var index = 0; index < props.imgArray.length; index++) {
			_this2["imageRef" + index] = React.createRef();
			_this2["dotRef" + index] = React.createRef();
		}
		return _this2;
	}

	_createClass(SlideShow, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			this.timerID = setInterval(function () {
				return _this3.showSlides();
			}, 8000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			var _props = this.props,
			    section = _props.section,
			    imgArray = _props.imgArray,
			    cssClass = _props.cssClass;

			return React.createElement(
				"div",
				{ id: section },
				React.createElement(
					"div",
					{ className: "slideshow-container" },
					imgArray.map(function (image, index) {
						return React.createElement(
							"div",
							{
								className: "mySlides fadeImg " + cssClass,
								ref: _this4["imageRef" + index],
								key: index
							},
							React.createElement("img", {
								src: image,
								style: { width: "inherit", height: "inherit" }
							})
						);
					})
				),
				React.createElement("br", null),
				React.createElement(
					"div",
					{ style: { textAlign: "center" } },
					imgArray.map(function (image, index) {
						return React.createElement("span", {
							className: "dot",
							ref: _this4["dotRef" + index],
							key: index
						});
					})
				)
			);
		}
	}]);

	return SlideShow;
}(React.Component);

var AboutUs = function (_React$Component3) {
	_inherits(AboutUs, _React$Component3);

	function AboutUs(props) {
		_classCallCheck(this, AboutUs);

		var _this5 = _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this, props));

		console.log("came in aabout us constructor ", props);
		return _this5;
	}

	_createClass(AboutUs, [{
		key: "render",
		value: function render() {
			var _props$aboutUsData = this.props.aboutUsData,
			    id = _props$aboutUsData.id,
			    title = _props$aboutUsData.title,
			    image = _props$aboutUsData.image,
			    description = _props$aboutUsData.description,
			    brochureLink = _props$aboutUsData.brochureLink;

			return React.createElement(
				"div",
				{ id: this.props.section },
				React.createElement(
					"h4",
					{ className: "sectionTitle" },
					"About Us"
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-6 col-xs-12" },
						React.createElement("img", { src: image, style: { width: "inherit", height: "inherit" } })
					),
					React.createElement(
						"div",
						{ className: "col-md-6 col-xs-12 " + this.props.cssClass },
						React.createElement(
							"h3",
							null,
							title
						),
						React.createElement(
							"div",
							null,
							description
						),
						React.createElement(
							"button",
							{ className: "btn", onClick: function onClick(e) {
									return window.open(brochureLink);
								} },
							"Download Brochure"
						)
					)
				)
			);
		}
	}]);

	return AboutUs;
}(React.Component);

var Amenities = function (_React$Component4) {
	_inherits(Amenities, _React$Component4);

	function Amenities(props) {
		_classCallCheck(this, Amenities);

		var _this6 = _possibleConstructorReturn(this, (Amenities.__proto__ || Object.getPrototypeOf(Amenities)).call(this, props));

		console.log("came in amenities constructor ", props);
		return _this6;
	}

	_createClass(Amenities, [{
		key: "render",
		value: function render() {
			var _this7 = this;

			var _props$amenitiesData = this.props.amenitiesData,
			    id = _props$amenitiesData.id,
			    title = _props$amenitiesData.title,
			    list = _props$amenitiesData.list,
			    images = _props$amenitiesData.images;

			return React.createElement(
				"div",
				{ id: this.props.section, className: "amenityContainer" },
				React.createElement(
					"h4",
					{ className: "sectionTitle" },
					title
				),
				React.createElement(
					"div",
					{ className: "row", style: { padding: "30px" } },
					list.map(function (amenityObj, index) {
						return React.createElement(
							"div",
							{ className: "col-md-2 col-sm-4 col-xs-6 " + _this7.props.containerCss + " amenityIconContainr",
								style: { textAlign: "center" },
								key: index },
							React.createElement("img", { className: _this7.props.imageCss, src: amenityObj.icon }),
							React.createElement(
								"div",
								{ className: "amenityTitle" },
								amenityObj.title
							)
						);
					})
				),
				React.createElement(
					Carousel,
					{ sectionId: id, list: images },
					React.createElement(
						"h5",
						null,
						"..."
					),
					React.createElement(
						"p",
						null,
						"..."
					)
				)
			);
		}
	}]);

	return Amenities;
}(React.Component);

var VirtualTour = function (_React$Component5) {
	_inherits(VirtualTour, _React$Component5);

	function VirtualTour(props) {
		_classCallCheck(this, VirtualTour);

		var _this8 = _possibleConstructorReturn(this, (VirtualTour.__proto__ || Object.getPrototypeOf(VirtualTour)).call(this, props));

		console.log("came in virtual tour constructor ", props);
		return _this8;
	}

	_createClass(VirtualTour, [{
		key: "render",
		value: function render() {
			var _props$virtualTourDat = this.props.virtualTourData,
			    id = _props$virtualTourDat.id,
			    title = _props$virtualTourDat.title,
			    list = _props$virtualTourDat.list;

			return React.createElement(
				"div",
				{ id: this.props.section, className: "amenityContainer" },
				React.createElement(
					"h4",
					{ className: "sectionTitle" },
					title
				),
				React.createElement(Carousel, { sectionId: id, list: list })
			);
		}
	}]);

	return VirtualTour;
}(React.Component);

var Gallery = function (_React$Component6) {
	_inherits(Gallery, _React$Component6);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		var _this9 = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

		console.log("came in gallery constructor ", props);
		return _this9;
	}

	_createClass(Gallery, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			var images = this.props.galleryData.images;

			return React.createElement(
				"div",
				{ id: this.props.section },
				React.createElement(
					"div",
					{ className: "row" },
					images.map(function (image, index) {
						return React.createElement(
							"div",
							{ className: "col-md-3 col-xs-6 col-xs-12 galleryImgDiv", key: index },
							React.createElement("img", { src: image })
						);
					})
				)
			);
		}
	}]);

	return Gallery;
}(React.Component);

var FloorPlan = function (_React$Component7) {
	_inherits(FloorPlan, _React$Component7);

	function FloorPlan(props) {
		_classCallCheck(this, FloorPlan);

		var _this10 = _possibleConstructorReturn(this, (FloorPlan.__proto__ || Object.getPrototypeOf(FloorPlan)).call(this, props));

		console.log("came in floor plan constructor ", props);
		return _this10;
	}

	_createClass(FloorPlan, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			var _props$floorPlanData = this.props.floorPlanData,
			    id = _props$floorPlanData.id,
			    title = _props$floorPlanData.title,
			    images = _props$floorPlanData.images;

			return React.createElement(
				"div",
				{ id: this.props.section, className: "amenityContainer" },
				React.createElement(
					"h4",
					{ className: "sectionTitle" },
					title
				),
				React.createElement(Carousel, { sectionId: id, list: images })
			);
		}
	}]);

	return FloorPlan;
}(React.Component);

var ContactUs = function (_React$Component8) {
	_inherits(ContactUs, _React$Component8);

	function ContactUs(props) {
		_classCallCheck(this, ContactUs);

		var _this11 = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));

		_this11.onSubmitEquiryForm = function (e) {
			e.preventDefault();
			console.log("form submitted");
		};

		console.log("came in contact us constructor ", props);
		return _this11;
	}

	_createClass(ContactUs, [{
		key: "render",
		value: function render() {
			var _props$contactUsData = this.props.contactUsData,
			    id = _props$contactUsData.id,
			    title = _props$contactUsData.title,
			    mapLink = _props$contactUsData.mapLink;

			var brokerData = this.props.brokerData;
			return React.createElement(
				"div",
				{ id: this.props.section, className: "row contactUs" },
				React.createElement(
					"div",
					{ className: "col-md-4 col-sm-6 col-xs-12" },
					React.createElement(EnquiryForm, null)
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-sm-6 col-xs-12 brokerDetails" },
					React.createElement(
						"div",
						{ className: "verticallyMiddle" },
						React.createElement(
							"p",
							null,
							"[ OUR CONTACT DETAILS ]"
						),
						React.createElement(
							"h4",
							null,
							brokerData.fullName
						),
						React.createElement(
							"p",
							null,
							"An authorized channel partner of "
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-2" },
								React.createElement("img", { src: "./assets/images/place.png" })
							),
							React.createElement(
								"div",
								{ className: "col-10" },
								React.createElement(
									"div",
									{ className: "brokerDetailsTitle" },
									"OUR ADDRESS"
								),
								React.createElement(
									"p",
									null,
									brokerData.address
								)
							)
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-2" },
								React.createElement("img", { src: "./assets/images/mail.png" })
							),
							React.createElement(
								"div",
								{ className: "col-10" },
								React.createElement(
									"div",
									{ className: "brokerDetailsTitle" },
									"EMAIL ADDRESS"
								),
								React.createElement(
									"p",
									null,
									brokerData.emailId,
									React.createElement("br", null),
									brokerData.alternateEmailId ? brokerData.alternateEmailId : ''
								)
							)
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-2" },
								React.createElement("img", { src: "./assets/images/phone.png" })
							),
							React.createElement(
								"div",
								{ className: "col-10" },
								React.createElement(
									"div",
									{ className: "brokerDetailsTitle" },
									"OUR PHONE"
								),
								React.createElement(
									"p",
									null,
									brokerData.mobileNumber,
									React.createElement("br", null),
									brokerData.alternateMobileNo ? brokerData.alternateMobileNo : ''
								)
							)
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-2" },
								React.createElement("img", { src: "./assets/images/document.png" })
							),
							React.createElement(
								"div",
								{ className: "col-10" },
								React.createElement(
									"div",
									{ className: "brokerDetailsTitle" },
									"RERA NUMBER"
								),
								React.createElement(
									"p",
									null,
									brokerData.reraNumber
								)
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-sm-12 col-xs-12" },
					React.createElement("iframe", {
						src: mapLink,
						className: "mapLocation",
						title: "Our location on google map" })
				)
			);
		}
	}]);

	return ContactUs;
}(React.Component);

var Carousel = function (_React$Component9) {
	_inherits(Carousel, _React$Component9);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this12 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		console.log("came in carousel constructor ", props);
		return _this12;
	}

	_createClass(Carousel, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			$("#" + this.props.sectionId).carousel();
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    sectionId = _props2.sectionId,
			    list = _props2.list;

			return React.createElement(
				"div",
				{ id: sectionId, className: "carousel slide", "data-ride": "carousel" },
				list.map(function (item, index) {
					return React.createElement(
						"ol",
						{ className: "carousel-indicators", key: index },
						React.createElement("li", {
							"data-target": "#carouselExampleIndicators",
							"data-slide-to": index,
							className: "active"
						}),
						React.createElement("li", {
							"data-target": "#carouselExampleIndicators",
							"data-slide-to": index
						}),
						React.createElement("li", {
							"data-target": "#carouselExampleIndicators",
							"data-slide-to": index
						})
					);
				}),
				React.createElement(
					"div",
					{ className: "carousel-inner" },
					list.map(function (item, index) {
						var source = "";
						var snippet = "";
						if (typeof item == "string") {
							source = item;
						} else if (sectionId == "virtualTour") {
							source = item.tourImageLink;
							snippet = React.createElement(
								"div",
								null,
								React.createElement("h4", null),
								React.createElement(
									"button",
									{
										className: "btn",
										onClick: function onClick(e) {
											return window.location.href = "" + item.tourLink;
										}
									},
									"Enter Virtual Tour"
								)
							);
						}

						// const src = typeof(item) == 'string' ? item : ;
						return React.createElement(
							"div",
							{
								className: "carousel-item " + (index == 0 ? "active" : ""),
								key: index
							},
							React.createElement("img", { className: "d-block w-100", src: source, alt: "First slide" }),
							React.createElement(
								"div",
								{ className: "carousel-caption d-none d-md-block" },
								snippet
							)
						);
					})
				),
				React.createElement(
					"a",
					{
						className: "carousel-control-prev",
						href: "#carouselExampleIndicators",
						role: "button",
						"data-slide": "prev"
					},
					React.createElement("span", {
						className: "carousel-control-prev-icon",
						"aria-hidden": "true"
					}),
					React.createElement(
						"span",
						{ className: "sr-only" },
						"Previous"
					)
				),
				React.createElement(
					"a",
					{
						className: "carousel-control-next",
						href: "#carouselExampleIndicators",
						role: "button",
						"data-slide": "next"
					},
					React.createElement("span", {
						className: "carousel-control-next-icon",
						"aria-hidden": "true"
					}),
					React.createElement(
						"span",
						{ className: "sr-only" },
						"Next"
					)
				)
			);
		}
	}]);

	return Carousel;
}(React.Component);

var Footer = function (_React$Component10) {
	_inherits(Footer, _React$Component10);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this13 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		console.log("came in footer constructor ", props);
		return _this13;
	}

	_createClass(Footer, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			var _props$footerData = this.props.footerData,
			    description = _props$footerData.description,
			    disclaimer = _props$footerData.disclaimer;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "row footer" },
					description,
					React.createElement("br", null),
					React.createElement("br", null),
					React.createElement(
						"div",
						null,
						"Disclaimer"
					)
				)
			);
		}
	}]);

	return Footer;
}(React.Component);

var ModalContainer = function (_React$Component11) {
	_inherits(ModalContainer, _React$Component11);

	function ModalContainer(props) {
		_classCallCheck(this, ModalContainer);

		var _this14 = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));

		_this14.modalRef = React.createRef();
		return _this14;
	}

	_createClass(ModalContainer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			console.log(this.modalRef.current);
			// this.modalRef.current.modal('show') // not working by ref
			$('#exampleModal').modal('show');
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "modal fade", ref: this.modalRef, id: "exampleModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
					React.createElement(
						"div",
						{ className: "modal-dialog", role: "document" },
						React.createElement(
							"div",
							{ className: "modal-content" },
							React.createElement(
								"div",
								{ className: "modal-body" },
								this.props.children
							)
						)
					)
				)
			);
		}
	}]);

	return ModalContainer;
}(React.Component);

var EnquiryForm = function (_React$Component12) {
	_inherits(EnquiryForm, _React$Component12);

	function EnquiryForm(props) {
		_classCallCheck(this, EnquiryForm);

		var _this15 = _possibleConstructorReturn(this, (EnquiryForm.__proto__ || Object.getPrototypeOf(EnquiryForm)).call(this, props));

		_this15.onChangeHandler = function (e) {
			var inputData = {};
			inputData[e.target.name] = e.target.value;
			_this15.setState(inputData);
		};

		console.log("came in contact us constructor ", props);
		_this15.state = {
			name: '',
			email: '',
			phoneNo: '',
			regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		};
		return _this15;
	}

	_createClass(EnquiryForm, [{
		key: "render",
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					"div",
					{ className: "col-12" },
					React.createElement(
						"h4",
						null,
						"Get In Touch"
					),
					React.createElement(
						"div",
						{ style: { marginBottom: '14px' } },
						"Please fill in your details below and we will get in touch with you shorlty"
					)
				),
				React.createElement(
					"form",
					null,
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"label",
								{ htmlFor: "name", className: "col-form-label" },
								"Name"
							),
							React.createElement("input", {
								type: "text",
								name: "name",
								id: "name",
								className: "form-control",
								value: this.state.name,
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"label",
								{ htmlFor: "email" },
								"Email"
							),
							React.createElement("input", {
								type: "email",
								name: "email",
								id: "email",
								className: "form-control",
								value: this.state.email,
								pattern: this.state.regex,
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"label",
								{ htmlFor: "phoneNo" },
								"Phone Number"
							),
							React.createElement("input", {
								type: "tel",
								name: "phoneNo",
								id: "phoneNo",
								className: "form-control",
								value: this.state.phoneNo,
								pattern: "[0-9]{10}",
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							"p",
							{ className: "col-12 tncLabel" },
							"By submitting above details, you are authorizing Rajshree Builders and its associate/partner companies to call you and send transcational/promotional communicatin even though you may be registered under DNC."
						)
					),
					React.createElement(
						"button",
						{ className: "btn", onClick: this.onSubmitEquiryForm },
						"Submit"
					)
				)
			);
		}
	}]);

	return EnquiryForm;
}(React.Component);
//   var output = Babel.transform(<Home />, { presets: ["env"] }).code;

ReactDOM.render(React.createElement(Home, null), document.getElementById("root"));