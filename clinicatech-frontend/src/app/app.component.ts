import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';  // Adicione esta linha


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinicatech-frontend';
}
