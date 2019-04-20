'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Footer',
    summary: 'A document footer is a small section at the bottom of each page within a document. It is often used to display company data or copyright information.',
    import: '',
    withStyles: true,
    extractProps: ['social', 'header', 'link', 'copyright'],
    stories: [{
        name: 'Basic',
        summary: '',
        code: '<Footer \n    socialUrl="https://front10.com"\n    socialPadding="2"\n    copyright="Front10, LLC"\n    socials={[\'facebook\', \'linkedin\', \'google\', \'twitter\']}\n    sections={[\n    {\n        name: \'Features\',\n        sections: [\n            {name: \'Cool stuff\',url: \'https://front10.com\'},\n            {name: \'Random feature\',url: \'https://front10.com\'},\n            {name: \'Team feature\',url: \'https://front10.com\'},\n            {name: \'Stuff for developers\',url: \'https://front10.com\'},\n            {name: \'Another one\',url: \'https://front10.com\'},\n            {name: \'Last time\',url: \'https://front10.com\'}\n        ]\n    },\n    {\n        name: \'Resources\',\n        sections: [\n            {name: \'Resource\',url: \'https://front10.com\'},\n            {name: \'Resource name\',url: \'https://front10.com\'},\n            {name: \'Another resource\',url: \'https://front10.com\'},\n            {name: \'Final resource\',url: \'https://front10.com\'}\n        ]\n    },\n    {\n        name: \'About\',\n        sections: [\n            {name: \'Team\',url: \'https://front10.com\'},\n            {name: \'Locations\',url: \'https://front10.com\'},\n            {name: \'Privacy\',url: \'https://front10.com\'},\n            {name: \'Terms\',url: \'https://front10.com\'}\n        ]\n    }]}\n/>',
        tabsActive: ['code']
    }, {
        name: 'With children',
        summary: '',
        code: '<Footer>\n    <Row>\n        <Column margin="2">\n            <Copyright textColor="light" text="Front10, LLC" showAllRightText={false} />\n        </Column>\n        <Column margin="2">\n            <Image src="https://front10.com/img/logos/logo-main.png" width={80} alt="Front 10 logo"/>\n        </Column>\n        <Column margin="2">\n            <Social margin="2" type="twitter" url="https://front10.com" cssFilter="grayscale(100%)" />\n            <Social margin="2" type="facebook" url="https://front10.com" cssFilter="grayscale(100%)" />\n            <Social margin="2" type="linkedin" url="https://front10.com" cssFilter="grayscale(100%)" />\n        </Column>\n    </Row>\n</Footer>',
        tabsActive: []
    }]
};