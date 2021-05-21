
(function (){
	'use strict';
	var app = angular.module('angularTable', ['ui.bootstrap']);
app.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});
//controller
app.controller('PageCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
	
    $scope.selectedIndex =null;
    $scope.selectedPerson=null;
	$scope.selectPerson=function(item, index){
        $scope.selectedIndex=index;
        $scope.selectedPerson=item;
    }
//items in tr

 
	$scope.items = [{
		"name":"Martin",
        "email": "martin@patientbond.com",
        "phone": "1234567890",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "24",
       "address": "New York",
       "Qualification":[{
        "education":"Matriculation",
        "institute":"DPS",
        "startDate":"25-08-2007",
        "endDate":"29-04-2016",
        "cgpa":"9.5",
        delete:false,
        countRow:++index
    }]
},
	 {
		"name": "Harry",
        "email": "harry@hotmail.com",
        "phone": "456745678",
        "gender": "male",
        "dob": "25-08-2000",
         "age": "22",
         "address": "Delhi",
         "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
    }, {
		"name": "Pat",
        "email": "pat@hotmail.com",
        "phone": "3435344535",
        "gender": "male",
        "dob": "25-08-2000",
        "age":"21",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Alex",
        "email": "alex@hotmail.com",
       "phone": "0987654321",
       "gender": "male",
       "dob": "25-08-2000",
        "age":"23",
        "address": "California",
        "Qualification":[{
            "education":"",
            "institute":"",
            "startDate":"",
            "endDate":"",
            "cgpa":"",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Nora Smith",
        "email": "nora@hotmail.com",
        "phone": "6754890876",
        "gender": "female",
        "dob": "25-08-2000",
        "age": "23",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Name3",
        "email": "3name@hotmail.com",
        "phone": "6754498876",
        "gender": "female",
        "dob": "25-08-2000",
        "age": "23",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Name4",
        "email": "4name@hotmail.com",
        "phone": "675434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "29",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "name8",
		"email": "8name@hotmail.com",
        "phone": "8775434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "29",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "name 9",
		"email": "9name@hotmail.com",
        "phone": "975434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "19",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "name 10",
		"email": "10name@hotmail.com",
        "phone": "877434586",
        "gender": "female",
        "dob": "25-08-2000",
        "age": "24",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	},{
		"name": "Peter",
		"email": "peter@hotmail.com",
        "phone": "8755434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "23",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Frank",
		"email": "8name@hotmail.com",
        "phone": "8775434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "29",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Joe",
		"email": "joe@hotmail.com",
        "phone": "774434586",
        "gender": "male",
        "dob": "25-08-2000",
        "age": "23",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Ralph",
		"email": "ralph@hotmail.com",
        "phone": "87654586",
        "gender": "male",
        "age": "29",
        "dob": "25-08-2000",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Gina",
		"email": "Gina@hotmail.com",
        "phone": "775434586",
        "gender": "female",
        "dob": "25-08-2000",
        "age": "23",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Sam",
		"email": "sam@hotmail.com",
        "phone": "888434586",
        "gender": "male",
        "dob": "25-08-1900",
        "age": "29",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}, {
		"name": "Britney",
		"email": "britney@hotmail.com",
        "phone": "5555434586",
        "gender": "female",
        "dob": "25-08-2000",
        "age": "26",
        "address": "Delhi",
        "Qualification":[{
            "education":"Matriculation",
            "institute":"DPS",
            "startDate":"25-08-2007",
            "endDate":"29-04-2016",
            "cgpa":"9.5",
            delete:false,
            countRow:++index
        }]
	}
	
	];
    //data for education and qualification
    $scope.education="";
    $scope.institute="";
    $scope.startDate="",
    $scope.endDate="";
    $scope.cgpa="";
    $scope.selectedRowData={};
	
// 	localStorage.setItem("sample_data", JSON.stringify($scope.items));
// 	localStorage.setItem("env", 'dev');
	
// if(localStorage.getItem('sample_data') != null){
//    $scope.items = JSON.parse(localStorage.getItem('sample_data'));
//    $scope.env = localStorage.getItem("env");
// }
	
	
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};

	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};


	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 5; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);

//adding another user

	//function to save the data which was added in the input in modal
	$scope.addUserData=function()
    {
        if($scope.name!="" && $scope.email!=""&& $scope.phone!=""&& $scope.gender!=""&& $scope.age!="")
        {
			//adding the new user at top of the table using unshift
        $scope.items.unshift({
            name:$scope.name,
            email:$scope.email,
            phone:$scope.phone,
            gender:$scope.gender,
            age:$scope.age,
            address: $scope.address,
            dob: $scope.dob,
           
            Qualification:$scope.Qualification
          
        })
      
	
	}
	
	
}
//calculate age from dob
$scope.calculateAge=function(){
	
const today=new Date();
const diff=Math.abs(today-$scope.dob);
	var decAge=diff/(1000*60*60*24*365);
	if(decAge>0 && decAge<1){
		$scope.age="0";

	}
	else if(decAge>1 && decAge<2){
		$scope.age="1";
	}
	else{
		$scope.age=Math.floor(diff/(1000*60*60*24*365));
	}
   
	return $scope.age;
}



  //education and qualification

  var index=0; //keeping track of rows
     $scope.Qualification=[
        {
            education:"",
            institute:"",
            startDate:"",
            endDate:"",
            cgpa:"",
            
            countRows:index,

        }
    ]
//adding a new row
    $scope.add=function(addRow)
    {

        var newRow={
            education:"",
            institute:"",
            startDate:"",
            endDate:"",
            cgpa:"",
            delete:false,
            countRows:++index
        }
//add new row when add icon is clicked
       $scope.Qualification.push(newRow);
      
     
       var temp=0;
       angular.forEach($scope.Qualification,function(row)
       {
           row.countRows=temp;
           temp++;
       })

    }
	//remove rows from table
    $scope.remove=function(deleteRow)
    {
        if($scope.Qualification.length!=1)
        {

          deleteRow.delete=true;
          var oldRow=$scope.Qualification;
       
           $scope.Qualification=[];
     
          
           angular.forEach(oldRow,function(selected)
           {
          
              if(selected.delete==false)
              {
                  $scope.Qualification.push(selected);
                  $scope.institute="";
                  $scope.startDate="";
                  $scope.endDate="";
             
               }
           }) 
       }
        
	}
    //function which triggers when clicked on table row to display info
    $scope.bioDataModal=function(userBioData)
    {
        $("#largeModal").modal("show");
     
        $scope.selectedRowData=userBioData;
        console.log($scope.selectedRowData);
        
    }
    //adding education & qualification
    $scope.addQualification=function(selectedRow,value,modelName)
    {
        if(modelName=='dropdown')
        {
            selectedRow.education=value;
        }
        if(modelName=='institute')
        {
        selectedRow.institute=value;
        }
        if(modelName=='startDate')
        {
            {  
                var day=value.getDate()
                var month=value.getMonth();
                var year=value.getFullYear();
       
                 var dateString=day+"/"+month+"/"+year;
                
                selectedRow.startDate=dateString;
            }
            
        }
        if(modelName=='endDate')
        {
            {  
                var day=value.getDate()
                var month=value.getMonth();
                var year=value.getFullYear();
       
                 var dateString=day+"/"+month+"/"+year;
                selectedRow.endDate=dateString;
            }
        }
        if(modelName=='cgpa')
        {
           selectedRow.cgpa=value;
        }
        console.log($scope.Qualification);
    }
   

//reset form modal
$scope.formHandler = function() {
	$scope.name="";
$scope.email="";
$scope.phone="";
$scope.gender="";
$scope.dob="";
$scope.address="";
$scope.checked="";

$scope.Qualification=[
	{
		education:"",
		institute:"",
		startDate:"",
		endDate:"",
		cgpa:"",
		delete:false,
		countRows:index,

	}
]
$scope.myForm.$setPristine();
$scope.myForm.$setUntouched();
	
  };
 
	
}]);

})();