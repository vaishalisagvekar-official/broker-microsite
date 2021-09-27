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
    key: "render",
    value: function render() {
      var banner = ["https://d1an7tx677lu0y.cloudfront.net/2021/07/22-copy-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/lobby-min.jpg", "https://d1an7tx677lu0y.cloudfront.net/2021/07/pool-min-1.jpg"];

      var aboutUsData = {
        id: "about",
        title: "The Chambers",
        description: "Step into \u2018The Chambers\u2019- the premium commercial office space for entrepreneurs located at the iconic architectural marvel of Kohinoor Square. \u2018The Chambers\u2019 is located in Kohinoor Square from the 4th to the 13th floor with offices starting from 769 sq.ft to 1331 sq.ft (RERA Carpet Area). And here\u2019s why it is probably a good decision to buy a Chambers office whether it is for end-use or for investment.\n\n      Kohinoor Square is one of the tallest commercial towers in the country and is an iconic structure located at the centre of the city. Investments in iconic commercial properties appreciate faster and depreciate slower than the market.\n      \n      The location is congestion-free and will give you easy access to trains, metros and airports.",
        brochureLink: "https://project-microsite-data.s3.amazonaws.com/kohinoor_abcd/about/Vaishali's Resume.pdf",
        image: 'https://d1an7tx677lu0y.cloudfront.net/2021/07/image2.jpg'
      };

      var amenitiesData = {
        id: "amenities",
        title: "Amenities",
        list: [{
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }, {
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }, {
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }, {
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }, {
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }, {
          "icon": "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/icon-1.png",
          "title": "amenity title 1"
        }],
        images: ["https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t3-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t2-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/t1-min.jpg", "https://cp.rajshree11east.com/dinesh-sanghvi/wp-content/uploads/sites/4/2021/08/view1-min.jpg"]
      };
      return React.createElement(
        "div",
        null,
        React.createElement(SlideShow, { section: "banner", imgArray: banner, cssClass: 'bannerContainer' }),
        React.createElement(AboutUs, { section: "aboutUs", aboutUsData: aboutUsData, cssClass: 'verticallyMiddle' }),
        React.createElement(Amenities, { section: "amenities", amenitiesData: amenitiesData, imageCss: "amenityIcon", containerCss: "verticallyMiddle" })
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
          imgArray = _props.imgArray,
          cssClass = _props.cssClass;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "slideshow-container" },
          imgArray.map(function (image, index) {
            return React.createElement(
              "div",
              { className: "mySlides fadeImg " + cssClass,
                ref: _this4["imageRef" + index],
                key: index },
              React.createElement("img", { src: image, style: { width: 'inherit', height: 'inherit' } })
            );
          })
        ),
        React.createElement("br", null),
        React.createElement(
          "div",
          { style: { textAlign: 'center' } },
          imgArray.map(function (image, index) {
            return React.createElement("span", { className: "dot",
              ref: _this4["dotRef" + index],
              key: index });
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
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _props$aboutUsData = this.props.aboutUsData,
          title = _props$aboutUsData.title,
          image = _props$aboutUsData.image,
          description = _props$aboutUsData.description,
          brochureLink = _props$aboutUsData.brochureLink;

      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-6 col-xs-12" },
          React.createElement("img", { src: image, style: { width: 'inherit', height: 'inherit' } })
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
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _props$amenitiesData = this.props.amenitiesData,
          id = _props$amenitiesData.id,
          list = _props$amenitiesData.list,
          images = _props$amenitiesData.images;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "row amenityContainer", style: { padding: '30px' } },
          list.map(function (amenityObj, index) {
            return React.createElement(
              "div",
              { className: "col-md-2 col-sm-4 col-xs-6 " + _this7.props.containerCss, style: { textAlign: 'center' }, key: index },
              React.createElement("img", { className: _this7.props.imageCss, src: amenityObj.icon }),
              React.createElement(
                "div",
                null,
                amenityObj.title
              )
            );
          })
        ),
        React.createElement(Carouel, { sectionId: id, list: images })
      );
    }
  }]);

  return Amenities;
}(React.Component);

var Carouel = function (_React$Component5) {
  _inherits(Carouel, _React$Component5);

  function Carouel(props) {
    _classCallCheck(this, Carouel);

    var _this8 = _possibleConstructorReturn(this, (Carouel.__proto__ || Object.getPrototypeOf(Carouel)).call(this, props));

    console.log("came in carousel constructor ", props);
    return _this8;
  }

  _createClass(Carouel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('#carouselExampleIndicators').carousel();
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          sectionId = _props2.sectionId,
          list = _props2.list;

      return React.createElement(
        "div",
        { id: "carouselExampleIndicators", className: "carousel slide", "data-ride": "carousel" },
        list.map(function (item, index) {
          return React.createElement(
            "ol",
            { className: "carousel-indicators", key: index },
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": index, className: "active" }),
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": index }),
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": index })
          );
        }),
        React.createElement(
          "div",
          { className: "carousel-inner" },
          list.map(function (item, index) {
            var src = typeof item == 'string' ? item : '';
            return React.createElement(
              "div",
              { className: "carousel-item " + (index == 0 ? 'active' : ''), key: index },
              React.createElement("img", { className: "d-block w-100", src: src, alt: "First slide" }),
              React.createElement(
                "div",
                { className: "carousel-caption d-none d-md-block" },
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
          })
        ),
        React.createElement(
          "a",
          { className: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" },
          React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { className: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" },
          React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Next"
          )
        )
      );
    }
  }]);

  return Carouel;
}(React.Component);
//   var output = Babel.transform(<Home />, { presets: ["env"] }).code;

ReactDOM.render(React.createElement(Home, null), document.getElementById('root'));