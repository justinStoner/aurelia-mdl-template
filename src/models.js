export default {
  events:{
    filters:{
      filtersLeft:[
        {field:'name', name:'Name', value:'', operator:'', type:'text'},
        {field:'status', name:'Status', value:'', operator:'===', type: 'select', labels:['Registration Open', 'Registration Closed']},
        {field:'type', name:'Type', value:'', operator:'===', type:'select', labels:['Workshop', 'Job Fair', 'Interview']},
        {field:'company', name:'Company', value:'', operator:'', type:'text'},
        {field:'city', name:'City', value:'', operator:'', type:'text'},
        {field:'registrants', name:'Registrants', value:'', operator:'>=', type:'num'}
      ],
      filtersRight:[
        {field:'date', name:'Date', value:'', operator:'===', type:'date'},
        {field:'startTime', name:'Start Time', value:'', operator:'===', type:'time'},
        {field:'endTime', name:'End Time', value:'', operator:'===', type:'time'},
        {field:'street', name:'Street', value:'', operator:'', type:'text'},
        {field:'waitlist', name:'Waitlist', value:'', operator:'>=', type:'num'}
      ],
      filtersBottom:[
        {field:'about', name:'About', value:'', operator:'', type:'textarea'}
      ]
    },
    data:[
  {
    "_id": "590fdf0f33e453cf76c06df7",
    "index": 0,
    "status": "Registration Open",
    "company": "Fuelton",
    "city": "Why",
    "street": "Lorraine Street",
    "about": "Et eu labore deserunt veniam reprehenderit laboris aliquip. Aliqua consectetur in ad nostrud nulla reprehenderit ullamco consectetur mollit commodo mollit officia nulla. Aute enim reprehenderit sint amet amet velit Lorem aliqua non. Elit nisi nisi nostrud minim ad do deserunt ut laboris elit proident.\r\n",
    "date": "2014-10-22T03:48:41 +07:00",
    "startTime": "11:49 AM",
    "endTime": "11:58 PM",
    "registrants": 39,
    "waitlist": 17,
    "type": "Interview",
    "name": "irure nisi"
  },
  {
    "_id": "590fdf0f045c92a2da33789f",
    "index": 1,
    "status": "Registration Open",
    "company": "Comcubine",
    "city": "Defiance",
    "street": "Montrose Avenue",
    "about": "Excepteur voluptate veniam magna amet nostrud aliqua ea Lorem velit aliqua ea ea ea. Veniam magna nostrud duis adipisicing dolor ullamco ut pariatur ullamco proident quis amet exercitation voluptate. Nisi eiusmod voluptate ex dolor quis.\r\n",
    "date": "2014-11-25T04:04:44 +08:00",
    "startTime": "9:17 AM",
    "endTime": "10:33 PM",
    "registrants": 48,
    "waitlist": 40,
    "type": "Interview",
    "name": "sunt consequat"
  },
  {
    "_id": "590fdf0fc4c089bd7aad1216",
    "index": 2,
    "status": "Registration Open",
    "company": "Menbrain",
    "city": "Trexlertown",
    "street": "Ovington Court",
    "about": "Voluptate labore ea anim qui eu laborum dolore elit reprehenderit nostrud sint ullamco ipsum enim. Exercitation sunt eiusmod dolor commodo nostrud do culpa incididunt nulla. Sint excepteur dolor consequat do ullamco consectetur eiusmod. Velit qui proident voluptate dolor mollit commodo sunt commodo enim deserunt laboris. Cillum labore ex cillum exercitation dolore non incididunt exercitation id aute quis excepteur.\r\n",
    "date": "2014-06-10T06:16:12 +07:00",
    "startTime": "9:21 AM",
    "endTime": "10:32 PM",
    "registrants": 78,
    "waitlist": 44,
    "type": "Interview",
    "name": "consectetur ipsum"
  },
  {
    "_id": "590fdf0f56f69a44236cbf17",
    "index": 3,
    "status": "Registration Open",
    "company": "Visalia",
    "city": "Felt",
    "street": "Johnson Avenue",
    "about": "Aliquip veniam culpa proident consectetur enim in cillum aliquip aliquip velit. Exercitation ut qui labore do adipisicing minim aute do enim ad fugiat ad aliqua. Eu aute ipsum occaecat non incididunt aliquip reprehenderit. Ad in irure do nostrud quis ad sint laborum. Dolor reprehenderit enim ipsum culpa magna incididunt cillum adipisicing laboris ut ex cupidatat anim nostrud.\r\n",
    "date": "2016-11-24T08:19:15 +08:00",
    "startTime": "10:56 AM",
    "endTime": "11:18 PM",
    "registrants": 24,
    "waitlist": 12,
    "type": "Job Fair",
    "name": "esse incididunt"
  },
  {
    "_id": "590fdf0fb7d51bbee9becfda",
    "index": 4,
    "status": "Registration Open",
    "company": "Digiprint",
    "city": "Brogan",
    "street": "Cameron Court",
    "about": "Esse ut fugiat duis eu cupidatat quis cupidatat ut mollit laborum consequat pariatur consectetur. Tempor proident est aute non Lorem amet aliquip adipisicing in culpa dolore sunt excepteur. Eu ex sit et enim nisi pariatur id non esse adipisicing est ut. Ad ex ea Lorem Lorem do magna Lorem culpa ea occaecat dolore nulla.\r\n",
    "date": "2014-09-05T11:12:08 +07:00",
    "startTime": "8:19 AM",
    "endTime": "9:23 PM",
    "registrants": 50,
    "waitlist": 38,
    "type": "Interview",
    "name": "non aute"
  },
  {
    "_id": "590fdf0fbd9993b996c4c000",
    "index": 5,
    "status": "Registration Closed",
    "company": "Quadeebo",
    "city": "Muir",
    "street": "Dakota Place",
    "about": "Ipsum ut excepteur aute laboris anim aliqua sint exercitation aliqua qui. Nisi sit nulla occaecat dolore. Laboris laboris labore anim ad laborum minim labore dolor dolor incididunt dolore irure sunt. Ea officia exercitation nisi proident reprehenderit. Aliquip magna ad tempor labore ea sit irure.\r\n",
    "date": "2015-04-28T10:24:56 +07:00",
    "startTime": "10:20 AM",
    "endTime": "9:5 PM",
    "registrants": 27,
    "waitlist": 71,
    "type": "Job Fair",
    "name": "voluptate cillum"
  },
  {
    "_id": "590fdf0fdf614d391eb8e0f2",
    "index": 6,
    "status": "Registration Closed",
    "company": "Amtas",
    "city": "Terlingua",
    "street": "Willow Place",
    "about": "Sunt cupidatat cupidatat laborum Lorem fugiat veniam officia. Sunt enim nisi ullamco duis in ipsum amet minim exercitation consectetur. Excepteur ex et duis ex nulla ipsum ex ea tempor et magna labore consectetur est. Culpa excepteur velit minim aute consectetur id id aute. Aliqua ullamco nisi ad eiusmod nulla proident qui velit quis nulla occaecat minim et Lorem. Culpa commodo aliqua do in voluptate.\r\n",
    "date": "2016-10-01T03:10:11 +07:00",
    "startTime": "9:55 AM",
    "endTime": "7:49 PM",
    "registrants": 78,
    "waitlist": 85,
    "type": "Workshop",
    "name": "nisi est"
  },
  {
    "_id": "590fdf0f7f2a4cb130052c6a",
    "index": 7,
    "status": "Registration Closed",
    "company": "Zialactic",
    "city": "Snelling",
    "street": "Withers Street",
    "about": "Minim adipisicing deserunt ex sunt commodo ipsum veniam laborum excepteur reprehenderit commodo enim sunt. Voluptate fugiat fugiat deserunt esse magna. Fugiat nostrud consectetur sit elit ad sit non anim ex qui eu eiusmod. Laboris sit ut culpa nisi eiusmod elit in eiusmod enim. Anim labore ea ex ipsum reprehenderit nisi ut ad. Ex fugiat laborum cillum excepteur deserunt non aute eiusmod qui ullamco eiusmod magna sint.\r\n",
    "date": "2016-08-16T09:32:08 +07:00",
    "startTime": "8:2 AM",
    "endTime": "10:36 PM",
    "registrants": 77,
    "waitlist": 21,
    "type": "Workshop",
    "name": "minim veniam"
  },
  {
    "_id": "590fdf0f37cd6c468ebea93f",
    "index": 8,
    "status": "Registration Closed",
    "company": "Snacktion",
    "city": "Bayview",
    "street": "Hendrickson Street",
    "about": "Minim consectetur eu cupidatat veniam non esse id amet elit tempor deserunt id culpa. Aliqua cillum eiusmod reprehenderit irure ex sit anim. Sint quis aute elit pariatur elit aliquip in aute. Mollit cupidatat ex sint reprehenderit est sit. Nisi do sint cillum proident incididunt et cupidatat aliqua nulla. Ut tempor eu velit ullamco ad sunt aliquip in incididunt nostrud proident. Do do labore ex do.\r\n",
    "date": "2016-06-29T06:32:37 +07:00",
    "startTime": "9:17 AM",
    "endTime": "6:37 PM",
    "registrants": 1,
    "waitlist": 19,
    "type": "Workshop",
    "name": "do aliquip"
  },
  {
    "_id": "590fdf0fbe40af88750c3d73",
    "index": 9,
    "status": "Registration Closed",
    "company": "Satiance",
    "city": "Kent",
    "street": "Mayfair Drive",
    "about": "Adipisicing occaecat labore nostrud sint minim officia nostrud Lorem deserunt ipsum sint Lorem. Sint anim laboris consectetur sunt incididunt fugiat dolor consequat qui dolor quis eu mollit anim. Sint magna ad dolore ullamco nulla est quis cillum eiusmod cupidatat. Sint occaecat id exercitation sint ex. Velit cupidatat cupidatat sit aute est aliquip consequat ex ea culpa.\r\n",
    "date": "2016-01-06T06:22:07 +08:00",
    "startTime": "11:23 AM",
    "endTime": "10:40 PM",
    "registrants": 84,
    "waitlist": 90,
    "type": "Job Fair",
    "name": "ullamco nulla"
  },
  {
    "_id": "590fdf0f699109f3580ff327",
    "index": 10,
    "status": "Registration Closed",
    "company": "Stelaecor",
    "city": "Esmont",
    "street": "Dahill Road",
    "about": "Pariatur id elit amet non exercitation anim. Aliquip magna qui consectetur id ex enim nisi anim mollit in veniam. Adipisicing pariatur dolore laborum ea exercitation eu mollit.\r\n",
    "date": "2016-10-28T08:37:30 +07:00",
    "startTime": "9:6 AM",
    "endTime": "11:21 PM",
    "registrants": 40,
    "waitlist": 90,
    "type": "Job Fair",
    "name": "voluptate tempor"
  },
  {
    "_id": "590fdf0fa231b8ca5d07ad09",
    "index": 11,
    "status": "Registration Closed",
    "company": "Daisu",
    "city": "Dawn",
    "street": "Dewitt Avenue",
    "about": "Fugiat est amet et elit officia nulla magna occaecat et. Dolore dolor occaecat sunt enim commodo sint ex dolore aute officia aliqua. Ipsum anim aliquip id dolor pariatur proident commodo. Magna laborum exercitation eu deserunt velit sunt nostrud nulla adipisicing eu. Ut pariatur aliquip aliquip magna qui proident.\r\n",
    "date": "2014-02-06T12:47:30 +08:00",
    "startTime": "8:43 AM",
    "endTime": "8:55 PM",
    "registrants": 60,
    "waitlist": 29,
    "type": "Interview",
    "name": "esse irure"
  },
  {
    "_id": "590fdf0ff78cf199ae12a0d0",
    "index": 12,
    "status": "Registration Closed",
    "company": "Eplode",
    "city": "Day",
    "street": "Sutter Avenue",
    "about": "Est aliquip ea excepteur commodo duis laboris tempor exercitation eiusmod reprehenderit. Quis velit Lorem mollit esse mollit quis dolor officia sint tempor reprehenderit eiusmod sunt. Pariatur occaecat do deserunt reprehenderit proident dolor veniam aute eiusmod. Voluptate nostrud esse laborum consequat esse enim. Commodo ipsum sint aliquip pariatur deserunt amet Lorem. Quis amet dolore in amet irure fugiat reprehenderit quis.\r\n",
    "date": "2016-07-10T03:40:03 +07:00",
    "startTime": "11:57 AM",
    "endTime": "8:6 PM",
    "registrants": 3,
    "waitlist": 90,
    "type": "Interview",
    "name": "aliquip tempor"
  },
  {
    "_id": "590fdf0f5efab12a93afbe46",
    "index": 13,
    "status": "Registration Open",
    "company": "Comvey",
    "city": "Salvo",
    "street": "Fillmore Avenue",
    "about": "Aliqua duis elit aute minim adipisicing proident ex. Amet dolore sunt occaecat cillum velit nostrud nostrud est ipsum consectetur fugiat qui. Deserunt deserunt occaecat nisi proident ut incididunt dolore eiusmod nisi ad ea nisi. Cupidatat do esse occaecat in consectetur et nostrud amet in adipisicing. Elit ex magna aliquip aliqua laboris. Ipsum pariatur Lorem in qui Lorem laborum.\r\n",
    "date": "2015-09-08T10:17:40 +07:00",
    "startTime": "8:56 AM",
    "endTime": "7:13 PM",
    "registrants": 71,
    "waitlist": 17,
    "type": "Job Fair",
    "name": "eu aliquip"
  },
  {
    "_id": "590fdf0fa3798c814943b8d2",
    "index": 14,
    "status": "Registration Closed",
    "company": "Netur",
    "city": "Goochland",
    "street": "Utica Avenue",
    "about": "Deserunt et reprehenderit aute velit Lorem anim duis consequat nulla. Commodo adipisicing incididunt do officia pariatur Lorem nostrud proident. Dolore laboris sunt aliquip enim cupidatat anim nulla fugiat excepteur incididunt. Fugiat enim enim ipsum sit incididunt laboris cillum nostrud excepteur veniam duis. In ut magna laborum anim cillum voluptate amet aliquip magna sit. In esse occaecat ad occaecat ex esse sunt et ad nulla cillum reprehenderit ullamco elit.\r\n",
    "date": "2017-03-07T06:22:37 +08:00",
    "startTime": "8:22 AM",
    "endTime": "7:2 PM",
    "registrants": 81,
    "waitlist": 68,
    "type": "Interview",
    "name": "ipsum officia"
  },
  {
    "_id": "590fdf0ff36f24c5be2974c7",
    "index": 15,
    "status": "Registration Open",
    "company": "Dogtown",
    "city": "Worton",
    "street": "Woodpoint Road",
    "about": "Nisi sit adipisicing laborum officia fugiat nisi ex nulla cupidatat ad exercitation non elit. Excepteur et minim laborum officia laborum in Lorem. Ullamco dolor excepteur consequat ea esse ex enim duis fugiat. Anim sint dolor nisi eu dolore fugiat minim magna non nostrud ex officia aliqua. Id non ut sunt consectetur pariatur consequat minim duis sunt.\r\n",
    "date": "2015-04-25T11:18:08 +07:00",
    "startTime": "11:22 AM",
    "endTime": "7:7 PM",
    "registrants": 20,
    "waitlist": 30,
    "type": "Interview",
    "name": "consequat elit"
  },
  {
    "_id": "590fdf0f9107b52233eade04",
    "index": 16,
    "status": "Registration Open",
    "company": "Spacewax",
    "city": "Bethany",
    "street": "Court Street",
    "about": "Eu ipsum amet occaecat culpa. Commodo in sunt aute ut cupidatat excepteur sunt irure aliquip. Lorem eiusmod et exercitation sint. Fugiat dolore do culpa ea eu dolor enim ea irure commodo ullamco elit elit.\r\n",
    "date": "2014-02-19T06:17:49 +08:00",
    "startTime": "10:35 AM",
    "endTime": "11:13 PM",
    "registrants": 79,
    "waitlist": 18,
    "type": "Job Fair",
    "name": "veniam exercitation"
  },
  {
    "_id": "590fdf0fdd54208b6bb776f9",
    "index": 17,
    "status": "Registration Closed",
    "company": "Fitcore",
    "city": "Succasunna",
    "street": "Indiana Place",
    "about": "Ut incididunt officia reprehenderit elit dolore eu anim. Ullamco ut in sit ullamco nisi exercitation. Lorem ut qui in adipisicing qui ea laborum eu. Qui cupidatat mollit nostrud nulla aute. Commodo sit nulla aliquip eu exercitation eu mollit culpa ut consectetur tempor consectetur. Et reprehenderit nostrud ullamco enim ipsum anim culpa nisi est. Aliqua quis dolor ut laboris amet nulla ad minim.\r\n",
    "date": "2015-09-05T08:38:07 +07:00",
    "startTime": "9:30 AM",
    "endTime": "8:19 PM",
    "registrants": 9,
    "waitlist": 36,
    "type": "Job Fair",
    "name": "aute exercitation"
  },
  {
    "_id": "590fdf0fe9836eff7662e6be",
    "index": 18,
    "status": "Registration Closed",
    "company": "Ecstasia",
    "city": "Marion",
    "street": "Woodhull Street",
    "about": "Sunt reprehenderit fugiat ad magna est cillum consectetur. Cillum officia consequat do labore. Velit qui sit et commodo dolore elit. Culpa cupidatat occaecat commodo cupidatat sint velit quis non sit velit est incididunt et. Velit nulla ut ea reprehenderit nostrud eiusmod esse eiusmod eu enim dolore enim. Enim in laborum fugiat ea aliqua duis Lorem Lorem magna nostrud deserunt.\r\n",
    "date": "2015-10-22T06:08:06 +07:00",
    "startTime": "9:51 AM",
    "endTime": "6:3 PM",
    "registrants": 41,
    "waitlist": 38,
    "type": "Interview",
    "name": "dolor pariatur"
  },
  {
    "_id": "590fdf0f4f8928f5c24c8de2",
    "index": 19,
    "status": "Registration Open",
    "company": "Moreganic",
    "city": "Vowinckel",
    "street": "Montgomery Place",
    "about": "Est sint occaecat reprehenderit reprehenderit adipisicing consequat ullamco tempor qui anim sint excepteur. Duis ex laboris reprehenderit pariatur sit labore ex ea quis. Id esse exercitation irure ea Lorem ad anim adipisicing. Ipsum amet laboris nulla voluptate incididunt labore ea anim. Quis et et irure nisi officia. Incididunt ipsum eiusmod est magna.\r\n",
    "date": "2014-05-20T08:34:52 +07:00",
    "startTime": "9:54 AM",
    "endTime": "7:7 PM",
    "registrants": 31,
    "waitlist": 6,
    "type": "Interview",
    "name": "pariatur ad"
  },
  {
    "_id": "590fdf0f847a40a6d2511f50",
    "index": 20,
    "status": "Registration Open",
    "company": "Maineland",
    "city": "Homeland",
    "street": "Bennet Court",
    "about": "Sit aute officia sint amet ipsum amet magna pariatur eiusmod. Deserunt proident aute dolor officia fugiat nostrud incididunt labore in cillum. Officia ut laboris ut Lorem pariatur proident sit enim. Proident qui ut nisi ullamco id irure sit velit officia consectetur.\r\n",
    "date": "2016-02-14T08:58:09 +08:00",
    "startTime": "11:55 AM",
    "endTime": "7:2 PM",
    "registrants": 21,
    "waitlist": 61,
    "type": "Job Fair",
    "name": "aute sunt"
  },
  {
    "_id": "590fdf0fb89993c6e34e3e3d",
    "index": 21,
    "status": "Registration Closed",
    "company": "Utarian",
    "city": "Eureka",
    "street": "Troy Avenue",
    "about": "Nulla commodo veniam ad consequat eiusmod do nisi consequat est sunt officia dolor enim. Ullamco irure ex amet aliqua laboris quis reprehenderit ut sit fugiat. Do et laborum proident cillum esse. Velit aliqua aliqua proident labore sint.\r\n",
    "date": "2016-03-14T08:29:45 +07:00",
    "startTime": "10:21 AM",
    "endTime": "8:58 PM",
    "registrants": 10,
    "waitlist": 94,
    "type": "Workshop",
    "name": "incididunt cillum"
  },
  {
    "_id": "590fdf0f3811a29084b3629a",
    "index": 22,
    "status": "Registration Closed",
    "company": "Golistic",
    "city": "Coral",
    "street": "Linwood Street",
    "about": "Aliquip esse dolor dolor ad quis Lorem et proident nulla. Eiusmod ullamco minim Lorem anim exercitation laboris dolore sint est minim. Ex incididunt sint magna cillum ex.\r\n",
    "date": "2015-07-07T04:27:21 +07:00",
    "startTime": "10:11 AM",
    "endTime": "9:37 PM",
    "registrants": 27,
    "waitlist": 22,
    "type": "Interview",
    "name": "sit veniam"
  },
  {
    "_id": "590fdf0fd72801ccfb4bda59",
    "index": 23,
    "status": "Registration Closed",
    "company": "Dancity",
    "city": "Cedarville",
    "street": "Provost Street",
    "about": "Nulla do minim aliqua eiusmod irure dolor. Eu nulla deserunt nostrud exercitation culpa. Ex consectetur sunt magna fugiat fugiat qui elit elit. Magna ut adipisicing aliquip ullamco elit.\r\n",
    "date": "2015-06-18T08:22:12 +07:00",
    "startTime": "9:27 AM",
    "endTime": "10:8 PM",
    "registrants": 76,
    "waitlist": 62,
    "type": "Job Fair",
    "name": "aute ex"
  },
  {
    "_id": "590fdf0fa3fc53bbc5926f85",
    "index": 24,
    "status": "Registration Closed",
    "company": "Sureplex",
    "city": "Fairfield",
    "street": "Kiely Place",
    "about": "Velit in anim laboris commodo aute sunt minim aliquip. Incididunt cillum ad enim duis tempor velit mollit aliqua. Cillum mollit ipsum ad exercitation aute aute cupidatat. Nostrud labore adipisicing veniam ad nulla in minim. Lorem excepteur duis irure ex cillum pariatur. Nisi culpa ipsum culpa ea tempor voluptate aliquip dolore est enim deserunt aliquip excepteur excepteur.\r\n",
    "date": "2014-04-10T03:44:43 +07:00",
    "startTime": "8:29 AM",
    "endTime": "9:9 PM",
    "registrants": 50,
    "waitlist": 72,
    "type": "Job Fair",
    "name": "ipsum aliqua"
  },
  {
    "_id": "590fdf0f2b455e435e9a0752",
    "index": 25,
    "status": "Registration Closed",
    "company": "Virxo",
    "city": "Marysville",
    "street": "Miami Court",
    "about": "Esse duis sint anim ullamco consectetur dolor in quis incididunt Lorem. Irure sunt enim labore excepteur exercitation proident dolore eu velit nulla consequat. Est qui eiusmod in magna esse adipisicing occaecat sint ex. Commodo voluptate pariatur enim voluptate duis est minim magna duis duis irure. Proident cillum et elit culpa aute sit reprehenderit cillum amet consectetur pariatur minim. Reprehenderit reprehenderit do fugiat sint ut duis labore.\r\n",
    "date": "2014-03-22T07:20:35 +07:00",
    "startTime": "9:25 AM",
    "endTime": "6:40 PM",
    "registrants": 51,
    "waitlist": 65,
    "type": "Job Fair",
    "name": "ullamco enim"
  },
  {
    "_id": "590fdf0f035f8eb305192510",
    "index": 26,
    "status": "Registration Open",
    "company": "Katakana",
    "city": "Temperanceville",
    "street": "Newton Street",
    "about": "Excepteur fugiat id pariatur elit sint magna ex exercitation Lorem et. Ut pariatur velit nisi fugiat ex laborum nostrud consequat enim nostrud nulla est. Tempor et dolore amet dolor pariatur non ullamco id elit aute. Reprehenderit amet eiusmod occaecat mollit magna id elit est. Officia ex ipsum consectetur deserunt nisi velit officia occaecat id mollit occaecat labore mollit.\r\n",
    "date": "2016-08-11T07:32:17 +07:00",
    "startTime": "9:10 AM",
    "endTime": "8:32 PM",
    "registrants": 30,
    "waitlist": 14,
    "type": "Workshop",
    "name": "incididunt laborum"
  },
  {
    "_id": "590fdf0f8d3dd3d67e98c17b",
    "index": 27,
    "status": "Registration Closed",
    "company": "Ramjob",
    "city": "Oneida",
    "street": "Hewes Street",
    "about": "Duis dolore incididunt dolore irure fugiat culpa in. Culpa Lorem et sint non laboris culpa occaecat ullamco eu velit nulla est ex. Duis Lorem in eu mollit officia laboris veniam anim sunt. Laboris pariatur tempor do pariatur elit elit voluptate tempor nisi qui duis laboris aliqua ullamco. Ad elit tempor mollit esse nisi veniam ipsum dolore duis. Adipisicing ullamco nostrud in minim ea aute. Occaecat mollit pariatur labore incididunt officia dolor labore eiusmod pariatur ex.\r\n",
    "date": "2015-01-15T05:56:34 +08:00",
    "startTime": "9:37 AM",
    "endTime": "8:54 PM",
    "registrants": 12,
    "waitlist": 54,
    "type": "Workshop",
    "name": "tempor non"
  },
  {
    "_id": "590fdf0f2359c96397f5924f",
    "index": 28,
    "status": "Registration Open",
    "company": "Cognicode",
    "city": "Grimsley",
    "street": "Grand Street",
    "about": "Fugiat mollit ipsum consectetur consectetur qui non quis proident. Sunt veniam elit do duis culpa reprehenderit ex nostrud. Excepteur culpa aliqua nulla dolor ex enim adipisicing cupidatat incididunt sit. Nulla do eu cupidatat proident sint cupidatat adipisicing irure. Aute aliqua pariatur magna dolor ad dolore sint enim occaecat et reprehenderit.\r\n",
    "date": "2016-07-01T12:05:04 +07:00",
    "startTime": "10:17 AM",
    "endTime": "9:43 PM",
    "registrants": 34,
    "waitlist": 11,
    "type": "Workshop",
    "name": "non velit"
  },
  {
    "_id": "590fdf0f482071d691379357",
    "index": 29,
    "status": "Registration Open",
    "company": "Vicon",
    "city": "Mulino",
    "street": "Harbor Court",
    "about": "Aute deserunt id ad ad occaecat ullamco tempor irure consequat aliqua consequat aliquip cillum. Fugiat do consectetur commodo anim commodo duis et sit. Reprehenderit mollit ad deserunt reprehenderit aliqua quis deserunt aliqua anim dolore. Cupidatat laborum occaecat esse culpa reprehenderit. Minim fugiat sunt qui Lorem do minim enim magna laboris ad minim nostrud. Enim eiusmod excepteur excepteur excepteur consectetur magna.\r\n",
    "date": "2015-09-29T03:06:57 +07:00",
    "startTime": "11:28 AM",
    "endTime": "11:33 PM",
    "registrants": 20,
    "waitlist": 64,
    "type": "Interview",
    "name": "reprehenderit irure"
  },
  {
    "_id": "590fdf0f2086f79231cf1444",
    "index": 30,
    "status": "Registration Closed",
    "company": "Dancerity",
    "city": "Gibsonia",
    "street": "Ralph Avenue",
    "about": "Deserunt elit et minim cupidatat consequat laboris ad ipsum exercitation eiusmod laborum. Occaecat dolore nisi aute in mollit exercitation Lorem. Velit labore laborum commodo commodo commodo duis laboris laboris sit sunt amet. Commodo voluptate aliqua ut aliqua dolor duis ut nostrud esse voluptate ex. Fugiat ex voluptate pariatur anim ipsum ea.\r\n",
    "date": "2016-07-11T11:15:03 +07:00",
    "startTime": "9:11 AM",
    "endTime": "10:7 PM",
    "registrants": 14,
    "waitlist": 71,
    "type": "Job Fair",
    "name": "duis ullamco"
  },
  {
    "_id": "590fdf0f696cb20b7d9c4425",
    "index": 31,
    "status": "Registration Closed",
    "company": "Zolavo",
    "city": "Como",
    "street": "Newport Street",
    "about": "Aute eu sit laboris in est do in labore incididunt cillum incididunt duis ipsum. Non aliquip ea consequat deserunt dolor amet consectetur consequat laboris cupidatat sit ut elit. Amet voluptate ut Lorem exercitation velit enim id et cupidatat sint.\r\n",
    "date": "2014-01-19T10:50:15 +08:00",
    "startTime": "10:56 AM",
    "endTime": "10:17 PM",
    "registrants": 86,
    "waitlist": 39,
    "type": "Workshop",
    "name": "commodo nostrud"
  },
  {
    "_id": "590fdf0ff814b7b461354470",
    "index": 32,
    "status": "Registration Open",
    "company": "Digifad",
    "city": "Kapowsin",
    "street": "Willoughby Avenue",
    "about": "Adipisicing consequat officia aliqua anim ea aliqua pariatur duis ad velit pariatur ex. Anim amet cupidatat magna est ullamco dolore. Duis mollit aute do anim pariatur eu minim nulla adipisicing excepteur eiusmod eiusmod nulla. Ad velit deserunt dolor nisi cillum ipsum qui cupidatat officia dolor qui. Exercitation culpa cupidatat quis pariatur nostrud eu est exercitation veniam minim officia laboris do mollit. Nulla cillum dolor commodo incididunt sint ex officia aliquip. Eu minim velit dolore deserunt ea.\r\n",
    "date": "2014-02-25T05:36:57 +08:00",
    "startTime": "9:47 AM",
    "endTime": "6:43 PM",
    "registrants": 49,
    "waitlist": 4,
    "type": "Interview",
    "name": "quis reprehenderit"
  },
  {
    "_id": "590fdf0f1b72940a2a2e0964",
    "index": 33,
    "status": "Registration Closed",
    "company": "Qaboos",
    "city": "Sultana",
    "street": "Forrest Street",
    "about": "Consectetur esse amet laboris est velit sint dolore do aute commodo. Ut laborum do irure aliquip. Aliquip ea amet pariatur incididunt adipisicing non. Cupidatat adipisicing ut est ad cillum nulla fugiat consectetur cupidatat elit aliqua veniam. Nulla anim nulla mollit aliquip sint quis duis sit magna ad est. Consequat commodo est voluptate dolore ex pariatur adipisicing nulla tempor cillum aliqua.\r\n",
    "date": "2014-09-30T02:09:51 +07:00",
    "startTime": "10:38 AM",
    "endTime": "7:51 PM",
    "registrants": 67,
    "waitlist": 49,
    "type": "Workshop",
    "name": "sit ea"
  },
  {
    "_id": "590fdf0f25bd4da71067e2e8",
    "index": 34,
    "status": "Registration Closed",
    "company": "Comstruct",
    "city": "Dunnavant",
    "street": "Kane Street",
    "about": "Sint ullamco nostrud Lorem ullamco elit fugiat. Qui quis duis et dolore ad Lorem. Ea excepteur dolor aliquip fugiat in ad eiusmod reprehenderit ipsum aliquip adipisicing. Exercitation qui veniam pariatur dolor exercitation deserunt.\r\n",
    "date": "2017-05-02T06:14:23 +07:00",
    "startTime": "10:43 AM",
    "endTime": "7:13 PM",
    "registrants": 27,
    "waitlist": 96,
    "type": "Job Fair",
    "name": "fugiat dolore"
  },
  {
    "_id": "590fdf0fd1f53450c2348a7d",
    "index": 35,
    "status": "Registration Closed",
    "company": "Eyewax",
    "city": "Weeksville",
    "street": "Bridgewater Street",
    "about": "Qui cillum consequat nostrud anim. Culpa dolor labore nulla laboris. Est cillum dolore sit sit deserunt in pariatur sint cillum ipsum fugiat reprehenderit. Amet sint qui ullamco consequat cupidatat. Reprehenderit occaecat elit est magna reprehenderit sunt laborum ut. Tempor minim anim anim elit proident laborum et nulla. In dolore culpa culpa commodo ad sit et.\r\n",
    "date": "2016-09-22T08:28:42 +07:00",
    "startTime": "8:28 AM",
    "endTime": "8:1 PM",
    "registrants": 74,
    "waitlist": 43,
    "type": "Workshop",
    "name": "pariatur id"
  },
  {
    "_id": "590fdf0fb7e1734f4be0fbd9",
    "index": 36,
    "status": "Registration Closed",
    "company": "Zillacon",
    "city": "Gracey",
    "street": "Vista Place",
    "about": "Eiusmod ea laboris in minim excepteur aliquip eiusmod sint amet adipisicing amet excepteur cupidatat eiusmod. Commodo anim cillum quis et minim ex id voluptate voluptate nostrud excepteur laboris sint ipsum. Non voluptate exercitation est culpa ea tempor deserunt in eu eu. Ullamco voluptate dolore anim sunt non id sint voluptate voluptate.\r\n",
    "date": "2016-05-11T10:53:27 +07:00",
    "startTime": "11:17 AM",
    "endTime": "10:24 PM",
    "registrants": 61,
    "waitlist": 33,
    "type": "Workshop",
    "name": "ea amet"
  },
  {
    "_id": "590fdf0fcf9254d4e816c170",
    "index": 37,
    "status": "Registration Closed",
    "company": "Fiberox",
    "city": "Kenvil",
    "street": "Osborn Street",
    "about": "Qui ex dolor deserunt occaecat enim aliquip eu consectetur aliquip cillum laborum velit ut. Tempor fugiat ea aute amet dolore amet officia aliquip. Incididunt laborum id do aute. Commodo amet consequat ut dolor Lorem exercitation labore ex mollit incididunt aute qui incididunt commodo. Veniam pariatur nostrud aliquip elit exercitation sunt irure dolore consectetur aute reprehenderit dolor.\r\n",
    "date": "2014-05-19T06:18:30 +07:00",
    "startTime": "11:51 AM",
    "endTime": "7:53 PM",
    "registrants": 88,
    "waitlist": 83,
    "type": "Interview",
    "name": "fugiat anim"
  },
  {
    "_id": "590fdf0f5526567248c9d621",
    "index": 38,
    "status": "Registration Closed",
    "company": "Peticular",
    "city": "Adelino",
    "street": "Quincy Street",
    "about": "Sunt pariatur sint eiusmod nulla do cupidatat velit irure. Lorem fugiat enim sit deserunt. Voluptate commodo amet pariatur laborum consequat cupidatat irure esse sunt enim quis tempor. In enim consequat Lorem excepteur deserunt deserunt. Irure reprehenderit laboris anim deserunt ex mollit Lorem cupidatat.\r\n",
    "date": "2016-07-02T08:28:59 +07:00",
    "startTime": "9:35 AM",
    "endTime": "7:19 PM",
    "registrants": 26,
    "waitlist": 21,
    "type": "Job Fair",
    "name": "ad voluptate"
  },
  {
    "_id": "590fdf0f2c0a4898adff1a04",
    "index": 39,
    "status": "Registration Open",
    "company": "Steelfab",
    "city": "Turpin",
    "street": "Pierrepont Street",
    "about": "Laboris deserunt sint ullamco laborum mollit et nostrud laboris aliquip. Ut elit laborum amet eiusmod id officia ad. Adipisicing et officia nostrud nulla. Amet aliquip veniam mollit ea magna tempor labore amet sunt ut sit consequat labore. Laborum laboris reprehenderit ea exercitation. Enim proident sit culpa irure non ea exercitation commodo.\r\n",
    "date": "2016-10-05T12:45:37 +07:00",
    "startTime": "9:17 AM",
    "endTime": "11:31 PM",
    "registrants": 55,
    "waitlist": 65,
    "type": "Interview",
    "name": "et mollit"
  }
]
  }
};
