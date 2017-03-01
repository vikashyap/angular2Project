import { Component,Inject} from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']//,
  //providers:[MyNewServiceService]
})
export class HomeComponent{
	serviceObj;
constructor(@Inject(MyNewServiceService) serviceData){
	this.serviceObj = serviceData;

}
setHomeData(){
 this.serviceObj.setData(234);
 console.log(this.serviceObj.getData())
}

}
