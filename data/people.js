//
// Format for adding a new person to the list:
// {
//     firstname: "Jane",
//     lastname: "Doe",
//     image: "//images/janedoe.jpg",
//     email: "jane.doe@example.com",
//     googleScholar: "https://scholar.google.com/citations?hl=en&user=example",
//     neurotree: "https://neurotree.org/neurotree/tree.php?pid=example",
//     website: "https://www.janedoe.com/",
//     github: "https://github.com/janedoe",
//     twitter: "https://twitter.com/janedoe",
//     linkedin: "https://www.linkedin.com/in/jane-doe/",
//     bio: "Jane is a Ph.D. student in Neuroscience who joined the lab in 2022. She is interested in the neural and cognitive mechanisms of complex planning. Her current projects involve researching how people adapt their planning to uncertainty in the environment, how monkeys develop strategies in Four-in-a-row, and how people think ahead in chess. In her spare time, she enjoys painting, swimming, visiting museums, cooking, and playing guitar."
// }

const weiji = [
    {
        firstname: "Wei Ji",
        lastname: "Ma",
        status: ["pi"],
        image: "/images/weiji.jpg",
        email: "weijima@nyu.edu",
        googleScholar: "https://scholar.google.com/citations?user=2370JKUAAAAJ",
        neurotree: "http://neurotree.org/neurotree/peopleinfo.php?pid=2887",
        website: "http://www.weijima.com/",
        links: [
            { text: "CV", url: "/files/Wei%20Ji%20Ma%20-%20CV%20202310.pdf" },
            { text: "Unofficial story (abstract)", url: "http://www.cns.nyu.edu/events/growingupinscience/unofficial.html#WeiJi" },
            { text: "Unofficial story (video)", url: "https://www.youtube.com/watch?v=hFQeabuyhMo" }
        ],
        bio: `**Short Bio:** Wei Ji Ma is Professor of [Neural Science](http://www.cns.nyu.edu) and [Psychology](http://psych.nyu.edu) at New York University. Born and raised in the Netherlands, he received his Ph.D. in Physics from the University of Groningen in 2001, after which he transitioned to computational neuroscience and cognitive science. He was Assistant Professor of Neuroscience at Baylor College of Medicine from 2008 to 2013 before he joined New York University. His laboratory combines behavioral experiments, computational models, and neural measures to investigate how people make decisions under uncertainty. Ma founded the ["Growing up in Science"](http://www.growingupinscience.com) mentorship series, in which scientists tell their life stories with an emphasis on doubts, struggles, and failures. He is also a founding member of the Scientist Action and Advocacy Network, which provides pro-bono science to social and environmental non-profit organizations. He co-founded the [Rural China Education Foundation](http://www.ruralchina.org), which supports community-based curriculum in rural China. In 2021, Ma received the Jeffrey L. Elman Prize for Scientific Achievement and Community Building from the Cognitive Science Society, and in 2024 he received the Award for Education in Neuroscience from the Society for Neuroscience (SfN).\n\n **Long Bio:** Wei Ji Ma is Professor of [Neural Science](http://www.cns.nyu.edu) and [Psychology](http://psych.nyu.edu) at NYU. His lab studies decision-making in perception, attention, working memory, social cognition, and planning, using a combination of human behavioral experiments, computational modeling, and - through collaboration - electrophysiology and neuroimaging.  Wei Ji grew up in the Netherlands and received M.Sc.s in Physics and Mathematics from the University of Groningen. He did his Ph.D. in Physics at the same place, but was mostly supervised by [Erik Verlinde](https://en.wikipedia.org/wiki/Erik_Verlinde) at Utrecht University and Princeton University. He continued as a postdoc in computational neuroscience, first with [Christof Koch](https://alleninstitute.org/what-we-do/brain-science/about/team/staff-profiles/christof-koch/) at Caltech and then with [Alexandre Pouget](https://www.unige.ch/medecine/neuf/en/research/grecherche/alexandre-pouget/) at the University of Rochester. Along the way, he became more interested and involved in experimental psychology and the mathematical modeling of cognition. He was Assistant Professor of Neuroscience at [Baylor College of Medicine](http://www.bcm.edu) from 2008 to 2013, with an affiliate appointment in Psychology at [Rice University](http://www.rice.edu). He has been at NYU since 2013, as full Professor since 2020. He has affiliate appointments in the [Neuroscience Institute](https://med.nyu.edu/neuroscience/), the [Institute for the Study of Decision Making](https://isdm.nyu.edu), the [Center for Data Science](http://cds.nyu.edu), and the [Center for Experimental Social Science](http://cess.nyu.edu). From 2016 to 2021, Wei Ji was Co-Program Director (with [Xiao-Jing Wang](http://www.cns.nyu.edu/corefaculty/Wang.php)) of the NIH-funded [Training Program in Computational Neuroscience](https://as.nyu.edu/cns/UndergraduateProgram/FundingOpportunities/CompTrainingGrant.html) at NYU. Moreover, Wei Ji is active in mentorship, community-building, and outreach. He is a founding member of the [Scientist Action and Advocacy Network](http://scaan.net) (founder: [Will Adler](https://wtadler.com)) and of [NeuWrite NYU](https://www.neuwrite.org/neuwrite-nyu/) (founder: [Alex Berardino](https://www.linkedin.com/in/alexdino)). With [Cristina Alberini](http://www.cns.nyu.edu/corefaculty/Alberini.php), Wei Ji founded the [Growing up in Science seminar series](http://www.growingupinscience.com), in which scientists tell their "unofficial stories". [Read](http://www.cns.nyu.edu/events/growingupinscience/unofficial.html#Wei Ji) or [listen to](https://www.youtube.com/watch?v=hFQeabuyhMo) Wei Ji's own unofficial story.Besides his academic work, Wei Ji is the co-founder (with [Diane Geng](http://www.ruralchina.org/our-team) and [Sara Lam](https://academics.morris.umn.edu/sara-lam)) of the [Rural China Education Foundation](http://www.ruralchina.org). He enjoys strategy games, badminton, [science-art collaborations](https://www.jodyoberfelder.com/thebrainpiece/), immersive theater, and exploring food.\n\n 马伟基是美国纽约大学神经科学和心理学教授，他注重研究人类的感知、记忆及决策。他是一名荷兰华裔，其祖辈在上世纪二十年代从中国烟台移民到荷兰。马伟基于格罗宁根大学先后获得物理学硕士、数学硕士和物理学博士学位。从2002至2008年间，他分别在加州理工学院和罗彻斯特大学从事计算神经学方面的博士后研究工作，并在贝勒医学院开始他的教学生涯(2008-2013)。他长期致力于教育政策、非营利组织管理及科学普及领域的发展，并于2005年成立了乡村教育促进会。`,
    },
];



const labMembers = [
    {
        firstname: "Yotam",
        lastname: "Sagiv",
        status: ["postdoc"],
        image: "/images/yotamsagiv.png",
        email: "ys6820@nyu.edu",
        bio: "Yotam is a postdoc who joined the lab in 2024. He is broadly interested in developing computational models that describe how interesting cognitive processes are implemented in the mind and brain. Currently, his work uses chess to study how people construct complex plans subject to various constraints (e.g., minimising costs associated with time or effort). Outside of the lab, Yotam likes to play guitar, find new recipes to mess up, and go to the gym."
    },
    {
        firstname: "Daisy",
        lastname: "Lin",
        status: ["phd"],
        image: "/images/daisy.jpg",
        email: "xl1005@nyu.edu",
        googleScholar: "https://scholar.google.com/citations?hl=en&user=dpN1QpkAAAAJ",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=836154",
        website: "https://daisilin.github.io/xinlei/",
        github: "https://github.com/daisilin",
        twitter: "https://twitter.com/leixlin",
        bio: "Daisy is a Ph.D. student in Neuroscience who joined the lab in 2020. She is interested in the intersection between machine learning and cognitive science. She studies how humans and AI systems plan. Currently her research projects focus on comparing deep reinforcement learning algorithms with human planning models, studying the individual differences and latent factors of complex planning, and improving a stochastic log likelihood estimation algorithm. Besides doing research, you can find her in all kinds of mountains exploring nature, snowboarding, hiking, or at home baking desserts and playing with her cats."
    },
    {
        firstname: "Nastaran",
        lastname: "Arfaei",
        status: ["phd"],
        image: "/images/Nastaran.jpg",
        email: "na2481@nyu.edu",
        twitter: "https://twitter.com/NastaranArfaei",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=937979",
        linkedin: "https://www.linkedin.com/in/narfaei",
        bio: "Nastaran is a Ph.D. student in the Cognition and Perception program. She joined the lab in 2022. She currently works on the computational modeling of behavior and eye movements during collaborative dyadic planning. She is also working on identifying neural correlates of planning in humans using fMRI data. In her free time, Nastaran enjoys practicing karate at the NYU karate club, making virtual reality experiences, and writing her neuro-science-fiction novel."
    },
    {
        firstname: "Jeroen",
        lastname: "Olieslagers",
        status: ["phd"],
        image: "/images/Jeroen.jpg",
        email: "jo2229@nyu.edu",
        googleScholar: "https://scholar.google.com/citations?user=O-jqiIkAAAAJ&hl=en",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=893671",
        website: "https://www.jeroen.science/",
        github: "https://github.com/JeroenOlieslagers",
        bio: "Jeroen is a Ph.D. student in Neuroscience who joined the lab in 2022. He uses the board game 'Rush Hour' to study how people plan. Using computational tools from reinforcement learning and graph theory, he aims to explain how people plan in order to solve the puzzle as well as explain person-to-person variability. More generally, he is interested in learning, whether on a behavioral level through reinforcement learning, or on a neuronal level through online learning in time series models. When he is not trying to convince people to start using the Julia programming language, Jeroen likes to play online chess, strategy video games, go to the gym and go on hikes."
    },
    {
        firstname: "Jordan",
        lastname: "Lei",
        status: ["phd"],
        image: "/images/Jordan2.jpg",
        email: "jordan.lei@nyu.edu",
        googleScholar: "https://scholar.google.com/citations?hl=en&user=GRnnNBYAAAAJ",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=894072",
        website: "https://www.jordanlei.com/",
        github: "https://github.com/jordanlei",
        twitter: "https://twitter.com/NeuroLei",
        linkedin: "https://www.linkedin.com/in/jordan-lei-782890130/",
        bio: "Jordan is a Ph.D. student in Neuroscience who joined the lab in 2022. He is interested in the neural and cognitive mechanisms of complex planning. His current projects involve researching how people adapt their planning to uncertainty in the environment, how monkeys develop strategies in Four-in-a-row, and how people think ahead in chess. In his spare time, he enjoys painting, swimming, visiting museums, cooking, and playing guitar."
    },
    {
        firstname: "Shucheng",
        lastname: "Li",
        status: ["undergrad"],
        image: "/images/Shucheng.jpg",
        email: "sl9315@nyu.edu",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=931798",
        bio: "Shucheng is an undergraduate student from NYU Shanghai, majoring in Neuroscience. She joined the lab in 2023 when she studied away in New York. She is interested in developing computational models and theories to study decision-making, attention, and learning. She is now working on studying human planning models with the think-aloud method. She enjoys drawing, cooking, watching musicals, and traveling in her free time."
    },
    {
        firstname: "Jieyu",
        lastname: "Li",
        status: ["undergrad"],
        image: "/images/Jieyu.jpg",
        email: "jl15931@nyu.edu",
        website: "https://auracion.github.io/",
        bio: "Jieyu Li is an RA at NYU Shanghai. He joined the lab in 2024 as a collaborator. Currently, he is working on MNK-game solver algorithms. His research interests mainly focus on using computational models to study how prior experiences and attention influence human cognition. Besides academics, he loves mathematics, guitar, basketball, room escape, and puzzle games."
    },
    {
        firstname: "Yiran",
        lastname: "Gong",
        status: ["undergrad"],
        image: "/images/Yiran.jpg",
        email: "yg2990@barnard.edu",
        bio: "Yiran is currently an undergraduate student at Barnard College, Columbia University, pursuing a degree in Cognitive Science. She has recently joined the lab as a Research Assistant, where her focus is on the computational modeling of collaborative planning and communication. Yiran is deeply interested in analyzing human behavior within social contexts and understanding the underlying inferences. Outside of her academic pursuits, you can find her on tennis courts, in art exhibitions, and in coffee shops around the city."
    },
    {
        firstname: "Will",
        lastname: "Zhang",
        status: ["undergrad"],
        image: "/images/willzhang.jpg",
        email: "wz2258@nyu.edu",
        bio: "Will Zhang is an undergraduate student at NYU College of Arts and Science. He joined the lab as a Research Assistant in 2024, primarily assisting with data analysis for the think-aloud experiment on Four-in-a-Row. His academic interests center on understanding how people make decisions in complex scenarios and predicting outcomes using mathematical approaches. Outside of the lab, Will enjoys outdoor activities such as snowboarding, surfing, and fishing."
    },
    {
        firstname: "Ge (James)",
        lastname: "Jin",
        status: ["undergrad"],
        image: "/images/jamesjin.jpg",
        email: "gj2148@nyu.edu",
        bio: "James is an undergraduate computer science major at NYU Tandon School of Engineering. He joined the lab as a research assistant in fall 2024. James is interested in understanding how humans utilize their finite perceptual abilities to extract maximum insight relevant to their goals. He enjoys building experiments to analyze the internal representations of perception and their relationship to problem-solving. Besides research, James enjoys writing, tennis, and studying foreign languages."
    }
]

const collaboratorsAlumni = [
    {
        firstname: "Xiang",
        lastname: "Li",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/Xiang_Li.jpg",
        email: "xl2498@nyu.edu",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=746672",
        twitter: "https://twitter.com/Xiang_Li_TFS",
        bio: "Xiang was a Ph.D. student in Cognition and Perception who joined the lab in 2018 and defended in July 2024. He worked on probabilistic inference in two-player strategic games. He is generally interested in various forms of decision-making, and in applying ML and information theory to these processes. In his free time, he enjoys video games, soccer, poetry, and post-rock music."
    },
    {
        firstname: "Peiyuan",
        lastname: "Zhang",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/peipei.png",
        email: "pz580@nyu.edu",
        website: "http://peiyuanzhangny.github.io/",
        neurotree: "https://neurotree.org/beta/tree.php?pid=776894&fontsize=1&pnodecount=4&cnodecount=2",
        twitter: "https://twitter.com/peiyuan9?lang=en",
        bio: "Peiyuan (Peipei) was a Ph.D. student in Neuroscience in early 2019 and defended in November 2023. Her thesis project was focused on uncovering the root causes of procrastination and developing effective strategies to mitigate it. Her research interests extend beyond her thesis project and include conducting research that positively impacts individuals’ overall well-being, particularly their mental health. Besides doing research, she loves directing and producing documentaries that explore individuals with distinct life philosophies or lifestyles. Her initial documentary, The Opposite of Dying, follows the story of a man who lives in a mountain cave in Dali, China and aspires to be an entrepreneur."
    },
    {
        firstname: "Hsin-Hung",
        lastname: "Li",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/hsin-hung.png",
        email: "hsin.hung.li@nyu.edu",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=78597",
        googleScholar: "https://scholar.google.com/citations?user=9ZKsj_kAAAAJ&hl=en",
        twitter: "https://twitter.com/hsinhungli",
        bio: "Hsin-Hung was a postdoc in the lab from Feb 2019 to Dec 2023. He received his Ph.D. in Experimental Psychology in NYU under the supervision of David Heeger and Marisa Carrasco. During his PhD., he studied how attention impacts visual perception in different contexts, such as bistable perception and saccadic eye movements. He continued as a postdoc in NYU, working with Wei Ji and Clay Curtis. He uses both computational modeling and fMRI technique to study how humans report confidence and uncertainty in perceptual decision-making and visual working memory tasks. Hsin now has his own lab at The Ohio State University."
    },
    {
        firstname: "Heiko",
        lastname: "Schütt",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/heiko.png",
        email: "heiko.schuett@nyu.edu",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=767422",
        googleScholar: "https://scholar.google.de/citations?user=RVVpHMYAAAAJ&hl=de",
        website: "https://heikoschuett.github.io",
        bio: "Heiko joined the lab in October 2018. Heiko received his Ph.D. in Neural and Behavioural Sciences from Tübingen, Germany in July 2018. His research focuses on models and methods in vision research. During his Ph.D., he worked on early vision and eye movements. In the lab, he works on modeling perceptual organization, while keeping an interest in model development methods and statistics. He also works on methods for high-dimensional representational models with Nikolaus Kriegeskorte at the Zuckerman Institute at Columbia University. Heiko is now an Associate Professor at the University of Luxembourg."
    },
    {
        firstname: "Dongjae",
        lastname: "Kim",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/dongjae.jpg",
        email: "dongjae.kim@nyu.edu",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=825556",
        googleScholar: "https://scholar.google.com/citations?user=5lyZHmkAAAAJ&hl=en",
        website: "https://dongjae-kim.github.io",
        bio: "Dongjae received his Ph.D. in Brain and Cognitive Engineering from KAIST, in 2021. During his Ph.D., he studied model-based and model-free reinforcement learning and its arbitration control. He studied the role of task complexity in arbitration control and how the arbitration control reduces bias-variance error, etc. His research interests are every idea about understanding human learning. Dongjae is now an Assistant professor at Dankook University."
    },
    {
        firstname: "Ionatan",
        lastname: "Kuperwajs",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/ionatannew.jpg",
        email: "ikuperwajs@nyu.edu",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=836155",
        googleScholar: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F5Agy7bgHvD3BFql3CVTCX0oDjxbT1vIwTKOgQqM4yz7-Xb6ozgOh10QPmH5HHQIbnAagtnt9Y-23pAaxft45sCDTsAPA&user=7h75WNUAAAAJ",
        website: "https://ionatankuperwajs.github.io",
        github: "https://github.com/ionatankuperwajs",
        twitter: "https://twitter.com/ikuperwajs",
        bio: "Ionatan joined the lab as a Ph.D. student in Neuroscience in 2019 and defended in November 2023. He studies how people plan sequences of actions in complex environments. Currently, his projects involve characterizing human decision-making in large-scale behavioral data, developing a Bayesian inference framework for optimizing planning depth in decision tree search, and training deep neural networks to predict human gameplay in a challenging variant of tic-tac-toe. In his free time, Ionatan is usually traveling or hiking for landscape photography, hosting an anime podcast, or playing soccer, basketball, or tennis. Ionatan is now a postdoc in the laboratory of Thomas Griffiths at Princeton University."
    },
    {
        firstname: "Jennifer Laura",
        lastname: "Lee",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/jenn.jpg",
        email: "jenn.laura.lee@nyu.edu",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=767420",
        twitter: "https://twitter.com/jenni4eyes",
        bio: "Jenn was a Ph.D. student in Neuroscience who joined the lab in 2018 and defended in 2022. She is interested in questions at the intersection of neuroscience and philosophy (neuroethics, philosophy of mind, philosophy of science). She investigated how people decide that seemingly independent observations share a common underlying cause. She is a founding member and past president of the Scientist Action and Advocacy Network."
    },
    {
        firstname: "Stuart",
        lastname: "Jackson",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/stuart.jpg",
        googleScholar: "https://scholar.google.com/citations?user=wWPj3cIAAAAJ&hl=en",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=49053",
        bio: "Stuart was a PhD student in the Center for Neural Science who joined the lab in December 2013 and worked on the precision of encoding contrast and orientation in visual short-term memory. He defended his thesis in December 2015. He is now a data scientist."
    },
    {
        firstname: "Carolina",
        lastname: "Di Tella",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/carolina.png",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=165577",
        bio: "Carolina was a PhD student in the Center for Neural Science and joined the lab in 2018. As an undergraduate, she studied economics in Argentina. She worked with Wei Ji and Paul Glimcher on the behavior and neural basis of other-regarding preferences using decision problems with trade-offs between multiple agents. She defended her thesis on July 9, 2020. Carolina enjoys cooking her master dishes for her friends. She is now a lecturer at the University of San Andrés."
    },
    {
        firstname: "Aspen",
        lastname: "Yoo",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/aspen.jpg",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=165578",
        website: "https://aspenyoo.github.io",
        bio: "Aspen was a Ph.D. student in Cognition and Perception who joined the lab in 2014. Aspen studied how people use knowledge of memory uncertainty in simple visual memory tasks. She also modeled confidence reports in word recognition memory tasks. In collaborations with Clay Curtis and his lab, she studied the role of priority in working memory using behavior, computation, and neuroimaging. She defended on Sep 6, 2019, continued as a postdoc through Aug 2020, and is now a postdoc in the lab of Anne Collins at UC Berkeley."
    },
    {
        firstname: "Sam",
        lastname: "Zheng",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/sam.jpg",
        bio: "Sam is a Ph.D. student in Neuroscience and rotated in the lab in 2020-2021. He is broadly interested in a computational understanding of the brain and the mind, from the single cell, circuit, network... all the way to cognition, emotion and behavior. He likes exploring the function of his own brain too, especially through meditation. Informally he wants to walk the middle way between science and philosophy, letting the bright sides of both illuminate each other."
    },
    {
        firstname: "Yichen",
        lastname: "Li",
        status: ["undergrad", "alumni", "collaborator"],
        image: "/images/yichen.jpg",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=767424",
        bio: "Yichen was an undergraduate student in Mathematics and Computer Science at NYU who joined the lab in October 2018. Her project with Wei Ji and Zahy Bnaya was on sequential planning in a single-player combinatorial game. She left the lab in August 2020, and is now a Ph.D. student at Harvard University."
    },
    {
        firstname: "Qixiu",
        lastname: "Fu",
        status: ["undergrad", "alumni", "collaborator"],
        image: "/images/qixiu.jpeg",
        email: "qixiu.fu@icahn.mssm.edu",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=846151",
        github: "https://github.com/fuqixiu",
        website: "https://qixiufu.weebly.com/",
        bio: "Qixiu was an undergraduate student in Psychology at NYU. She joined the lab in summer 2019 and worked on her Honors project on planning and decision making. Qixiu had great fun and has learned a lot from Ma Lab on both scientific and personal levels. Outside of the lab, she enjoys doing creative projects. Qixiu left the lab in August 2020 and is now a neuroscience Ph.D. candidate at Mount Sinai working on computational psychiatry."
    },
    {
        firstname: "Dongqi (Sherry)",
        lastname: "Bao",
        status: ["undergrad", "alumni", "collaborator"],
        image: "/images/sherry.jpg",
        website: "http://sherrybao222.github.io/",
        twitter: "https://twitter.com/sherry_dongqi",
        bio: "Dongqi (Sherry) joined the lab in September 2019. She received her Master's degree in Computational Biology and Bioinformatics from ETH Zurich in July 2019. She was an active iGEMer busy with designing and building artificial biological modules in E. coli in college, and then developed a great interest in cognitive computational neuroscience through her projects investigating different models to interpret cognitive and neurophysiological processes. Her project with Wei Ji and Qixiu was on human planning in a spatial navigation task. Her favorite saying is “What I cannot create, I do not understand”. Her interests/hobbies: DJing, literature, film and mental health. She left the lab in 2020 and is now a PhD student in the lab of Todd Hare at the University of Zurich."
    },
    {
        firstname: "Sixuan",
        lastname: "Chen",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/sixuan.jpg",
        email: "sixuan_chen1@brown.edu",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=856429",
        github: "https://github.com/SixuanChen",
        twitter: "https://twitter.com/iamcsx",
        linkedin: "https://www.linkedin.com/in/sixuan-chen-08564912a/",
        bio: "Sixuan was a research assistant and lab manager from 2022 to 2023. She is interested in how humans learn from massive amounts of uncertain information, generalize them into abstract theories and guide our decision-making. She hopes to figure out the learning rules that enable animals to do transfer learning and continue learning across varied domains. Life is about learning and life is never boring for her. In her free time, she enjoys designing birthday cards, playing classical guitar, and watching sci-fic movies and anime. Sixuan is now a PhD student at Brown University."
    },
    {
        firstname: "Andra",
        lastname: "Mihali",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/andra.jpg",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=84645",
        googleScholar: "https://scholar.google.com/citations?user=P652FREAAAAJ",
        twitter: "https://twitter.com/Lianaaan",
        bio: "Andra joined the lab in 2013 and worked on projects related to the encoding of information in visual attention and visual short-term memory, Attention Deficit Hyperactivity Disorder, and microsaccades. Andra is the proud co-owner of a supercat who survived two falls from the sixth floor. She defended her Ph.D. in April 2018, and continued as a postdoc until March 2019. She is now a postdoc at Columbia University with Guillermo Horga."
    },
    {
        firstname: "Luigi",
        lastname: "Acerbi",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/luigi_new.png",
        email: "luigi.acerbi@helsinki.fi",
        linkedin: "https://www.linkedin.com/in/luigi-acerbi-719b492/",
        github: "https://github.com/acerbilab",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=165573",
        googleScholar: "https://scholar.google.it/citations?user=QYBZoGwAAAAJ&hl=en",
        twitter: "https://twitter.com/AcerbiLuigi",
        website: "http://luigiacerbi.com",
        labWebsite: "https://www.helsinki.fi/en/researchgroups/machine-and-human-intelligence",
        bio: "Luigi leads the Machine and Human Intelligence group at the University of Helsinki (Finland), investigating probabilistic machine and human learning. Before that, he was a postdoctoral researcher in computational neuroscience at New York University (NY, USA) with Wei Ji Ma and at the University of Geneva (Switzerland) with Alexandre Pouget, where he collaborated with the International Brain Laboratory. He obtained his PhD from the University of Edinburgh (UK), spending several months at the Computational and Biological Learning Lab in Cambridge (UK). In a far past, he studied theoretical physics and computer science at the University of Milan-Bicocca (Italy). In his free time, he enjoys boardgames and speculative fiction. He is now an assistant professor in the Department of Computer Science of the University of Helsinki."
    },
    {
        firstname: "Zahy",
        lastname: "Bnaya",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/zahy.jpg",
        website: "https://sites.google.com/site/zahybnaya",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=165572",
        googleScholar: "https://scholar.google.com/citations?user=8g6YpBAAAAAJ&hl=en",
        bio: "Zahy joined the lab in November 2014, after receiving his Ph.D. in Artificial Intelligence from Ben Gurion University in 2013. He is interested in heuristic search algorithms and Monte-Carlo tree search applications for multi-agent systems. In the lab, he worked on human decision-making in combinatorial games, and on exploration/exploitation in a minimal task. He left the lab in 2018, and is now working on self-driving cars at General Motors in Israel."
    },
    {
        firstname: "Ronald",
        lastname: "van den Berg",
        status: ["postdoc", "alumni", "collaborator"],
        image: "/images/ronald.jpg",
        website: "http://www.ronaldvandenberg.org",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=49080",
        googleScholar: "https://scholar.google.com/citations?user=QUDXhooAAAAJ",
        bio: "Ronald joined the lab in 2009 after receiving his Ph.D. in Computer Science from the University of Groningen. He worked mostly on models of working memory. He left the lab in 2012 and did a postdoc with Daniel Wolpert at the University of Cambridge. He is now Associate Professor at the University of Stockholm."
    },
    {
        firstname: "Bas",
        lastname: "van Opheusden",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/bas.jpg",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=165576",
        googleScholar: "https://scholar.google.com/citations?user=t95nO60AAAAJ",
        bio: "Bas joined the lab in 2014 as a Ph.D. student in Neuroscience. He worked on modeling human reasoning in a tractable combinatorial strategy game. He did an internship at Oculus. He defended in October 2018 and is now a postdoc in the lab of Tom Griffiths at Princeton."
    },
    {
        firstname: "Edgar",
        lastname: "Walker",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/edgar.jpg",
        website: "https://edgarwalker.com",
        labWebsite: "https://eywalkerlab.com",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=76081",
        twitter: "https://twitter.com/eywalker",
        bio: "Edgar was based in the lab of Andreas Tolias at Baylor College of Medicine in Houston. He worked with Wei Ji and Andreas Tolias on representation of uncertainty in visual cortex, and with Wei Ji on the aperture problem. He defended his Ph.D. in 2019, was a postdoc in the lab of Fabian Sinz at the University of Tübingen, and is now an Assistant Professor at the University of Washington."
    },
    {
        firstname: "Zhiwei",
        lastname: "Li",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/zhiwei.jpg",
        bio: "Zhiwei worked in the lab as a summer student in 2014 while an undergraduate in physics at Beijing University. In 2016 she became a PhD student with Todd Gureckis at NYU, and defended on Sep 24, 2021. With Wei Ji, she worked on the effects of visual fixations on value-based decision-making."
    },
    {
        firstname: "Long",
        lastname: "Ni",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/long.jpg",
        bio: "Long visited the lab in 2016 from NYU Shanghai. His project was about the quantitative modeling of interference in the n-back task. He left the lab in 2017 and continues as collaborator. He is now a PhD student at the University of Pennsylvania."
    },
    {
        firstname: "Joshua",
        lastname: "Calder-Travis",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/CalderTravis_new.jpg",
        email: "j.calder-travis@uke.de",
        neurotree: "https://neurotree.org/neurotree/tree.php?pid=767423",
        github: "https://github.com/jCalderTravis",
        twitter: "https://twitter.com/JCalderTravis",
        googleScholar: "https://scholar.google.com/citations?user=-9asgxcAAAAJ&hl=en",
        website: "https://sites.google.com/view/calder-travis",
        researchWebsite: "https://sites.google.com/view/vis-search-stats-effects/home",
        bio: "I'm a cognitive/computational psychologist/neuroscientist, and currently a postdoc with Tobias Donner at the UKE in Hamburg. I completed my PhD with Nick Yeung and Rafal Bogacz, and have also been mentored by Wei Ji Ma."
    },
    {
        firstname: "Anne-Lene",
        lastname: "Sax",
        status: ["phd", "alumni", "collaborator"],
        image: "/images/anne.png",
        bio: "Anne is a PhD student from the University of Bristol, UK, who visited the lab in June 2019. She is interested in building computational models of metacognition and metacognitive biases. In the Ma lab, she explored the association between self-performance beliefs, mental effort and task performance building computational models inspired by research on implicit theories of intelligence and economics. For example, she asked questions like: Under what conditions, is mental effort expended? When do people decide to avoid performing at all and why? Can certain personality traits explain potential individual differences in effort-based decision-making? Outside of academia, Anne enjoys getting lost, in books, painting(s), the forest and - when she was in NYC - the city, preferably on a bicycle. She left the lab in August 2019."
    },
    {
        firstname: "Jake",
        lastname: "Topping",
        status: ["phd", "alumni", "collaborator"],
        linkedin: "https://www.linkedin.com/in/jake-topping/",
        googleScholar: "https://scholar.google.com/citations?hl=en&user=kBDis8EAAAAJ",
        bio: "Jake finished his Masters at Oxford University in June 2019, and joined the lab in July 2019. He worked on training a deep reinforcement learning network to play four-in-a-row. He left the lab in September 2019 and is now a PhD student in Mathematics at the University of Oxford."
    },
    {
        firstname: "Zeming",
        lastname: "Fang",
        status: ["researcher", "alumni", "collaborator"],
        image: "/images/zeming.jpg",
        bio: "Zeming completed his Masters in Psychology at NYU in 2017 in the lab. He worked with Jonathan Winawer and Wei Ji on improving the second-order contrast model of early visual cortex. Zeming likes playing badminton and is an experienced calligrapher. He left the lab in 2018 and is now a PhD student with Chris Sims at Rensselaer Polytechnic Institute."
    },
    {
        firstname: "Aditi",
        lastname: "Singh",
        status: ["undergrad", "alumni", "collaborator"],
        bio: "Aditi joined the lab in August 2017, when she was a student at the Horace Greeley High School in Westchester NY. She worked with Andra on memory-based target localization. She left the lab in 2019."
    }
];

const collaboratorsExternal = [
    {
        firstname: "Clay",
        lastname: "Curtis",
        affiliation: "NYU",
        website: "http://www.psych.nyu.edu/curtis/",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Paul",
        lastname: "Glimcher",
        affiliation: "NYU",
        website: "http://www.decisionsrus.com",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Daniel",
        lastname: "Goldreich",
        affiliation: "McMaster University",
        website: "http://psych.mcmaster.ca/goldreich-lab/",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Konrad",
        lastname: "Kording",
        affiliation: "University of Pennsylvania",
        website: "http://www.koerding.com/",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Michael",
        lastname: "Landy",
        affiliation: "NYU",
        website: "http://www.cns.nyu.edu/~msl/",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Jonathan",
        lastname: "Winawer",
        affiliation: "NYU",
        website: "http://psych.nyu.edu/winawer/",
        status: ["faculty", "collaborator"]
    },
    {
        firstname: "Elyse",
        lastname: "Norton",
        affiliation: "NYU",
        status: ["phd", "collaborator"]
    }
];

const labAlumni = [
    {
        firstname: "Emin",
        lastname: "Orhan",
        status: ["postdoc", "alumni", "past"],
        image: "/images/emin.jpg",
        googleScholar: "https://scholar.google.com/citations?user=YkT8jLoAAAAJ&hl=en",
        blog: "https://severelytheoretical.wordpress.com",
        bio: "Emin joined the lab in 2013 after receiving his Ph.D. in Brain & Cognitive Sciences from the University of Rochester in 2013. His main research interest is to understand cognitive and perceptual phenomena using theoretical/computational models at multiple levels of analysis, employing concepts from machine learning and theoretical neuroscience. He left the lab in 2016 and is now a Moore-Sloan Data Science Fellow at NYU, working mostly with Brenden Lake."
    },
    {
        firstname: "Nuwan",
        lastname: "de Silva",
        status: ["postdoc", "alumni", "past"],
        image: "/images/nuwan.jpg",
        linkedin: "https://www.linkedin.com/in/nuwan12/?originalSubdomain=lk",
        bio: "Nuwan joined the lab in 2011 after receiving his Ph.D. in Applied Mathematics from Rensselaer Polytechnic Institute in 2011. In the lab, he worked on optimal resource allocation to multiple items. He left the lab in 2015 and is now a data scientist."
    },
    {
        firstname: "Will",
        lastname: "Adler",
        status: ["phd", "alumni", "past"],
        image: "/images/will.jpg",
        personalWebsite: "http://wtadler.com",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=66569",
        googleScholar: "https://scholar.google.com/citations?user=JeMjH-UAAAAJ",
        twitter: "https://twitter.com/wtadler",
        bio: "Will was a student in Neuroscience who joined the lab in 2013 and worked on modeling confidence judgments in visual categorization tasks. He is also the founder of the Scientist Action and Advocacy Network and the Early-Career Policy Ambassador of the Society for Neuroscience. In his free time, he worries about graphic design or bikes long distances. He defended in 2017, and continued as a collaborator until January 2018. He is now Senior Technologist in Elections & Democracy at the Center for Democracy & Technology."
    },
    {
        firstname: "Hongsup",
        lastname: "Shin",
        status: ["postdoc", "alumni", "past"],
        image: "/images/hongsup.jpg",
        neurotree: "https://neurotree.org/beta/peopleinfo.php?pid=76080",
        googleScholar: "https://scholar.google.com/citations?user=fTxDiGcAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/hongsupshin/",
        twitter: "https://twitter.com/hongsupshin?lang=en",
        bio: "Hongsup Shin joined the lab as a graduate student in 2010, when the lab was still at Baylor College of Medicine. He defended his PhD on the limitations of visual working memory in 2015, and continued as a postdoc through January 2016. He is now a data scientist."
    },
    {
        firstname: "Shan",
        lastname: "Shen",
        status: ["phd", "alumni", "past"],
        image: "/images/shan.jpg",
        linkedin: "https://www.linkedin.com/in/shan-shen-5032972b/",
        googleScholar: "https://scholar.google.com/citations?user=NK-r6hAAAAAJ&hl=en",
        bio: "Shan was a Ph.D. student at Baylor College of Medicine, primarily working with Andreas Tolias. Following a rotation project, she worked with Wei Ji on visual search, the optimality of perception, and sources of variability in perception. After graduation, she started a career as a data scientist."
    },
    {
        firstname: "Mingbo",
        lastname: "Cai",
        status: ["phd", "alumni", "past"],
        image: "/images/mingbo.jpg",
        personalWebsite: "https://www.mingbocai.com",
        labWebsite: "https://cailab-ircn.org",
        neurotree: "https://neurotree.org/neurotree/peopleinfo.php?pid=26254",
        googleScholar: "https://scholar.google.com/citations?user=MaqoEGAAAAAJ&hl=en",
        bio: "Mingbo Cai was a Ph.D. student at Baylor College of Medicine from 2010 to 2015, primarily working with David Eagleman. Following a rotation project, he worked with Wei Ji on the perceived duration of repeated stimuli. After graduation, he was a postdoc with Yael Niv at Princeton University. Since 2019, he has been faculty at the University of Tokyo."
    },
    {
        firstname: "Deepna",
        lastname: "Devkar",
        status: ["phd", "alumni", "past"],
        image: "/images/deepna.jpeg",
        linkedin: "https://www.linkedin.com/in/deepnadevkar/",
        bio: "Deepna was a Ph.D. student from 2011 to 2014 at Baylor College of Medicine, primarily working with Anthony Wright. Following a rotation project, she worked with Wei Ji on visual search, the optimality of perception, and sources of variability in perception. After graduation, she started a career as a data scientist."
    },
    {
        firstname: "Manisha",
        lastname: "Bhardwaj",
        status: ["phd", "alumni", "past"],
        image: "/images/manisha.jpeg",
        linkedin: "https://www.linkedin.com/in/manishabhardwaj/",
        bio: "Manisha did her Ph.D. in Mathematics at the University of Houston. Her primary advisor was Kresimir Josic and her second advisor was Wei Ji, when he was at Baylor College of Medicine. Manisha worked on visual search among correlated stimuli. After graduating in 2013, she started working as a data scientist."
    },
    {
        firstname: "David",
        lastname: "Halpern",
        status: ["phd", "alumni", "past"],
        image: "/images/david.jpg",
        googleScholar: "https://scholar.google.com/citations?user=OBKa3v4AAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/david-halpern-98abb751/",
        bio: "David was a PhD student in Cognition and Perception who worked primarily with Todd Gureckis. He did a rotation project with Wei Ji on approximate Bayesian inference in neural circuits. Since 2020, he has been a postdoc at the University of Pennsylvania."
    }
]

const mastersStudents = [
    {
        firstname: "Masih",
        lastname: "Rahmati",
        status: ["masters", "alumni", "past"],
        image: "/images/masih.jpg",
        googleScholar: "https://scholar.google.com/citations?user=LooC78kAAAAJ&hl=en&oi=ao",
        linkedin: "https://www.linkedin.com/in/masih-rahmati-phd-28323130/",
        labWebsite: "https://medicine.yale.edu/profile/masih_rahmati/",
        bio: "Masih was a masters student in 2009-2011. He is now a postdoctoral researcher at Yale University."
    },
    {
        firstname: "Elsa",
        lastname: "Mauguin",
        status: ["masters", "alumni", "past"],
        image: "/images/elsa.jpg",
        email: "em5007@nyu.edu",
        github: "https://github.com/mauguin-elsa",
        bio: "I am a master student at EPFL in neurosciences and machine learning. I joined the lab in 2022 for a lab immersion. I work with Nastaran on a road construction game to study how people plan in collaboration. Our goal is to understand the role of communication on simple spatial planning task through reinforcement learning models and concept of theory of mind. Otherwise, I enjoy discovering New York and its thousand of bars, restaurants and activities. I like visiting museums, going to the movie theater, spending times with my friends or watching peaky blinders and listening to french rap."
    },
    {
        firstname: "Michael",
        lastname: "Vogel",
        status: ["masters", "alumni", "past"],
        image: "",
        bio: "Michael was a masters student in 2010 primarily working with Kresimir Josic. Wei Ji was his secondary advisor."
    },
];

const researchAssistants = [
    {
        firstname: "Shaiyan",
        lastname: "Keshvari",
        status: ["postbac", "alumni", "past"],
        image: "/images/shaiyan.jpg",
        personalWebsite: "http://shaiyankeshvari.weebly.com/",
        googleScholar: "https://scholar.google.com/citations?user=chEp86AAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/shaiyankeshvari/?originalSubdomain=ca",
        bio: "Shaiyan was a postbac research assistant in 2010-2011. He is now a postdoctoral researcher at York University."
    },
    {
        firstname: "Helga",
        lastname: "Mazyar Farjadi",
        status: ["postbac", "alumni", "past"],
        image: "/images/helga.jpeg",
        googleScholar: "https://scholar.google.com/citations?user=w7O8V3wAAAAJ&hl=en",
        bio: "Helga was a postbac research assistant in 2010-2012. She is now a PhD student at University of Southern California."
    },
    {
        firstname: "Wen-Chuang",
        lastname: "Chou",
        status: ["postbac", "alumni", "past"],
        image: "/images/wenchuang.jpg",
        labWebsite: "https://cfaed.tu-dresden.de/cfnd-staff",
        bio: "Wen-Chuang was a postbac research assistant in Mar-Oct 2009. He is now a research associate."
    },
    {
        firstname: "Elaina",
        lastname: "Bolinger",
        status: ["postbac", "alumni", "past"],
        image: "/images/elaina.jpeg",
        googleScholar: "https://scholar.google.de/citations?user=60ao32EAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/elaina-bolinger-phd-bbb91345/",
        bio: "Elaina Bolinger worked in the lab from Oct to Dec 2008 as a visiting student from Jacobs University (Germany). She went on to earn her PhD from the University of Tübingen (Germany) and is now a scientific evidence manager in industry."
    },
    {
        firstname: "Eugenia",
        lastname: "Prezhdo",
        status: ["postbac", "alumni", "past"],
        image: "/images/eugenia.jpeg",
        linkedin: "https://www.linkedin.com/in/prezhdo/",
        bio: "Eugenia was a postbac research assistant in 2012-2013. She worked on Bayesian inference in visual categorization. She is now in data science."
    },
    {
        firstname: "Yang",
        lastname: "Chen",
        status: ["postbac", "alumni", "past"],
        bio: "Yang was a postbac research assistant from Nov 2012 to Feb 2013. She worked on the aperture problem in vision."
    },
    {
        firstname: "Trevor",
        lastname: "Holland",
        status: ["postbac", "alumni", "past"],
        image: "/images/trevor.jpg",
        bio: "Trevor Holland worked in the lab from Oct 2008 to Aug 2009 while an undergraduate at Rice University, and later continued as a collaborator. He worked on causal inference in auditory-visual perception."
    },
    {
        firstname: "Gianni",
        lastname: "Galbiati",
        status: ["postbac", "alumni", "past"],
        image: "/images/gianni.jpg",
        linkedin: "https://www.linkedin.com/in/gianni-galbiati",
        bio: "Gianni worked in the lab from 2014 to 2017, initially while being a Masters student in Psychology at NYU. He worked on planning in combinatorial games and is still collaborating on a project that investigates memory of board positions. He is now a data scientist."
    },
    {
        firstname: "Xuan",
        lastname: "Zhang",
        status: ["postbac", "alumni", "past"],
        image: "/images/xuan.jpg",
        bio: "Xuan worked with Wei Ji and with Jon Freeman on working memory for faces defined by race and gender."
    }
];

const undergradAlumni = [
    {
        firstname: "Jennifer",
        lastname: "Yu",
        status: ["undergrad", "alumni", "past"],
        image: "/images/Jennifer.jpg",
        email: "lld286@nyu.edu",
        linkedin: "https://www.linkedin.com/in/luisaleonelli/",
        bio: "Jennifer was an undergraduate researcher in the lab from June to July 2024. She joined the lab to study planning and thinking in chess. As a competitive chess player, she is interested in understanding strategies and thought processes of chess players and how it compares to her own experiences. Outside of academics and chess, she enjoys going to concerts, being active in the gym, and discovering new restaurants."
    },
    {
        firstname: "Luísa",
        lastname: "Leonelli",
        status: ["undergrad", "alumni", "past"],
        image: "/images/luisa.png",
        email: "lld286@nyu.edu",
        linkedin: "https://www.linkedin.com/in/luisaleonelli/",
        bio: "Luísa graduated from NYU, majoring in Neural Science with a minor in Chemistry. She joined the lab in the summer of 2020 and wrote her honors thesis on procrastination and the intention-behavior gap. She's planning on applying to graduate school soon. In her free time, she enjoys playing different musical instruments, loves going to concerts and listening to the Beatles and Queen. She is excited to be working in the lab!"
    },
    {
        firstname: "Sammy",
        lastname: "Tavassoli",
        status: ["undergrad", "alumni", "past"],
        image: "/images/sammy.png",
        linkedin: "https://www.linkedin.com/in/sammy-tavassoli-5960bb1ab",
        bio: "Sammy is an undergraduate at NYU’s Gallatin School of Individualized Study who studies the intersection of science and storytelling. Her project in the lab related to both narratives in neuroscience research and the more general overlaps between computational and humanities research methodologies. In her freetime, she creates short 2D animations. She was in the lab in 2020 and 2021."
    },
    {
        firstname: "Yanli",
        lastname: "Zhou",
        status: ["undergrad", "alumni", "past"],
        image: "/images/yanli.jpg",
        bio: "Yanli started working in the Ma Lab as an undergraduate in Psychology and Mathematics at NYU. She graduated in 2016, continued at NYU as a Masters student in Data Science, and has since 2018 been a PhD student in Data Science with Brenden Lake at NYU. Her project is about the role of uncertainty in collinearity judgments. In her free time, she is a pastry chef or a singer!"
    },
    {
        firstname: "Zhenyu",
        lastname: "Zhu",
        status: ["undergrad", "alumni", "past"],
        image: "/images/zhenyu.jpg",
        bio: "Zhenyu started working in the lab as an undergraduate but since then got his B.Sc. in Neural Science from NYU Shanghai. His project (with Wei Ji and Emin Orhan) is about training supervised neural networks under non-uniform stimulus distributions, and seeing what kind of selectivity emerges. Zhenyu enjoys binge-watching movies, TV series, and political satire shows."
    },
    {
        firstname: "Maija",
        lastname: "Honig",
        status: ["undergrad", "alumni", "past"],
        image: "/images/maija.png",
        bio: "Maija started as an undergraduate in psychology and biology at NYU, and continued as a graduate research assistant. She is interested in memory, perception, and clinical neurology. She has previously worked on Alzheimer’s disease, traumatic brain injury, and progressive supranuclear palsy. Currently, she investigates certainty in visual working memory and whether the brain maintains a representation of precision for memories. She has lived and studied in three different countries."
    },
    {
        firstname: "Qijia",
        lastname: "Zou",
        status: ["undergrad", "alumni", "past"],
        image: "/images/qijia.jpg",
        bio: "Qijia was an undergraduate in Mathematics and Psychology who worked in the lab until Oct 2018. In the lab, she did a literature research project on perceptual organization, a project on the effect of delay time on visual working memory, and a project on the effects of reward on visual working memory. She procrastinates by struggling with the film camera and the violin."
    },
    {
        firstname: "Yunqi",
        lastname: "Li",
        status: ["undergrad", "alumni", "past"],
        image: "/images/yunqi.jpg",
        bio: "Yunqi Li was an undergraduate who worked with Bas and Gianni on combinatorial strategy games. In her free time, she is an aspiring photographer and guitarist."
    },
    {
        firstname: "Mingyu",
        lastname: "Song",
        status: ["undergrad", "alumni", "past"],
        image: "/images/mingyu.jpg",
        bio: "Mingyu started out as a summer student in the lab (2016) and continued to work with Wei Ji on a project related to the exploration-exploitation tradeoff in sequential decision making. She is now a PhD student at Princeton University. She loves basketball and Mille Crêpes."
    },
    {
        firstname: "Xinyi",
        lastname: "Xu",
        status: ["undergrad", "alumni", "past"],
        image: "/images/Xinyi.png",
        bio: "Xinyi Xu is a Neural Science student from NYU Shanghai. Her enthusiasm for illusions has led to a project with Wei Ji aiming to provide a Bayesian explanation of the Curvature blindness illusion found by Kohske Takahashi. The project involves mathematical modeling and would contribute to the field of human perception. Xinyi has a wide range of interests, including photography, hiking, drawing, eating, and design, and is always willing to explore more."
    },
    {
        firstname: "Angelo",
        lastname: "Pennati",
        status: ["undergrad", "alumni", "past"],
        image: "/images/angelo.jpg",
        bio: "Angelo is an undergraduate in Neuroscience and Economics at NYU. In his project, with Luigi and Yanli, he trains unsupervised neural networks to mimic human perceptual organization."
    },
    {
        firstname: "Paul",
        lastname: "Gucik",
        status: ["undergrad", "alumni", "past"],
        image: "/images/paul.jpg",
        bio: "Paul is an undergraduate in Neural Science at NYU. In his project, with Luigi, he tests whether a feature prior affects resource allocation in addition to affecting the decision rule."
    },
    {
        firstname: "Jielei",
        lastname: "Zhu",
        status: ["undergrad", "alumni", "past"],
        image: "/images/emma.jpg",
        bio: "Emma was an undergraduate student who worked on the horizontal-vertical illusion."
    },
    {
        firstname: "Ahmad",
        lastname: "Qamar",
        status: ["undergrad", "alumni", "past"],
        linkedin: "https://www.linkedin.com/in/atqamar",
        bio: "Ahmad Qamar worked in the lab from Jun 2010 to Jun 2012 while an undergraduate at the University of Chicago. His project was about Bayesian inference in visual categorization, and neural network implementations of the same task. He is now a data scientist."
    },
    {
        firstname: "Ryan",
        lastname: "George",
        status: ["undergrad", "alumni", "past"],
        linkedin: "https://www.linkedin.com/in/rggeorge",
        bio: "Ryan George worked in the lab from Oct 2008 to Jan 2009 and from Aug 2009 to May 2011, while an undergraduate at Rice University. He did one project on visual working memory and one on Bayesian inference in visual categorization. He is now a data scientist."
    },
    {
        firstname: "Karen",
        lastname: "Marsden",
        status: ["undergrad", "alumni", "past"],
        bio: "Karen Marsden worked in the lab from May 2009 to May 2012, while an undergraduate at Rice University. Her project, co-supervised by Pearl Chiu, was about the neural basis of intrinsic motivation. She went on to earn her MD from Baylor College of Medicine and is now an internist."
    }
];

const rotationStudents = [
    { firstname: "Wei", lastname: "Huang", status: ["rotation", "alumni", "past"] },
    { firstname: "Manolis", lastname: "Froudarakis", status: ["rotation", "alumni", "past"] },
    { firstname: "Tiffany", lastname: "Kinney", status: ["rotation", "alumni", "past"] },
    { firstname: "Jiyoung", lastname: "Park", status: ["rotation", "alumni", "past"] },
    { firstname: "Balaji", lastname: "Santhanam", status: ["rotation", "alumni", "past"] },
    { firstname: "Robert", lastname: "Seilheimer", status: ["rotation", "alumni", "past"] },
    { firstname: "Patrick", lastname: "Storer", status: ["rotation", "alumni", "past"] },
    { firstname: "Kaushik", lastname: "Lakshimnarasimhan", status: ["rotation", "alumni", "past"] }
];

const summerStudents = [
    { firstname: "David", lastname: "Krueger", status: ["summer", "alumni", "past"] },
    { firstname: "Noam", lastname: "Roth", status: ["summer", "alumni", "past"] },
    { firstname: "Samuel", lastname: "Poulos", status: ["summer", "alumni", "past"] },
    { firstname: "Rose", lastname: "Psalmond", status: ["summer", "alumni", "past"] },
    { firstname: "Chris", lastname: "Nguyen", status: ["summer", "alumni", "past"] }
];

const highschoolstudents = [
    {
        firstname: "Angela",
        lastname: "Joseph",
        status: ["highschool", "alumni", "past"],
        bio: "Angela was a high school senior attending Herricks High School in Long Island, NY. She worked with Peiyuan on a project involving the factors and effects of procrastination. She hopes to pursue a career in computer science and data analytics."
    },
    {
        firstname: "Harrison",
        lastname: "He",
        status: ["highschool", "alumni", "past"],
        image: "/images/harrison.jpg",
        bio: "Harrison was a student at The Collegiate School in New York City. He worked on combining working memory with reward."
    },
    {
        firstname: "Tashi",
        lastname: "Lama",
        status: ["highschool", "alumni", "past"],
        bio: "Tashi was a student at the High School for the Health and Human Services Professions in New York City. She worked with Aspen on the effect of configuration on visual working memory for spatial location."
    }
];

const pastcollaborators = [
    {
        firstname: "Alexandre",
        lastname: "Pouget",
        status: ["before", "past", "collaborator"],
        affiliation: "University of Geneva",
        website: "http://cms.unige.ch/neurosciences/recherche"
    },
    {
        firstname: "Peter",
        lastname: "Latham",
        status: ["before", "past", "collaborator"],
        affiliation: "Gatsby Computational Neuroscience Unit",
        website: "http://www.gatsby.ucl.ac.uk/~pel"
    },
    {
        firstname: "Christof",
        lastname: "Koch",
        status: ["before", "past", "collaborator"],
        affiliation: "Allen Institute for Brain Science",
        website: "http://www.alleninstitute.org/about/team/staff-profile/christof-koch"
    },
    {
        firstname: "Patrick",
        lastname: "Wilken",
        status: ["before", "past", "collaborator"],
        website: "https://en.wikipedia.org/wiki/Patrick_Wilken"
    },
    {
        firstname: "Fred",
        lastname: "Hamker",
        status: ["before", "past", "collaborator"],
        affiliation: "Chemnitz University of Technology",
        website: "https://www.tu-chemnitz.de/informatik/KI/fhamker.php"
    },
    {
        firstname: "Ulrik",
        lastname: "Beierholm",
        status: ["before", "past", "collaborator"],
        website: "https://sites.google.com/site/beierh"
    },
    {
        firstname: "Len",
        lastname: "Adler",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU",
        website: "https://scholar.google.com/citations?user=134XbMkAAAAJ&hl=de"
    },
    {
        firstname: "Dora",
        lastname: "Angelaki",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU",
        website: "http://neuro.bcm.edu/?sct=gfaculty&prf=62"
    },
    {
        firstname: "Jeff",
        lastname: "Beck",
        status: ["since", "past", "collaborator"],
        affiliation: "Duke University",
        website: "https://www.neuro.duke.edu/people/faculty/jeffrey-beck"
    },
    {
        firstname: "Marisa",
        lastname: "Carrasco",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU",
        website: "https://psych.nyu.edu/carrasco/"
    },
    {
        firstname: "Kalpana",
        lastname: "Dokka",
        status: ["since", "past", "collaborator"],
        affiliation: "Baylor College of Medicine",
        website: "http://neuro.bcm.edu/?sct=gfaculty&prf=62"
    },
    {
        firstname: "David",
        lastname: "Eagleman",
        status: ["since", "past", "collaborator"],
        affiliation: "Baylor College of Medicine",
        website: "http://www.eagleman.com"
    },
    {
        firstname: "Michael",
        lastname: "Halassa",
        status: ["since", "past", "collaborator"],
        affiliation: "MIT",
        website: "http://halassalab.org/people/"
    },
    {
        firstname: "Edward",
        lastname: "Awh",
        status: ["since", "past", "collaborator"],
        website: "http://awhvogellab.com"
    },
    {
        firstname: "Daphne",
        lastname: "Bavelier",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Geneva",
        website: "https://cms.unige.ch/fapse/people/bavelier"
    },
    {
        firstname: "Michael",
        lastname: "Beauchamp",
        status: ["since", "past", "collaborator"],
        website: "http://openwetware.org/wiki/Beauchamp"
    },
    {
        firstname: "Edward",
        lastname: "Deci",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Rochester",
        website: "http://www.psych.rochester.edu/people/deci_edward"
    },
    {
        firstname: "Katharina",
        lastname: "Dobs",
        status: ["since", "past", "collaborator"],
        affiliation: "Toulouse",
        website: "https://scholar.google.com/citations?user=134XbMkAAAAJ&hl=de"
    },
    {
        firstname: "Kresimir",
        lastname: "Josic",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Houston",
        website: "http://www.math.uh.edu/~josic/"
    },
    {
        firstname: "John",
        lastname: "Magnotti",
        status: ["since", "past", "collaborator"],
        website: "https://scholar.google.com/citations?user=lzUiqpwAAAAJ"
    },
    {
        firstname: "Vidhya",
        lastname: "Navalpakkam",
        status: ["since", "past", "collaborator"],
        affiliation: "Google Research",
        website: "http://research.google.com/pubs/VidhyaNavalpakkam.html"
    },
    {
        firstname: "Lucas",
        lastname: "Parra",
        status: ["since", "past", "collaborator"],
        affiliation: "City College of New York",
        website: "http://bme.ccny.cuny.edu/people/faculty/lparra"
    },
    {
        firstname: "Megan",
        lastname: "Peters",
        status: ["since", "past", "collaborator"],
        website: "https://sites.google.com/site/meganakpeters"
    },
    {
        firstname: "Leila",
        lastname: "Reddy",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Toulouse",
        website: "http://cerco.ups-tlse.fr/~lreddy/Leila_Reddy/"
    },
    {
        firstname: "Richard",
        lastname: "Ryan",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Rochester",
        website: "http://www.psych.rochester.edu/people/ryan_richard"
    },
    {
        firstname: "Ladan",
        lastname: "Shams",
        status: ["since", "past", "collaborator"],
        affiliation: "University of California Los Angeles",
        website: "http://www.jonbfreeman.com"
    },
    {
        firstname: "Anthony",
        lastname: "Wright",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Texas Health Science Center",
        website: "http://nba.uth.tmc.edu/resources/faculty/members/wright.htm"
    },
    {
        firstname: "Adam",
        lastname: "Zaidel",
        status: ["since", "past", "collaborator"],
        affiliation: "Baylor College of Medicine",
        website: "http://neuro.bcm.edu/?sct=gfaculty&prf=62"
    },
    {
        firstname: "Mingming",
        lastname: "Zhou",
        status: ["since", "past", "collaborator"],
        affiliation: "University of Macau",
        website: "http://www.umac.mo/fed/staff/mmzhou"
    },
    {
        firstname: "Xiang",
        lastname: "Zhou",
        status: ["since", "past", "collaborator"],
        website: "https://scholar.google.com/citations?user=PFwz1Z0AAAAJ&hl=en"
    },
    {
        firstname: "Sarah",
        lastname: "Schwettmann",
        status: ["since", "past", "collaborator"],
        affiliation: "MIT",
        bio: "Brain and Cognitive Science"
    },
    {
        firstname: "Daryl",
        lastname: "Fougnie",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU Abu Dhabi",
        website: "https://sites.google.com/site/fougnielab/home"
    },
    {
        firstname: "Jon",
        lastname: "Freeman",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU",
        website: "http://www.jonbfreeman.com"
    },
    {
        firstname: "Janneke",
        lastname: "Jehee",
        status: ["since", "past", "collaborator"],
        affiliation: "Radboud University Nijmegen",
        website: "http://jeheelab.org"
    },
    {
        firstname: "Alan",
        lastname: "Sanfey",
        status: ["since", "past", "collaborator"],
        affiliation: "Radboud University Nijmegen",
        website: "https://www.alansanfey.com"
    },
    {
        firstname: "Andreas",
        lastname: "Tolias",
        status: ["since", "past", "collaborator"],
        affiliation: "Baylor College of Medicine",
        website: "http://toliaslab.org/"
    },
    {
        firstname: "Ruben",
        lastname: "van Bergen",
        status: ["since", "past", "collaborator"],
        affiliation: "Radboud University Nijmegen",
        website: "http://www.ru.nl/people/donders/bergen-r-van/"
    },
    {
        firstname: "Rachel",
        lastname: "Denison",
        status: ["since", "past", "collaborator"],
        affiliation: "NYU",
        website: "http://www.racheldenison.com"
    }
];

export const past = labAlumni.concat(mastersStudents, researchAssistants, undergradAlumni, rotationStudents, summerStudents, highschoolstudents, pastcollaborators);

export const peoplelist = weiji.concat(labMembers, collaboratorsAlumni, collaboratorsExternal, past);

// status can be "current", "alumni", "past", "collaborator", "postdoc", "phd", "masters", "undergrad", "rotation", "summer", "highschool"
// map onto a single role: 
// "PhD student", "Postdoc", "Masters student", "Undergraduate", "Research Assistant", "Rotation student", "Summer student", "High school student", "Collaborator", "Alumni"
export const mapStatus = (person) => {
    if (person.status.includes("pi")) return "Principal Investigator";
    if (person.status.includes("phd")) return "Doctoral Researcher";
    if (person.status.includes("postdoc")) return "Postdoctoral Researcher";
    if (person.status.includes("masters")) return "Masters Student";
    if (person.status.includes("undergrad")) return "Undergraduate Student";
    if (person.status.includes("postbac")) return "Research Assistant";
    if (person.status.includes("rotation")) return "Rotation Student";
    if (person.status.includes("summer")) return "Summer Student";
    if (person.status.includes("highschool")) return "High school Student";
    if (person.status.includes("collaborator")) return "Collaborator";
    return null;
}

//using peoplelist, get only the current lab members
export const currentLabMembers = peoplelist.filter(person => !person.status.includes("collaborator") && !person.status.includes("past") && !person.status.includes("alumni"));

//using peoplelist, get collaborators who are also alumni and not "past"
export const currentAlumniCollaborators = peoplelist.filter(person => person.status.includes("collaborator") && person.status.includes("alumni") && !person.status.includes("past"));

//using peoplelist, get external collaborators who are not "past"
export const currentExternalCollaborators = peoplelist.filter(person => person.status.includes("collaborator") && !person.status.includes("past") && !person.status.includes("alumni"));

// using peoplelist, get past lab members
export const pastLabMembers = peoplelist.filter(person => person.status.includes("alumni") && person.status.includes("past"));

// using peoplelist, get past collaborators
export const pastCollaborators = peoplelist.filter(person => person.status.includes("collaborator") && person.status.includes("past"));

