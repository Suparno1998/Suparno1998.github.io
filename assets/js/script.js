'use strict';

var app = angular.module('app', ['ngSanitize']);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
  var en = {
    'brand': "Suparno's Portfolio Website",
    'home': 'Home',
    'about': 'About',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'title': 'A Fullstack Developer',
    'desc': 'What we think, we become.',
    'aboutMe': 'Suparno Karmakar',
    'resume': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I\'m a computer science engineer turned full stack developer, an Indian who resides in Kolkata. I am currently employed by Tata Consultancy Services for whom I build web apps to ease various manual tasks and also based on client requirements. Apart from that, I am also a freelancer, working on developing websites for small businesses, which can increase both reach and value of those businesses. \n\nCompetencies:\n\t Languages & Frameworks: JavaScript, HTML5, CSS3, jQuery, Bootstrap, Angular 2+,Vue.js, React,React Native,Node.js, Express.js, MongoDB, Bash, Python, C, C++, Java, R\n\t Tools & Expertise: Git, Heroku, Responsive Web Design, Web App, Hybrid App,  Agile, Bower, Npm,  Travis CI, AJAX, Postman, Linux, UNIX, Test Automation, Regex, Google Analytics,AWS \n\t Learning & Practising: GCP, ETL Automation, Reporting Tools and Functional Programming',
    'works': 'Recent Works',
    'contactMe': 'Contact Me',
    'name': 'Suparno Karmakar',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License.'
  };
  $scope.portfolios = [{
    'src': './assets/img/task.png',
    'href': 'https://github.com/Suparno1998/task-manager',
    'desc': 'Task Manager'
  },{
    'src': './assets/img/portfolio.jpg',
    'href': 'https://github.com/Suparno1998/custom-portfolio-website',
    'desc': 'Portfolio Website Generator'
  },{
    'src': './assets/img/vlc_android_1.jpg',
    'href': 'https://github.com/Suparno1998/sub-finder',
    'desc': 'Subtitle Finder'
  },{
    'src': './assets/img/mealfi.png',
    'href': 'http://www.mealfi.com/',
    'desc': 'Mealfi Website'
  },{
    'src': './assets/img/drsmile.png',
    'href': 'https://drsmileweb.web.app/',
    'desc': 'Dr Smile Website'
  },
];
  var href = {
    'twitter': 'https://twitter.com/1729Suparno',
    'github': 'https://github.com/Suparno1998',
    'linkedin': 'https://www.linkedin.com/in/suparno-karmakar',
    'facebook': 'https://www.facebook.com/suparno1729',
    'mit': 'https://opensource.org/licenses/MIT',
    'resume' : './assets/docs/resume.pdf',
  };
  $scope.href = function(src) {
    $window.open(href[src], '_blank');
  };
  $scope.lang = function(str) {
    localStorage.visited = true;
    if (str === 'en') {
      localStorage.lang = 'en';
      $scope.isEn = true;
      $scope.isZh = false;
      for (var i in en) {
        $scope[i] = en[i];
      }
    }
  };
  if (localStorage.visited) {
    $scope.lang(localStorage.lang);
  } else {
    var locale = navigator.language.split('-')[0];
    if (locale === 'zh' || locale === 'en') {
      $scope.lang(locale);
    } else {
      $scope.lang('en');
    }
  }
}]);

app.filter('toHtml', function($filter) {
  return function(data) {
    if (!data) return data;
    return data.replace(/\n/g, '<br />').replace(/\t/g,
      '<i class="fa fa-caret-right"></i>');
  };
});

app.directive('newTab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (true) {
        element.attr('target', '_blank');
      }
    }
  };
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors: ['Home', 'About', 'Portfolio', 'Contact'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize: false,
    paddingTop: '50px',
    paddingBottom: '0',
    responsiveWidth: 0,
    responsiveHeight: 0,
  });
});

$(window).load(function() {
  $('.portfolio-img').width($('.portfolio-img').width() * 75 / 100);
  $('.portfolio').width($('.portfolio-img').width());
  var margin = ($('.jumbotron').width() - 30 - $('.portfolio-img').width() *
    3) / 2;
  for (var i = 0; i < 9; i += 3) {
    $('.portfolio').eq(i).css('margin-left', margin + 'px');
  }
});