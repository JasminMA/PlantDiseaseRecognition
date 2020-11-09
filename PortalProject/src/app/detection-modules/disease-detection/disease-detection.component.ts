import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-disease-detection',
  templateUrl: './disease-detection.component.html',
  styleUrls: ['./disease-detection.component.css'],
  providers: [MessageService]
})
export class DiseaseDetectionComponent implements OnInit {

  uploadedFiles: any[] = [];


  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
}
