import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: any;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.fetchImages();
  }

  private fetchImages(){
    let header = new HttpHeaders();
    this.http.get("http://localhost:5000/postdata",{headers: header}).subscribe( (res:any) =>{
      res.map((img:any)=>{
        img.image.url = 'http://localhost:5000' + img.image.url;
        return img;
      });
      this.images = res;
    })
  }

}
