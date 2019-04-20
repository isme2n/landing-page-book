'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Hero',
    summary: "The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content.",
    import: '',
    extractProps: ['header', 'subHeader', 'callToAction', 'secondaryCallToAction'],
    stories: [{
        name: 'Basic',
        summary: '',
        code: '<Hero\n    opacity={1}\n    overlayColor="#373D45"\n    header="Landing Page Book"\n    subHeader="React components to build!"\n    particlesSugar="crazyStars"\n    minHeight="75vh"\n    headerTextColor="warning"\n    subHeaderTextColor="warning"\n    callToActionColor="warning"\n    secondaryCallToActionColor="warning"\n    callToActionMargin="2"\n    secondaryCallToActionMargin="2"\n    callToAction="Call to action"\n    secondaryCallToAction="Secondary call to action"\n/>',
        tabsActive: ['code']
    }, {
        name: 'Via children',
        summary: '',
        code: '<Hero opacity={1} overlayColor="#373D45" particlesSugar="crazyStars" minHeight="75vh">\n    <Container>\n        <Image src="https://front10.com/landing-page-book/images/logo/front10.png" rounded width="160" alt="Front10 logo"/>\n        <Header textAlign="center" textColor="warning">Landing Page Book</Header>\n        <Header textAlign="center" type="h5" textColor="warning">React components to build!</Header>\n        <div className="mt-5">\n            <Button color="warning" marginRight="1">Explore</Button>\n            <GithubButton type="star" text="Stars" username="front10" repository="landing-page-book"/>\n        </div>\n    </Container>\n</Hero>',
        tabsActive: []
    }, {
        name: 'With image',
        summary: '',
        code: '<Hero\n    image="https://front10.com/landing-page-book/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>\n        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',
        tabsActive: []
    }, {
        name: 'With image (blurred)',
        summary: '',
        code: '<Hero\n    image="https://front10.com/landing-page-book/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    imgCssFilter="blur(2px)"\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>\n        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',
        tabsActive: []
    }, {
        name: 'With image (gray)',
        summary: '',
        code: '<Hero\n    image="https://front10.com/landing-page-book/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    cssFilter="grayscale(100%)"\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>\n        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',
        tabsActive: []
    }]
};