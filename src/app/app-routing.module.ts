import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageSenderComponent } from './message-sender/message-sender.component';

const routes: Routes = [
  {path: '', component: MessageSenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
