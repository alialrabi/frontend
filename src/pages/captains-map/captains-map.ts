import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';

/**
 * Generated class for the CaptainsMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-captains-map',
  templateUrl: 'captains-map.html',
})
export class CaptainsMapPage {

  @ViewChild('map') elementRef: ElementRef;

  map: any;
  public account = null;
  public userType = '';

  public captainsMarkers = [];
  // public captains = [
  //   {
  //     busy: true,
  //     code: 259,
  //     evaluation: "4",
  //     id: 1003,
  //     image: null,
  //     imageContentType: "",
  //     latitude: 26.555555512,
  //     longitude: 12.5824521259,
  //     name: "mahmoud",
  //     phone: "052558662"
  //   },
  //   {
  //     busy: false,
  //     code: 259,
  //     evaluation: "4",
  //     id: 1003,
  //     image: null,
  //     imageContentType: "",
  //     latitude: 24.555555512,
  //     longitude: 12.5824521259,
  //     name: "ahmed",
  //     phone: "052558662"
  //   },
  //   {
  //     busy: true,
  //     code: 259,
  //     evaluation: "4",
  //     id: 1003,
  //     image: null,
  //     imageContentType: "",
  //     latitude: 25.555555512,
  //     longitude: 12.5824521259,
  //     name: "mostafa",
  //     phone: "052558662"
  //   }
  // ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private principal: Principal, public captainService: CaptainService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainsMapPage');

    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.userType = 'agency'
        this.loadmap();
      }
      else {

        this.userType = 'admin';
        this.loadmap();

      }
      console.log(this.userType);

    });




  }
  loadmap() {
    let latLng = new google.maps.LatLng(26.555, 12.5824);

    let mapOptions = {
      center: latLng,
      zoom: 15
    }

    this.map = new google.maps.Map(this.elementRef.nativeElement, mapOptions);
    console.log('----------');

    console.log(this.account, this.userType);

    if (this.userType == 'admin') {

      this.getAllCaptains();
    } else if (this.userType == 'agency') {
      this.getAllAgencyCaptains();
    }
  }

  getAllCaptains() {
    console.log('****');



    this.deletemarkers();
    this.captainService.getAll().subscribe(res => {
      console.log(res, 'res');
      res.forEach(element => {

        let latLng = new google.maps.LatLng(element.latitude, element.longitude);
        if (!element.busy) {
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            title: element.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          this.captainsMarkers.push(marker);
        } else {
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            title: element.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          this.captainsMarkers.push(marker);
        }



      });

    }, err => {
      console.log(err, 'err');


    })
  }

  getAllAgencyCaptains() {
    console.log('****');



    this.deletemarkers();
    this.captainService.getByAgencyId(this.account.id).subscribe(res => {
      console.log(res, 'res');
      res.forEach(element => {

        let latLng = new google.maps.LatLng(element.latitude, element.longitude);
        if (!element.busy) {
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            title: element.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          this.captainsMarkers.push(marker);
        } else {
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            title: element.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          this.captainsMarkers.push(marker);
        }



      });

    }, err => {
      console.log(err, 'err');


    })
  }

  deletemarkers() {
    this.clearMarkers();
    this.captainsMarkers = [];

  }
  setMapOnAll(map) {
    for (var i = 0; i < this.captainsMarkers.length; i++) {
      this.captainsMarkers[i].setMap(map);
    }
  }
  clearMarkers() {
    this.setMapOnAll(null);
  }



}
