import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const router : Routes=[
	{path:'',redirectTo:'home',pathMatch:'full'},
	{path:'about',component:AboutComponent},
	{path:'home',component:HomeComponent},
	{path:'contact',component:ContactComponent}

];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
