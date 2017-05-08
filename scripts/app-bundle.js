define('app-router',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var AppRouter = exports.AppRouter = function () {
    function AppRouter() {
      _classCallCheck(this, AppRouter);

      this.router;
    }

    AppRouter.prototype.setRouter = function setRouter(r) {
      this.router = r;
    };

    _createClass(AppRouter, [{
      key: "navigation",
      get: function get() {
        return this.router.navigation;
      }
    }]);

    return AppRouter;
  }();
});
define('app',['exports', 'aurelia-framework', './app-router'], function (exports, _aureliaFramework, _appRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_appRouter.AppRouter), _dec(_class = function () {
    function App(appRouter) {
      _classCallCheck(this, App);

      this.appRouter = appRouter;
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = "12Twenty";
      config.map([{ route: 'home', name: 'home', moduleId: 'home', href: '#/home', nav: true, title: 'myCareer', settings: { icon: 'home' } }, { route: 'students', name: 'students', moduleId: 'students', href: '#/students', nav: true, title: 'Students', settings: { icon: 'school' } }, { route: 'employers', name: 'employers', moduleId: 'employers', href: '#/employers', nav: true, title: 'Employers', settings: { icon: 'store_mall_directory' } }, { route: 'contacts', name: 'contacts', moduleId: 'contacts', href: '#/contacts', nav: true, title: 'Contacts', settings: { icon: 'group' } }, { route: ['', 'events'], name: 'events', moduleId: 'events', href: '#/events', nav: true, title: 'Events', settings: { icon: 'event' } }]);
      this.appRouter.setRouter(router);
    };

    return App;
  }()) || _class);
});
define('contacts',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Contacts = exports.Contacts = function Contacts() {
    _classCallCheck(this, Contacts);

    this.message = 'Contacts';
  };
});
define('employers',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Employers = exports.Employers = function Employers() {
    _classCallCheck(this, Employers);

    this.message = 'Employers';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('events',['exports', 'aurelia-framework', './services/events-service', './resources/elements/modals/add-event', './resources/elements/tables/events-table', './resources/elements/modals/events-filter'], function (exports, _aureliaFramework, _eventsService, _addEvent, _eventsTable, _eventsFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Events = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var Events = exports.Events = (_dec = (0, _aureliaFramework.inject)(_eventsService.EventsService), _dec(_class = function () {
    function Events(es) {
      _classCallCheck(this, Events);

      this.es = es;
      this.events = [];
      this.loading = true;
    }

    Events.prototype.attached = function attached() {};

    _createClass(Events, [{
      key: 'addEventVM',
      get: function get() {
        return _addEvent.AddEvent;
      }
    }, {
      key: 'tableVM',
      get: function get() {
        return _eventsTable.EventTable;
      }
    }, {
      key: 'filterVM',
      get: function get() {
        return _eventsFilter.EventsFilter;
      }
    }]);

    return Events;
  }()) || _class);
});
define('fake-ajax',['exports', 'aurelia-framework', 'models'], function (exports, _aureliaFramework, _models) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FakeAjax = undefined;

  var _models2 = _interopRequireDefault(_models);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FakeAjax = exports.FakeAjax = function () {
    function FakeAjax() {
      _classCallCheck(this, FakeAjax);
    }

    FakeAjax.prototype.loadItems = function loadItems(index, rows, query, model) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log(index, index + rows);
          var data = _models2.default[model]['data'];
          var obj = {
            items: [],
            totalRecords: 0
          };
          if (query === false) {
            obj.items = data.slice(index, index + rows);
            obj.totalRecords = data.length;
          } else {
            var filtered = [];
            var q;
            for (var i = 0; i < query.length; i++) {
              q = query[i];
              console.log(q);
              console.log(data);
              data = data.filter(function (row) {

                if (q.value === '') {
                  return true;
                } else {
                  if (q.operator === '') {
                    return row[q.field].toLowerCase().indexOf(q.value) > -1;
                  } else if (q.operator === '===') {
                    return row[q.field] === q.value;
                  } else if (q.operator === '>=') {
                    return row[q.field] >= q.value;
                  } else if (q.operator === '<=') {
                    return row[q.field] <= q.value;
                  }
                }
              });
            }
            obj.items = data.slice(index, index + rows);
            obj.totalRecords = data.length;
          }
          resolve(obj);
        }, 500);
      });
    };

    FakeAjax.prototype.createItem = function createItem(item, model) {
      return new Promise(function (resolve, reject) {
        _models2.default[model]['data'].unshift(item);
        resolve({ success: true });
      });
    };

    return FakeAjax;
  }();
});
define('home',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);

    this.message = 'Hello world';
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-dialog', function (config) {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 997;
      config.settings.keyboard = true;
    }).plugin('aurelia-mdl-plugin', function (mdl) {
      mdl.addClasses('mdl-js-selectfield');
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('models',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    events: {
      filters: {
        filtersLeft: [{ field: 'name', name: 'Name', value: '', operator: '', type: 'text' }, { field: 'status', name: 'Status', value: '', operator: '===', type: 'select', labels: ['Registration Open', 'Registration Closed'] }, { field: 'type', name: 'Type', value: '', operator: '===', type: 'select', labels: ['Workshop', 'Job Fair', 'Interview'] }, { field: 'company', name: 'Company', value: '', operator: '', type: 'text' }, { field: 'city', name: 'City', value: '', operator: '', type: 'text' }, { field: 'registrants', name: 'Registrants', value: '', operator: '>=', type: 'num' }],
        filtersRight: [{ field: 'date', name: 'Date', value: '', operator: '===', type: 'date' }, { field: 'startTime', name: 'Start Time', value: '', operator: '===', type: 'time' }, { field: 'endTime', name: 'End Time', value: '', operator: '===', type: 'time' }, { field: 'street', name: 'Street', value: '', operator: '', type: 'text' }, { field: 'waitlist', name: 'Waitlist', value: '', operator: '>=', type: 'num' }],
        filtersBottom: [{ field: 'about', name: 'About', value: '', operator: '', type: 'textarea' }]
      },
      data: [{
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }]
    }
  };
});
define('navigation',['exports', 'aurelia-framework', './app-router'], function (exports, _aureliaFramework, _appRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Navigation = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Navigation = exports.Navigation = (_dec = (0, _aureliaFramework.inject)(_appRouter.AppRouter), _dec(_class = function Navigation(appRouter) {
    _classCallCheck(this, Navigation);

    this.appRouter = appRouter;
  }) || _class);
});
define('students',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Students = exports.Students = function Students() {
    _classCallCheck(this, Students);

    this.message = 'Students';
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('services/events-service',['exports', '../models', 'aurelia-framework', '../fake-ajax'], function (exports, _models, _aureliaFramework, _fakeAjax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EventsService = undefined;

  var _models2 = _interopRequireDefault(_models);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var EventsService = exports.EventsService = (_dec = (0, _aureliaFramework.inject)(_fakeAjax.FakeAjax), _dec(_class = function () {
    function EventsService(fakeJax) {
      _classCallCheck(this, EventsService);

      this.fakeJax = fakeJax;
      this.loading = false;
      this.data = {};
    }

    EventsService.prototype.loadItems = function loadItems(index, rows) {
      var _this = this;

      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        _this.fakeJax.loadItems(index, rows, query, 'events').then(function (res) {
          _this.data = res;
          console.log(_this.data);
          _this.loading = false;
          resolve(_this.data);
        });
      });
    };

    EventsService.prototype.createItem = function createItem(event) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.fakeJax.createItem(event, 'events').then(function (res) {
          resolve(res);
        });
      });
    };

    return EventsService;
  }()) || _class);
});
define('resources/attributes/date-picker',['exports', 'aurelia-framework', 'material-datetime-picker'], function (exports, _aureliaFramework, _materialDatetimePicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DatePickerCustomAttribute = undefined;

  var _materialDatetimePicker2 = _interopRequireDefault(_materialDatetimePicker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var DatePickerCustomAttribute = exports.DatePickerCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = (_class2 = function () {
    function DatePickerCustomAttribute(element) {
      _classCallCheck(this, DatePickerCustomAttribute);

      _initDefineProp(this, 'val', _descriptor, this);

      this.element = element;
    }

    DatePickerCustomAttribute.prototype.attached = function attached() {
      var _this = this;

      var datepicker = new _materialDatetimePicker2.default({
        styles: {
          scrim: 'c-scrim--date-only'
        }
      }).on('submit', function (val) {
        _this.val = val.format("MM/DD/YYYY");
      });
      this.element.addEventListener('focus', function () {
        return datepicker.open();
      });
    };

    DatePickerCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return DatePickerCustomAttribute;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'val', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/attributes/time-picker',['exports', 'aurelia-framework', 'material-pickers-time'], function (exports, _aureliaFramework, _materialPickersTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TimePickerCustomAttribute = undefined;

  var _materialPickersTime2 = _interopRequireDefault(_materialPickersTime);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var TimePickerCustomAttribute = exports.TimePickerCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function TimePickerCustomAttribute(element) {
      _classCallCheck(this, TimePickerCustomAttribute);

      this.element = element;
    }

    TimePickerCustomAttribute.prototype.attached = function attached() {
      var timepicker = new _materialPickersTime2.default();
      this.element.addEventListener('focus', function (event) {
        return timepicker.openOnInput(event.target);
      });
    };

    TimePickerCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return TimePickerCustomAttribute;
  }()) || _class);
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(value) {};

    DateValueConverter.prototype.fromView = function fromView(value) {};

    return DateValueConverter;
  }();
});
define('resources/elements/data-table/data-table',['exports', 'aurelia-framework', '../../../models', 'aurelia-dialog'], function (exports, _aureliaFramework, _models, _aureliaDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataTable = undefined;

  var _models2 = _interopRequireDefault(_models);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

  var DataTable = exports.DataTable = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogService), _dec(_class = (_class2 = function () {
    function DataTable(dialog) {
      _classCallCheck(this, DataTable);

      _initDefineProp(this, 'paginate', _descriptor, this);

      _initDefineProp(this, 'add', _descriptor2, this);

      _initDefineProp(this, 'filter', _descriptor3, this);

      _initDefineProp(this, 'data', _descriptor4, this);

      _initDefineProp(this, 'labels', _descriptor5, this);

      _initDefineProp(this, 'fieldNames', _descriptor6, this);

      _initDefineProp(this, 'model', _descriptor7, this);

      _initDefineProp(this, 'addModal', _descriptor8, this);

      _initDefineProp(this, 'service', _descriptor9, this);

      _initDefineProp(this, 'tableView', _descriptor10, this);

      _initDefineProp(this, 'filterModal', _descriptor11, this);

      this.dialog = dialog;
      this.loading = false;
      this.rows = 10;
      this.currentIndex = 0;
    }

    DataTable.prototype.attached = function attached() {

      this.config = _models2.default[this.model];
      this.lastFilters = JSON.parse(JSON.stringify(this.config.filters));
      console.log(this.config);
      console.log(this.filterModal);
      if (!this.data) {
        this.loading = true;
        this.loadItems();
        console.log(this.addModal);
      }
    };

    DataTable.prototype.loadItems = function loadItems() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.currentIndex = index;
      this.loading = true;
      console.log(index, this.rows);
      var arr = [].concat(this.lastFilters.filtersBottom, this.lastFilters.filtersLeft, this.lastFilters.filtersRight);
      this.service.loadItems(index, this.rows, arr).then(function (res) {
        console.log(res);
        _this.loading = false;
      });
    };

    DataTable.prototype.createItem = function createItem() {
      var _this2 = this;

      this.dialog.open({ viewModel: this.addModal, model: 'event' }).whenClosed(function (res) {
        console.log(res);
        if (!res.wasCancelled) {
          _this2.service.createItem(res.output).then(function (response) {
            if (response.success) {
              _this2.loadItems();
            }
          });
        } else {}
      });
    };

    DataTable.prototype.applyFilters = function applyFilters() {
      var _this3 = this;

      this.dialog.open({ viewModel: this.filterModal, model: this.lastFilters }).whenClosed(function (res) {
        console.log(res);
        if (!res.wasCancelled) {
          _this3.lastFilters = res.output;
          _this3.loadItems();
        } else {}
      });
    };

    DataTable.prototype.setRows = function setRows(r) {
      this.rows = r;
    };

    return DataTable;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'paginate', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'add', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'labels', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'fieldNames', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'addModal', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'service', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'tableView', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'filterModal', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/elements/filters/filter-date',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterDate = exports.FilterDate = function () {
    function FilterDate() {
      _classCallCheck(this, FilterDate);
    }

    FilterDate.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterDate;
  }();
});
define('resources/elements/filters/filter-num',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterNum = exports.FilterNum = function () {
    function FilterNum() {
      _classCallCheck(this, FilterNum);

      this.message = 'Hello world';
    }

    FilterNum.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterNum;
  }();
});
define('resources/elements/filters/filter-select',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterSelect = exports.FilterSelect = function () {
    function FilterSelect() {
      _classCallCheck(this, FilterSelect);
    }

    FilterSelect.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterSelect;
  }();
});
define('resources/elements/filters/filter-text',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterText = exports.FilterText = function () {
    function FilterText() {
      _classCallCheck(this, FilterText);
    }

    FilterText.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterText;
  }();
});
define('resources/elements/filters/filter-textarea',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterTextarea = exports.FilterTextarea = function () {
    function FilterTextarea() {
      _classCallCheck(this, FilterTextarea);
    }

    FilterTextarea.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterTextarea;
  }();
});
define('resources/elements/filters/filter-time',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterTime = exports.FilterTime = function () {
    function FilterTime() {
      _classCallCheck(this, FilterTime);
    }

    FilterTime.prototype.activate = function activate(model) {
      this.model = model;
    };

    return FilterTime;
  }();
});
define('resources/elements/modals/add-event',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AddEvent = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AddEvent = exports.AddEvent = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function AddEvent(controller) {
      _classCallCheck(this, AddEvent);

      this.controller = controller;
      this.message = 'Hello world';

      this.event = {
        name: '',
        status: '',
        date: '',
        startTime: '',
        endTime: '',
        type: '',
        company: '',
        about: '',
        city: '',
        street: '',
        registrants: 0,
        waitlist: 0
      };
    }

    AddEvent.prototype.activate = function activate() {};

    AddEvent.prototype.attached = function attached() {};

    return AddEvent;
  }()) || _class);
});
define('resources/elements/modals/events-filter',['exports', 'aurelia-dialog', 'aurelia-framework', 'material-pickers-time', 'material-datetime-picker', 'models'], function (exports, _aureliaDialog, _aureliaFramework, _materialPickersTime, _materialDatetimePicker, _models) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EventsFilter = undefined;

  var _materialPickersTime2 = _interopRequireDefault(_materialPickersTime);

  var _materialDatetimePicker2 = _interopRequireDefault(_materialDatetimePicker);

  var _models2 = _interopRequireDefault(_models);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var EventsFilter = exports.EventsFilter = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function EventsFilter(controller) {
      _classCallCheck(this, EventsFilter);

      this.controller = controller;
    }

    EventsFilter.prototype.activate = function activate(model) {
      this.currentFilters = model;
      console.log(model);
    };

    EventsFilter.prototype.attached = function attached() {};

    EventsFilter.prototype.clear = function clear() {
      console.log(_models2.default.events.filters);
      this.currentFilters = JSON.parse(JSON.stringify(_models2.default.events.filters));
    };

    return EventsFilter;
  }()) || _class);
});
define('resources/elements/side-nav/side-nav',['exports', 'aurelia-framework', '../../../app-router'], function (exports, _aureliaFramework, _appRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SideNav = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var SideNav = exports.SideNav = (_dec = (0, _aureliaFramework.inject)(_appRouter.AppRouter), _dec(_class = function SideNav(appRouter) {
    _classCallCheck(this, SideNav);

    this.appRouter = appRouter;
    this.user = {
      name: 'Justin Stoner',
      email: 'justin@heyjust.in'
    };
  }) || _class);
});
define('resources/elements/tables/events-table',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EventsTable = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EventsTable = exports.EventsTable = function () {
    function EventsTable() {
      _classCallCheck(this, EventsTable);
    }

    EventsTable.prototype.activate = function activate(service) {
      console.log(service);
      this.service = service;
    };

    EventsTable.prototype.attached = function attached() {};

    return EventsTable;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=material-design-lite/material.blue-amber.min.css></require><require from=material-pickers-time/css/timepicker.css></require><require from=mdl-datepicker/datepicker.min.css></require><require from=./styles/main.css></require><require from=./navigation></require><navigation><router-view></router-view></navigation></template>"; });
define('text!contacts.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!styles/main.css', ['module'], function(module) { module.exports = "html, body {\n  font-family: \"Roboto\", sans-serif; }\n\n.no-bottom-spacing {\n  padding-bottom: 0px; }\n  .no-bottom-spacing div.mdl-cell {\n    margin-bottom: 0px; }\n\n.right {\n  float: right !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.left {\n  float: left !important; }\n\n.text-left {\n  text-align: left !important; }\n\n.full-width {\n  width: 100%; }\n\n.secondary-info {\n  color: rgba(0, 0, 0, 0.54); }\n\n.btn-icon i {\n  margin-right: 5px;\n  top: -2px;\n  position: relative; }\n\n.au-data-table {\n  box-shadow: none; }\n\n.c-scrim--date-only {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.541176);\n  opacity: 0;\n  transition: 200ms ease opacity;\n  will-change: opacity; }\n\n.c-scrim--date-only--shown {\n  opacity: 1; }\n\n.c-scrim--shown,\n.c-scrim--date-only--shown {\n  z-index: 999; }\n\n.c-datepicker--open {\n  z-index: 1000; }\n\n.c-scrim--date-only--shown +\n.c-datepicker--open {\n  min-height: 500px; }\n  .c-scrim--date-only--shown +\n.c-datepicker--open .c-datepicker__header-date {\n    height: 84px; }\n    .c-scrim--date-only--shown +\n.c-datepicker--open .c-datepicker__header-date .c-datepicker__header-date__month {\n      padding-top: 0px; }\n  .c-scrim--date-only--shown +\n.c-datepicker--open .c-datepicker--show-time,\n  .c-scrim--date-only--shown +\n.c-datepicker--open .c-datepicker--show-calendar,\n  .c-scrim--date-only--shown +\n.c-datepicker--open .c-datepicker__header-date__time {\n    display: none; }\n\n.c-datepicker__header-date span {\n  padding: 16px 0px; }\n\n.c-datepicker__header-date span.c-datepicker__header-date__time {\n  padding-top: 0px; }\n\n.mdl-datepicker-wrapper.is-visible {\n  z-index: 1000; }\n\n.mtp-overlay {\n  z-index: 1000; }\n  .mtp-overlay .mtp-actions__ok {\n    color: #2196f3; }\n  .mtp-overlay .mtp-display {\n    background-color: #00bcd4; }\n  .mtp-overlay .mtp-clock--active {\n    background-color: #00bcd4; }\n  .mtp-overlay .mtp-clock__hand {\n    background-color: #00bcd4; }\n  .mtp-overlay .mtp-clock__center {\n    background-color: #00bcd4; }\n  .mtp-overlay .mtp-meridiem span:hover:not(.mtp-clock--active) {\n    background-color: #b2ebf2; }\n  .mtp-overlay .mtp-clock__time li:hover:not(.mtp-clock--active) {\n    background-color: #b2ebf2; }\n\nux-dialog-overlay.active {\n  background: rgba(0, 0, 0, 0.541176); }\n\n.hidden {\n  display: none !important; }\n"; });
define('text!employers.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!styles/variables.css', ['module'], function(module) { module.exports = ""; });
define('text!events.html', ['module'], function(module) { module.exports = "<template><require from=./resources/elements/data-table/data-table></require><div class=mdl-grid><div class=\"mdl-cell mdl-cell--12-col\"><data-table paginate=true filter=true add=true model=events add-modal.bind=addEventVM filter-modal.bind=filterVM service.bind=es table-view.bind=tableVM></data-table></div></div></template>"; });
define('text!resources/elements/data-table/styles/data-table.css', ['module'], function(module) { module.exports = ".data-table-container {\n  background: #fff; }\n  .data-table-container .spinner {\n    text-align: center;\n    padding: 12px 18px;\n    border-top: 1px #dfdfdf; }\n  .data-table-container table {\n    box-shadow: none;\n    -webkit-box-shadow: none; }\n  .data-table-container .dt-header {\n    padding: 12px 18px; }\n  .data-table-container .dt-footer {\n    padding: 12px 18px;\n    text-align: right; }\n  .data-table-container .mdl-selectfield__select {\n    width: auto;\n    display: inline-block; }\n  .data-table-container .mdl-selectfield {\n    width: auto;\n    padding: 0;\n    margin-left: 10px; }\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!resources/elements/side-nav/styles/sidenav.css', ['module'], function(module) { module.exports = ".header {\n  position: relative;\n  padding: 16px 16px 0;\n  background: #ee0979;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to bottom, #ff6a00, #ee0979);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #ff6a00, #ee0979);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n  .header .profile {\n    margin-bottom: 0px;\n    height: 64px; }\n    .header .profile i {\n      font-size: 64px; }\n  .header .name {\n    margin-top: 16px;\n    font-weight: 500;\n    margin-bottom: 0px; }\n  .header .email {\n    padding-bottom: 16px;\n    font-weight: 400;\n    margin-bottom: 0px; }\n\n.mdl-navigation__link {\n  padding-left: 16px !important;\n  transition: 0.2s all ease; }\n  .mdl-navigation__link i {\n    margin-right: 32px; }\n\n.active {\n  color: #2196f3 !important; }\n"; });
define('text!navigation.html', ['module'], function(module) { module.exports = "<template><require from=./resources/elements/side-nav/side-nav></require><div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer\"><header class=mdl-layout__header><div class=mdl-layout__header-row><span class=mdl-layout-title>${appRouter.router.currentInstruction.config.title}</span><div class=mdl-layout-spacer></div><nav class=\"mdl-navigation mdl-layout--large-screen-only\"><a class=mdl-navigation__link><div class=\"material-icons mdl-badge mdl-badge--overlap\" id=notifications data-badge=1>notifications</div><ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect\" data-mdl-for=notifications><li class=mdl-menu__item>Something</li><li class=mdl-menu__item>Something Else</li></ul></a></nav></div></header><side-nav containerless></side-nav><main class=mdl-layout__content style=background:#e0e0e0><div class=page-content><slot></slot></div></main></div></template>"; });
define('text!side-nav.html', ['module'], function(module) { module.exports = "<template><require from=./styles/sidenav.css></require><div class=mdl-layout__drawer><span class=mdl-layout-title></span><div class=header><p class=profile><i class=material-icons>account_circle</i></p><p class=name>${user.name}</p><p class=email>${user.email}</p></div><nav class=mdl-navigation><a class=\"mdl-navigation__link ${row.isActive?'active':''}\" repeat.for=\"row of appRouter.navigation\" href=${row.href}><i class=material-icons>${row.settings.icon}</i>${row.title}</a></nav></div></template>"; });
define('text!students.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!resources/elements/data-table/data-table.html', ['module'], function(module) { module.exports = "<template><require from=./styles/data-table.css></require><require from=mdl-selectfield/mdl-selectfield.css></require><div class=\"data-table-container mdl-shadow--2dp\"><template if.bind=\"filter || add\"><div class=dt-header><button class=\"mdl-button mdl-js-button mdl-button--primary\" if.bind=add click.delegate=createItem()>add</button><button class=\"mdl-button mdl-js-button mdl-button--icon right\" click.delegate=applyFilters()><i class=material-icons>filter_lists</i></button></div><div class=mdl-layout-spacer></div></template><div class=spinner if.bind=loading><div class=\"mdl-spinner mdl-js-spinner is-active\"></div></div><template if.bind=!loading><compose view-model=../tables/${model}-table model.bind=service></compose></template><template if.bind=paginate><div class=dt-footer>Rows per page:<button id=demo-menu-top-right class=\"mdl-button mdl-js-button\">${rows}</button><ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect\" data-mdl-for=demo-menu-top-right><li class=mdl-menu__item click.trigger=setRows(5)>5</li><li class=mdl-menu__item click.trigger=setRows(10)>10</li><li class=mdl-menu__item click.trigger=setRows(15)>15</li><li class=mdl-menu__item click.trigger=setRows(20)>20</li></ul>${currentIndex+1} - ${currentIndex+service.data.items.length} of ${service.data.totalRecords}<button class=\"mdl-button mdl-js-button mdl-button--icon\" disabled.bind=\"currentIndex===0\" click.delegate=loadItems(currentIndex-rows)><i class=material-icons>chevron_left</i></button><button class=\"mdl-button mdl-js-button mdl-button--icon\" disabled.bind=\"currentIndex+rows>=service.data.totalRecords\" click.delegate=loadItems(currentIndex+rows)><i class=material-icons>chevron_right</i></button></div></template></div></template>"; });
define('text!resources/elements/filters/filter-date.html', ['module'], function(module) { module.exports = "<template><require from=../../attributes/date-picker></require><div class=mdl-textfield><input class=mdl-textfield__input type=text value.bind=model.value date-picker=val.two-way:model.value><label class=mdl-textfield__label if.bind=\"model.value.length===0\">Date</label></div></template>"; });
define('text!resources/elements/filters/filter-num.html', ['module'], function(module) { module.exports = "<template><div class=mdl-textfield><select id=reg-status class=mdl-textfield__input value.bind=model.operator><option value=\">=\" selected>over</option><option value=\"<=\">under</option></select></div><div class=\"mdl-textfield mdl-js-textfield\"><input class=mdl-textfield__input type=text pattern=-?[0-9]*(\\.[0-9]+)? value.bind=model.value><label class=mdl-textfield__label for=sample2>${model.name}</label><span class=mdl-textfield__error>Input is not a number!</span></div></template>"; });
define('text!resources/elements/filters/filter-select.html', ['module'], function(module) { module.exports = "<template><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><label class=mdl-textfield__label for=reg-status>${model.name}</label><select id=reg-status class=mdl-textfield__input value.bind=model.value><option value=\"\"></option><option value.bind=label repeat.for=\"label of model.labels\">${label}</option></select></div></template>"; });
define('text!resources/elements/filters/filter-text.html', ['module'], function(module) { module.exports = "<template><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=mdl-textfield__input type=text value.bind=model.value><label class=mdl-textfield__label>${model.name}</label></div></template>"; });
define('text!resources/elements/filters/filter-textarea.html', ['module'], function(module) { module.exports = "<template><div class=\"mdl-cell mdl-cell--12-col\"><div class=\"mdl-textfield mdl-js-textfield\"><textarea class=mdl-textfield__input type=text rows=3 id=about value.bind=model.value></textarea><label class=mdl-textfield__label for=about>${model.name}</label></div></div></template>"; });
define('text!resources/elements/filters/filter-time.html', ['module'], function(module) { module.exports = "<template><require from=../../attributes/time-picker></require><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=\"mdl-textfield__input mdl-timepicker\" type=text value.bind=model.value time-picker><label class=mdl-textfield__label>${model.name}</label></div></template>"; });
define('text!resources/elements/modals/add-event.html', ['module'], function(module) { module.exports = "<template><require from=material-datetime-picker/material-datetime-picker.css></require><require from=../../attributes/date-picker></require><require from=../../attributes/time-picker></require><div class=\"mdl-card mdl-shadow--4dp\"><div class=mdl-card__title><h2 class=mdl-card__title-text>Create Event</h2></div><div class=mdl-card__supporting-text><div class=mdl-grid><div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet\"><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=mdl-textfield__input type=text id=name value.bind=event.name><label class=mdl-textfield__label for=name>Name</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=mdl-textfield__input type=text id=company value.bind=event.company><label class=mdl-textfield__label for=company>Company</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><label class=mdl-textfield__label for=reg-status>Status</label><select id=reg-status class=mdl-textfield__input value.bind=event.status><option value=\"\"></option><option value=\"Registration Open\">Registration Open</option><option value=\"Registration Closed\">Registration Closed</option></select></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><label class=mdl-textfield__label for=type>Type</label><select id=type class=mdl-textfield__input value.bind=event.type><option value=\"\"></option><option value=Workshop>Workshop</option><option value=\"Job Fair\">Job Fair</option><option value=Interview>Interview</option></select></div></div><div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet\"><div class=mdl-textfield><input class=mdl-textfield__input type=text id=date-input value.bind=event.date date-picker=val.two-way:event.date><label class=mdl-textfield__label if.bind=\"event.date.length===0\" for=date>Date</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=\"mdl-textfield__input mdl-timepicker\" type=text value.bind=event.startTime id=time-start time-picker><label class=mdl-textfield__label for=start>Start Time</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=\"mdl-textfield__input mdl-timepicker\" type=text value.bind=event.endTime id=time-end time-picker><label class=mdl-textfield__label for=end>End Time</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=mdl-textfield__input id=city type=text value.bind=event.city><label class=mdl-textfield__label for=city>city</label></div><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input class=mdl-textfield__input id=street type=text value.bind=event.street><label class=mdl-textfield__label for=street>Street</label></div></div><div class=\"mdl-cell mdl-cell--12-col\"><div class=\"mdl-textfield mdl-js-textfield\"><textarea class=mdl-textfield__input type=text rows=3 id=about value.bind=event.about></textarea><label class=mdl-textfield__label for=about>About</label></div></div></div><div class=\"mdl-card__actions text-right\"><button type=button class=\"mdl-button mdl-js-button\" click.trigger=controller.cancel()>Cancel</button><button type=button class=\"mdl-button mdl-js-button mdl-button--primary\" click.trigger=controller.ok(event)>Ok</button></div></div></div></template>"; });
define('text!resources/elements/modals/events-filter.html', ['module'], function(module) { module.exports = "<template><require from=material-datetime-picker/material-datetime-picker.css></require><div class=\"mdl-card mdl-shadow--4dp\"><div class=mdl-card__title><h2 class=mdl-card__title-text>Filters</h2></div><div class=mdl-card__supporting-text><div class=mdl-grid><div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet\"><compose repeat.for=\"filter of currentFilters.filtersLeft\" view-model=../filters/filter-${filter.type} model.two-way=filter></compose></div><div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet\"><compose repeat.for=\"filter of currentFilters.filtersRight\" view-model=../filters/filter-${filter.type} model.two-way=filter></compose></div><div class=\"mdl-cell mdl-cell--12-col\"><compose repeat.for=\"filter of currentFilters.filtersBottom\" view-model=../filters/filter-${filter.type} model.two-way=filter></compose></div></div><div class=\"mdl-card__actions text-right\"><button type=button class=\"mdl-button mdl-js-button left\" click.trigger=clear()>Clear</button><button type=button class=\"mdl-button mdl-js-button\" click.trigger=controller.cancel(model)>Cancel</button><button type=button class=\"mdl-button mdl-js-button mdl-button--primary\" click.trigger=controller.ok(currentFilters)>Apply</button></div></div></div></template>"; });
define('text!resources/elements/side-nav/side-nav.html', ['module'], function(module) { module.exports = "<template><require from=./styles/sidenav.css></require><div class=mdl-layout__drawer><span class=mdl-layout-title></span><div class=header><p class=profile><i class=material-icons>account_circle</i><a class=\"mdl-navigation__link right\" id=settings style=color:#fff;cursor:pointer><i class=material-icons style=font-size:32px;margin-right:0>settings</i></a><ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" data-mdl-for=settings><li class=mdl-menu__item>Account</li><li class=mdl-menu__item>Security</li><li class=mdl-menu__item>Logout</li></ul></p><p class=name>${user.name}</p><p class=email>${user.email}</p></div><nav class=mdl-navigation><a class=\"mdl-navigation__link ${row.isActive?'active':''}\" repeat.for=\"row of appRouter.navigation\" href=${row.href}><i class=material-icons>${row.settings.icon}</i>${row.title}</a></nav></div></template>"; });
define('text!resources/elements/tables/events-table.html', ['module'], function(module) { module.exports = "<template><table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp full-width\"><thead><tr><th class=mdl-data-table__cell--non-numeric>Event</th><th class=mdl-data-table__cell--non-numeric>Duration</th><th class=mdl-data-table__cell--non-numeric>Status</th><th class=\"\">Registrants</th></tr></thead><tbody><tr repeat.for=\"item of service.data.items\"><td class=mdl-data-table__cell--non-numeric>${item.name}<div class=secondary-info>${item.city} | ${item.street}</div></td><td class=mdl-data-table__cell--non-numeric>${item.date}<div class=secondary-info>${item.startTime} - ${item.endTime}</div></td><td class=mdl-data-table__cell--non-numeric>${item.status}</td><td>${item.registrants}</td></tr></tbody></table></template>"; });
//# sourceMappingURL=app-bundle.js.map