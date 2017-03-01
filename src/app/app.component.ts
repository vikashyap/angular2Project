import { Component, Inject } from '@angular/core';
import { MyNewServiceService } from './my-new-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[MyNewServiceService]
})
export class AppComponent {
	title:any;
	list :any=[];
  getServiceData:any = [];
	constructor(@Inject(MyNewServiceService) serviceData){
		this.title = 'app works!';
		this.list =[
		  	{title:'home',isActive:true},
		  	{title:'contact',isActive:false},
		  	{title:'about',isActive:false}
  		];
     this.getServiceData = serviceData.data;
     console.log(serviceData.login);
     //serviceData.login = true;
	};
	setActive(index){
  	for (var i = 0; i < this.list.length; i++) {
  		if(index === i){
  			this.list[i].isActive = true;
  		}else{
  			this.list[i].isActive = false;
  		}
  		
  	}
  }
}
