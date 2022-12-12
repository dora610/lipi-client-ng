import { Component, OnInit } from '@angular/core';
import { BlogPreview } from '../Interfaces/BlogPreview';
import { blogPreviewsMock } from '../mocks/BlogDash';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blogs: BlogPreview[]
  constructor() { 
    this.blogs = blogPreviewsMock
  }

  ngOnInit(): void {
  }

}
