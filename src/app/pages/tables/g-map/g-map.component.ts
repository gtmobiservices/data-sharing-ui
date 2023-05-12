import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'jquery';
import { PositionModel } from '../position.model';

@Component({
  selector: 'ngx-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.scss']
})
export class GMapComponent implements OnInit {
  position: PositionModel = null;
  zoom: number = 1;
  latitude: any;
  longitude: any;
   full_address=null;
  
  
  
  @Input()
  public set searchedPosition(position: PositionModel) {
    if (position) {
      this.position = position;
      this.zoom = 15;
    }
  }

  

  setPosition(position: PositionModel) {
    this.position = position;
      this.zoom = 15;
  }

  ngOnInit() {

   
    // set up current location
    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
         this.searchedPosition = new PositionModel(
          23.0338648,72.5948376
           
         );
    //   });
    // }
    
  }

  get_address(event)
  {
    var place_id=event.placeId;
    var title;
    var address;
    var latLng=event.latLng;
    var req;

    if(place_id)
    {
      req={placeId:place_id}
    }
    else
    {
      req={location:latLng}
    } 
    setTimeout(() => {
      let elms = document.getElementsByClassName('title').item(0);
  
      if(elms)
      {
        title=elms.innerHTML;
      }
      else
      {
        title=null;
      }
    }, 0);
    
      var geocoder=new google.maps.Geocoder;
    geocoder.geocode( req, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        address=results['0'].formatted_address;
        if(place_id)
        {
            this.full_address=title+','+address;
        }
        else
        {
          this.full_address=address;
        }
       
      } else {
      }
       (<HTMLInputElement>document.getElementById("s")).value=this.full_address;
      (<HTMLInputElement>document.getElementById("addr")).value=this.full_address;
      
    });
  
  }

}


