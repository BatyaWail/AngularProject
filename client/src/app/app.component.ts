import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first';

}
