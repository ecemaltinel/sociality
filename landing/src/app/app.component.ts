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

}
