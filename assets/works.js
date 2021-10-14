export const fertilization = {
  Corn: {
    first: {
      time: 'Pre setve',
      fertilizers: [
        ['Urea', 2],
        ['NPK (4:1:2)', 1],
      ],
    },
    second: {
      time: 'U fazi od 4. do 7. lista',
      fertilizers: [
        ['NPK (20:20:20)', 2.5],
        ['Mikroelementi (Zn)', 1],
      ],
    },
  },
  Wheat: {
    first: {
      time: 'U jesen',
      fertilizers: [
        ['NPK (15:15:15)', 3.5],
        ['NPK (16:16:16)', 3.5],
      ],
    },
    second: { time: '', fertilizers: [['Urea', 1.5]] },
    third: {
      time: '',
      fertilizers: [
        ['AN', 2],
        ['KAN', 2],
      ],
    },
  },
  Soya: {
    first: {
      time: 'U jesen',
      fertilizers: [
        ['NPK (16:16:16)', 3],
        ['NPK (15:15:15)', 3],
        ['NPK (8:15:15)', 3],
        ['NPK (6:24:12)', 3.2],
        ['NPK (16:27:7)', 3],
      ],
    },
    second: { time: '', fertilizers: [['NS (20:24)', 5.5]] },
    third: {
      time: '',
      fertilizers: [['NP (10:35)', 0.5]],
    },
  },
  Sunflower: {
    first: {
      time: 'U jesen',
      fertilizers: [
        ['NPK (16:16:16)', 3],
        ['NPK (15:15:15)', 3],
        ['NPK (8:15:15)', 3],
        ['NPK (6:24:12)', 3.2],
      ],
    },
    second: { time: '', fertilizers: [['Urea', 1.7]] },
    third: {
      time: '',
      fertilizers: [['NP (10:35)', 0.5]],
    },
  },
};

export const midRowCultivation = {
  Corn: {
    first: {
      time: 'Pre setve',
      fertilizers: [
        ['Urea', 2],
        ['NPK (4:1:2)', 1],
      ],
    },
    second: {
      time: 'U fazi od 4. do 7. lista',
      fertilizers: [
        ['Urea', 2],
        ['NPK (4:1:2)', 1],
      ],
    },
  },
};

export const spraying = {
  Corn: {
    first: {
      time: 'Posle setve, a pre nicanja',
      sprayers: [
        {
          iupac: 'S-metolahlor',
          purpose: 'na crno uskolisne',
        },
        {
          iupac: 'Terbutilazin',
          purpose: 'na crno sirokoisne',
        },
      ],
    },
    second: {
      time: 'U fazi od 2. do 5. lista',
      sprayers: [
        { iupac: '2,4D', purpose: 'uskolisni' },
        {
          iupac: 'Nikosulfuron',
          purpose: 'sirokolinsni',
        },
      ],
    },
  },
  Wheat: {
    first: {
      time: 'U fazi bokorenja',
      sprayers: [{ iupac: '2,4D', purpose: '' }],
    },
    second: {
      time: 'Od drugog kolenca do pojave lista zastavičara',
      sprayers: [
        {
          iupac: 'Aminopiralid-kalijum 355 g/kg + Florasulam 150 g/kg',
          purpose: '',
        },
        { iupac: 'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l', purpose: '' },
        { iupac: 'Аlfa–cipermetrin 100 g/l', purpose: '' },
      ],
    },
  },
  Soya: {
    first: {
      time: 'Pre setve uz inkorporaciju',
      sprayers: [{ iupac: 'Klomazon', purpose: '' }],
    },
    second: {
      time: 'Posle setve a pre nicanja ',
      sprayers: [
        {
          iupac: 'S-metolahlor',
          purpose: '',
        },
        {
          iupac: 'Metribuzin',
          purpose: '',
        },
      ],
    },
    third: {
      time: 'U fazi 1-3 troliske',
      sprayers: [
        { iupac: 'Klomazon', purpose: '' },
        { iupac: 'Bentazon', purpose: '' },
        { iupac: 'Tifensulfuron-metil', purpose: '' },
      ],
    },
    fourth: {
      time: 'Od formiranja prve troliske do cvetanja',
      sprayers: [
        { iupac: 'Kletodim', purpose: '' },
        { iupac: 'Kvizalopof-P-etil', purpose: '' },
      ],
    },
  },
  Sunflower: {
    first: {
      time: 'Pre setve uz inkorporaciju',
      sprayers: [{ iupac: 'Bifentrin', purpose: '' }],
    },
    second: {
      time: 'Posle setve a pre nicanja ',
      sprayers: [
        {
          iupac: 'S-metolahlor',
          purpose: '',
        },
        {
          iupac: 'Terbutilazin',
          purpose: '',
        },
      ],
    },
    third: {
      time: 'U fazi 1-3 troliske',
      sprayers: [{ iupac: 'Кletodim', purpose: '' }],
    },
    fourth: {
      time: '',
      sprayers: [
        { iupac: 'Boskalid', purpose: '' },
        { iupac: 'Tiofanat-metil', purpose: '' },
      ],
    },
  },
};
