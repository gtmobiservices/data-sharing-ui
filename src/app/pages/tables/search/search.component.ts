import { AfterContentInit, Component, DoCheck, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { PositionModel } from '../position.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,DoCheck {

 
  @Output()
  positionChanged: EventEmitter<PositionModel> = new EventEmitter<PositionModel>();

  @ViewChild('search', { static: true })
  searchElementRef: ElementRef;
  // full_address:any=null;
 
  constructor(private ngZone: NgZone) {
  }
   
  ngOnInit() {

    
    const autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement, {},
    );
    
   
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        // get the place result
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        // verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
       
        this.positionChanged.emit(new PositionModel(
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          
        ));
      });
    });
  }

  ngDoCheck(){
    // if(localStorage.getItem('full_address')!=null)
    // {
    //   this.full_address=localStorage.getItem('full_address');
    //   localStorage.removeItem('full_address');
    // }
  }
  
 
  

}
