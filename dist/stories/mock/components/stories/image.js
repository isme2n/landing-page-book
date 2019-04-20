'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Image',
  summary: 'Simple element image to use on your website. Images can improve the design and the appearance of a web page.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Image\n    alt="This is an image example"\n    src="https://front10.com/landing-page-book/images/backers/woman.svg"\n    tooltip="This is a woman"\n    width="100"\n/>',
    tabsActive: ['code']
  }, {
    name: 'Responsive image',
    summary: '',
    code: '<Image\n    alt="Responsive image example"\n    src="https://front10.com/landing-page-book/images/image/214210-P0L8ES-375.jpg"\n    tooltip="This is our galaxy"\n    width="100%"\n/>',
    tabsActive: []
  }, {
    name: 'Aligning images',
    summary: '',
    code: '<>\n  <Image\n        alt="This is an image example"\n        src="https://front10.com/landing-page-book/images/backers/astronaut.svg"\n        tooltip="Float left"\n        width="150"\n        className="float-left"\n    />\n <Image\n        alt="This is an image example"\n        src="https://front10.com/landing-page-book/images/backers/doctor.svg"\n        tooltip="Float right"\n        width="150"\n        className="float-right"\n    />\n <div className="clearfix"/>\n</>',
    tabsActive: []
  }, {
    name: 'Aligning images with classname',
    summary: '',
    code: '<>\n  <Image \n        alt="This is an image example"\n        src="https://front10.com/landing-page-book/images/backers/astronaut.svg" \n        tooltip="Centered with MX-AUTO"\n        width="150"\n        className="mx-auto d-block"\n    />\n  <Image \n        alt="This is an image example"\n        src="https://front10.com/landing-page-book/images/backers/doctor.svg" \n        tooltip="Centered with TEXT-CENTER"\n        width="150"\n        marginTop="2"\n        className="mx-auto d-block"\n    />\n</>',
    tabsActive: []
  }]
};