import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],

})
export class HeaderPage {
  isMenuOpen = false;
  dropdown = false;
  
  constructor(private route: Router, private commonService: CommonServiceService, 
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  logout() {
    this.commonService.showLoader().then(()=>{
    localStorage.clear(); 
    this.route.navigate(['/login'],{replaceUrl:true});
    this.commonService.showMessage(`Logout Successfully`, 'success');
    this.commonService.hideLoader();
  });
  }

  toggleMenu($event) {    
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

}
