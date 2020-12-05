import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  filename: string;

  private loadedFeature: string;

  constructor(private primeNGConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    console.log('Reading file...');
    this.primeNGConfig.ripple = true;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
