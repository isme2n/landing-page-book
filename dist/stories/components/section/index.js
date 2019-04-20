'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/Section/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Section', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
    return _react2.default.createElement(
        _ThemeSwitcher.ThemeSelector,
        null,
        _react2.default.createElement(_StoryHeader2.default, {
            name: 'Section',
            description: 'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.'
        }),
        _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Container: _components.Container, Section: _components.Section } },
            '<Section gray title="Introduction" subTitle="Once upon a time...">\n    <Container textAlign="left">\n        Once upon a time, there was a boy named James. He always got pushed around. One day, a\n        wizard appeared in front of the boy. The wizard gave James three wishes. One of James\n        wishes was that tge wizard could make James go away. The next day James tried to make\n        a wish, but he found himself to be in the land of the forgotten.\n    </Container>\n</Section>'
        )
    );
}));

stories.add('With Video', (0, _withReadme2.default)([_README2.default], function () {
    return _react2.default.createElement(
        _ThemeSwitcher.ThemeSelector,
        null,
        _react2.default.createElement(_StoryHeader2.default, {
            name: 'Section',
            storyName: 'With Video',
            description: 'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.'
        }),
        _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Container: _components.Container, Section: _components.Section, Video: _components.Video, Button: _components.Button } },
            '<Section title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words.">\n    <Container textAlign="center">\n        <Video source="https://youtu.be/dCrLwWdju68"/>\n        <Button className="mt-5">Explore</Button>\n    </Container>\n</Section>'
        )
    );
}));

stories.add('Two Columns Text', (0, _withReadme2.default)([_README2.default], function () {
    return _react2.default.createElement(
        _ThemeSwitcher.ThemeSelector,
        null,
        _react2.default.createElement(_StoryHeader2.default, {
            name: 'Section',
            storyName: 'Two Columns Text',
            description: 'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.'
        }),
        _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Container: _components.Container, Section: _components.Section, Row: _components.Row, Column: _components.Column } },
            '<Section title="WHO WE ARE ?" subTitle="One Look Is Worth A Thousand Words.">\n    <Container  textAlign="justify">\n        <Row>\n            <Column className="col-12 col-sm-6">\n                We are a group of talented software developers with more than 10 years of\n                experience creating front-end applications. We are tired to see how many brilliant\n                minds are reworking in the same thing because there are not standar and defined\n                processes. We are tired of seeing how many companies are struggling to find good\n                programmers. We are tired of seeing how there a lot of software in a trash because\n                somebody does not defined the requirements at the right time.\n            </Column>\n            <Column className="col-12 col-sm-6">\n                <p>\n                  We are tired of seeing great people which talent is not being used 100% because\n                  they had not being trained in a proper way. We are tired of seeing projects that\n                  ended up in a failure just because the team that executed them does not receive\n                  the proper advice in time. We are tired of seeing companies investing a lot of\n                  money building software that does not scale.\n                </p>\n                <p>\n                  We are the guys that believes that fixing all this issues is critical for our\n                  civilization. We are the guys that are going to go to the roots of all of this\n                  problems and are going to fixed it.\n                </p>\n            </Column>\n        </Row>\n    </Container>\n</Section>'
        )
    );
}));

stories.add('Two Columns Cards', (0, _withReadme2.default)([_README2.default], function () {
    return _react2.default.createElement(
        _ThemeSwitcher.ThemeSelector,
        null,
        _react2.default.createElement(_StoryHeader2.default, {
            name: 'Section',
            storyName: 'Two Columns Cards',
            description: 'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.'
        }),
        _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Container: _components.Container, Section: _components.Section, Row: _components.Row, Column: _components.Column, Card: _components.Card } },
            '<Section\n    title="COMPONENT-DRIVEN DEVELOPMENT"\n    subTitle="Build UIs in a better way: from the component up"\n>\n    <Container textAlign="justify">\n        <Row>\n            <Column className="col-12 col-md-6">\n                <Card\n                    image="images/card/image1.jpg"\n                    imageShadow\n                    subTitle="A tool for Component-Driven Development"\n                    summary="A component explorer is a separate application which showcases the components in your app in various test \u201Cstates\u201D. A state is essentially a visual test case an typical input to the component."\n                    title="Component Explorer"\n                />\n            </Column>\n            <Column className="col-12 col-md-6">\n                <p>\n                    He biggest trend in frontend user interface (UI) development for the web in recent\n                    years has been towards components. The React library, although by no means the\n                    first, has in large part established patterns for building UIs out of well\n                    specified component parts.\n                </p>\n                <p>\n                    Of course, the trend toward software built from smaller pieces that perform a\n                    well-specified role is nothing new; modularization has been one of the key tenets\n                    of software engineering since long before I learned the concepts of \u201Ccoupling and\n                    cohesion\u201D.\n                </p>\n                <p>\n                    Using the explorer you can test a given component in all the states that have been\n                    defined to be important. This isolation is key in enabling a workflow where you\n                    build one component at a time.\n                </p>\n                <p>\n                    Adding a component to an explorer is typically as simple as programmatically\n                    enumerating the interesting states (in React this is the props and context of that\n                    component). This may be familiar to you enumerating states is exactly how you do\n                    snapshot testing or screenshot testing (and it\u2019s no surprise to see features that\n                    combine the above with component explorers).\n                </p>\n                <p>\n                    Once you have detailed the interesting states of a component, you can exhaustively\n                    visually test the component with just a few clicks. Learn more about component\n                    explorers below.\n                </p>\n            </Column>\n        </Row>\n    </Container>\n</Section>'
        )
    );
}));