import { Component } from '@angular/core';
import { faBell,faFileAlt,faEdit,faComment,faHeadphonesAlt,faBookOpen,
  faCheck,faBan,faTrashAlt,faEllipsisH,
  faThumbsUp,faHeart,faRetweet,faCommentAlt,faShareAlt,faEye, faLessThanEqual
} from '@fortawesome/free-solid-svg-icons';
import * as data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  post = data.Sociality.posts_by_date


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
    {img:"https://www.numarasiadresi.com/wp-content/uploads/2020/11/Cicek-sepeti-musteri-hizmetleri-min.jpg",name:"CicekSepeti"},
    {img:"https://sociality.io/assets/images/sociality-logo-sq.png",name:"Sociality"},
    {img:"https://www.find.com.tr/assets/images/Uploads/Company/1102146/find_2018719_32759285.jpg",name:"INGBank"},
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

brandSelected(item:string){
  if(item=="CicekSepeti")
  this.post = data.CicekSepeti.posts_by_date
  else if(item=="Sociality")
  this.post = data.Sociality.posts_by_date
  else
  this.post = data.dummy.posts_by_date




  var a = <HTMLInputElement>document.getElementById(item)
  a.className ="tab-pointer-active"

  var a2 = <HTMLInputElement>document.getElementById(item+"+img")
  a2.className="logos-active"

   this.brands.forEach(element => {
     if(element.name!=item){
      var b = <HTMLInputElement>document.getElementById(element.name)
      b.className ="tab-pointer"
      var b2 = <HTMLInputElement>document.getElementById(element.name+"+img")
      b2.className="logos"
     }
   });
}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.brandSelected("Sociality")

}

httpCheck(p:string){
  if(p.includes("http"))
  return true
  else
  return false
}

httpEdit(p:string,id:string){
  var edit = p.split("http");
  var a = <HTMLInputElement>document.getElementById(id)
  a.innerHTML = `${edit[0]}<a href="http${edit[1].trim()}">http${edit[1].trim()}</a>`
  //return `${edit[0]}<a href="http${edit[1].trim()}">http${edit[1].trim()}</a>`
  //return edit[0] + " <a href='http"+edit[1].trim()+"'>http"+edit[1].trim()+"</a>"
}
}
