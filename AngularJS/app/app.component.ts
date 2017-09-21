import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'ngc2-app',
	templateUrl: './app/app.template.html'
})
export class AppComponent {
  constructor(private modal: ModalService) { }
}