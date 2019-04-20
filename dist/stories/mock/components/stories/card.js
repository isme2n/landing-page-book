'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Card',
  summary: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.',
  import: '',
  withStyles: true,
  extractProps: ['image', 'title', 'subTitle', 'summary'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Card\n    title="Sky"\n    summary={`Sky is often defined as the space in which the stars move and by visual \n    effect seems to surround the Earth. In astronomy, sky is synonymous with the \n    celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed.`}\n    image="https://front10.com/landing-page-book/images/card/image1.jpg"\n/>',
    tabsActive: ['code'],
    columnSize: 'col col-md-6',
    columnAlign: 'center'
  }, {
    name: 'With Subtitle',
    summary: '',
    code: '<Card\n    title="Neil Armstrong"\n    subTitle="First man in the moon"\n    summary={`American astronaut and aeronautical engineer who was the first \n    person to walk on the Moon. He was also a naval aviator, \n    test pilot, and university professor.`}\n    image="https://front10.com/landing-page-book/images/card/image2.jpg"\n/>',
    tabsActive: [],
    columnSize: 'col col-md-6',
    columnAlign: 'center'
  }, {
    name: 'Only summary',
    summary: '',
    code: '<Card\n    shadow\n    summaryTextAlign="justify"\n    summary={`The galaxy of the Milky Way, or simply the Milky Way, is a \n    spiral galaxy where the solar system is located and in turn the \n    Earth is located. According to the observations, it has a mass of 10\xB9\xB2 \n    solar masses and is a barred spiral.`}\n    image="https://front10.com/landing-page-book/images/card/image3.jpg"\n/>',
    tabsActive: [],
    columnSize: 'col col-md-6',
    columnAlign: 'center'
  }, {
    name: 'With Footer',
    summary: '',
    code: '<>\n  <Card\n        title="Saturn"\n        summary={`Saturn is the sixth planet in the solar system, the second in size\n         and mass after Jupiter and the only one with a ring system visible from Earth. \n         Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets.`}\n        image="https://front10.com/landing-page-book/images/card/image4.jpg">\n    <Row>\n      <Column>\n        <Link href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">See more</Link>\n      </Column>\n      <Column className="text-right">\n        <span className="text-muted">21 views</span>\n      </Column>\n    </Row>\n  </Card>\n</>',
    tabsActive: [],
    columnSize: 'col col-md-6',
    columnAlign: 'center'
  }, {
    name: 'Floating image',
    summary: '',
    code: '<Card\n    borderNone\n    summary={`A star is a luminous plasma sphere that maintains its shape \n    thanks to its own gravity. The closest star to Earth is the Sun.`}\n    image="https://front10.com/landing-page-book/images/card/image5.jpg"\n/>',
    tabsActive: [],
    columnSize: 'col col-md-6',
    columnAlign: 'center'
  }]
};