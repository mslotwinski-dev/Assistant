export default [
  {
    id: 'architecture',
    name: 'Wydział Architektury',
    description: 'Desc',
    majors: [
      {
        id: 'architecture',
        name: 'Architektura',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'urban-planning',
        name: 'Urbanistyka i gospodarka przestrzenna',
        bsc: [],
        msc: [{}],
      },
    ],
  },
  {
    id: 'biotechnology',
    name: 'Wydział Biotechnologii',
    description: 'Desc',
    majors: [
      {
        id: 'biotechnology',
        name: 'Biotechnologia',
        bsc: [{}],
        msc: [{}],
      },

      {
        id: 'physics',
        name: 'Fizyka medyczna',
        bsc: [{}],
        msc: [{}],
      },

      {
        id: 'informatics',
        name: 'Informatyka medyczna',
        bsc: [],
        msc: [{}],
      },

      {
        id: 'biomedical',
        name: 'Inżynieria biomedyczna',
        bsc: [{}],
        msc: [{}],
      },

      {
        id: 'zootechnics',
        name: 'Zootechnika',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'chemistry',
    name: 'Wydział Chemii i Nauk o Materiałach',
    description: 'Desc',
    majors: [
      {
        id: 'engineering',
        name: 'Inżynieria chemiczna i procesowa',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'materials',
        name: 'Inżynieria materiałowa',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'chemistry',
        name: 'Technologia chemiczna',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'food',
        name: 'Technologia żywności ',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'electronics',
    name: 'Wydział Elektroniki i Mechatroniki',
    description: 'Desc',
    majors: [
      { id: 'automatics', name: 'Automatyka i robotyka', bsc: [{}], msc: [{}] },
      { id: 'mechatronics', name: 'Mechatronika', bsc: [{}], msc: [{}] },
      {
        id: 'electronics',
        name: 'Elektronika',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'energy',
    name: 'Wydział Energetyki i Paliw',
    description: 'Desc',
    majors: [
      {
        id: 'energetics',
        name: 'Energetyka',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'electrotechnics',
        name: 'Elektrotechnika',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'fuels',
        name: 'Technologie paliwowe',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'physics',
    name: 'Wydział Fizyki i Technologii Kosmicznych',
    description: 'Desc',
    majors: [
      {
        id: 'physics',
        name: 'Fizyka techniczna',
        bsc: [
          [
            { name: 'Algebra', W: 30, C: 30 },
            { name: 'Analiza I', W: 45, C: 60 },
            { name: 'Analiza danych pomiarowych', W: 15, C: 15, L: 15 },
            { name: 'Chemia', W: 30, C: 15 },
            { name: 'Grafika inżynierska', C: 8, L: 7 },
            { name: 'Mechanika I', W: 45, C: 60 },
            { name: 'Systemy operacyjne', W: 5, L: 10 },
          ],
          [
            { name: 'Analiza II', W: 45, C: 60 },
            { name: 'Elektromagnetyzm', W: 45, C: 45 },
            { name: 'Laboratorium pomiarowe', W: 0, C: 0, L: 30 },
            { name: 'Mechanika II', W: 30, C: 45 },
            { name: 'Programowanie I', W: 30, L: 30 },
            {
              name: 'Przedmiot humanistyczny (do wyboru)',
              W: 30,
              select: [
                {
                  name: 'Podstawy zarządzania projektami',
                  W: 30,
                },
                { name: 'Podstawy przedsiębiorczości', W: 30 },
              ],
            },
          ],

          [
            { name: 'Analiza III', W: 30, C: 30 },
            { name: 'Mechanika III', W: 30, C: 30 },
            { name: 'Inżynieria chemiczna i termodynamika', W: 30, C: 30 },
            { name: 'Elektrodynamika', W: 30, C: 30 },
            { name: 'Programowanie II', W: 15, L: 30 },
            { name: 'Elektronika III', W: 30, C: 30, L: 30 },
          ],
          [
            { name: 'Elektronika II', W: 15, L: 30 },
            { name: 'Fizyka kwantowa', W: 45, C: 60 },
            {
              name: 'Inżynieria danych i modelowanie rzeczywistości',
              W: 30,
              L: 30,
            },
            { name: 'Metody numeryczne fizyki', W: 30, C: 30 },
            { name: 'Optyka', W: 45, C: 30 },
            { name: 'Język obcy', C: 60 },
          ],
          [
            { name: 'Elektronika III', W: 30, C: 30, L: 30 },
            { name: 'Fizyka i technika jądrowa', W: 45, C: 15 },
            { name: 'Fizyka materiałów', W: 30, C: 30, L: 15 },
            { name: 'Programowanie III', W: 15, L: 30 },
            {
              name: 'Fizyka statystyczna i termodynamika',
              W: 30,
              C: 30,
              L: 15,
            },
            { name: 'Język obcy', C: 60 },
            { name: 'Przedmiot humanistyczny (do wyboru)', W: 30 },
          ],
          [
            {
              name: 'Astrofizyka i technologie kosmiczne',
              W: 30,
              C: 15,
            },
            { name: 'Matematyka obliczeniowa', W: 30, L: 30 },
            { name: 'Mikroelektronika I', W: 15, L: 45 },
            { name: 'Uczenie maszynowe I', W: 30, L: 30 },
            {
              name: 'Optyka Stosowana',
              spec: true,
              select: [
                { name: 'Fizyka laserów ', W: 30, L: 15 },
                { name: 'Optoelektronika I', W: 45, C: 15, L: 30 },
                { name: 'Teleinformatyka i transmisja danych', W: 15, L: 30 },
              ],
            },
            {
              name: 'Fizyka Materiałów',
              spec: true,
              select: [
                { name: 'Fizyka półprzewodników  I ', W: 30, C: 15 },
                { name: 'Fizyka procesów jonowych', W: 30, C: 15, L: 15 },
                { name: 'Metody badania materiałów', W: 15, L: 30 },
                { name: 'Nanostruktury i nanotechnologia', W: 30 },
              ],
            },
            {
              name: 'Fizyka i Technika Jądrowa ',
              spec: true,
              select: [
                { name: 'Aparatura i technika jądrowa', W: 30, L: 30 },
                { name: 'Energetyka jądrowa', W: 45, C: 15, L: 15 },
                { name: 'Radiofizyka z radiochemią', W: 30, C: 15, L: 15 },
              ],
            },
            {
              name: 'Systemy Komputerowe ',
              spec: true,
              select: [
                { name: 'Automatyka przemysłowa  ', W: 15, L: 30 },
                { name: 'Inżynieria danych  I', W: 30, L: 45 },
                { name: 'Teleinformatyka i transmisja danych', W: 15, L: 30 },
              ],
            },
          ],
          [
            { name: 'Seminarium dyplomowe', W: 30 },
            {
              name: 'Symulacje komputerowe',
              L: 45,
            },
            {
              name: 'Praca dyplomowa',
              Hidden: 120,
            },
            {
              name: 'Optyka Stosowana',
              spec: true,
              select: [
                { name: 'Optoelektronika II', W: 45, L: 30 },
                { name: 'Technika światłowodowa', W: 30, C: 15, L: 30 },
              ],
            },
            {
              name: 'Fizyka Materiałów',
              spec: true,
              select: [
                { name: 'Fizyka półprzewodników II', W: 30, L: 15 },
                { name: 'Fizyka polimerów', W: 15 },
                { name: 'Materiały magnetyczne', W: 15, C: 15, L: 15 },
                { name: 'Mikroelektronika II', W: 15, L: 30 },
              ],
            },
            {
              name: 'Fizyka i Technika Jądrowa',
              spec: true,
              select: [
                { name: 'Dozymetria', W: 30, L: 30 },
                { name: 'Jądrowy cykl paliwowy', W: 30, L: 0 },
                { name: 'Podstawy fizyki medycznej', W: 30, L: 0 },
                { name: 'Radiofarmaceutyki', W: 30, C: 15, L: 0 },
              ],
            },
            {
              name: 'Systemy Komputerowe',
              spec: true,
              select: [
                { name: 'Komputerowe systemy pomiarowe', W: 30, L: 30 },
                { name: 'Uczenie maszynowe II', W: 15, L: 30 },
                {
                  name: 'Przedmiot specjalistyczny (do wyboru)',
                  W: 15,
                  L: 30,
                  select: [
                    { name: 'Mikroelektronika II', W: 15, L: 30 },
                    { name: 'Inżynieria danych II', W: 15, L: 30 },
                  ],
                },
              ],
            },
          ],
        ],

        msc: [{}],
      },
      {
        id: 'nuclear',
        name: 'Inżynieria jądrowa',
        bsc: [],
        msc: [{}],
      },
      {
        id: 'space',
        name: 'Technologia kosmiczna',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'geology',
    name: 'Wydział Geologii i Nauk o Ziemi',
    description: 'Desc',
    majors: [
      {
        id: 'surveying',
        name: 'Geodezja i kartografia',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'geophysics',
        name: 'Geofizyka',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'geoinformatics',
        name: 'Geoinformatyka',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'geology',
        name: 'Geologia stosowana',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'civil',
    name: 'Wydział Inżynierii Lądowej',
    description: 'Desc',
    majors: [
      {
        id: 'civil',
        name: 'Inżynieria lądowa',
        bsc: [],
        msc: [{}],
      },
      {
        id: 'transport',
        name: 'Transport',
        bsc: [],
        msc: [{}],
      },
    ],
  },
  {
    id: 'environmental',
    name: 'Wydział Inżynierii Środowiska i Hydrotechniki',
    description: 'Desc',
    majors: [
      {
        id: 'hydrotechnics',
        name: 'Hydrotechnika',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'environmental',
        name: 'Inżynieria środowiska',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'sanitary',
        name: 'Inżynieria ogrzewnicza i klimatyzacyjna',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'ecology',
        name: 'Ochrona środowiska',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },

  {
    id: 'mathematics',
    name: 'Wydział Matematyki, Logiki i Informatyki',
    description: 'Desc',
    majors: [
      {
        id: 'computing',
        name: 'Inżynieria obliczeniowa',
        bsc: [{}],
        msc: [],
      },
      {
        id: 'mathematics',
        name: 'Matematyka',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'computer',
        name: 'Matematyka komputerowa',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'applied',
        name: 'Matematyka stosowana',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'informatics',
        name: 'Informatyka',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'mechanics',
    name: 'Wydział Mechaniki i Lotnictwa',
    description: 'Desc',
    majors: [
      {
        id: 'automotive',
        name: 'Inżynieria pojazdów samochodowych',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'aeroengineering',
        name: 'Lotnictwo i kosmonautyka',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'mechanics',
        name: 'Mechanika i budowa maszyn',
        bsc: [{}],
        msc: [{}],
      },

      {
        id: 'projecting',
        name: 'Mechanika i projektowanie maszyn',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'industrial',
    name: 'Wydział Przemysłowy',
    description: 'Desc',
    majors: [
      {
        id: 'automatics',
        name: 'Automatyka przemysłowa',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'informatics',
        name: 'Informatyka techniczna',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'metal',
        name: 'Inżynieria metali',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'industrial',
        name: 'Inżynieria przemysłowa',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'productive',
        name: 'Inżynieria produkcji',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'information',
    name: 'Wydział Technik Informacyjnych',
    description: 'Desc',
    majors: [
      {
        id: 'informatics',
        name: 'Informatyka stosowana',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'data',
        name: 'Inżynieria i analiza danych',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'telecommunications',
        name: 'Telekomunikacja',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'teleinformatics',
        name: 'Teleinformatyka',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
  {
    id: 'natural',
    name: 'Wydział Zasobów Naturalnych',
    description: 'Desc',
    majors: [
      {
        id: 'forest',
        name: 'Leśnictwo',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'mining',
        name: 'Górnictwo i geologia inżynierska',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'gas_and_oil',
        name: 'Inżynieria gazu i ropy naftowej',
        bsc: [{}],
        msc: [{}],
      },
      {
        id: 'recycling',
        name: 'Technologia recyklingu',
        bsc: [{}],
        msc: [{}],
      },

      {
        id: 'wood_technology',
        name: 'Technologia drewna',
        bsc: [{}],
        msc: [{}],
      },
    ],
  },
]
