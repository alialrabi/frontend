import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';

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
  public pleaseWait;

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

  constructor(public navCtrl: NavController, public navParams: NavParams ,private loading: LoadingController ,public translateService: TranslateService , private app: App, private principal: Principal, public captainService: CaptainService) {
  
    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {
      
      this.pleaseWait = values.PLEASE_WAIT
    })
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainsMapPage');

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;

      load.dismiss();

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

    }).catch((err) =>{
      load.dismiss();
    });




  }
  loadmap() {
    let latLng = new google.maps.LatLng(31.214262511126286, 29.98716374830485);

    let mapOptions = {
      center: latLng,
      zoom:12
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

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()


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

      load.dismiss();

    }, err => {
      console.log(err, 'err');
      load.dismiss();

    })
  }

  getAllAgencyCaptains() {
    console.log('****');

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.deletemarkers();
    this.captainService.getByAgencyId(this.account.id).subscribe(res => {
      console.log(res, 'res');
      res.forEach(element => {

        let latLng = new google.maps.LatLng(Number.parseFloat(element.latitude), Number.parseFloat(element.longitude));
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

      load.dismiss();
    }, err => {
      console.log(err, 'err');

      load.dismiss();
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
