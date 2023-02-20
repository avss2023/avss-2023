export interface ProfileInterface {
  name: string;
  description: string;
  profileImage: string;
  email?: string;
}

export interface ChairsInterface {
  roll: string;
  profiles: ProfileInterface[];
}

const generalChairs: ChairsInterface = {
  roll: "General Chairs",
  profiles: [
    {
      name: "Jenq-Neung Hwang",
      description: "University of Washington, USA",
      profileImage: "/committee/jenqneung-hwang.png",
      email: "",
    },
    {
      name: "Michael S. Ryoo",
      description: "Stony Brook University & Google Brain, USA",
      profileImage: "/committee/michael-ryoo.png",
      email: "",
    },
  ],
};

const honoraryChairs: ChairsInterface = {
  roll: "Honorary Chairs",
  profiles: [
    {
      name: "Dong Seog Han",
      description: "KNU, S.Korea",
      profileImage: "/committee/dongseog-han.png",
      email: "",
    },
    {
      name: "Eun Chang Choi",
      description: "ETRI, S.Korea",
      profileImage: "/committee/eunchang-choi.png",
      email: "",
    },
  ],
};

const programChairs: ChairsInterface = {
  roll: "Program Chairs",
  profiles: [
    {
      name: "Kwang-Ju Kim",
      description: "ETRI, S.Korea",
      profileImage: "/committee/kwangju-kim.png",
      email: "",
    },
    {
      name: "Jong Taek Lee",
      description: "KNU, S.Korea",
      profileImage: "/committee/jongtaek-lee.png",
      email: "",
    },
    {
      name: "Byoung Chul Ko",
      description: "Keimyung University, S.Korea",
      profileImage: "/committee/byoungchul-ko.png",
      email: "",
    },
    {
      name: "Arslan Basharat",
      description: "Kitware Inc, USA",
      profileImage: "/committee/arslan-basharat.png",
      email: "",
    },
  ],
};

const publicationChairs: ChairsInterface = {
  roll: "Publication Chairs",
  profiles: [
    {
      name: "Srirangaraj Setlur",
      description: "University of Buffalo, USA",
      profileImage: "/committee/srirangaraj-setlur.png",
      email: "",
    },
  ],
};

const financialChairs: ChairsInterface = {
  roll: "Financial Chairs",
  profiles: [
    {
      name: "Deokwoo Lee",
      description: "Keimyung University, S.Korea",
      profileImage: "/committee/deokwoo-lee.png",
      email: "",
    },
    {
      name: "Jun-Wei Hsieh",
      description: "NYCU, Taiwan",
      profileImage: "/committee/jun-wei-hsieh.png",
      email: "",
    },
  ],
};

const publicityChairs: ChairsInterface = {
  roll: "Publicity Chairs",
  profiles: [
    {
      name: "Jiaying Liu",
      description: "Peking University, China",
      profileImage: "/committee/jiaying-liu.png",
      email: "",
    },
    {
      name: "Wei Qi Yan",
      description: "AUT, New Zealand",
      profileImage: "/committee/wei-qi-yan.png",
      email: "",
    },
    {
      name: "Ruben Tolosana",
      description: "Universidad Autonoma de Madrid, Spain",
      profileImage: "/committee/ruben-tolosana.png",
      email: "",
    },
  ],
};

const websiteAndRestrationChairs: ChairsInterface = {
  roll: "Website and Registration Chairs",
  profiles: [
    {
      name: "Heeseok Oh",
      description: "Hansung University, S.Korea",
      profileImage: "/committee/heeseok-oh.png",
      email: "",
    },
    {
      name: "Yiwei Fu",
      description: "GE Research, USA",
      profileImage: "/committee/yiwei-fu.png",
      email: "",
    },
  ],
};

const workshopChairs: ChairsInterface = {
  roll: "Workshop Chairs",
  profiles: [
    {
      name: "Hyunjong Yang",
      description: "POSTECH, S. Korea",
      profileImage: "/committee/hyunjong-yang.png",
      email: "",
    },
    {
      name: "Federica Battisti",
      description: "University of Padua, Italy",
      profileImage: "/committee/federica-battisti.png",
      email: "",
    },
  ],
};

const tutorialChairs: ChairsInterface = {
  roll: "Tutorial Chairs",
  profiles: [
    {
      name: "ChangIck Kim",
      description: "KAIST, S.Korea",
      profileImage: "/committee/changick-kim.png",
      email: "",
    },
    {
      name: "Gaoang Wang",
      description: "ZJU-UIUC Institute, China",
      profileImage: "/committee/gaoang-wang.png",
      email: "",
    },
  ],
};

const industrialChairs: ChairsInterface = {
  roll: "Industrial Chairs",
  profiles: [
    {
      name: "Peter Tu",
      description: "GE Global Research, USA",
      profileImage: "/committee/peter-tu.png",
      email: "",
    },
    {
      name: "Lipeng Ke",
      description: "Amazon Lab126, USA",
      profileImage: "/committee/lipeng-ke.png",
      email: "",
    },
  ],
};

const challengeChairs: ChairsInterface = {
  roll: "Challenge Chairs",
  profiles: [
    {
      name: "Zheng Tang",
      description: "Nvidia Metropolis, USA",
      profileImage: "/committee/zheng-tang.png",
      email: "",
    },
    {
      name: "Weiyao Lin",
      description: "SJTU, China",
      profileImage: "/committee/weiyao-lin.png",
      email: "",
    },
  ],
};

const americaLiaison: ChairsInterface = {
  roll: "America Liaison",
  profiles: [
    {
      name: "Ming-Ching Chang",
      description: "University at Albany - SUNY,  USA",
      profileImage: "/committee/ming-ching-chang.png",
      email: "",
    },
  ],
};

const asiaLiaison: ChairsInterface = {
  roll: "Asia Liaison",
  profiles: [
    {
      name: "Jiwen Lu",
      description: "Tsinghua University, China",
      profileImage: "/committee/jiwen-lu.png",
      email: "",
    },
  ],
};

const europeLiaison: ChairsInterface = {
  roll: "Europe Liaison",
  profiles: [
    {
      name: "Julian Fierrez",
      description: "Universidad Autonoma de Madrid, Spain",
      profileImage: "/committee/julian-fierrez.png",
      email: "",
    },
  ],
};

// Shu Hu, Carnegie Mellon University, USA
// Chih-Chung Hsu, National Cheng Kung University, Taiwan
// Jun-Wei Hsieh, National Yang Ming Chiao Tung University, Taiwan

const areaChairs: ChairsInterface = {
  roll: "Area Chairs",
  profiles: [
    {
      name: "Shu Hu",
      description: "Carnegie Mellon University, USA",
      profileImage: "",
      email: "",
    },
    {
      name: "Chih-Chung Hsu",
      description: "National Cheng Kung University, Taiwan",
      profileImage: "",
      email: "",
    },
    {
      name: "Jun-Wei Hsieh",
      description: "National Yang Ming Chiao Tung University, Taiwan",
      profileImage: "/committee/jun-wei-hsieh.png",
      email: "",
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
  americaLiaison,
  asiaLiaison,
  europeLiaison,
  areaChairs,
];

export default committee;
