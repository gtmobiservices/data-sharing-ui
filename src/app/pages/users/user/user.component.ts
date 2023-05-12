import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbIconConfig, NbToastrService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../../main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  iconConfig: NbIconConfig = { icon: '', pack: 'eva' };
  public daterange: any = {};
  date: Date;
  tc_share_data: any[] = [];
  userList: any[] = [];
  updateButton = false;

  searchText;
  page = 1;
  count = 0;
  tableSize = 10;
  selectedUserId: String;
  share_data_id = 0;
  dataLinkCPY: any;


  form: FormGroup;
  constructor(private spinner: NgxSpinnerService, private service: MainService, private toastrService: ToastrService, private router: Router, private datePipe: DatePipe) {
    this.date = new Date();
  }


  ngOnInit(): void {
    this.spinner.show();
    this.getUserInfo();
    this.getShareDataList();

    this.form = new FormGroup({
      user_id: new FormControl('', Validators.required),
      from_date: new FormControl(this.date, Validators.required),
      to_date: new FormControl(this.date, Validators.required),
    });
  }



  get f() {
    return this.form.controls;
  }


  submit() {
    var body = this.form.value;
    var data = {
      user_id: body.user_id,
      from_date: this.datePipe.transform(body.from_date, 'yyyy-MM-dd HH:mm:ss'),
      to_date: this.datePipe.transform(body.to_date, 'yyyy-MM-dd HH:mm:ss')
    }


    this.spinner.show();
    this.service.addShareDataInfo(data).subscribe(res => {
      this.spinner.hide();
      if (res['status'] == 'error') {
        this.toastrService.error('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });
      }
      else if (res['status'] == 'success') {
        this.toastrService.success('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });

        this.getShareDataList();
      }
    }, error => {
      this.spinner.hide();
    })
  }
  copyLink(data) {


    this.dataLinkCPY = data.dataUrl;
    setTimeout(() => {
      let element: HTMLElement = document.getElementById('copyLink');
      element.click();
    }, 500);
  }

  update() {
    var body = this.form.value;
    var data = {
      share_data_id: this.share_data_id,
      user_id: body.user_id,
      from_date: this.datePipe.transform(body.from_date, 'yyyy-MM-dd HH:mm:ss'),
      to_date: this.datePipe.transform(body.to_date, 'yyyy-MM-dd HH:mm:ss')
    }


    this.spinner.show();
    this.service.updateShareDataInfo(data).subscribe(res => {
      this.spinner.hide();
      if (res['status'] == 'error') {
        this.toastrService.error('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });
      }
      else if (res['status'] == 'success') {
        this.toastrService.success('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });
        this.updateButton = false;

        this.getShareDataList();
      }
    }, error => {
      this.spinner.hide();
    })
  }

  editsahreData(data) {
    this.updateButton = true;
    this.share_data_id = data.share_data_id;
    this.selectedUserId = data.user_id;
    this.form.get('user_id').setValue(this.selectedUserId);
    this.form.get('from_date').setValue(new Date(data.from_date));
    this.form.get('to_date').setValue(new Date(data.to_date));

  }


  getUserInfo() {
    this.updateButton = false;
    this.service.getUserInfo().subscribe((data: any) => {
      this.spinner.hide();
      if (data['status'] == 'error') {
        this.toastrService.error('', data['message']);
      }
      if (data['status'] == 'success') {
        this.userList = data['tc_user'];
      }
    })
  }

  getShareDataList() {
    this.updateButton = false;
    this.spinner.show();
    this.service.getShareDataList().subscribe((data: any) => {
      this.spinner.hide();
      if (data['status'] == 'error') {
        this.toastrService.error('', data['message']);
      }
      if (data['status'] == 'success') {
        this.tc_share_data = data['tc_share_data'];
      }
    })
  }


  activeShareData(share_data_id) {
    this.spinner.show();
    this.updateButton = false;
    var data = {
      "share_data_id": share_data_id,
      "status": true
    }
    this.service.activeShareData(data).subscribe(res => {
      this.spinner.hide();
      if (res['status'] == 'error') {
        this.toastrService.error('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });

      }
      else if (res['status'] == 'success') {
        this.toastrService.success('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });
        this.getShareDataList();

      }
    }, error => {
      this.spinner.hide();
    })
  }

  inactiveShareData(share_data_id) {
    this.spinner.show();
    this.updateButton = false;
    var data = {
      "share_data_id": share_data_id,
      "status": false
    }
    this.service.activeShareData(data).subscribe(res => {
      this.spinner.hide();
      if (res['status'] == 'error') {
        this.toastrService.error('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });

      }
      else if (res['status'] == 'success') {
        this.toastrService.success('', res['message'], {
          closeButton: true,
          timeOut: 3000
        });
        this.getShareDataList();
      }
    }, error => {
      this.spinner.hide();
    })
  }


  //pagination

  Cancel() {
    this.updateButton = false;
    this.form.reset();
    this.form.get('user_id').setValue('');
    this.form.get('from_date').setValue(this.date);
    this.form.get('to_date').setValue(new Date(this.date));
  }

  onTableDataChange(event) {
    this.page = event;
  }

  onTableSizeChange(event): void {
    this.page = 1;
    this.tableSize = event.target.value;
  }

  onSearchChange(event) {
    this.page = 1;
  }

  reset() {
    this.updateButton = false;
  }
}
