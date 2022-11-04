import { Component } from '@angular/core';
// import Echo from 'laravel-echo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transport_pfe';
  // echo: Echo;

  constructor() { }

  ngOnInit(): void {
  //   const echo = new Echo({
  //     broadcaster: 'pusher',
  //     key: 'asdf655a4sd6f156',
  //     wsHost: window.location.hostname,
  //     wsPort: 6001,
  //     forceTLS: false,
  //     disableStats: true,
  // });
  // echo.channel('chat')
  // .listen('ChatEvent', (res: any)=> {
  //   console.log('Chat evet data: ', res);
  // })
  }
}
