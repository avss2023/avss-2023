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
      name: "Jenq-Neng Hwang",
      description: "University of Washington, USA",
      profileImage: "/committee/jenqneng-hwang.png",
      email: "hwang@uw.edu",
    },
    {
      name: "Michael S. Ryoo",
      description: "Stony Brook University & Google Brain, USA",
      profileImage: "/committee/michael-ryoo.png",
      email: "mryoo@cs.stonybrook.edu",
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
      email: "dshan@knu.ac.kr",
    },
    {
      name: "Eun Chang Choi",
      description: "ETRI, S.Korea",
      profileImage: "/committee/eunchang-choi.png",
      email: "ecchoi@etri.re.kr",
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
      email: "kwangju@etri.re.kr",
    },
    {
      name: "Jong Taek Lee",
      description: "KNU, S.Korea",
      profileImage: "/committee/jongtaek-lee.png",
      email: "jongtaeklee@knu.ac.kr",
    },
    {
      name: "Byoung Chul Ko",
      description: "Keimyung University, S.Korea",
      profileImage: "/committee/byoungchul-ko.png",
      email: "niceko@kmu.ac.kr",
    },
    {
      name: "Arslan Basharat",
      description: "Kitware Inc, USA",
      profileImage: "/committee/arslan-basharat.png",
      email: "arslan.basharat@kitware.com",
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
      email: "setlur@buffalo.edu",
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
      email: "dwoolee@kmu.ac.kr",
    },
    {
      name: "Jun-Wei Hsieh",
      description: "NYCU, Taiwan",
      profileImage: "/committee/jun-wei-hsieh.png",
      email: "jwhsieh@nctu.edu.tw",
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
      email: "liujiaying@pku.edu.cn",
    },
    {
      name: "Wei Qi Yan",
      description: "AUT, New Zealand",
      profileImage: "/committee/wei-qi-yan.png",
      email: "weiqi.yan@aut.ac.nz",
    },
    {
      name: "Ruben Tolosana",
      description: "Universidad Autonoma de Madrid, Spain",
      profileImage: "/committee/ruben-tolosana.png",
      email: "ruben.tolosana@uam.es",
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
      email: "ohhs@hansung.ac.kr",
    },
    {
      name: "Yiwei Fu",
      description: "GE Research, USA",
      profileImage: "/committee/yiwei-fu.png",
      email: "yiwei.fu@ge.com",
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
      email: "hyunyang@postech.ac.kr",
    },
    {
      name: "Federica Battisti",
      description: "University of Padua, Italy",
      profileImage: "/committee/federica-battisti.png",
      email: "federica.battisti@unipd.it",
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
      email: "changick@kaist.ac.kr",
    },
    {
      name: "Gaoang Wang",
      description: "ZJU-UIUC Institute, China",
      profileImage: "/committee/gaoang-wang.png",
      email: "gaoangwang@intl.zju.edu.cn",
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
      email: "tu@research.ge.com",
    },
    {
      name: "Lipeng Ke",
      description: "Amazon Lab126, USA",
      profileImage: "/committee/lipeng-ke.png",
      email: "kelipeng@amazon.com ",
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
      email: "tangzhengthomas@gmail.com",
    },
    {
      name: "Weiyao Lin",
      description: "SJTU, China",
      profileImage: "/committee/weiyao-lin.png",
      email: "wylin@sjtu.edu.cn",
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
      email: "mchang2@albany.edu",
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
      email: "lujiwen@tsinghua.edu.cn",
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
      email: "julian.fierrez@uam.es",
    },
  ],
};

const areaChairs: ChairsInterface = {
  roll: "Area Chairs",
  profiles: [
    {
      name: "Shu Hu",
      description: "Carnegie Mellon University, USA",
      profileImage: "/committee/shu-hu.png",
      email: "shuhu@cmu.edu",
    },
    {
      name: "Chih-Chung Hsu",
      description: "National Cheng Kung University, Taiwan",
      profileImage: "/committee/chih-chung-hsu.png",
      email: "cchsu@gs.ncku.edu.tw",
    },
    {
      name: "Jun-Wei Hsieh",
      description: "National Yang Ming Chiao Tung University, Taiwan",
      profileImage: "/committee/jun-wei-hsieh.png",
      email: "jwhsieh@nctu.edu.tw",
    },
    {
      name: "Srijan Das",
      description: "University of North Carolina at Charlotte, USA",
      profileImage: "/committee/srijan-das.png",
      email: "sdas24@uncc.edu",
    },
  ],
};

const localArrangements: ChairsInterface = {
  roll: "Local Arrangements",
  profiles: [
    {
      name: "Donghyun Ryu",
      description: "Daegu City AI Blockchain Center, S.Korea",
      profileImage: "/committee/donghyun-ryu.png",
      email: "",
    },
    {
      name: "O.K. Baek",
      description: "ETRI, S.Korea",
      profileImage: "/committee/ok-baek.png",
      email: "ok.baek@etri.re.kr",
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
  localArrangements,
];

export default committee;
