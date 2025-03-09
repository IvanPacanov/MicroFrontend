import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  MatToolbarModule} from "@angular/material/toolbar"
import { MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import { MatSidenavModule} from '@angular/material/sidenav'

@Component({
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'micro-frontend';
}
