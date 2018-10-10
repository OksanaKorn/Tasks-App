import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
        <aside class="side-block">
          <h2>Dairy App</h2>
          <p>Comment with no sence</p>
        </aside>
        <section class="main-content">
          <tasks-list></tasks-list>
        </section>
    </div>
  `,
  styles: [`
    .side-block {
      background-color: #2C3140;
      width: 15vw;
      padding: 30px 20px;
    }
    .side-block h2 {
      color: #FFFFFF;
    }
    .side-block p {
      color: #807D78;
      font-size: 20px;
    }
    .main-content {
      background-color: #F9F9F8;
      width: 85vw;
    }
    .wrapper {
      display: flex;
      width: 100vw;
      height: 100vh;
      font-family: 'Niramit', sans-serif;
    }
  `]
})
export class AppComponent {
  title = 'Comment-app';
}
