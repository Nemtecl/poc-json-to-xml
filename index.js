const { toXML } = require('jstoxml');

const xmlOptions = {
  header: true,
  indent: '  ',
};

const firstPart = {
  imports: [
    {
      import: {
        firstName: 'Clément',
        lastname: 'Drouin',
        enterprise: 'Proxiad Axe Seine',
        age: 22,
      },
    },
  ],
};

const secondPart = {
  imports: [
    {
      import: {
        firstName: 'Flavien',
        lastname: 'Cossu',
        enterprise: 'Sopra Steria',
        age: 23,
      },
    },
  ],
};

const finalPart = {
  imports: [firstPart.imports[0], secondPart.imports[0]],
};

console.log(toXML(finalPart, xmlOptions));
