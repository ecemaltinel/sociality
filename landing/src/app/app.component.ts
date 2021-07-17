import { Component } from '@angular/core';
import { faBell,faFileAlt,faEdit,faComment,faHeadphonesAlt,faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sociality.io';
  faBell=faBell
  faFileAlt=faFileAlt
  faEdit=faEdit
  faComment=faComment
  faHeadphonesAlt=faHeadphonesAlt
  faBookOpen = faBookOpen
  panelOpenState=false;

  contents=[
  {icon:this.faFileAlt, name:"SUMMARY",openState:false},
  {icon:this.faEdit, name:"PUBLISH",openState:false},
  {icon:this.faComment,name:"ENGAGE",openState:false},
  {icon:this.faHeadphonesAlt,name:"LISTEN",openState:false},
  {icon:this.faBookOpen,name:"REPORT",openState:false}
]

  brands=[
    {img:"https://www.numarasiadresi.com/wp-content/uploads/2020/11/Cicek-sepeti-musteri-hizmetleri-min.jpg",name:"Cicek Sepeti"},
    {img:"https://sociality.io/assets/images/sociality-logo-sq.png",name:"Sociality"},
    {img:"https://www.find.com.tr/assets/images/Uploads/Company/1102146/find_2018719_32759285.jpg",name:"ING Bank"},
    {img:"https://primemall.s3-eu-west-1.amazonaws.com/images/brand_logo/VJY7pR-Zx_brand_logo_-main-.jpg?1445522952948",name:"E-bebek"},
    {img:"https://www.stradiji.com/wp-content/uploads/2016/02/tazedirekt.com_.png",name:"Taze Direkt"},
    {img:"https://tribalistanbul.com/newsletter/2020/assets/media/header-logo.png",name:"Tribal"}

  ]


}
