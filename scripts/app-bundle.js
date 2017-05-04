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
      console.log(this.router);
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
define('events',['exports', 'aurelia-framework', './services/events-service'], function (exports, _aureliaFramework, _eventsService) {
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

  var _dec, _class;

  var Events = exports.Events = (_dec = (0, _aureliaFramework.inject)(_eventsService.EventsService), _dec(_class = function () {
    function Events(es) {
      _classCallCheck(this, Events);

      this.es = es;
      this.events = [];
      this.loading = true;
    }

    Events.prototype.attached = function attached() {};

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

    FakeAjax.prototype.loadItems = function loadItems(index, rows, model) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log(index, index + rows);
          var arr = _models2.default[model]['data'].slice(index, index + rows);
          resolve(arr);
        }, 500);
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
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-mdl-plugin', function (mdl) {
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
define('side-nav',['exports', 'aurelia-framework', './app-router'], function (exports, _aureliaFramework, _appRouter) {
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
define('resources/elements/data-table',['exports', 'aurelia-framework', '../../models', '../../services/events-service'], function (exports, _aureliaFramework, _models, _eventsService) {
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

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var DataTable = exports.DataTable = (_dec = (0, _aureliaFramework.inject)(_eventsService.EventsService), _dec(_class = (_class2 = function () {
    function DataTable(es) {
      _classCallCheck(this, DataTable);

      _initDefineProp(this, 'paginate', _descriptor, this);

      _initDefineProp(this, 'add', _descriptor2, this);

      _initDefineProp(this, 'filter', _descriptor3, this);

      _initDefineProp(this, 'data', _descriptor4, this);

      _initDefineProp(this, 'labels', _descriptor5, this);

      _initDefineProp(this, 'fieldNames', _descriptor6, this);

      _initDefineProp(this, 'model', _descriptor7, this);

      this.es = es;
      this.loading = false;
      this.rows = 10;
      this.currentIndex = 0;
      this.config = _models2.default[this.model];
    }

    DataTable.prototype.attached = function attached() {
      if (!this.data) {
        this.loading = true;
        this.loadItems();
      }
    };

    DataTable.prototype.loadItems = function loadItems() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.currentIndex = index;
      this.loading = true;
      console.log(index, this.rows);
      if (this.model === 'events') {
        this.es.loadEvents(index, this.rows).then(function (res) {
          _this.loading = false;
        });
      }
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
  })), _class2)) || _class);
});
define('services/events',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EventsService = exports.EventsService = function () {
    function EventsService() {
      _classCallCheck(this, EventsService);

      this.events = this.setInitEvents();
    }

    EventsService.prototype.showEvents = function showEvents(page, recordCount) {};

    EventsService.prototype.getEvents = function getEvents() {};

    EventsService.prototype.setInitEvents = function setInitEvents() {
      return [{
        "_id": "590944ec8986c26fab4a7f1c",
        "index": 0,
        "status": "Registration Closed",
        "company": "Gonkle",
        "location": "Tilleda | Brown Street",
        "about": "Officia adipisicing et labore sunt adipisicing. Lorem irure dolor culpa nulla sit mollit deserunt. Nisi do do est labore aliqua ut et anim cillum. Quis cillum quis et voluptate ipsum id laborum ea irure officia eu fugiat est eiusmod. Consectetur deserunt deserunt commodo et tempor laboris anim deserunt magna quis dolore ullamco voluptate aute.\r\n",
        "date": "2015-09-22T05:07:06 +07:00",
        "startTime": "9:6 AM",
        "endTime": "11:5 PM",
        "registrants": 37,
        "waitlist": 74,
        "type": "Interview",
        "name": "laboris enim"
      }, {
        "_id": "590944ecdfa10fe68a083c55",
        "index": 1,
        "status": "Registration Closed",
        "company": "Remotion",
        "location": "Eagletown | Junius Street",
        "about": "Labore eiusmod irure qui exercitation duis cupidatat aliquip aute culpa. Veniam irure sunt ad nulla mollit deserunt minim consequat deserunt et. Nostrud in ad amet nulla reprehenderit deserunt cillum amet ullamco proident commodo laborum. Nulla Lorem consequat et nostrud et.\r\n",
        "date": "2015-07-30T05:40:30 +07:00",
        "startTime": "9:33 AM",
        "endTime": "9:28 PM",
        "registrants": 44,
        "waitlist": 38,
        "type": "Workshop",
        "name": "quis excepteur"
      }, {
        "_id": "590944ec5583971756a3897a",
        "index": 2,
        "status": "Registration Closed",
        "company": "Infotrips",
        "location": "Heil | Halsey Street",
        "about": "Est ullamco magna nostrud sit magna sunt duis et enim non ea consequat magna veniam. Pariatur labore anim do occaecat aute elit deserunt laboris minim cupidatat enim quis consequat pariatur. Non elit elit pariatur eiusmod esse consectetur voluptate quis voluptate proident proident non. Ea labore in amet ex non cupidatat aute incididunt labore magna in culpa sint. Labore proident est duis veniam aliqua velit magna amet anim ipsum pariatur ipsum consectetur esse. Aliquip reprehenderit minim non occaecat. Ut incididunt labore est eu in laboris consequat officia sunt.\r\n",
        "date": "2015-07-22T09:46:02 +07:00",
        "startTime": "11:20 AM",
        "endTime": "8:23 PM",
        "registrants": 23,
        "waitlist": 63,
        "type": "Workshop",
        "name": "excepteur ea"
      }, {
        "_id": "590944ecf686fd95c261d24f",
        "index": 3,
        "status": "Registration Closed",
        "company": "Comtrail",
        "location": "Marenisco | Suydam Place",
        "about": "Pariatur minim Lorem proident ut exercitation laborum mollit irure Lorem commodo. Veniam veniam fugiat eu culpa occaecat anim esse mollit veniam tempor magna et cupidatat occaecat. Nisi voluptate labore minim aliqua cupidatat pariatur irure eiusmod quis aute ullamco. Aliqua esse officia magna excepteur. Aute fugiat sit mollit minim.\r\n",
        "date": "2016-03-16T01:49:54 +07:00",
        "startTime": "10:14 AM",
        "endTime": "9:51 PM",
        "registrants": 17,
        "waitlist": 45,
        "type": "Workshop",
        "name": "aliquip velit"
      }, {
        "_id": "590944ec5664a2a021c8955e",
        "index": 4,
        "status": "Registration Open",
        "company": "Zinca",
        "location": "Malott | Woodhull Street",
        "about": "Nulla aute eiusmod sit aute laboris Lorem sit enim eiusmod. Sunt elit excepteur consequat velit eiusmod quis ex minim incididunt ut ipsum. Veniam nostrud pariatur velit occaecat enim aliqua consectetur. In exercitation mollit duis sit ea excepteur eu laboris nostrud aute. Eu sunt eu proident veniam magna reprehenderit excepteur esse minim sit non minim. Consectetur amet quis cillum officia.\r\n",
        "date": "2014-04-04T12:40:09 +07:00",
        "startTime": "10:24 AM",
        "endTime": "7:15 PM",
        "registrants": 14,
        "waitlist": 11,
        "type": "Workshop",
        "name": "ullamco officia"
      }, {
        "_id": "590944ecfaa8e465e6d42189",
        "index": 5,
        "status": "Registration Closed",
        "company": "Cosmosis",
        "location": "Jacksonburg | Bijou Avenue",
        "about": "Id non pariatur consequat ex ad laboris. Ipsum proident non elit deserunt et consequat quis proident eiusmod consequat. Consequat nulla fugiat laboris laborum esse nostrud sint deserunt est occaecat nulla anim. Labore culpa sunt dolore proident proident Lorem Lorem quis esse adipisicing. Consequat pariatur est dolor culpa occaecat id officia reprehenderit duis ea quis. Veniam laboris nulla cupidatat quis anim duis velit fugiat.\r\n",
        "date": "2015-10-08T06:36:31 +07:00",
        "startTime": "11:2 AM",
        "endTime": "11:18 PM",
        "registrants": 51,
        "waitlist": 75,
        "type": "Interview",
        "name": "commodo elit"
      }, {
        "_id": "590944ec9030ab8048060ed7",
        "index": 6,
        "status": "Registration Closed",
        "company": "Grainspot",
        "location": "Goodville | Imlay Street",
        "about": "Commodo exercitation velit dolore aliqua nisi nulla. Do excepteur reprehenderit excepteur et tempor ex elit consectetur esse. Sunt ea commodo labore elit elit labore aliqua.\r\n",
        "date": "2017-05-02T06:24:57 +07:00",
        "startTime": "10:7 AM",
        "endTime": "7:23 PM",
        "registrants": 78,
        "waitlist": 42,
        "type": "Interview",
        "name": "sunt laboris"
      }, {
        "_id": "590944ec1d7c849c450a8ee0",
        "index": 7,
        "status": "Registration Open",
        "company": "Gaptec",
        "location": "Chamberino | Winthrop Street",
        "about": "Amet et veniam eu exercitation consectetur excepteur aute. Ad aliquip do cillum do ut est exercitation. Esse irure irure exercitation in laboris voluptate duis Lorem ipsum. Et consectetur officia ut culpa magna ullamco et nostrud incididunt.\r\n",
        "date": "2014-02-21T05:44:07 +08:00",
        "startTime": "11:25 AM",
        "endTime": "6:22 PM",
        "registrants": 74,
        "waitlist": 78,
        "type": "Workshop",
        "name": "in magna"
      }, {
        "_id": "590944ecc6ba0a8b94e4ce84",
        "index": 8,
        "status": "Registration Open",
        "company": "Imaginart",
        "location": "Wawona | Celeste Court",
        "about": "Adipisicing qui cupidatat nostrud exercitation in. Sint consequat Lorem in velit nostrud nostrud. Ullamco aute amet laborum aute eiusmod culpa. Mollit ad Lorem laborum consectetur.\r\n",
        "date": "2017-03-04T03:01:15 +08:00",
        "startTime": "8:46 AM",
        "endTime": "8:42 PM",
        "registrants": 47,
        "waitlist": 84,
        "type": "Job Fair",
        "name": "cillum excepteur"
      }, {
        "_id": "590944ec899d8b01de6b6e6e",
        "index": 9,
        "status": "Registration Open",
        "company": "Qaboos",
        "location": "Lacomb | Dodworth Street",
        "about": "Tempor et laborum ea magna esse velit qui aute tempor in tempor. Irure pariatur dolor mollit veniam quis enim ea aute exercitation id anim duis dolor. Velit cillum ullamco excepteur dolor consequat adipisicing id quis laboris dolor.\r\n",
        "date": "2016-08-28T11:31:48 +07:00",
        "startTime": "11:16 AM",
        "endTime": "6:12 PM",
        "registrants": 56,
        "waitlist": 77,
        "type": "Job Fair",
        "name": "ullamco fugiat"
      }, {
        "_id": "590944ec5fd6e51de32149c2",
        "index": 10,
        "status": "Registration Open",
        "company": "Bristo",
        "location": "Harleigh | Batchelder Street",
        "about": "Adipisicing deserunt eiusmod voluptate quis fugiat in cillum dolor proident proident in nostrud consequat incididunt. Aliqua veniam officia duis in proident ad. Dolor culpa duis officia quis amet nulla ullamco laboris nisi amet enim amet sit ipsum. Voluptate ipsum aute enim enim aliqua minim Lorem esse velit fugiat. Eiusmod deserunt cillum esse laboris nulla deserunt fugiat.\r\n",
        "date": "2017-02-22T07:16:19 +08:00",
        "startTime": "10:16 AM",
        "endTime": "8:24 PM",
        "registrants": 24,
        "waitlist": 41,
        "type": "Workshop",
        "name": "labore excepteur"
      }, {
        "_id": "590944ec4c0dd000fd593931",
        "index": 11,
        "status": "Registration Closed",
        "company": "Earbang",
        "location": "Bethpage | Jay Street",
        "about": "Excepteur officia officia magna laboris dolor. Et voluptate commodo non magna consectetur pariatur sit deserunt eiusmod esse voluptate eiusmod. Lorem minim nulla deserunt duis exercitation.\r\n",
        "date": "2016-01-21T04:07:21 +08:00",
        "startTime": "11:49 AM",
        "endTime": "11:16 PM",
        "registrants": 20,
        "waitlist": 1,
        "type": "Job Fair",
        "name": "aliqua ea"
      }, {
        "_id": "590944ecefc74c9227192f72",
        "index": 12,
        "status": "Registration Closed",
        "company": "Newcube",
        "location": "Strong | Hunterfly Place",
        "about": "Exercitation ut ea ad esse. Ex aliquip reprehenderit veniam dolore elit commodo. Pariatur ea quis consectetur minim eiusmod anim adipisicing id nostrud elit nulla labore pariatur. Ut veniam mollit sint eu. Enim aliqua ullamco incididunt consectetur ad laboris qui irure minim deserunt irure consectetur aliquip dolore. Do culpa est dolore eiusmod dolore ea enim enim dolor sunt. Mollit cupidatat minim sint velit veniam aute aute sint duis veniam est cillum ipsum excepteur.\r\n",
        "date": "2015-10-01T02:05:43 +07:00",
        "startTime": "9:27 AM",
        "endTime": "10:5 PM",
        "registrants": 77,
        "waitlist": 70,
        "type": "Interview",
        "name": "sunt eu"
      }, {
        "_id": "590944ecaa1fde4ac8a3f3bb",
        "index": 13,
        "status": "Registration Closed",
        "company": "Rodeocean",
        "location": "Edgar | Rutland Road",
        "about": "Amet laboris exercitation aute voluptate fugiat cupidatat minim nisi amet nulla eiusmod eiusmod. Eu pariatur ex in aute duis sit ad proident labore excepteur minim enim officia velit. Exercitation dolore ex ex laboris reprehenderit in reprehenderit dolor nulla.\r\n",
        "date": "2015-03-21T05:53:30 +07:00",
        "startTime": "11:56 AM",
        "endTime": "7:52 PM",
        "registrants": 62,
        "waitlist": 35,
        "type": "Job Fair",
        "name": "eiusmod eu"
      }, {
        "_id": "590944eca9b4d6daf855bfeb",
        "index": 14,
        "status": "Registration Closed",
        "company": "Multiflex",
        "location": "Sugartown | Lewis Avenue",
        "about": "Dolore do elit reprehenderit Lorem nulla sit est voluptate aliqua cillum officia do eiusmod nulla. Officia tempor dolore sint irure velit occaecat est ut est nostrud pariatur ut aliquip. Ad sint fugiat officia officia minim non sit adipisicing consequat. Aliqua proident ex voluptate aute. Minim et ad irure nostrud occaecat tempor mollit commodo consequat exercitation eiusmod.\r\n",
        "date": "2016-04-18T03:33:32 +07:00",
        "startTime": "11:7 AM",
        "endTime": "10:41 PM",
        "registrants": 32,
        "waitlist": 40,
        "type": "Interview",
        "name": "aliquip minim"
      }, {
        "_id": "590944ec929dac8618d9d13a",
        "index": 15,
        "status": "Registration Closed",
        "company": "Quilm",
        "location": "Lloyd | Ruby Street",
        "about": "Nulla nostrud qui deserunt irure do mollit amet ad labore. Magna aliqua tempor ipsum mollit duis aliquip ipsum nisi tempor consequat. Officia in est elit occaecat aliquip labore consectetur. Ipsum consectetur exercitation incididunt eiusmod officia fugiat elit magna consequat veniam velit dolore pariatur occaecat.\r\n",
        "date": "2016-07-19T07:07:56 +07:00",
        "startTime": "9:37 AM",
        "endTime": "10:9 PM",
        "registrants": 81,
        "waitlist": 83,
        "type": "Interview",
        "name": "eu qui"
      }, {
        "_id": "590944ec0810e1bef9981e5f",
        "index": 16,
        "status": "Registration Closed",
        "company": "Edecine",
        "location": "Bourg | Lombardy Street",
        "about": "Et consequat tempor culpa anim tempor enim deserunt cupidatat consectetur ad eu eu. Non amet reprehenderit consequat excepteur qui id id culpa. Exercitation dolor consectetur reprehenderit quis laborum commodo enim commodo ut occaecat deserunt cillum aute in. Ipsum amet eiusmod fugiat fugiat ullamco ut tempor. Nostrud commodo ad deserunt consectetur aliqua pariatur elit mollit mollit et irure aliquip exercitation. Reprehenderit id laboris dolore anim in Lorem exercitation dolor et aliqua enim aliquip. Minim nisi eu culpa occaecat voluptate magna quis cillum enim labore excepteur eiusmod.\r\n",
        "date": "2017-01-19T08:42:06 +08:00",
        "startTime": "8:27 AM",
        "endTime": "6:45 PM",
        "registrants": 66,
        "waitlist": 64,
        "type": "Interview",
        "name": "ex nostrud"
      }, {
        "_id": "590944ecc326cf27f85a61cd",
        "index": 17,
        "status": "Registration Closed",
        "company": "Prosure",
        "location": "Ballico | Middagh Street",
        "about": "Et mollit sunt duis do et sit sit tempor duis. Consectetur esse ad irure anim quis reprehenderit laborum anim proident nulla reprehenderit ad excepteur. Labore amet sint sit adipisicing voluptate sint proident adipisicing magna esse id nisi eu. Nulla est elit laboris nulla cillum nisi sit pariatur in occaecat pariatur culpa ex. Qui eu et ut nulla esse duis duis laboris eiusmod ea cupidatat quis. Commodo nisi nostrud duis anim consequat minim cillum quis adipisicing.\r\n",
        "date": "2014-09-09T11:10:06 +07:00",
        "startTime": "11:10 AM",
        "endTime": "8:6 PM",
        "registrants": 92,
        "waitlist": 97,
        "type": "Workshop",
        "name": "cillum nulla"
      }, {
        "_id": "590944ec611b5952ae3713be",
        "index": 18,
        "status": "Registration Closed",
        "company": "Renovize",
        "location": "Westphalia | Leonora Court",
        "about": "Ipsum cupidatat dolor reprehenderit aliquip. Velit adipisicing in pariatur dolore reprehenderit. Mollit magna proident sunt laboris laboris quis. Excepteur esse ex velit non non eu duis elit in aliqua ut laborum et.\r\n",
        "date": "2016-03-20T11:14:14 +07:00",
        "startTime": "9:48 AM",
        "endTime": "11:28 PM",
        "registrants": 76,
        "waitlist": 58,
        "type": "Interview",
        "name": "in ullamco"
      }, {
        "_id": "590944ec6a1e275f98331f40",
        "index": 19,
        "status": "Registration Open",
        "company": "Kindaloo",
        "location": "Savannah | Seaview Court",
        "about": "Minim nostrud incididunt duis adipisicing ipsum nostrud velit minim officia adipisicing. Ea nulla aliquip officia irure consequat commodo sunt commodo aliqua eu ipsum voluptate et do. Occaecat sint nulla enim dolor officia.\r\n",
        "date": "2014-06-14T03:01:07 +07:00",
        "startTime": "11:58 AM",
        "endTime": "6:18 PM",
        "registrants": 3,
        "waitlist": 32,
        "type": "Interview",
        "name": "sunt magna"
      }, {
        "_id": "590944ec7893fbe2535160a5",
        "index": 20,
        "status": "Registration Closed",
        "company": "Fitcore",
        "location": "Springville | Dekalb Avenue",
        "about": "Sunt sit labore tempor sint dolore do pariatur magna ea labore eu enim reprehenderit. Adipisicing quis tempor aliquip ipsum ex. Deserunt laborum proident adipisicing nostrud fugiat voluptate anim exercitation tempor esse veniam qui consectetur excepteur. Et exercitation tempor veniam culpa nisi. Sit ipsum sunt magna irure aute tempor dolor aute ex dolor sint anim. Proident sit ea est aute. Pariatur laborum dolore esse laboris duis laboris nulla ad ad aliqua id ipsum.\r\n",
        "date": "2017-03-08T11:29:42 +08:00",
        "startTime": "10:0 AM",
        "endTime": "6:34 PM",
        "registrants": 31,
        "waitlist": 26,
        "type": "Interview",
        "name": "cupidatat voluptate"
      }, {
        "_id": "590944ec044673b98675c7ec",
        "index": 21,
        "status": "Registration Open",
        "company": "Electonic",
        "location": "Conway | Schermerhorn Street",
        "about": "Irure enim laboris ad sit laboris. Est non sint culpa dolor aute. Deserunt dolor sunt labore do. Veniam ea minim pariatur incididunt eiusmod sunt aliqua ex. Incididunt dolore exercitation ea in ad laborum excepteur laborum nostrud. Id magna quis ad reprehenderit occaecat tempor do excepteur nostrud.\r\n",
        "date": "2015-05-02T12:33:07 +07:00",
        "startTime": "8:43 AM",
        "endTime": "9:27 PM",
        "registrants": 30,
        "waitlist": 57,
        "type": "Job Fair",
        "name": "cupidatat velit"
      }, {
        "_id": "590944ecfa3dc6bb025a0d75",
        "index": 22,
        "status": "Registration Closed",
        "company": "Ronbert",
        "location": "Alleghenyville | Krier Place",
        "about": "Aliquip reprehenderit adipisicing duis mollit Lorem eiusmod dolor proident aliquip elit tempor esse exercitation deserunt. Occaecat voluptate ad laborum adipisicing Lorem ea. Consectetur qui pariatur cupidatat eu ullamco laboris. Enim cillum laboris cupidatat voluptate occaecat et enim eu Lorem cillum ex labore. Aute aliqua cupidatat cillum enim quis velit proident voluptate minim exercitation id elit.\r\n",
        "date": "2015-08-17T10:44:50 +07:00",
        "startTime": "11:27 AM",
        "endTime": "10:55 PM",
        "registrants": 87,
        "waitlist": 44,
        "type": "Interview",
        "name": "aliquip consequat"
      }, {
        "_id": "590944ec7e345bc9dbd77e17",
        "index": 23,
        "status": "Registration Open",
        "company": "Cubix",
        "location": "Maplewood | Nevins Street",
        "about": "Occaecat minim in fugiat fugiat aliqua cillum nulla aliquip. Mollit commodo enim consequat incididunt eiusmod aute veniam deserunt eu excepteur ea magna consequat. Veniam labore incididunt eu officia.\r\n",
        "date": "2014-04-02T07:20:43 +07:00",
        "startTime": "11:42 AM",
        "endTime": "8:1 PM",
        "registrants": 30,
        "waitlist": 90,
        "type": "Interview",
        "name": "fugiat elit"
      }, {
        "_id": "590944ec5eca34f35c22f192",
        "index": 24,
        "status": "Registration Closed",
        "company": "Boilcat",
        "location": "Ivanhoe | Ingraham Street",
        "about": "Culpa aliqua nisi eiusmod aliquip. Deserunt ipsum mollit ipsum excepteur consectetur ad irure officia ex. Ut amet nulla nulla proident velit est quis sit labore incididunt cillum. Ea aliquip culpa eu adipisicing consequat est velit ullamco qui laboris id laborum. Ipsum in magna pariatur ex officia occaecat. Sunt magna tempor culpa esse veniam duis aliquip culpa.\r\n",
        "date": "2017-01-26T10:39:49 +08:00",
        "startTime": "11:44 AM",
        "endTime": "7:25 PM",
        "registrants": 69,
        "waitlist": 63,
        "type": "Workshop",
        "name": "cillum irure"
      }, {
        "_id": "590944ec6aed4285cad2cb8d",
        "index": 25,
        "status": "Registration Open",
        "company": "Sarasonic",
        "location": "Crown | Folsom Place",
        "about": "Officia ad reprehenderit amet qui. Eu ut aliquip laborum dolor deserunt ex do sit minim velit sint aliquip nostrud. Non cillum et consequat esse officia cupidatat aliquip dolor cillum. Culpa amet labore reprehenderit tempor amet ad sint qui. Tempor amet id laboris et. Enim officia excepteur proident irure cillum enim voluptate proident tempor et.\r\n",
        "date": "2015-01-22T11:23:38 +08:00",
        "startTime": "10:39 AM",
        "endTime": "11:9 PM",
        "registrants": 19,
        "waitlist": 19,
        "type": "Job Fair",
        "name": "est ullamco"
      }, {
        "_id": "590944ec25a5f9c7499daa35",
        "index": 26,
        "status": "Registration Closed",
        "company": "Insource",
        "location": "Cressey | Orient Avenue",
        "about": "Nulla duis ut Lorem eiusmod. Ullamco aliquip ea elit mollit Lorem aliquip adipisicing velit ullamco minim aliquip consectetur tempor in. Aliqua qui dolor est labore id elit est dolor laborum occaecat reprehenderit aute. Fugiat Lorem laboris Lorem cillum velit veniam enim laboris.\r\n",
        "date": "2014-06-24T05:41:52 +07:00",
        "startTime": "8:35 AM",
        "endTime": "10:19 PM",
        "registrants": 71,
        "waitlist": 15,
        "type": "Interview",
        "name": "excepteur non"
      }, {
        "_id": "590944ec85d1f85b6b55bc36",
        "index": 27,
        "status": "Registration Closed",
        "company": "Xylar",
        "location": "Deltaville | Woodbine Street",
        "about": "Irure voluptate in occaecat consequat elit. Aliqua Lorem laborum veniam occaecat nulla occaecat enim laboris est culpa irure commodo do velit. Culpa deserunt deserunt consectetur qui enim labore magna cillum reprehenderit. Nostrud velit sint dolore aliquip irure consectetur magna ullamco.\r\n",
        "date": "2015-07-25T02:59:17 +07:00",
        "startTime": "8:2 AM",
        "endTime": "10:59 PM",
        "registrants": 88,
        "waitlist": 58,
        "type": "Job Fair",
        "name": "eiusmod ea"
      }, {
        "_id": "590944ec4a10f7739a1f529c",
        "index": 28,
        "status": "Registration Closed",
        "company": "Terascape",
        "location": "Bonanza | Fenimore Street",
        "about": "Laboris velit anim mollit sint aliquip occaecat nulla deserunt consequat. Excepteur amet nisi ullamco dolor mollit non ad elit aliqua anim. Nisi do reprehenderit laborum ex est quis mollit esse adipisicing exercitation mollit deserunt reprehenderit dolor. Anim deserunt esse magna nisi. Deserunt mollit esse fugiat tempor pariatur elit et quis est anim incididunt labore veniam velit. In quis mollit excepteur duis consectetur mollit amet incididunt sunt. Laborum incididunt anim ex exercitation veniam cillum Lorem.\r\n",
        "date": "2014-11-04T01:45:35 +08:00",
        "startTime": "11:16 AM",
        "endTime": "10:26 PM",
        "registrants": 28,
        "waitlist": 98,
        "type": "Workshop",
        "name": "laborum anim"
      }, {
        "_id": "590944ec9cb865d2d955091e",
        "index": 29,
        "status": "Registration Closed",
        "company": "Satiance",
        "location": "Marbury | Sharon Street",
        "about": "Ad duis in veniam cupidatat excepteur laborum. Consequat occaecat non aute id. Et proident veniam Lorem eu incididunt cillum Lorem aliqua. Eu magna eiusmod veniam laboris officia sunt incididunt ipsum dolor quis ad dolore. Dolore cillum ullamco tempor nisi eu. Irure do esse laborum tempor non quis laborum incididunt. Culpa aute non minim eiusmod cupidatat est Lorem consequat Lorem ullamco sint aute tempor.\r\n",
        "date": "2016-10-04T01:11:26 +07:00",
        "startTime": "9:10 AM",
        "endTime": "11:18 PM",
        "registrants": 84,
        "waitlist": 43,
        "type": "Interview",
        "name": "anim incididunt"
      }, {
        "_id": "590944ec05f6584adb1ca380",
        "index": 30,
        "status": "Registration Closed",
        "company": "Escenta",
        "location": "Floriston | Central Avenue",
        "about": "Do dolor veniam dolore labore aute consectetur. Consequat dolore ipsum excepteur fugiat culpa velit et enim. Consequat eiusmod exercitation laboris anim. Laborum qui eu qui consequat in nulla. Sunt ea incididunt reprehenderit veniam.\r\n",
        "date": "2014-03-11T05:48:40 +07:00",
        "startTime": "11:41 AM",
        "endTime": "8:14 PM",
        "registrants": 51,
        "waitlist": 32,
        "type": "Workshop",
        "name": "ex occaecat"
      }, {
        "_id": "590944ec9aae06e9c031663c",
        "index": 31,
        "status": "Registration Closed",
        "company": "Aquazure",
        "location": "Sanders | Emerald Street",
        "about": "Id sit qui aute adipisicing esse qui ad cupidatat incididunt sint. Dolore cillum incididunt quis cupidatat nulla aliquip est consectetur adipisicing commodo. Enim irure deserunt ipsum labore proident laboris voluptate officia. Commodo irure adipisicing est aliqua veniam aute ullamco aliqua sunt eu Lorem. Amet eu reprehenderit tempor dolor eiusmod qui.\r\n",
        "date": "2015-11-01T05:28:58 +08:00",
        "startTime": "11:16 AM",
        "endTime": "6:37 PM",
        "registrants": 30,
        "waitlist": 31,
        "type": "Workshop",
        "name": "quis do"
      }, {
        "_id": "590944ec93b39d9a8d7b6899",
        "index": 32,
        "status": "Registration Closed",
        "company": "Temorak",
        "location": "Sperryville | Boynton Place",
        "about": "Deserunt excepteur consectetur et esse. Anim aute ullamco excepteur et laboris. Labore culpa non elit consectetur eu qui dolore elit Lorem irure nulla aliquip occaecat. Nostrud nulla officia commodo officia Lorem nostrud. Pariatur esse eu sint sint id amet do.\r\n",
        "date": "2016-08-20T02:45:36 +07:00",
        "startTime": "10:5 AM",
        "endTime": "6:30 PM",
        "registrants": 46,
        "waitlist": 23,
        "type": "Workshop",
        "name": "Lorem non"
      }, {
        "_id": "590944ec91fbf3756e4edc68",
        "index": 33,
        "status": "Registration Closed",
        "company": "Isotronic",
        "location": "Centerville | Mersereau Court",
        "about": "Dolor voluptate reprehenderit sit aliqua dolore. Id et ullamco commodo laborum proident. Magna consectetur commodo culpa officia sunt nisi anim veniam fugiat amet non. Anim in aliquip consectetur labore. Nisi sint sunt sunt commodo quis est mollit ex. Ad qui irure veniam voluptate minim sunt. Officia sunt nostrud ad aliqua sint Lorem ut quis non velit.\r\n",
        "date": "2014-02-07T04:52:18 +08:00",
        "startTime": "11:26 AM",
        "endTime": "9:44 PM",
        "registrants": 9,
        "waitlist": 15,
        "type": "Interview",
        "name": "exercitation nulla"
      }, {
        "_id": "590944ecd714dda8a61ecb31",
        "index": 34,
        "status": "Registration Open",
        "company": "Quantalia",
        "location": "Albrightsville | Sumner Place",
        "about": "Nulla esse eu eiusmod officia proident aute dolore est tempor. Amet deserunt culpa Lorem eiusmod ullamco ipsum labore. Esse anim nostrud incididunt nulla proident amet labore ipsum culpa aliquip proident ex reprehenderit. Excepteur enim excepteur eu ad est reprehenderit. Esse ad nisi quis deserunt tempor consectetur commodo nulla adipisicing dolore velit elit ea. Laborum sunt dolor voluptate ex velit excepteur nostrud duis in enim laborum mollit laborum reprehenderit.\r\n",
        "date": "2014-07-16T10:57:40 +07:00",
        "startTime": "8:28 AM",
        "endTime": "6:58 PM",
        "registrants": 47,
        "waitlist": 42,
        "type": "Workshop",
        "name": "mollit pariatur"
      }, {
        "_id": "590944ec6aa507318b9a9f63",
        "index": 35,
        "status": "Registration Open",
        "company": "Stucco",
        "location": "Venice | Russell Street",
        "about": "Lorem laborum amet in laborum consequat aliquip fugiat ea culpa aliquip deserunt ut duis exercitation. Enim et qui commodo et sint nostrud non. Exercitation ea laborum fugiat aliqua enim excepteur eu laborum laborum minim culpa.\r\n",
        "date": "2016-06-14T06:41:00 +07:00",
        "startTime": "9:58 AM",
        "endTime": "7:23 PM",
        "registrants": 21,
        "waitlist": 43,
        "type": "Workshop",
        "name": "labore sit"
      }, {
        "_id": "590944ecbe08e470b8e93629",
        "index": 36,
        "status": "Registration Closed",
        "company": "Spherix",
        "location": "Hailesboro | Oakland Place",
        "about": "Culpa quis mollit mollit consectetur ex aute. Do esse et ex aute in velit ullamco. Fugiat in adipisicing nostrud adipisicing ut exercitation. Consequat consequat adipisicing ex ut.\r\n",
        "date": "2016-10-21T12:26:29 +07:00",
        "startTime": "10:57 AM",
        "endTime": "11:30 PM",
        "registrants": 27,
        "waitlist": 25,
        "type": "Job Fair",
        "name": "nostrud et"
      }, {
        "_id": "590944ec8409c69bb9497e4e",
        "index": 37,
        "status": "Registration Open",
        "company": "Schoolio",
        "location": "Camas | Battery Avenue",
        "about": "Laborum pariatur commodo cupidatat incididunt in minim voluptate tempor in nostrud consequat veniam qui do. Nulla cillum pariatur cillum proident ea proident excepteur. Sint occaecat nostrud consequat magna. Nulla exercitation sit magna irure exercitation irure qui incididunt. Commodo veniam nisi minim sunt incididunt eiusmod. Reprehenderit ea in nostrud tempor eu sint exercitation cupidatat. Sunt voluptate cillum eu velit laboris ea proident labore incididunt reprehenderit cupidatat sunt laboris.\r\n",
        "date": "2014-09-23T09:46:00 +07:00",
        "startTime": "8:13 AM",
        "endTime": "8:58 PM",
        "registrants": 74,
        "waitlist": 39,
        "type": "Workshop",
        "name": "sint laborum"
      }, {
        "_id": "590944ecc75f928ec50c161f",
        "index": 38,
        "status": "Registration Closed",
        "company": "Fossiel",
        "location": "Basye | Eckford Street",
        "about": "Proident non et aute laborum deserunt fugiat ipsum labore cillum elit deserunt elit. Nulla minim in Lorem est id minim aliqua. Aliquip laborum irure id excepteur irure Lorem dolor. In reprehenderit reprehenderit ea voluptate ad commodo consequat labore excepteur quis aliquip. Ut velit elit Lorem ea ipsum in ea ut fugiat aliquip. Aute fugiat consequat culpa sunt excepteur aute eu incididunt aute. Magna ut aliquip reprehenderit dolor incididunt amet.\r\n",
        "date": "2014-04-06T08:03:45 +07:00",
        "startTime": "10:24 AM",
        "endTime": "7:37 PM",
        "registrants": 30,
        "waitlist": 55,
        "type": "Workshop",
        "name": "laboris aliqua"
      }, {
        "_id": "590944ec45d0ea9e47b65a56",
        "index": 39,
        "status": "Registration Closed",
        "company": "Overfork",
        "location": "Ona | Story Street",
        "about": "Adipisicing ad sunt cupidatat consequat deserunt est eiusmod reprehenderit est sunt sunt est exercitation ex. Esse duis voluptate irure sit nulla eiusmod. Aliquip dolore do nulla labore ullamco nisi ad eiusmod. Labore aute commodo non cupidatat qui laboris qui dolor est aliquip ipsum amet nostrud officia. Occaecat nostrud sit proident ea incididunt minim excepteur laborum nisi.\r\n",
        "date": "2017-01-25T08:31:52 +08:00",
        "startTime": "10:13 AM",
        "endTime": "11:10 PM",
        "registrants": 62,
        "waitlist": 77,
        "type": "Interview",
        "name": "adipisicing ex"
      }];
    };

    return EventsService;
  }();
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
      this.items = [];
    }

    EventsService.prototype.loadEvents = function loadEvents(index, rows) {
      var _this = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        _this.fakeJax.loadItems(index, rows, 'events').then(function (res) {
          _this.items = res;
          console.log(_this.items);
          _this.loading = false;
          resolve(res);
        });
      });
    };

    EventsService.prototype.getEvents = function getEvents() {
      return this.items.data;
    };

    return EventsService;
  }()) || _class);
});
define('models',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    events: {
      labels: [{ name: 'Event', numeric: false }, { name: 'Duration', numeric: false }, { name: 'Status', numeric: false }, { name: 'Registrants', numeric: true }],
      fields: [{ name: 'event', numeric: false }, { name: 'duration', numeric: false }, { name: 'status', numeric: false }, { name: 'registrants', numeric: true }],
      tableView: './resources/elements/event-table.html',
      tableViewModel: './event-table',
      data: [{
        "_id": "590944ec8986c26fab4a7f1c",
        "index": 0,
        "status": "Registration Closed",
        "company": "Gonkle",
        "location": "Tilleda | Brown Street",
        "about": "Officia adipisicing et labore sunt adipisicing. Lorem irure dolor culpa nulla sit mollit deserunt. Nisi do do est labore aliqua ut et anim cillum. Quis cillum quis et voluptate ipsum id laborum ea irure officia eu fugiat est eiusmod. Consectetur deserunt deserunt commodo et tempor laboris anim deserunt magna quis dolore ullamco voluptate aute.\r\n",
        "date": "2015-09-22T05:07:06 +07:00",
        "startTime": "9:6 AM",
        "endTime": "11:5 PM",
        "registrants": 37,
        "waitlist": 74,
        "type": "Interview",
        "name": "laboris enim"
      }, {
        "_id": "590944ecdfa10fe68a083c55",
        "index": 1,
        "status": "Registration Closed",
        "company": "Remotion",
        "location": "Eagletown | Junius Street",
        "about": "Labore eiusmod irure qui exercitation duis cupidatat aliquip aute culpa. Veniam irure sunt ad nulla mollit deserunt minim consequat deserunt et. Nostrud in ad amet nulla reprehenderit deserunt cillum amet ullamco proident commodo laborum. Nulla Lorem consequat et nostrud et.\r\n",
        "date": "2015-07-30T05:40:30 +07:00",
        "startTime": "9:33 AM",
        "endTime": "9:28 PM",
        "registrants": 44,
        "waitlist": 38,
        "type": "Workshop",
        "name": "quis excepteur"
      }, {
        "_id": "590944ec5583971756a3897a",
        "index": 2,
        "status": "Registration Closed",
        "company": "Infotrips",
        "location": "Heil | Halsey Street",
        "about": "Est ullamco magna nostrud sit magna sunt duis et enim non ea consequat magna veniam. Pariatur labore anim do occaecat aute elit deserunt laboris minim cupidatat enim quis consequat pariatur. Non elit elit pariatur eiusmod esse consectetur voluptate quis voluptate proident proident non. Ea labore in amet ex non cupidatat aute incididunt labore magna in culpa sint. Labore proident est duis veniam aliqua velit magna amet anim ipsum pariatur ipsum consectetur esse. Aliquip reprehenderit minim non occaecat. Ut incididunt labore est eu in laboris consequat officia sunt.\r\n",
        "date": "2015-07-22T09:46:02 +07:00",
        "startTime": "11:20 AM",
        "endTime": "8:23 PM",
        "registrants": 23,
        "waitlist": 63,
        "type": "Workshop",
        "name": "excepteur ea"
      }, {
        "_id": "590944ecf686fd95c261d24f",
        "index": 3,
        "status": "Registration Closed",
        "company": "Comtrail",
        "location": "Marenisco | Suydam Place",
        "about": "Pariatur minim Lorem proident ut exercitation laborum mollit irure Lorem commodo. Veniam veniam fugiat eu culpa occaecat anim esse mollit veniam tempor magna et cupidatat occaecat. Nisi voluptate labore minim aliqua cupidatat pariatur irure eiusmod quis aute ullamco. Aliqua esse officia magna excepteur. Aute fugiat sit mollit minim.\r\n",
        "date": "2016-03-16T01:49:54 +07:00",
        "startTime": "10:14 AM",
        "endTime": "9:51 PM",
        "registrants": 17,
        "waitlist": 45,
        "type": "Workshop",
        "name": "aliquip velit"
      }, {
        "_id": "590944ec5664a2a021c8955e",
        "index": 4,
        "status": "Registration Open",
        "company": "Zinca",
        "location": "Malott | Woodhull Street",
        "about": "Nulla aute eiusmod sit aute laboris Lorem sit enim eiusmod. Sunt elit excepteur consequat velit eiusmod quis ex minim incididunt ut ipsum. Veniam nostrud pariatur velit occaecat enim aliqua consectetur. In exercitation mollit duis sit ea excepteur eu laboris nostrud aute. Eu sunt eu proident veniam magna reprehenderit excepteur esse minim sit non minim. Consectetur amet quis cillum officia.\r\n",
        "date": "2014-04-04T12:40:09 +07:00",
        "startTime": "10:24 AM",
        "endTime": "7:15 PM",
        "registrants": 14,
        "waitlist": 11,
        "type": "Workshop",
        "name": "ullamco officia"
      }, {
        "_id": "590944ecfaa8e465e6d42189",
        "index": 5,
        "status": "Registration Closed",
        "company": "Cosmosis",
        "location": "Jacksonburg | Bijou Avenue",
        "about": "Id non pariatur consequat ex ad laboris. Ipsum proident non elit deserunt et consequat quis proident eiusmod consequat. Consequat nulla fugiat laboris laborum esse nostrud sint deserunt est occaecat nulla anim. Labore culpa sunt dolore proident proident Lorem Lorem quis esse adipisicing. Consequat pariatur est dolor culpa occaecat id officia reprehenderit duis ea quis. Veniam laboris nulla cupidatat quis anim duis velit fugiat.\r\n",
        "date": "2015-10-08T06:36:31 +07:00",
        "startTime": "11:2 AM",
        "endTime": "11:18 PM",
        "registrants": 51,
        "waitlist": 75,
        "type": "Interview",
        "name": "commodo elit"
      }, {
        "_id": "590944ec9030ab8048060ed7",
        "index": 6,
        "status": "Registration Closed",
        "company": "Grainspot",
        "location": "Goodville | Imlay Street",
        "about": "Commodo exercitation velit dolore aliqua nisi nulla. Do excepteur reprehenderit excepteur et tempor ex elit consectetur esse. Sunt ea commodo labore elit elit labore aliqua.\r\n",
        "date": "2017-05-02T06:24:57 +07:00",
        "startTime": "10:7 AM",
        "endTime": "7:23 PM",
        "registrants": 78,
        "waitlist": 42,
        "type": "Interview",
        "name": "sunt laboris"
      }, {
        "_id": "590944ec1d7c849c450a8ee0",
        "index": 7,
        "status": "Registration Open",
        "company": "Gaptec",
        "location": "Chamberino | Winthrop Street",
        "about": "Amet et veniam eu exercitation consectetur excepteur aute. Ad aliquip do cillum do ut est exercitation. Esse irure irure exercitation in laboris voluptate duis Lorem ipsum. Et consectetur officia ut culpa magna ullamco et nostrud incididunt.\r\n",
        "date": "2014-02-21T05:44:07 +08:00",
        "startTime": "11:25 AM",
        "endTime": "6:22 PM",
        "registrants": 74,
        "waitlist": 78,
        "type": "Workshop",
        "name": "in magna"
      }, {
        "_id": "590944ecc6ba0a8b94e4ce84",
        "index": 8,
        "status": "Registration Open",
        "company": "Imaginart",
        "location": "Wawona | Celeste Court",
        "about": "Adipisicing qui cupidatat nostrud exercitation in. Sint consequat Lorem in velit nostrud nostrud. Ullamco aute amet laborum aute eiusmod culpa. Mollit ad Lorem laborum consectetur.\r\n",
        "date": "2017-03-04T03:01:15 +08:00",
        "startTime": "8:46 AM",
        "endTime": "8:42 PM",
        "registrants": 47,
        "waitlist": 84,
        "type": "Job Fair",
        "name": "cillum excepteur"
      }, {
        "_id": "590944ec899d8b01de6b6e6e",
        "index": 9,
        "status": "Registration Open",
        "company": "Qaboos",
        "location": "Lacomb | Dodworth Street",
        "about": "Tempor et laborum ea magna esse velit qui aute tempor in tempor. Irure pariatur dolor mollit veniam quis enim ea aute exercitation id anim duis dolor. Velit cillum ullamco excepteur dolor consequat adipisicing id quis laboris dolor.\r\n",
        "date": "2016-08-28T11:31:48 +07:00",
        "startTime": "11:16 AM",
        "endTime": "6:12 PM",
        "registrants": 56,
        "waitlist": 77,
        "type": "Job Fair",
        "name": "ullamco fugiat"
      }, {
        "_id": "590944ec5fd6e51de32149c2",
        "index": 10,
        "status": "Registration Open",
        "company": "Bristo",
        "location": "Harleigh | Batchelder Street",
        "about": "Adipisicing deserunt eiusmod voluptate quis fugiat in cillum dolor proident proident in nostrud consequat incididunt. Aliqua veniam officia duis in proident ad. Dolor culpa duis officia quis amet nulla ullamco laboris nisi amet enim amet sit ipsum. Voluptate ipsum aute enim enim aliqua minim Lorem esse velit fugiat. Eiusmod deserunt cillum esse laboris nulla deserunt fugiat.\r\n",
        "date": "2017-02-22T07:16:19 +08:00",
        "startTime": "10:16 AM",
        "endTime": "8:24 PM",
        "registrants": 24,
        "waitlist": 41,
        "type": "Workshop",
        "name": "labore excepteur"
      }, {
        "_id": "590944ec4c0dd000fd593931",
        "index": 11,
        "status": "Registration Closed",
        "company": "Earbang",
        "location": "Bethpage | Jay Street",
        "about": "Excepteur officia officia magna laboris dolor. Et voluptate commodo non magna consectetur pariatur sit deserunt eiusmod esse voluptate eiusmod. Lorem minim nulla deserunt duis exercitation.\r\n",
        "date": "2016-01-21T04:07:21 +08:00",
        "startTime": "11:49 AM",
        "endTime": "11:16 PM",
        "registrants": 20,
        "waitlist": 1,
        "type": "Job Fair",
        "name": "aliqua ea"
      }, {
        "_id": "590944ecefc74c9227192f72",
        "index": 12,
        "status": "Registration Closed",
        "company": "Newcube",
        "location": "Strong | Hunterfly Place",
        "about": "Exercitation ut ea ad esse. Ex aliquip reprehenderit veniam dolore elit commodo. Pariatur ea quis consectetur minim eiusmod anim adipisicing id nostrud elit nulla labore pariatur. Ut veniam mollit sint eu. Enim aliqua ullamco incididunt consectetur ad laboris qui irure minim deserunt irure consectetur aliquip dolore. Do culpa est dolore eiusmod dolore ea enim enim dolor sunt. Mollit cupidatat minim sint velit veniam aute aute sint duis veniam est cillum ipsum excepteur.\r\n",
        "date": "2015-10-01T02:05:43 +07:00",
        "startTime": "9:27 AM",
        "endTime": "10:5 PM",
        "registrants": 77,
        "waitlist": 70,
        "type": "Interview",
        "name": "sunt eu"
      }, {
        "_id": "590944ecaa1fde4ac8a3f3bb",
        "index": 13,
        "status": "Registration Closed",
        "company": "Rodeocean",
        "location": "Edgar | Rutland Road",
        "about": "Amet laboris exercitation aute voluptate fugiat cupidatat minim nisi amet nulla eiusmod eiusmod. Eu pariatur ex in aute duis sit ad proident labore excepteur minim enim officia velit. Exercitation dolore ex ex laboris reprehenderit in reprehenderit dolor nulla.\r\n",
        "date": "2015-03-21T05:53:30 +07:00",
        "startTime": "11:56 AM",
        "endTime": "7:52 PM",
        "registrants": 62,
        "waitlist": 35,
        "type": "Job Fair",
        "name": "eiusmod eu"
      }, {
        "_id": "590944eca9b4d6daf855bfeb",
        "index": 14,
        "status": "Registration Closed",
        "company": "Multiflex",
        "location": "Sugartown | Lewis Avenue",
        "about": "Dolore do elit reprehenderit Lorem nulla sit est voluptate aliqua cillum officia do eiusmod nulla. Officia tempor dolore sint irure velit occaecat est ut est nostrud pariatur ut aliquip. Ad sint fugiat officia officia minim non sit adipisicing consequat. Aliqua proident ex voluptate aute. Minim et ad irure nostrud occaecat tempor mollit commodo consequat exercitation eiusmod.\r\n",
        "date": "2016-04-18T03:33:32 +07:00",
        "startTime": "11:7 AM",
        "endTime": "10:41 PM",
        "registrants": 32,
        "waitlist": 40,
        "type": "Interview",
        "name": "aliquip minim"
      }, {
        "_id": "590944ec929dac8618d9d13a",
        "index": 15,
        "status": "Registration Closed",
        "company": "Quilm",
        "location": "Lloyd | Ruby Street",
        "about": "Nulla nostrud qui deserunt irure do mollit amet ad labore. Magna aliqua tempor ipsum mollit duis aliquip ipsum nisi tempor consequat. Officia in est elit occaecat aliquip labore consectetur. Ipsum consectetur exercitation incididunt eiusmod officia fugiat elit magna consequat veniam velit dolore pariatur occaecat.\r\n",
        "date": "2016-07-19T07:07:56 +07:00",
        "startTime": "9:37 AM",
        "endTime": "10:9 PM",
        "registrants": 81,
        "waitlist": 83,
        "type": "Interview",
        "name": "eu qui"
      }, {
        "_id": "590944ec0810e1bef9981e5f",
        "index": 16,
        "status": "Registration Closed",
        "company": "Edecine",
        "location": "Bourg | Lombardy Street",
        "about": "Et consequat tempor culpa anim tempor enim deserunt cupidatat consectetur ad eu eu. Non amet reprehenderit consequat excepteur qui id id culpa. Exercitation dolor consectetur reprehenderit quis laborum commodo enim commodo ut occaecat deserunt cillum aute in. Ipsum amet eiusmod fugiat fugiat ullamco ut tempor. Nostrud commodo ad deserunt consectetur aliqua pariatur elit mollit mollit et irure aliquip exercitation. Reprehenderit id laboris dolore anim in Lorem exercitation dolor et aliqua enim aliquip. Minim nisi eu culpa occaecat voluptate magna quis cillum enim labore excepteur eiusmod.\r\n",
        "date": "2017-01-19T08:42:06 +08:00",
        "startTime": "8:27 AM",
        "endTime": "6:45 PM",
        "registrants": 66,
        "waitlist": 64,
        "type": "Interview",
        "name": "ex nostrud"
      }, {
        "_id": "590944ecc326cf27f85a61cd",
        "index": 17,
        "status": "Registration Closed",
        "company": "Prosure",
        "location": "Ballico | Middagh Street",
        "about": "Et mollit sunt duis do et sit sit tempor duis. Consectetur esse ad irure anim quis reprehenderit laborum anim proident nulla reprehenderit ad excepteur. Labore amet sint sit adipisicing voluptate sint proident adipisicing magna esse id nisi eu. Nulla est elit laboris nulla cillum nisi sit pariatur in occaecat pariatur culpa ex. Qui eu et ut nulla esse duis duis laboris eiusmod ea cupidatat quis. Commodo nisi nostrud duis anim consequat minim cillum quis adipisicing.\r\n",
        "date": "2014-09-09T11:10:06 +07:00",
        "startTime": "11:10 AM",
        "endTime": "8:6 PM",
        "registrants": 92,
        "waitlist": 97,
        "type": "Workshop",
        "name": "cillum nulla"
      }, {
        "_id": "590944ec611b5952ae3713be",
        "index": 18,
        "status": "Registration Closed",
        "company": "Renovize",
        "location": "Westphalia | Leonora Court",
        "about": "Ipsum cupidatat dolor reprehenderit aliquip. Velit adipisicing in pariatur dolore reprehenderit. Mollit magna proident sunt laboris laboris quis. Excepteur esse ex velit non non eu duis elit in aliqua ut laborum et.\r\n",
        "date": "2016-03-20T11:14:14 +07:00",
        "startTime": "9:48 AM",
        "endTime": "11:28 PM",
        "registrants": 76,
        "waitlist": 58,
        "type": "Interview",
        "name": "in ullamco"
      }, {
        "_id": "590944ec6a1e275f98331f40",
        "index": 19,
        "status": "Registration Open",
        "company": "Kindaloo",
        "location": "Savannah | Seaview Court",
        "about": "Minim nostrud incididunt duis adipisicing ipsum nostrud velit minim officia adipisicing. Ea nulla aliquip officia irure consequat commodo sunt commodo aliqua eu ipsum voluptate et do. Occaecat sint nulla enim dolor officia.\r\n",
        "date": "2014-06-14T03:01:07 +07:00",
        "startTime": "11:58 AM",
        "endTime": "6:18 PM",
        "registrants": 3,
        "waitlist": 32,
        "type": "Interview",
        "name": "sunt magna"
      }, {
        "_id": "590944ec7893fbe2535160a5",
        "index": 20,
        "status": "Registration Closed",
        "company": "Fitcore",
        "location": "Springville | Dekalb Avenue",
        "about": "Sunt sit labore tempor sint dolore do pariatur magna ea labore eu enim reprehenderit. Adipisicing quis tempor aliquip ipsum ex. Deserunt laborum proident adipisicing nostrud fugiat voluptate anim exercitation tempor esse veniam qui consectetur excepteur. Et exercitation tempor veniam culpa nisi. Sit ipsum sunt magna irure aute tempor dolor aute ex dolor sint anim. Proident sit ea est aute. Pariatur laborum dolore esse laboris duis laboris nulla ad ad aliqua id ipsum.\r\n",
        "date": "2017-03-08T11:29:42 +08:00",
        "startTime": "10:0 AM",
        "endTime": "6:34 PM",
        "registrants": 31,
        "waitlist": 26,
        "type": "Interview",
        "name": "cupidatat voluptate"
      }, {
        "_id": "590944ec044673b98675c7ec",
        "index": 21,
        "status": "Registration Open",
        "company": "Electonic",
        "location": "Conway | Schermerhorn Street",
        "about": "Irure enim laboris ad sit laboris. Est non sint culpa dolor aute. Deserunt dolor sunt labore do. Veniam ea minim pariatur incididunt eiusmod sunt aliqua ex. Incididunt dolore exercitation ea in ad laborum excepteur laborum nostrud. Id magna quis ad reprehenderit occaecat tempor do excepteur nostrud.\r\n",
        "date": "2015-05-02T12:33:07 +07:00",
        "startTime": "8:43 AM",
        "endTime": "9:27 PM",
        "registrants": 30,
        "waitlist": 57,
        "type": "Job Fair",
        "name": "cupidatat velit"
      }, {
        "_id": "590944ecfa3dc6bb025a0d75",
        "index": 22,
        "status": "Registration Closed",
        "company": "Ronbert",
        "location": "Alleghenyville | Krier Place",
        "about": "Aliquip reprehenderit adipisicing duis mollit Lorem eiusmod dolor proident aliquip elit tempor esse exercitation deserunt. Occaecat voluptate ad laborum adipisicing Lorem ea. Consectetur qui pariatur cupidatat eu ullamco laboris. Enim cillum laboris cupidatat voluptate occaecat et enim eu Lorem cillum ex labore. Aute aliqua cupidatat cillum enim quis velit proident voluptate minim exercitation id elit.\r\n",
        "date": "2015-08-17T10:44:50 +07:00",
        "startTime": "11:27 AM",
        "endTime": "10:55 PM",
        "registrants": 87,
        "waitlist": 44,
        "type": "Interview",
        "name": "aliquip consequat"
      }, {
        "_id": "590944ec7e345bc9dbd77e17",
        "index": 23,
        "status": "Registration Open",
        "company": "Cubix",
        "location": "Maplewood | Nevins Street",
        "about": "Occaecat minim in fugiat fugiat aliqua cillum nulla aliquip. Mollit commodo enim consequat incididunt eiusmod aute veniam deserunt eu excepteur ea magna consequat. Veniam labore incididunt eu officia.\r\n",
        "date": "2014-04-02T07:20:43 +07:00",
        "startTime": "11:42 AM",
        "endTime": "8:1 PM",
        "registrants": 30,
        "waitlist": 90,
        "type": "Interview",
        "name": "fugiat elit"
      }, {
        "_id": "590944ec5eca34f35c22f192",
        "index": 24,
        "status": "Registration Closed",
        "company": "Boilcat",
        "location": "Ivanhoe | Ingraham Street",
        "about": "Culpa aliqua nisi eiusmod aliquip. Deserunt ipsum mollit ipsum excepteur consectetur ad irure officia ex. Ut amet nulla nulla proident velit est quis sit labore incididunt cillum. Ea aliquip culpa eu adipisicing consequat est velit ullamco qui laboris id laborum. Ipsum in magna pariatur ex officia occaecat. Sunt magna tempor culpa esse veniam duis aliquip culpa.\r\n",
        "date": "2017-01-26T10:39:49 +08:00",
        "startTime": "11:44 AM",
        "endTime": "7:25 PM",
        "registrants": 69,
        "waitlist": 63,
        "type": "Workshop",
        "name": "cillum irure"
      }, {
        "_id": "590944ec6aed4285cad2cb8d",
        "index": 25,
        "status": "Registration Open",
        "company": "Sarasonic",
        "location": "Crown | Folsom Place",
        "about": "Officia ad reprehenderit amet qui. Eu ut aliquip laborum dolor deserunt ex do sit minim velit sint aliquip nostrud. Non cillum et consequat esse officia cupidatat aliquip dolor cillum. Culpa amet labore reprehenderit tempor amet ad sint qui. Tempor amet id laboris et. Enim officia excepteur proident irure cillum enim voluptate proident tempor et.\r\n",
        "date": "2015-01-22T11:23:38 +08:00",
        "startTime": "10:39 AM",
        "endTime": "11:9 PM",
        "registrants": 19,
        "waitlist": 19,
        "type": "Job Fair",
        "name": "est ullamco"
      }, {
        "_id": "590944ec25a5f9c7499daa35",
        "index": 26,
        "status": "Registration Closed",
        "company": "Insource",
        "location": "Cressey | Orient Avenue",
        "about": "Nulla duis ut Lorem eiusmod. Ullamco aliquip ea elit mollit Lorem aliquip adipisicing velit ullamco minim aliquip consectetur tempor in. Aliqua qui dolor est labore id elit est dolor laborum occaecat reprehenderit aute. Fugiat Lorem laboris Lorem cillum velit veniam enim laboris.\r\n",
        "date": "2014-06-24T05:41:52 +07:00",
        "startTime": "8:35 AM",
        "endTime": "10:19 PM",
        "registrants": 71,
        "waitlist": 15,
        "type": "Interview",
        "name": "excepteur non"
      }, {
        "_id": "590944ec85d1f85b6b55bc36",
        "index": 27,
        "status": "Registration Closed",
        "company": "Xylar",
        "location": "Deltaville | Woodbine Street",
        "about": "Irure voluptate in occaecat consequat elit. Aliqua Lorem laborum veniam occaecat nulla occaecat enim laboris est culpa irure commodo do velit. Culpa deserunt deserunt consectetur qui enim labore magna cillum reprehenderit. Nostrud velit sint dolore aliquip irure consectetur magna ullamco.\r\n",
        "date": "2015-07-25T02:59:17 +07:00",
        "startTime": "8:2 AM",
        "endTime": "10:59 PM",
        "registrants": 88,
        "waitlist": 58,
        "type": "Job Fair",
        "name": "eiusmod ea"
      }, {
        "_id": "590944ec4a10f7739a1f529c",
        "index": 28,
        "status": "Registration Closed",
        "company": "Terascape",
        "location": "Bonanza | Fenimore Street",
        "about": "Laboris velit anim mollit sint aliquip occaecat nulla deserunt consequat. Excepteur amet nisi ullamco dolor mollit non ad elit aliqua anim. Nisi do reprehenderit laborum ex est quis mollit esse adipisicing exercitation mollit deserunt reprehenderit dolor. Anim deserunt esse magna nisi. Deserunt mollit esse fugiat tempor pariatur elit et quis est anim incididunt labore veniam velit. In quis mollit excepteur duis consectetur mollit amet incididunt sunt. Laborum incididunt anim ex exercitation veniam cillum Lorem.\r\n",
        "date": "2014-11-04T01:45:35 +08:00",
        "startTime": "11:16 AM",
        "endTime": "10:26 PM",
        "registrants": 28,
        "waitlist": 98,
        "type": "Workshop",
        "name": "laborum anim"
      }, {
        "_id": "590944ec9cb865d2d955091e",
        "index": 29,
        "status": "Registration Closed",
        "company": "Satiance",
        "location": "Marbury | Sharon Street",
        "about": "Ad duis in veniam cupidatat excepteur laborum. Consequat occaecat non aute id. Et proident veniam Lorem eu incididunt cillum Lorem aliqua. Eu magna eiusmod veniam laboris officia sunt incididunt ipsum dolor quis ad dolore. Dolore cillum ullamco tempor nisi eu. Irure do esse laborum tempor non quis laborum incididunt. Culpa aute non minim eiusmod cupidatat est Lorem consequat Lorem ullamco sint aute tempor.\r\n",
        "date": "2016-10-04T01:11:26 +07:00",
        "startTime": "9:10 AM",
        "endTime": "11:18 PM",
        "registrants": 84,
        "waitlist": 43,
        "type": "Interview",
        "name": "anim incididunt"
      }, {
        "_id": "590944ec05f6584adb1ca380",
        "index": 30,
        "status": "Registration Closed",
        "company": "Escenta",
        "location": "Floriston | Central Avenue",
        "about": "Do dolor veniam dolore labore aute consectetur. Consequat dolore ipsum excepteur fugiat culpa velit et enim. Consequat eiusmod exercitation laboris anim. Laborum qui eu qui consequat in nulla. Sunt ea incididunt reprehenderit veniam.\r\n",
        "date": "2014-03-11T05:48:40 +07:00",
        "startTime": "11:41 AM",
        "endTime": "8:14 PM",
        "registrants": 51,
        "waitlist": 32,
        "type": "Workshop",
        "name": "ex occaecat"
      }, {
        "_id": "590944ec9aae06e9c031663c",
        "index": 31,
        "status": "Registration Closed",
        "company": "Aquazure",
        "location": "Sanders | Emerald Street",
        "about": "Id sit qui aute adipisicing esse qui ad cupidatat incididunt sint. Dolore cillum incididunt quis cupidatat nulla aliquip est consectetur adipisicing commodo. Enim irure deserunt ipsum labore proident laboris voluptate officia. Commodo irure adipisicing est aliqua veniam aute ullamco aliqua sunt eu Lorem. Amet eu reprehenderit tempor dolor eiusmod qui.\r\n",
        "date": "2015-11-01T05:28:58 +08:00",
        "startTime": "11:16 AM",
        "endTime": "6:37 PM",
        "registrants": 30,
        "waitlist": 31,
        "type": "Workshop",
        "name": "quis do"
      }, {
        "_id": "590944ec93b39d9a8d7b6899",
        "index": 32,
        "status": "Registration Closed",
        "company": "Temorak",
        "location": "Sperryville | Boynton Place",
        "about": "Deserunt excepteur consectetur et esse. Anim aute ullamco excepteur et laboris. Labore culpa non elit consectetur eu qui dolore elit Lorem irure nulla aliquip occaecat. Nostrud nulla officia commodo officia Lorem nostrud. Pariatur esse eu sint sint id amet do.\r\n",
        "date": "2016-08-20T02:45:36 +07:00",
        "startTime": "10:5 AM",
        "endTime": "6:30 PM",
        "registrants": 46,
        "waitlist": 23,
        "type": "Workshop",
        "name": "Lorem non"
      }, {
        "_id": "590944ec91fbf3756e4edc68",
        "index": 33,
        "status": "Registration Closed",
        "company": "Isotronic",
        "location": "Centerville | Mersereau Court",
        "about": "Dolor voluptate reprehenderit sit aliqua dolore. Id et ullamco commodo laborum proident. Magna consectetur commodo culpa officia sunt nisi anim veniam fugiat amet non. Anim in aliquip consectetur labore. Nisi sint sunt sunt commodo quis est mollit ex. Ad qui irure veniam voluptate minim sunt. Officia sunt nostrud ad aliqua sint Lorem ut quis non velit.\r\n",
        "date": "2014-02-07T04:52:18 +08:00",
        "startTime": "11:26 AM",
        "endTime": "9:44 PM",
        "registrants": 9,
        "waitlist": 15,
        "type": "Interview",
        "name": "exercitation nulla"
      }, {
        "_id": "590944ecd714dda8a61ecb31",
        "index": 34,
        "status": "Registration Open",
        "company": "Quantalia",
        "location": "Albrightsville | Sumner Place",
        "about": "Nulla esse eu eiusmod officia proident aute dolore est tempor. Amet deserunt culpa Lorem eiusmod ullamco ipsum labore. Esse anim nostrud incididunt nulla proident amet labore ipsum culpa aliquip proident ex reprehenderit. Excepteur enim excepteur eu ad est reprehenderit. Esse ad nisi quis deserunt tempor consectetur commodo nulla adipisicing dolore velit elit ea. Laborum sunt dolor voluptate ex velit excepteur nostrud duis in enim laborum mollit laborum reprehenderit.\r\n",
        "date": "2014-07-16T10:57:40 +07:00",
        "startTime": "8:28 AM",
        "endTime": "6:58 PM",
        "registrants": 47,
        "waitlist": 42,
        "type": "Workshop",
        "name": "mollit pariatur"
      }, {
        "_id": "590944ec6aa507318b9a9f63",
        "index": 35,
        "status": "Registration Open",
        "company": "Stucco",
        "location": "Venice | Russell Street",
        "about": "Lorem laborum amet in laborum consequat aliquip fugiat ea culpa aliquip deserunt ut duis exercitation. Enim et qui commodo et sint nostrud non. Exercitation ea laborum fugiat aliqua enim excepteur eu laborum laborum minim culpa.\r\n",
        "date": "2016-06-14T06:41:00 +07:00",
        "startTime": "9:58 AM",
        "endTime": "7:23 PM",
        "registrants": 21,
        "waitlist": 43,
        "type": "Workshop",
        "name": "labore sit"
      }, {
        "_id": "590944ecbe08e470b8e93629",
        "index": 36,
        "status": "Registration Closed",
        "company": "Spherix",
        "location": "Hailesboro | Oakland Place",
        "about": "Culpa quis mollit mollit consectetur ex aute. Do esse et ex aute in velit ullamco. Fugiat in adipisicing nostrud adipisicing ut exercitation. Consequat consequat adipisicing ex ut.\r\n",
        "date": "2016-10-21T12:26:29 +07:00",
        "startTime": "10:57 AM",
        "endTime": "11:30 PM",
        "registrants": 27,
        "waitlist": 25,
        "type": "Job Fair",
        "name": "nostrud et"
      }, {
        "_id": "590944ec8409c69bb9497e4e",
        "index": 37,
        "status": "Registration Open",
        "company": "Schoolio",
        "location": "Camas | Battery Avenue",
        "about": "Laborum pariatur commodo cupidatat incididunt in minim voluptate tempor in nostrud consequat veniam qui do. Nulla cillum pariatur cillum proident ea proident excepteur. Sint occaecat nostrud consequat magna. Nulla exercitation sit magna irure exercitation irure qui incididunt. Commodo veniam nisi minim sunt incididunt eiusmod. Reprehenderit ea in nostrud tempor eu sint exercitation cupidatat. Sunt voluptate cillum eu velit laboris ea proident labore incididunt reprehenderit cupidatat sunt laboris.\r\n",
        "date": "2014-09-23T09:46:00 +07:00",
        "startTime": "8:13 AM",
        "endTime": "8:58 PM",
        "registrants": 74,
        "waitlist": 39,
        "type": "Workshop",
        "name": "sint laborum"
      }, {
        "_id": "590944ecc75f928ec50c161f",
        "index": 38,
        "status": "Registration Closed",
        "company": "Fossiel",
        "location": "Basye | Eckford Street",
        "about": "Proident non et aute laborum deserunt fugiat ipsum labore cillum elit deserunt elit. Nulla minim in Lorem est id minim aliqua. Aliquip laborum irure id excepteur irure Lorem dolor. In reprehenderit reprehenderit ea voluptate ad commodo consequat labore excepteur quis aliquip. Ut velit elit Lorem ea ipsum in ea ut fugiat aliquip. Aute fugiat consequat culpa sunt excepteur aute eu incididunt aute. Magna ut aliquip reprehenderit dolor incididunt amet.\r\n",
        "date": "2014-04-06T08:03:45 +07:00",
        "startTime": "10:24 AM",
        "endTime": "7:37 PM",
        "registrants": 30,
        "waitlist": 55,
        "type": "Workshop",
        "name": "laboris aliqua"
      }, {
        "_id": "590944ec45d0ea9e47b65a56",
        "index": 39,
        "status": "Registration Closed",
        "company": "Overfork",
        "location": "Ona | Story Street",
        "about": "Adipisicing ad sunt cupidatat consequat deserunt est eiusmod reprehenderit est sunt sunt est exercitation ex. Esse duis voluptate irure sit nulla eiusmod. Aliquip dolore do nulla labore ullamco nisi ad eiusmod. Labore aute commodo non cupidatat qui laboris qui dolor est aliquip ipsum amet nostrud officia. Occaecat nostrud sit proident ea incididunt minim excepteur laborum nisi.\r\n",
        "date": "2017-01-25T08:31:52 +08:00",
        "startTime": "10:13 AM",
        "endTime": "11:10 PM",
        "registrants": 62,
        "waitlist": 77,
        "type": "Interview",
        "name": "adipisicing ex"
      }]
    }
  };
});
define('resources/elements/event-table',['exports', 'aurelia-framework', '../../services/events-service'], function (exports, _aureliaFramework, _eventsService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EventTable = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var EventTable = exports.EventTable = (_dec = (0, _aureliaFramework.inject)(_eventsService.EventsService), _dec(_class = function () {
    function EventTable(es) {
      _classCallCheck(this, EventTable);

      this.es = es;
    }

    EventTable.prototype.activate = function activate(model) {};

    EventTable.prototype.attached = function attached() {};

    return EventTable;
  }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=material-design-lite/material.blue-amber.min.css></require><require from=./styles/main.css></require><require from=./navigation></require><navigation><router-view></router-view></navigation></template>"; });
define('text!styles/main.css', ['module'], function(module) { module.exports = "html, body {\n  font-family: \"Roboto\", sans-serif; }\n\n.no-bottom-spacing {\n  padding-bottom: 0px; }\n  .no-bottom-spacing div.mdl-cell {\n    margin-bottom: 0px; }\n\n.right {\n  float: right !important; }\n\n.left {\n  float: left !important; }\n\n.full-width {\n  width: 100%; }\n\n.secondary-info {\n  color: rgba(0, 0, 0, 0.54); }\n\n.btn-icon i {\n  margin-right: 5px;\n  top: -2px;\n  position: relative; }\n\n.au-data-table {\n  box-shadow: none; }\n"; });
define('text!contacts.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!styles/sidenav.css', ['module'], function(module) { module.exports = ".header {\n  position: relative;\n  padding: 16px 16px 0;\n  background: #ee0979;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to bottom, #ff6a00, #ee0979);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #ff6a00, #ee0979);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n  .header .profile {\n    margin-bottom: 0px;\n    height: 64px; }\n    .header .profile i {\n      font-size: 64px; }\n  .header .name {\n    margin-top: 16px;\n    font-weight: 500;\n    margin-bottom: 0px; }\n  .header .email {\n    padding-bottom: 16px;\n    font-weight: 400;\n    margin-bottom: 0px; }\n\n.mdl-navigation__link {\n  padding-left: 16px !important;\n  transition: 0.2s all ease; }\n  .mdl-navigation__link i {\n    margin-right: 32px; }\n\n.active {\n  color: #2196f3 !important; }\n"; });
define('text!employers.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!events.html', ['module'], function(module) { module.exports = "<template><require from=./resources/elements/data-table></require><div class=mdl-grid><div class=\"mdl-cell mdl-cell--12-col\"><data-table paginate=true filter=true add=true model=events></data-table></div></div></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!navigation.html', ['module'], function(module) { module.exports = "<template><require from=./side-nav></require><div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer\"><header class=mdl-layout__header><div class=mdl-layout__header-row><span class=mdl-layout-title>${appRouter.router.currentInstruction.config.title}</span><div class=mdl-layout-spacer></div><nav class=\"mdl-navigation mdl-layout--large-screen-only\"><a class=mdl-navigation__link href=\"\"><div class=\"material-icons mdl-badge mdl-badge--overlap\" data-badge=1>notification</div></a></nav></div></header><side-nav containerless></side-nav><main class=mdl-layout__content style=background:#e0e0e0><div class=page-content><slot></slot></div></main></div></template>"; });
define('text!side-nav.html', ['module'], function(module) { module.exports = "<template><require from=./styles/sidenav.css></require><div class=mdl-layout__drawer><span class=mdl-layout-title></span><div class=header><p class=profile><i class=material-icons>account_circle</i></p><p class=name>${user.name}</p><p class=email>${user.email}</p></div><nav class=mdl-navigation><a class=\"mdl-navigation__link ${row.isActive?'active':''}\" repeat.for=\"row of appRouter.navigation\" href=${row.href}><i class=material-icons>${row.settings.icon}</i>${row.title}</a></nav></div></template>"; });
define('text!students.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!resources/elements/data-table.html', ['module'], function(module) { module.exports = "<template><require from=../../styles/data-table.css></require><require from=mdl-selectfield/mdl-selectfield.css></require><div class=\"data-table-container mdl-shadow--2dp\"><template if.bind=\"filter || add\"><div class=dt-header><button class=\"mdl-button mdl-js-button mdl-button--primary\">add</button><button class=\"mdl-button mdl-js-button mdl-button--icon right\"><i class=material-icons>filter_lists</i></button></div><div class=mdl-layout-spacer></div></template><div class=spinner if.bind=loading><div class=\"mdl-spinner mdl-js-spinner is-active\"></div></div><compose view-model=./event-table view.bind=config.tableView if.bind=!loading></compose><template if.bind=paginate><div class=dt-footer>Rows per page:<button id=demo-menu-top-right class=\"mdl-button mdl-js-button\">${rows}</button><ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect\" data-mdl-for=demo-menu-top-right><li class=mdl-menu__item click.trigger=setRows(5)>5</li><li class=mdl-menu__item click.trigger=setRows(10)>10</li><li class=mdl-menu__item click.trigger=setRows(15)>15</li><li class=mdl-menu__item click.trigger=setRows(20)>20</li></ul>${currentIndex+1} - ${currentIndex+es.items.length} of 40<button class=\"mdl-button mdl-js-button mdl-button--icon\" click.delegate=loadItems(currentIndex-rows)><i class=material-icons>chevron_left</i></button><button class=\"mdl-button mdl-js-button mdl-button--icon\" click.delegate=loadItems(currentIndex+rows)><i class=material-icons>chevron_right</i></button></div></template></div></template>"; });
define('text!resources/elements/event-table.html', ['module'], function(module) { module.exports = "<template><table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp full-width\"><thead><tr><th class=mdl-data-table__cell--non-numeric>Event</th><th class=mdl-data-table__cell--non-numeric>Duration</th><th class=mdl-data-table__cell--non-numeric>Status</th><th class=\"\">Registrants</th></tr></thead><tbody><tr repeat.for=\"item of es.items\"><td class=mdl-data-table__cell--non-numeric>${item.name}<div class=secondary-info>${item.location}</div></td><td class=mdl-data-table__cell--non-numeric>${item.date}<div class=secondary-info>${item.startTime} - ${item.endTime}</div></td><td class=mdl-data-table__cell--non-numeric>${item.status}</td><td>${item.registrants}</td></tr></tbody></table></template>"; });
define('text!styles/data-table.css', ['module'], function(module) { module.exports = ".data-table-container {\n  background: #fff; }\n  .data-table-container .spinner {\n    text-align: center;\n    padding: 12px 18px;\n    border-top: 1px #dfdfdf; }\n  .data-table-container table {\n    box-shadow: none;\n    -webkit-box-shadow: none; }\n  .data-table-container .dt-header {\n    padding: 12px 18px; }\n  .data-table-container .dt-footer {\n    padding: 12px 18px;\n    text-align: right; }\n  .data-table-container .mdl-selectfield__select {\n    width: auto;\n    display: inline-block; }\n  .data-table-container .mdl-selectfield {\n    width: auto;\n    padding: 0;\n    margin-left: 10px; }\n"; });
//# sourceMappingURL=app-bundle.js.map