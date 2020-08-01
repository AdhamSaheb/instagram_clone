import { Post } from './../../Models/Post.model';
import { Story } from './../../Models/Story.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  stories : Story[] = [
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
    new Story('Jake Meao','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ66LRYUw-8gltdU8lH1OX5U8n90J58ypQ62A&usqp=CAU'),
  ]
  posts : Post[] = [
    new Post('Jake Meaw',
    'https://www.aljazeera.com/mritems/Images/2020/4/13/ecab8c7af42a439d9043b0ade6e1f05b_18.jpg',
   'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
   12,
   'All dolled up'),

  ]

  ngOnInit(): void {
  }

}

