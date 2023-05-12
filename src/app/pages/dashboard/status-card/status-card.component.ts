import { Component, Input } from '@angular/core';
import { MainService } from '../../../main.service';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon status-{{ count }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="title h5">{{count}}</div>
      </div>
      
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  @Input() count; 
  constructor(private service: MainService) {
  }
  ngOnInit(): void {

    this.getUsers();
  }
  users = [];

  getUsers() {
    this.service.getUserInfo().subscribe((data: any) => {
     
      this.users = data['count'];
    this.count = this.users;

    })
  }
}