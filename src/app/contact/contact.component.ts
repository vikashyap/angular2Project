import { Component, Inject , OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';
import { User } from '../user';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
	arrayData  ={
		name:"",
		pf :"mh/pun/306641/000323",
		numb:[]
	};
constructor(private  dataService :MyNewServiceService){
	dataService.login = true;
	console.log(dataService.login);
}
//this.dataService.mainJson().subscribe((data)=> console.log(data))
ngOnInit(){
  this.dataService.mainJson().subscribe(data=>  this.arrayData = data);
}


}
