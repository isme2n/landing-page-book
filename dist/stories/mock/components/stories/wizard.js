'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Wizard',
    summary: 'Easy way to make a wizard on your website. you can guide your users step by step.',
    import: '',
    withStyles: true,
    extractProps: ['header'],
    stories: [{
        name: 'Basic',
        summary: '',
        code: '<Wizard\n    contentAlign="center"\n    steps={[\n    {\n        name: \'Step 1\',\n        component: (\n            <Container>\n                <Video source="https://youtu.be/dCrLwWdju68" />\n            </Container>\n        )\n    },\n    {\n        name: \'Step 2\',\n        component: (\n            <Container>\n                <Gif autoplay image="https://front10.com/landing-page-book/images/gif/write.gif" />\n            </Container>\n        )\n    },\n    {\n        name: \'Step 3\',\n        component: (\n            <form>\n                <FormGroup>\n                    <Input label="Name" labelColon />\n                </FormGroup>\n                <FormGroup>\n                    <Input label="Email" labelColon type="email" />\n                </FormGroup>\n                <FormGroup>\n                    <Input label="Address" labelColon type="textarea" />\n                </FormGroup>\n                <Social url="https://front10.com" type="twitter" />\n                <Social url="https://front10.com" type="linkedin" />\n                <Social url="https://front10.com" type="google" />\n                <Social url="https://front10.com" type="pinterest" />\n            </form>\n        )\n    }\n]} />',
        tabsActive: ['code']
    }]
};