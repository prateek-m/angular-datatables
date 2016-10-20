import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'with-ajax',
  templateUrl: 'with-ajax.component.html'
})
export class WithAjaxComponent {
  dtOptions: any = {};

  constructor() {
    this.dtOptions = {
      ajax: 'data.json',
      ajaxDataProp: '',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}
