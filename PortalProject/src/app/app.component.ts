import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  filename: string;
  private loadedFeature: string;

  constructor(private primeNGConfig: PrimeNGConfig, private messageService: MessageService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('Reading file...');
    this.primeNGConfig.ripple = true;
  }

  public myUploader(event, form) {
    console.log(event);
    let file = event.files[0];
    let reader = new FileReader();
    let imageFileEncoded;
    reader.readAsDataURL(file);
    reader.onload = function () {
      imageFileEncoded = reader.result;
      //console.log(imageFileEncoded);
    };
    this.http.post<any>('https://q5i5wp9nc5.execute-api.us-east-2.amazonaws.com/dev/predictplntdisease',
      {image: imageFileEncoded}).subscribe((response) => {
      console.log('Response', response);
    });
    form.clear();
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
