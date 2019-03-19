import { Component, OnInit } from '@angular/core';
declare var $: any; // JQuery

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  public widgets: any[] = [
    {
      x: '0',
      y: '0',
      w: '4',
      h: '1',
      text: 'PieBar'
    },
    {
      x: '4',
      y: '0',
      w: '4',
      h: '4',
      text: 'PieBar'
    },
    {
      x: '12',
      y: '0',
      w: '4',
      h: '1',
      text: 'PieBar'
    },
    {
      x: '0',
      y: '2',
      w: '2',
      h: '2',
      text: 'PieBar'
    },
    {
      x: '8',
      y: '2',
      w: '4',
      h: '2',
      text: 'PieBar'
    },
    {
      x: '0',
      y: '0',
      w: '4',
      h: '1',
      text: 'PieBar'
    },
  ];

  constructor() {
  }

  ngOnInit() {
    let options = {
      cellHeight: 80,
      verticalMargin: 0
    };

    // TODO: listen to an event here instead of just waiting for the time to expire
    setTimeout(function () {
      $('.grid-stack').gridstack(options).on('dragstop', function(event, ui) {
        var grid = this;
        var element = event.target;
        console.log('grid', grid);
        // console.log('element', element);
    });;
    }, 300);
   }

}
