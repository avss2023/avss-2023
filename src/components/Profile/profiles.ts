export interface ProfileInterface {
  name: string;
  description: string;
  profileImage: string;
}

export interface ChairsInterface {
  roll: string;
  profiles: ProfileInterface[];
}

const generalChairs: ChairsInterface = {
  roll: "General Chairs",
  profiles: [
    {
      name: "Jeng-Neung Hwang",
      description: "University of Washington, USA",
      profileImage: "committee/jengneung-hwang.png",
    },
    {
      name: "Michael S. Ryoo",
      description: "Stony Brook University & Google Brain, USA",
      profileImage: "committee/michael-ryoo.png",
    },
  ],
};

const honoraryChairs: ChairsInterface = {
  roll: "Honorary Chairs",
  profiles: [
    {
      name: "Dong Seog Han",
      description: "KNU, S.Korea",
      profileImage: "committee/dongseog-han.png",
    },
    {
      name: "Eun Chang Choi",
      description: "ETRI, S.Korea",
      profileImage: "committee/eunchang-choi.png",
    },
  ],
};

const programChairs: ChairsInterface = {
  roll: "Program Chairs",
  profiles: [
    {
      name: "Kwang-Ju Kim",
      description: "ETRI, S.Korea",
      profileImage: "committee/kwangju-kim.png",
    },
    {
      name: "Jong Taek Lee",
      description: "KNU, S.Korea",
      profileImage: "committee/jongtaek-lee.png",
    },
    {
      name: "Byoung Chul Ko",
      description: "Keimyung University, S.Korea",
      profileImage: "committee/byoungchul-ko.png",
    },
    {
      name: "Arslan Basharat",
      description: "Kitware Inc, USA",
      profileImage: "committee/arslan-basharat.png",
    },
  ],
};

const publicationChairs: ChairsInterface = {
  roll: "Publication Chairs",
  profiles: [
    {
      name: "Srirangaraj Setlur",
      description: "University of Buffalo, USA",
      profileImage: "committee/srirangaraj-setlur.png",
    },
  ],
};

const financialChairs: ChairsInterface = {
  roll: "Financial Chairs",
  profiles: [
    {
      name: "Deokwoo Lee",
      description: "Keimyung University, S.Korea",
      profileImage: "committee/deokwoo-lee.png",
    },
    {
      name: "Jun-Wei Hsieh",
      description: "NYCU, Taiwan",
      profileImage: "committee/jun-wei-hsieh.png",
    },
  ],
};

const publicityChairs: ChairsInterface = {
  roll: "Publicity Chairs",
  profiles: [
    {
      name: "Jiaying Liu",
      description: "Peking University, China",
      profileImage: "committee/jiaying-liu.png",
    },
    {
      name: "Wei Qi Yan",
      description: "AUT, New Zealand",
      profileImage: "committee/wei-qi-yan.png",
    },
    {
      name: "Ruben Tolosana",
      description: "Universidad Autonoma de Madrid, Spain",
      profileImage: "committee/ruben-tolosana.png",
    },
  ],
};

const websiteAndRestrationChairs: ChairsInterface = {
  roll: "Website and Registration Chairs",
  profiles: [
    {
      name: "Heeseok Oh",
      description: "Hansung University, S.Korea",
      profileImage: "committee/heeseok-oh.png",
    },
    {
      name: "Yiwei Fu",
      description: "GE Research, USA",
      profileImage: "committee/yiwei-fu.png",
    },
  ],
};

const workshopChairs: ChairsInterface = {
  roll: "Workshop Chairs",
  profiles: [
    {
      name: "Hyunjong Yang",
      description: "POSTECH, S. Korea",
      profileImage: "committee/hyunjong-yang.png",
    },
    {
      name: "Federica Battisti",
      description: "University of Padua, Italy",
      profileImage: "committee/federica-battisti.png",
    },
  ],
};

const tutorialChairs: ChairsInterface = {
  roll: "Tutorial Chairs",
  profiles: [
    {
      name: "ChangIck Kim",
      description: "KAIST, S.Korea",
      profileImage: "committee/changick-kim.png",
    },
    {
      name: "Gaoang Wang",
      description: "ZJU-UIUC Institute, China",
      profileImage: "committee/gaoang-wang.png",
    },
  ],
};

const industrialChairs: ChairsInterface = {
  roll: "Industrial Chairs",
  profiles: [
    {
      name: "Peter Tu",
      description: "GE Global Research, USA",
      profileImage: "committee/peter-tu.png",
    },
    {
      name: "Lipeng Ke",
      description: "Amazon Lab126, USA",
      profileImage: "committee/lipeng-ke.png",
    },
  ],
};

const challengeChairs: ChairsInterface = {
  roll: "Challenge Chairs",
  profiles: [
    {
      name: "Zheng Tang",
      description: "Nvidia Metropolis, USA",
      profileImage: "committee/zheng-tang.png",
    },
    {
      name: "Weiyao Lin",
      description: "SJTU, China",
      profileImage: "committee/weiyao-lin.png",
    },
  ],
};


const committee: ChairsInterface[] = [
  generalChairs,
  honoraryChairs,
  programChairs,
  publicationChairs,
  financialChairs,
  publicityChairs,
  websiteAndRestrationChairs,
  workshopChairs,
  tutorialChairs,
  industrialChairs,
  challengeChairs,
];

export default committee;
