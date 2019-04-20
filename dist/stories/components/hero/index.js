'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _DetailsComponent = require('../../../../storybook-utils/components/DetailsComponent');

var _DetailsComponent2 = _interopRequireDefault(_DetailsComponent);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _README = require('../../../components/Hero/README.md');

var _README2 = _interopRequireDefault(_README);

var _hero = require('../../mock/components/stories/hero');

var _hero2 = _interopRequireDefault(_hero);

var _map = require('../../../components/Hero/map.json');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-one-expression-per-line */
var stories = (0, _react3.storiesOf)('Components/Hero', module);

_hero2.default.stories.map(function (story) {
  return stories.add(story.name, (0, _withReadme2.default)([_README2.default], function () {
    return _react2.default.createElement(
      _ThemeSwitcher.ThemeSelector,
      null,
      _react2.default.createElement(_DetailsComponent2.default, {
        name: _hero2.default.name,
        linkGithub: 'https://github.com/front10/landing-page-book/tree/master/src/components/' + _hero2.default.name,
        description: _hero2.default.summary,
        stories: [story],
        importCode: _hero2.default.import,
        propsDescription: _map2.default.props,
        showBack: false
      })
    );
  }));
});

/* stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero }}>
        {`<Hero
    headerTextColor="warning"
    subHeaderTextColor="warning"
    callToActionColor="warning"
    secondaryCallToActionColor="warning"
    secondaryCallToActionMarginLeft="2"
    backgroundColor="#373D45"
    header="Landing Page Book"
    subHeader="React components to build!"
    particlesSugar="crazyStars"
    callToAction="Call to action"
    secondaryCallToAction="Secondary call to action"
/>`}
      </PropsManager>
      <VariableManager className="mt-4" variables={themingVariables} />
    </ThemeSelector>
  ))
);

stories.add(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="Via children"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Image, Header, Button, GithubButton }}>
        {`<Hero opacity={1} overlayColor="#373D45" particlesSugar="crazyStars">
    <Container>
        <Image src="images/logo/front10.png" rounded width="160" alt="Front10 logo" className="main-logo"/>
        <Header className="text-warning">Landing Page Book</Header>
        <Header type="h5" className="text-warning">React components to build!</Header>
        <div className="mt-5">
            <Button color="primary" margin="1">Explore</Button>
            <GithubButton color="success" btnType="star" btnText="Stars" username="front10" repository="landing-page-book"/>
        </div>
    </Container>
</Hero>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        {`<Hero image="images/hero/alone-architecture-buildings-220444.jpg"
  parallaxOffset={350}
  particles={false}>
  <Container>
    <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
    <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
    <div className="text-left">
      <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
        READ MORE
      </Link>
    </div>
  </Container>
</Hero>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image (blurred)',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image (Blurred)"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        {`<Hero
  image="images/hero/alone-architecture-buildings-220444.jpg"
  parallaxOffset={350}
  particles={false}
  imgFilter="blur(2px)">
  <Container>
  <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
  <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
  <div className="text-left">
    <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
      READ MORE
    </Link>
  </div>
  </Container>
</Hero>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image (gray)',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image (Gray)"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        {`<Hero
  image="images/hero/alone-architecture-buildings-220444.jpg"
  parallaxOffset={350}
  particles={false}
  imgFilter="grayscale(90%)">
  <Container>
  <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
  <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
  <div className="text-left">
    <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
      READ MORE
    </Link>
  </div>
  </Container>
</Hero>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

// stories.add(
//   'With product',
//   withReadme([Readme], () => (
//     <ThemeSelector>
//       <Hero
//         isFixed={boolean('Fixed', true)}
//         backgroundColor={color('Overlay color', 'rgba(57,55,77,0.9)')}
//         opacity={number('Opacity', 0)}
//         parallaxOffset={number('Parallax offset', 350)}
//         minHeight={text('Min height', '100vh')}
//         particles={false}
//       >
//         <Container className="p-5">
//           <Row>
//             <Column className="col-md-3 d-none d-md-block">
//               <Image className="img-fluid" src="images/hero/front10-iphone.svg" />
//             </Column>
//             <Column className="col-md-9 mt-5">
//               <div className="pt-3">
//                 <Image
//                   src="images/logo/front10.png"
//                   rounded
//                   width="40"
//                   alt="Front10 logo"
//                   className="float-left"
//                 />
//                 <Header type="h5" className="text-warning float-left pl-2 mt-3">
//                   LANDING PAGE BOOK
//                 </Header>
//               </div>
//               <div className="clearfix" />
//               <Header type="h2" className="text-white text-left d-block pt-2">
//                 Use the platform you prefer, Create React App, Gatsby or Next.
//               </Header>
//               <div className="text-left mt-3">
//                 <Link
//                   href="https://front10.com/get-landing-page-book/"
//                   tooltip="Search in NPM"
//                   target="_blank"
//                 >
//                   <span className="Button btn">
//                     Explore library &nbsp;
//                     <Icon icon="fa fa-arrow-right" />
//                   </span>
//                 </Link>
//               </div>
//             </Column>
//           </Row>
//         </Container>
//       </Hero>
//       <div className="mt-4">
//         <Code
//           code={products}
//           languageCode="jsx"
//           readOnly
//           collapsible
//           collapsed
//           showDeleteButton={false}
//         />
//       </div>
//     </ThemeSelector>
//   )),
//   jsxConfig
// );

// stories.add(
//   'Go minimal',
//   withReadme([Readme], () => (
//     <ThemeSelector>
//       <Hero
//         backgroundColor={color('Overlay color', '#FFFFFF')}
//         opacity={number('Opacity', 0)}
//         parallaxOffset={number('Parallax offset', 350)}
//         minHeight={text('Min height', '100vh')}
//         particles={false}
//       >
//         <Container className="p-5">
//           <Row>
//             <Column className="col-12 col-md-7">
//               <Image className="img-fluid" src="images/hero/persons.png" />
//             </Column>
//             <Column className="col-12 col-md-5">
//               <h1
//                 style={{
//                   color: '#392F4C',
//                   fontSize: '3rem',
//                   fontWeight: '600'
//                 }}
//                 className="float-left text-left mt-3"
//               >
//                 Landing Page Book
//               </h1>
//               <div className="clearfix" />
//               <p
//                 style={{ color: '#392F4C', lineHeight: '33px' }}
//                 className="text-black text-left d-block pt-2"
//               >
//                 Landing page book it’s an react components library with more than 40 components and
//                 elements, is based en react 16.2 and was wrote with ES6.
//               </p>
//               <Row>
//                 <Column className="col-12 col-sm-8 mt-5 pl-1 pr-1">
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     style={{ display: 'block', width: '100%', padding: '1.03rem 1rem' }}
//                   />
//                 </Column>
//                 <Column className="col-12 col-sm-4 mt-5 pl-1 pr-1">
//                   <input
//                     type="button"
//                     className="Button"
//                     style={{ padding: '1.15rem 1rem' }}
//                     tooltip="Send email"
//                     value="GET STARTED"
//                   />
//                 </Column>
//               </Row>
//             </Column>
//           </Row>
//         </Container>
//       </Hero>
//       <div className="mt-4">
//         <Code
//           code={minimal}
//           languageCode="jsx"
//           readOnly
//           collapsible
//           collapsed
//           showDeleteButton={false}
//         />
//       </div>
//     </ThemeSelector>
//   )),
//   jsxConfig
// );
*/