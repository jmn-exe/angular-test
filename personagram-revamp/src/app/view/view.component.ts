import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  private id: any;
  post:any;
  constructor(private http: HttpClient, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost(){
    this.http.get("http://localhost:5000/post/"+this.id).subscribe( (res:any) =>{
      res.image.url = 'http://localhost:5000' + res.image.url;
      this.post = res;
    })
  }
}
