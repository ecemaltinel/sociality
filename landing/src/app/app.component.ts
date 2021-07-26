import { Component } from '@angular/core';
import { faBell,faFileAlt,faEdit,faComment,faHeadphonesAlt,faBookOpen,
  faCheck,faBan,faTrashAlt,faEllipsisH,
  faThumbsUp,faHeart,faRetweet,faCommentAlt,faShareAlt,faEye
} from '@fortawesome/free-solid-svg-icons';
import * as data from '../assets/data.json';

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
  faCheck = faCheck
  faBan = faBan
  faTrashAlt = faTrashAlt
  faEllipsisH = faEllipsisH
  faThumbsUp = faThumbsUp
  faHeart = faHeart
  faRetweet = faRetweet
  faCommentAlt = faCommentAlt
  faShareAlt = faShareAlt
  faEye = faEye




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

  colorCodes=[
    {name:"Published",color:"#acacac"},
    {name:"Scheduled",color:"#3ac183"},
    {name:"Need Approval",color:"#f7bf38"},
    {name:"Error",color:"#fb6450"},
    {name:"Notes",color:"#6ab2f2"}

  ]

  post = data.posts_by_date


getMyStyles(status: number){
  var color="#6ab2f2"

  if(status==0)
  color= "#f7bf38"
  else if(status==1)
  color= "#3ac183"
  else if(status==3)
  color= "#acacac"
  else if(status==4)
  color= "#fb6450"
  else
  color="#6ab2f2"


  let myStyles = {
    "background-color":color
 };
 return myStyles;
}

getColorCodes(color: string){

  let myStyle = {
  "width": "5px",
  "height": "5px",
  "border-style": "solid",
  "border-radius": "5px",
  "border-color": color,
  "background-color": color,
  "margin-right":"5px",
  "margin-left": "20px"
 };
 return myStyle;
}


convertDate(str:string,header:boolean){
 var date:Date= new Date(str)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
if(header)
var latest = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
else
var latest = date.getDate() + " " + monthNames[date.getMonth()] + " "
+ date.getFullYear() + " - " + date.getHours()+":"+date.getMinutes()
  return latest
}


}
