import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from '@micro-frontend/ui'

@Component({
  imports: [CommonModule, ButtonComponent],
  selector: 'app-hobby-entry',
  template: `Hobby Page? 
  
  <ui-button/>
  `,
})
export class RemoteEntryComponent {}
