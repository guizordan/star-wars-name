angular.module('Main', [])
	.controller( 'mainController', function ( $location ) {
		var mainCtrl = this;
		mainCtrl.doWork = function() {
			if(mainCtrl.age <= 21){
				mainCtrl.result = CreatePadawanName();
				mainCtrl.kind = 'padawan';
			} else if (!isJedi()) {
				mainCtrl.result = CreateJediName();
				mainCtrl.kind = 'jedi';
			} else {
				mainCtrl.result = CreateSithName();
				mainCtrl.kind = 'sith';
			}
		}

		function CreateSithName(){
			var input = new GetInputFields();

			var firstCrop = input.f.substring(0,3);
			var lastCrop = input.l.substring(0,3);

			var lastName = lastCrop.concat(firstCrop).capitalizeFirstLetter();
			var array = ["Darth", lastName];
			document.getElementById("darth-vader").checked = true;
			document.getElementById("obi-wan").checked = false;

			return array.join(" "); 
		}

		function CreatePadawanName(){
			var input = new GetInputFields();

			var firstCrop = input.f.substring(0,2);
			var lastCrop = input.l.substring(0,3);
			var motherCrop = input.m.substring(0,2);
			var cityCrop = input.c.substring(0,3);

			var firstName = lastCrop.concat(firstCrop).capitalizeFirstLetter();
			var lastName = motherCrop.concat(cityCrop).capitalizeFirstLetter();
			var array = [firstName, lastName];
			document.getElementById("darth-vader").checked = false;
			document.getElementById("obi-wan").checked = true;

			return array.join(" "); 
		}

		function CreateJediName(){
			var input = new GetInputFields();

			var firstCrop = input.f.substring(0,2);
			var lastCrop = input.l.substring(0,3);
			var motherCrop = input.m.substring(0,2);
			var cityCrop = input.c.substring(0,3);

			var firstName = lastCrop.concat(firstCrop).capitalizeFirstLetter();
			var lastName = motherCrop.concat(cityCrop).capitalizeFirstLetter();
			var array = [firstName, lastName];
			document.getElementById("darth-vader").checked = false;
			document.getElementById("obi-wan").checked = true;

			return array.join(" "); 
		}	

		function GetInputFields() {
    		this.f = mainCtrl.first.toLowerCase();
			this.l = mainCtrl.last.toLowerCase();
			this.m = mainCtrl.mother.toLowerCase();
			this.c = mainCtrl.city.toLowerCase();
		}

		function isJedi() {
    		var firstName = mainCtrl.first.toLowerCase();
    		var firstLetter =  firstName.substring(0,1);

    		console.log(firstLetter);

    		if (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'].indexOf(firstLetter) >= 0) {
    			return true
    		} else {return false}
		}

		String.prototype.capitalizeFirstLetter = function() {
		    return this.charAt(0).toUpperCase() + this.slice(1);
		}

	});