(function(){

    var app = angular.module('projecto',[ 'ngRoute'])
        

    
    .config(function($routeProvider){
        
     
        
        $routeProvider
          .when('/', {
              controller:'ProjectListController',
              templateUrl:'templates/project-list.html'
            })
          .when('/project/:projectId', {
            templateUrl: 'templates/project.html',
            controller: 'ProjectDataCtrl'
          })
            .otherwise({
              redirectTo:'/'
            });
        
        
    })
    
    .controller('ProjectListController', function(){
    
       
        this.projects = projects;    
        this.bshowAddForm = false;
        this.showdetails = false;
        
        this.project = {};
        
        this.addProject = function() {

                
           
             this.bshowAddForm = false;
            
              this.projects.push(this.project);
            
               this.project = {};


            };
        
        this.showDetails = function(projectID){
            
            this.showdetails = projectID;
            
        }
        
        this.showAddForm = function(){
            
            
             this.bshowAddForm = true;
            
        }

            
    })
    
    .controller("PanelController", function(){
        
        this.tab = 1;
        
        this.selectTab = function(setTab){
            
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
        
        
    })
  
    
  
    

    
    
    var projects = [
        {
            title: 'Front Page',
            pid : 1,
            description: 'Front Page design and features',
            img_url: 'img/s1.png',
            total_hours: 20,
            total_tasks: 30 ,
            complet_tasks : 20,
            finished : false,  
            tasks :[
                {
                    text: "Make Fron Page",
                    time : 2,
                    done : true
                    
                },
                {
                    text: "Make Movecalc Module",
                    time : 3,
                    done : false
                    
                },
                {
                    text: "Make Comment Form",
                    time : 2,
                    done : false
                    
                }
                ,
                {
                    text: "Testing",
                    time : 5,
                    done : false
                    
                }
                
            ],
            todos :[ {
                        text : "Test fron page",
                        done: false,
                        updatedate : new Date()
                     
                     },
                    {
                        text : "Test Emails",
                        done: false,
                        updatedate : new Date()
                     },
                    {
                        text : "Test fron page",
                        done: true,
                        updatedate : new Date()
                     
                     },
                    
                   ],
        },
          {
             pid : 2,
            title: 'Form Module',
            description: 'Form module design and implementation',
            img_url: 'img/s2.png',
            total_hours: 20,
            total_tasks: 30 ,
            complet_tasks : 20,
            finished : false,
              tasks :[
                {
                    text: "Make Fron Page",
                    time : 2,
                    done : true
                    
                },
                {
                    text: "Make Movecalc Module",
                    time : 3,
                    done : false
                    
                },
                {
                    text: "Make Comment Form",
                    time : 2,
                    done : false
                    
                }
                ,
                {
                    text: "Testing",
                    time : 5,
                    done : false
                    
                }
                
            ],
            todos :[ {
                        text : "Test fron page",
                        done: false,
                        updatedate : new Date()
                     
                     },
                    {
                        text : "Test Emails",
                        done: false,
                        updatedate : new Date()
                     },
                    {
                        text : "Test fron page",
                        done: true,
                        updatedate : new Date()
                     
                     },
                    
                   ],
        },
          {
             pid : 3,
            title: 'Flat rate module',
            description: 'Flat rate design and features',
            img_url: 'img/s3.png',
            total_hours: 20,
            total_tasks: 30 ,
            complet_tasks : 20,
            finished : false,
            tasks :[
                {
                    text: "Make Fron Page",
                    time : 2,
                    done : true
                    
                },
                {
                    text: "Make Movecalc Module",
                    time : 3,
                    done : false
                    
                },
                {
                    text: "Make Comment Form",
                    time : 2,
                    done : false
                    
                }
                ,
                {
                    text: "Testing",
                    time : 5,
                    done : false
                    
                }
                
            ],
            todos :[ {
                        text : "Test fron page",
                        done: false,
                        updatedate : new Date()
                     
                     },
                    {
                        text : "Test Emails",
                        done: false,
                        updatedate : new Date()
                     },
                    {
                        text : "Test fron page",
                        done: true,
                        updatedate : new Date()
                     
                     },
                    
                   ],
        },
    
    ];
    


})();