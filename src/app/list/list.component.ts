import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people = [
    {
      name: 'a',
      age: '1',
      city: 'CityA',
      edit: false
    },
    {
      name: 'b',
      age: '2',
      city: 'CityB',
      edit: false
    },
    {
      name: 'c',
      age: '3',
      city: 'CityC',
      edit: false
    }
  ];
  constructor(private router: Router) { }
  changeEdit(index: number) {
    console.log('calling');
    this.people[index].edit = true;
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
