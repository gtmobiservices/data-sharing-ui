import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';

//ADDED
// import 'leaflet-rotatedmarker';

@Component({
  selector: 'ngx-timeline-map',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline-map.component.html',
  styleUrls: ['./timeline-map.component.scss']
})
export class TimelineMapComponent implements OnInit {

  public map: any;
  public layer: any;
  constructor() { }

  ngOnInit(): void {
    if (!this.map) {
      this.initializeMap();
    }
  }

  initializeMap() {
    this.map = L.map('map', { 'center': [23.0338648, 72.5948376], zoom: 15 });
    this.layer = L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 12,
      minZoom: 3,
    }).addTo(this.map);
    var satelite = L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', { maxZoom: 12, minZoom: 3, id: 'sat', attribution: "Satelite" }),
      roadmap = L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', { maxZoom: 12, minZoom: 3, id: 'road', attribution: "Roadmap" }),
      hybrid = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', { maxZoom: 12, minZoom: 3, id: 'hybr', attribution: "Hybrid" }),
      terrain = L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}', { maxZoom: 12, minZoom: 3, id: 'ter', attribution: "Terrain" });

    var basemap = {
      "Satelite": satelite,
      "Roadmap": roadmap,
      "Hybrid": hybrid,
      "Terrain": terrain
    }
    var data = [{ "time": "845712" }]
    this.map = L.map('map', { 'center': [23.0338648, 72.5948376], zoom: 15, layers: [satelite, roadmap, hybrid, terrain] });
    new L.Control.Layers(basemap).addTo(this.map);
    new L.Control.Scale().addTo(this.map);

  }

}