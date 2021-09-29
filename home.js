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

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.setStyleOfWholeBody = function (settings) {
			var r = document.querySelector(':root');
			if (settings.fontFamily) r.style.setProperty('--fontFamily', settings.fontFamily);
			if (settings.lineHeight) r.style.setProperty('--lineHeight', settings.lineHeight);
			if (settings.themeColor) r.style.setProperty('--themeColor', settings.themeColor);
			if (settings.fontColor) r.style.setProperty('--fontColor', settings.fontColor);
		};

		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// var settings = {
			// 	themeColor : '#0A0A0A'
			// }
			this.setStyleOfWholeBody({});
		}

		// Set font family of our choice for whole body

	}, {
		key: 'render',
		value: function render() {

			var bannerData = {
				"id": "banner",
				"title": "Home",
				"images": ["https://d1an7tx677lu0y.cloudfront.net/2021/07/22-copy-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg"]
			};

			var aboutUsData = {
				id: "about",
				title: "About Us",
				description: 'Step into \u2018The Chambers\u2019- the premium commercial office space for entrepreneurs located at the iconic architectural marvel of Kohinoor Square. \u2018The Chambers\u2019 is located in Kohinoor Square from the 4th to the 13th floor with offices starting from 769 sq.ft to 1331 sq.ft (RERA Carpet Area). And here\u2019s why it is probably a good decision to buy a Chambers office whether it is for end-use or for investment.\n\n\t\t\tKohinoor Square is one of the tallest commercial towers in the country and is an iconic structure located at the centre of the city. Investments in iconic commercial properties appreciate faster and depreciate slower than the market.\n\t\t\t\n\t\t\tThe location is congestion-free and will give you easy access to trains, metros and airports.',
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
				description: 'This Project is Developed By M/s. Panchsheel 1 Upgrade LLP, Group Company of Rajshree Builders.\n\n\t\t\tThe Project is registered as Rajshree Eleven East with MahaRERA Registration No. P51800030117, Available at http://maharera.mahaonline.gov.in',
				disclaimer: 'This is not an offer, invitation to offer, and/or commitment of any nature and the content hereof is not and should not be constructed as an offer/invitation to offer/contract or any intention thereof and/or any disclosure under any statute of any nature whatsoever. All plans, designs, Images, renders, specification, dimensions, facilities and other details herein are artistic impressions and stock images and purely for illustrative and representational purpose and indicative in nature and the intended recipient should note that these are to be treated as purely provisional and informative and as such only tentative subject to approval from respective authorities. No warranty is expressly or impliedly given that the completed development will comply in any degree with such artist\u2019s impression as depicted. The photographs contained herein are stock/standard photography and may have been taken at at location other that the project site and are used to indicate a conceptual lifestyles. The actual images/views have been enhanced/touched up/airbrushed for visual, illustrative and creative purposes. All specifications of the flat/project shall be as per the final agreement between the parties. Recipients are advised to use their discretion in relying on the information/amenities described/described/shown herein. The visitor/recipient is aware that the furniture, fittings and fixtures displayed in the sample/show flat/ show residence at the sales pavilion /brouchers are only for the purpose of showcasing the flats and we shall not be liable, required and/or obliged to procide any further, fittings as displayed in the sample/show flat/show residence at the sales pavilion/brochuers. The color shades of wall, tiles etc., are for representational purpose and will vary in planning and designing and upon actual construction. The render for internal spaces is only to serve as an example of the suggested space management and possible utilization of space. Any party desirous/interested in the project need to enter into agreement for sale and the development/transaction shall be governed by the terms and conditions of the agreement for sale. Project Financed by Bajaj Home Finance Ltd. (BHFL). *Government taxes as applicable. *Terms and Conditions apply.'
			};

			var sections = [bannerData, aboutUsData, amenitiesData, virtualTourData, galleryData, floorPlanData, contactUsData, footerData];

			return React.createElement(
				'div',
				null,
				React.createElement(
					'nav',
					{ className: 'navbar fixed-top navbar-expand-sm themeColor ' },
					React.createElement(
						'a',
						{ className: 'navbar-brand', href: '#' },
						React.createElement('img', {
							className: 'logo',
							src: 'https://cp.kohinoorsquare.in/praful-jadhav/wp-content/uploads/2020/08/logo-kohinoor.png', alt: '' })
					),
					React.createElement(
						'button',
						{ className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
						React.createElement('span', { className: 'navbar-toggler-icon' })
					),
					React.createElement(
						'div',
						{ className: 'collapse navbar-collapse', id: 'navbarNav' },
						React.createElement(
							'ul',
							{ className: 'navbar-nav d-flex justify-content-end' },
							sections.map(function (section, index) {
								var sectionName = section.title.toLocaleUpperCase();
								if (index == 0) {
									return React.createElement(
										'li',
										{ className: 'nav-item active', key: section.id },
										React.createElement(
											'a',
											{ className: 'nav-link', href: '#' + section.id },
											sectionName,
											React.createElement(
												'span',
												{ className: 'sr-only' },
												'(current)'
											)
										)
									);
								} else if (section.id !== 'footer') {
									return React.createElement(
										'li',
										{ className: 'nav-item', key: section.id },
										React.createElement(
											'a',
											{ className: 'nav-link', href: '#' + section.id },
											sectionName
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
								imageCss: 'amenityIcon',
								containerCss: 'verticallyMiddle' });
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
					{ id: 'enquiryFormId' },
					React.createElement(EnquiryForm, null)
				),
				React.createElement(
					'div',
					{ id: 'enquire-now', className: 'enquire-now', onClick: function onClick() {
							return $('#enquiryFormId').modal('show');
						} },
					React.createElement(
						'a',
						{ href: '#', className: 'enquire-now-btn btn  btn-lg', id: 'OpenFormMob' },
						'ENQUIRE NOW'
					)
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
				if (_this2['imageRef' + index] !== undefined) {
					if (_this2['imageRef' + index].current !== null) {
						_this2['imageRef' + index].current.style.display = "none";
					}
				}
			});

			imageIndex = imageIndex + 1;
			if (imageIndex > imgArray.length) {
				imageIndex = 1;
			}
			imgArray.forEach(function (image, index) {
				if (_this2['dotRef' + index].current !== null) {
					_this2['dotRef' + index].current.className = _this2['dotRef' + index].current.className.replace(" active", "");
				}
			});

			if (_this2['imageRef' + (imageIndex - 1)].current !== null) {
				_this2['imageRef' + (imageIndex - 1)].current.style.display = "block";
			}

			if (_this2['dotRef' + (imageIndex - 1)].current) {
				_this2['dotRef' + (imageIndex - 1)].current.className += " active";
			}

			_this2.setState({ slideIndex: imageIndex });
		};

		_this2.state = {
			slideIndex: 0
		};

		for (var index = 0; index < props.imgArray.length; index++) {
			_this2['imageRef' + index] = React.createRef();
			_this2['dotRef' + index] = React.createRef();
		}
		return _this2;
	}

	_createClass(SlideShow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			this.timerID = setInterval(function () {
				return _this3.showSlides();
			}, 8000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _props = this.props,
			    section = _props.section,
			    imgArray = _props.imgArray,
			    cssClass = _props.cssClass;

			return React.createElement(
				'div',
				{ id: section },
				React.createElement(
					'div',
					{ className: 'slideshow-container' },
					imgArray.map(function (image, index) {
						return React.createElement(
							'div',
							{
								className: 'mySlides fadeImg ' + cssClass,
								ref: _this4['imageRef' + index],
								key: index
							},
							React.createElement('img', {
								src: image,
								style: { width: "inherit", height: "inherit" }
							})
						);
					})
				),
				React.createElement('br', null),
				React.createElement(
					'div',
					{ style: { textAlign: "center" } },
					imgArray.map(function (image, index) {
						return React.createElement('span', {
							className: 'dot',
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

		return _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this, props));
	}

	_createClass(AboutUs, [{
		key: 'render',
		value: function render() {
			var _props$aboutUsData = this.props.aboutUsData,
			    id = _props$aboutUsData.id,
			    title = _props$aboutUsData.title,
			    image = _props$aboutUsData.image,
			    description = _props$aboutUsData.description,
			    brochureLink = _props$aboutUsData.brochureLink;

			return React.createElement(
				'div',
				{ id: this.props.section },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-md-6 col-xs-12 subSection' },
						React.createElement('img', { src: image, style: { width: "inherit", height: "inherit" } })
					),
					React.createElement(
						'div',
						{ className: 'col-md-6 col-xs-12 subSection aboutDescription ' + this.props.cssClass },
						React.createElement(
							'h2',
							{ className: 'description' },
							title.toLocaleUpperCase()
						),
						React.createElement(
							'div',
							{ className: 'description' },
							description
						),
						React.createElement(
							'button',
							{ className: 'btn themeColor brochure description', onClick: function onClick(e) {
									return window.open(brochureLink);
								} },
							'DOWNLOAD BROCHURE'
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

		_this6.changeBackground = function (e) {
			e.target.style.background = 'black';
		};

		_this6.revertBackground = function (e) {
			e.target.style.background = 'none';
		};

		return _this6;
	}

	_createClass(Amenities, [{
		key: 'render',
		value: function render() {
			var _this7 = this;

			var _props$amenitiesData = this.props.amenitiesData,
			    id = _props$amenitiesData.id,
			    title = _props$amenitiesData.title,
			    list = _props$amenitiesData.list,
			    images = _props$amenitiesData.images;

			return React.createElement(
				'div',
				{ className: 'sectionTextColor' },
				React.createElement(
					'div',
					{ id: this.props.section, className: 'amenityContainer' },
					React.createElement(
						'h2',
						{ className: 'sectionTitle' },
						title
					),
					React.createElement(
						'div',
						{ className: 'row sectionContent' },
						list.map(function (amenityObj, index) {
							return React.createElement(
								'div',
								{ className: 'col-5 col-sm-4 col-md-3 col-lg-2 ' + _this7.props.containerCss + ' amenityIconContainr',
									style: { textAlign: "center" },
									key: 'amenityIcon_' + index,
									onMouseOver: _this7.changeBackground,
									onMouseOut: _this7.revertBackground },
								React.createElement('img', { className: _this7.props.imageCss, src: amenityObj.icon }),
								React.createElement(
									'div',
									{ className: 'amenityTitle' },
									amenityObj.title
								)
							);
						})
					)
				),
				React.createElement(
					Carousel,
					{ sectionId: id + '_carousel', list: images, containerCss: '', containerHeight: 'carouselHeight' },
					React.createElement(
						'h5',
						null,
						'...'
					),
					React.createElement(
						'p',
						null,
						'...'
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

		return _possibleConstructorReturn(this, (VirtualTour.__proto__ || Object.getPrototypeOf(VirtualTour)).call(this, props));
	}

	_createClass(VirtualTour, [{
		key: 'render',
		value: function render() {
			var _props$virtualTourDat = this.props.virtualTourData,
			    id = _props$virtualTourDat.id,
			    title = _props$virtualTourDat.title,
			    list = _props$virtualTourDat.list;

			return React.createElement(
				'div',
				{ id: this.props.section, className: 'amenityContainer' },
				React.createElement(
					'h2',
					{ className: 'sectionTextColor sectionTitle' },
					title
				),
				React.createElement(Carousel, { sectionId: id, list: list, containerCss: 'sectionContent', containerHeight: 'carouselHeight_1' })
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

		_this9.openGallery = function (index) {
			_this9.setState({ selectedImgIndex: index });
		};

		_this9.removeViewGallery = function () {
			_this9.setState({ selectedImgIndex: -1 });
		};

		_this9.state = {
			selectedImgIndex: -1
		};
		return _this9;
	}

	_createClass(Gallery, [{
		key: 'render',
		value: function render() {
			var _this10 = this;

			var images = this.props.galleryData.images;

			return React.createElement(
				'div',
				{ id: this.props.section },
				React.createElement(
					'div',
					{ className: 'row' },
					images.map(function (image, index) {
						return React.createElement(
							React.Fragment,
							null,
							React.createElement(
								'div',
								{ className: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 galleryImgDiv', key: 'gallery' + index, onClick: function onClick() {
										return _this10.openGallery(index);
									} },
								React.createElement('img', { src: image })
							)
						);
					})
				),
				this.state.selectedImgIndex !== -1 ? React.createElement(
					ViewGallery,
					{ id: 'viewgalleryId', imgIndex: this.state.selectedImgIndex, images: images, onClose: this.removeViewGallery },
					'Hello there'
				) : ''
			);
		}
	}]);

	return Gallery;
}(React.Component);

var FloorPlan = function (_React$Component7) {
	_inherits(FloorPlan, _React$Component7);

	function FloorPlan(props) {
		_classCallCheck(this, FloorPlan);

		return _possibleConstructorReturn(this, (FloorPlan.__proto__ || Object.getPrototypeOf(FloorPlan)).call(this, props));
	}

	_createClass(FloorPlan, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props$floorPlanData = this.props.floorPlanData,
			    id = _props$floorPlanData.id,
			    title = _props$floorPlanData.title,
			    images = _props$floorPlanData.images;

			return React.createElement(
				'div',
				{ id: this.props.section, className: 'amenityContainer' },
				React.createElement(
					'h2',
					{ className: 'sectionTextColor sectionTitle' },
					title
				),
				React.createElement(Carousel, { sectionId: id, list: images, containerCss: 'sectionContent', containerHeight: 'carouselHeight_1' })
			);
		}
	}]);

	return FloorPlan;
}(React.Component);

var ContactUs = function (_React$Component8) {
	_inherits(ContactUs, _React$Component8);

	function ContactUs(props) {
		_classCallCheck(this, ContactUs);

		var _this12 = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));

		_this12.onSubmitEquiryForm = function (e) {
			e.preventDefault();
			console.log("form submitted");
		};

		return _this12;
	}

	_createClass(ContactUs, [{
		key: 'render',
		value: function render() {
			var _props$contactUsData = this.props.contactUsData,
			    id = _props$contactUsData.id,
			    title = _props$contactUsData.title,
			    mapLink = _props$contactUsData.mapLink;

			var brokerData = this.props.brokerData;
			return React.createElement(
				'div',
				{ id: this.props.section, className: 'row contactUs' },
				React.createElement(
					'div',
					{ className: 'col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12' },
					React.createElement(EnquiryForm, null)
				),
				React.createElement(
					'div',
					{ className: 'col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 brokerDetails' },
					React.createElement(
						'div',
						{ className: 'verticallyMiddle' },
						React.createElement(
							'p',
							null,
							'[ OUR CONTACT DETAILS ]'
						),
						React.createElement(
							'h4',
							null,
							brokerData.fullName
						),
						React.createElement(
							'p',
							null,
							'An authorized channel partner of '
						),
						React.createElement(
							'div',
							{ className: 'row' },
							React.createElement(
								'div',
								{ className: 'col-2' },
								React.createElement('img', { src: './assets/images/place.png' })
							),
							React.createElement(
								'div',
								{ className: 'col-10' },
								React.createElement(
									'div',
									{ className: 'brokerDetailsTitle' },
									'OUR ADDRESS'
								),
								React.createElement(
									'p',
									null,
									brokerData.address
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'row' },
							React.createElement(
								'div',
								{ className: 'col-2' },
								React.createElement('img', { src: './assets/images/mail.png' })
							),
							React.createElement(
								'div',
								{ className: 'col-10' },
								React.createElement(
									'div',
									{ className: 'brokerDetailsTitle' },
									'EMAIL ADDRESS'
								),
								React.createElement(
									'p',
									null,
									brokerData.emailId,
									React.createElement('br', null),
									brokerData.alternateEmailId ? brokerData.alternateEmailId : ''
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'row' },
							React.createElement(
								'div',
								{ className: 'col-2' },
								React.createElement('img', { src: './assets/images/phone.png' })
							),
							React.createElement(
								'div',
								{ className: 'col-10' },
								React.createElement(
									'div',
									{ className: 'brokerDetailsTitle' },
									'OUR PHONE'
								),
								React.createElement(
									'p',
									null,
									brokerData.mobileNumber,
									React.createElement('br', null),
									brokerData.alternateMobileNo ? brokerData.alternateMobileNo : ''
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'row' },
							React.createElement(
								'div',
								{ className: 'col-2' },
								React.createElement('img', { src: './assets/images/document.png' })
							),
							React.createElement(
								'div',
								{ className: 'col-10' },
								React.createElement(
									'div',
									{ className: 'brokerDetailsTitle' },
									'RERA NUMBER'
								),
								React.createElement(
									'p',
									null,
									brokerData.reraNumber
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12' },
					React.createElement('iframe', {
						src: mapLink,
						className: 'fullSize',
						title: 'Our location on google map' })
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

		return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
	}

	_createClass(Carousel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$('#' + this.props.sectionId).carousel();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    sectionId = _props2.sectionId,
			    list = _props2.list,
			    containerCss = _props2.containerCss,
			    containerHeight = _props2.containerHeight;

			return React.createElement(
				'div',
				{ id: sectionId, className: 'carousel slide ' + containerCss, 'data-ride': 'carousel' },
				list.map(function (item, index) {
					return React.createElement(
						'ol',
						{ className: 'carousel-indicators', key: index },
						React.createElement('li', {
							'data-target': '#carouselExampleIndicators',
							'data-slide-to': index,
							className: 'active'
						}),
						React.createElement('li', {
							'data-target': '#carouselExampleIndicators',
							'data-slide-to': index
						}),
						React.createElement('li', {
							'data-target': '#carouselExampleIndicators',
							'data-slide-to': index
						})
					);
				}),
				React.createElement(
					'div',
					{ className: 'carousel-inner' },
					list.map(function (item, index) {
						var source = "";
						var snippet = "";
						if (typeof item == "string") {
							source = item;
						} else if (sectionId == "virtualTour") {
							source = item.tourImageLink;
							snippet = React.createElement(
								'div',
								{ className: '' },
								React.createElement('h4', null),
								React.createElement(
									'button',
									{
										className: 'btn tourBtn',
										onClick: function onClick(e) {
											return window.location.href = '' + item.tourLink;
										}
									},
									'Enter Virtual Tour'
								)
							);
						}

						// const src = typeof(item) == 'string' ? item : ;
						return React.createElement(
							'div',
							{ className: 'carousel-item ' + (index == 0 ? "active" : ""),
								key: index },
							React.createElement('img', { className: 'd-block w-100 ' + containerHeight, src: source, alt: 'First slide' }),
							React.createElement(
								'div',
								{ className: 'centered d-md-block' },
								snippet
							)
						);
					})
				),
				React.createElement(
					'a',
					{ className: 'carousel-control-prev',
						href: '#carouselExampleIndicators',
						role: 'button',
						'data-slide': 'prev' },
					React.createElement('span', { className: 'carousel-control-prev-icon',
						'aria-hidden': 'true' }),
					React.createElement(
						'span',
						{ className: 'sr-only' },
						'Previous'
					)
				),
				React.createElement(
					'a',
					{
						className: 'carousel-control-next',
						href: '#carouselExampleIndicators',
						role: 'button',
						'data-slide': 'next'
					},
					React.createElement('span', {
						className: 'carousel-control-next-icon',
						'aria-hidden': 'true'
					}),
					React.createElement(
						'span',
						{ className: 'sr-only' },
						'Next'
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

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	_createClass(Footer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props$footerData = this.props.footerData,
			    description = _props$footerData.description,
			    disclaimer = _props$footerData.disclaimer;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'row footer' },
					React.createElement(
						'strong',
						null,
						description,
						React.createElement('br', null),
						React.createElement('br', null),
						React.createElement(
							ModalContainer,
							{ id: 'disclaimerId' },
							React.createElement(
								'div',
								{ className: 'modal-header', style: { padding: '0px' } },
								React.createElement(
									'h5',
									{ className: 'modal-title title', id: 'exampleModalCenterTitle' },
									'Disclaimer'
								),
								React.createElement(
									'button',
									{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
									React.createElement(
										'span',
										{ 'aria-hidden': 'true' },
										'\xD7'
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'disclaimer' },
								disclaimer
							)
						),
						React.createElement(
							'div',
							{ onClick: function onClick() {
									return $('#disclaimerId').modal('show');
								} },
							'Disclaimer'
						)
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

		var _this15 = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));

		_this15.modalRef = React.createRef();
		return _this15;
	}

	_createClass(ModalContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.modalRef.current);
			// this.modalRef.current.modal('show') // not working by ref
			if (this.props.id == 'enquiryFormId') $('#' + this.props.id).modal('show');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'modal fade', ref: this.modalRef, id: this.props.id, tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
					React.createElement(
						'div',
						{ className: 'modal-dialog', role: 'document' },
						React.createElement(
							'div',
							{ className: 'modal-content' },
							React.createElement(
								'div',
								{ className: 'modal-body' },
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

		var _this16 = _possibleConstructorReturn(this, (EnquiryForm.__proto__ || Object.getPrototypeOf(EnquiryForm)).call(this, props));

		_this16.onChangeHandler = function (e) {
			var inputData = {};
			inputData[e.target.name] = e.target.value;
			_this16.setState(inputData);
		};

		_this16.state = {
			name: '',
			email: '',
			phoneNo: '',
			regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		};
		return _this16;
	}

	_createClass(EnquiryForm, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'div',
					{ className: 'col-12' },
					React.createElement(
						'div',
						{ style: { display: 'flex', position: 'relative' } },
						React.createElement(
							'h4',
							null,
							'Get In Touch'
						),
						React.createElement(
							'button',
							{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close', style: { right: '0px', position: 'absolute' } },
							React.createElement(
								'span',
								{ 'aria-hidden': 'true' },
								'\xD7'
							)
						)
					),
					React.createElement(
						'div',
						{ style: { marginBottom: '14px' } },
						'Please fill in your details below and we will get in touch with you shorlty'
					)
				),
				React.createElement(
					'form',
					null,
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-12' },
							React.createElement(
								'label',
								{ htmlFor: 'name', className: 'col-form-label' },
								'Name'
							),
							React.createElement('input', {
								type: 'text',
								name: 'name',
								id: 'name',
								className: 'form-control',
								value: this.state.name,
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							'div',
							{ className: 'col-12' },
							React.createElement(
								'label',
								{ htmlFor: 'email' },
								'Email'
							),
							React.createElement('input', {
								type: 'email',
								name: 'email',
								id: 'email',
								className: 'form-control',
								value: this.state.email,
								pattern: this.state.regex,
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							'div',
							{ className: 'col-12' },
							React.createElement(
								'label',
								{ htmlFor: 'phoneNo' },
								'Phone Number'
							),
							React.createElement('input', {
								type: 'tel',
								name: 'phoneNo',
								id: 'phoneNo',
								className: 'form-control',
								value: this.state.phoneNo,
								pattern: '[0-9]{10}',
								onChange: this.onChangeHandler,
								required: true })
						),
						React.createElement(
							'p',
							{ className: 'col-12 tncLabel' },
							'By submitting above details, you are authorizing Rajshree Builders and its associate/partner companies to call you and send transcational/promotional communicatin even though you may be registered under DNC.'
						)
					),
					React.createElement(
						'div',
						{ className: 'row', style: { justifyContent: 'center' } },
						React.createElement(
							'button',
							{ className: 'btn themeColor', onClick: this.onSubmitEquiryForm },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return EnquiryForm;
}(React.Component);

var ViewGallery = function (_React$Component13) {
	_inherits(ViewGallery, _React$Component13);

	function ViewGallery(props) {
		_classCallCheck(this, ViewGallery);

		var _this17 = _possibleConstructorReturn(this, (ViewGallery.__proto__ || Object.getPrototypeOf(ViewGallery)).call(this, props));

		_this17.plusSlides = function (n) {
			var tempIndex = _this17.state.slideIndex + n;
			if (tempIndex >= _this17.props.images.length) {
				tempIndex = 0;
			}
			if (tempIndex < 0) {
				tempIndex = _this17.props.images.length - 1;
			}
			_this17.showSlides(tempIndex);
		};

		_this17.currentSlide = function (n) {
			_this17.showSlides(n + 1);
		};

		_this17.showSlides = function (n) {
			var number = n;
			for (var i = 0; i < _this17.props.images.length; i++) {
				_this17['myGallerySlides' + i].current.style.display = "none";
			}
			for (var i = 0; i < _this17.props.images.length; i++) {
				// this[`demoRef${i}`].current.className = this[`demoRef${i}`].current.className.replace(" active", "");
			}
			_this17['myGallerySlides' + number].current.style.display = "block";
			// this[`demoRef${number - 1 }`].current.className += " active";

			_this17.setState({ slideIndex: number });
		};

		_this17.viewGalleryRef = React.createRef();
		_this17.state = {
			slideIndex: props.imgIndex
		};
		for (var index = 0; index < props.images.length; index++) {
			_this17['myGallerySlides' + index] = React.createRef();
			_this17['demoRef' + index] = React.createRef();
		}
		return _this17;
	}

	_createClass(ViewGallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$('#viewgalleryId').modal('show');
			this.showSlides(this.state.slideIndex);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this18 = this;

			var _props3 = this.props,
			    images = _props3.images,
			    onClose = _props3.onClose;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'modal fade', ref: this.viewGalleryRef, id: this.props.id, tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
					React.createElement(
						'div',
						{ className: 'modal-dialog modal-fullscreen viewgallery-dialog', role: 'document' },
						React.createElement(
							'div',
							{ className: 'modal-content viewGallery-content' },
							React.createElement(
								'div',
								{ className: 'modal-header', style: { borderBottom: 'none' } },
								React.createElement(
									'button',
									{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close', onClick: onClose },
									React.createElement(
										'span',
										{ 'aria-hidden': 'true', style: { fontSize: '30px', color: 'white' } },
										'\xD7'
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'modal-body' },
								React.createElement(
									'div',
									{ className: 'container' },
									React.createElement(
										'div',
										{ style: { position: 'relative' } },
										images.map(function (singleImg, index) {
											return React.createElement(
												'div',
												{ className: 'myGallerySlides', ref: _this18['myGallerySlides' + index], key: 'myGallerySlides' + index },
												React.createElement('img', { src: images[_this18.state.slideIndex], style: { width: '100%', height: '70vh' } })
											);
										}),
										React.createElement(
											'a',
											{ className: 'prev', onClick: function onClick() {
													return _this18.plusSlides(-1);
												} },
											'\u276E'
										),
										React.createElement(
											'a',
											{ className: 'next', onClick: function onClick() {
													return _this18.plusSlides(1);
												} },
											'\u276F'
										),
										React.createElement('div', { className: 'galleryListContainer', style: { margin: 'auto' } })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return ViewGallery;
}(React.Component);
//   var output = Babel.transform(<Home />, { presets: ["env"] }).code;

ReactDOM.render(React.createElement(Home, null), document.getElementById("root"));