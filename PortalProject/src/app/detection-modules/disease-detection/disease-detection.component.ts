import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ImageService} from '../../service/image.service';

@Component({
  selector: 'app-disease-detection',
  templateUrl: './disease-detection.component.html',
  styleUrls: ['./disease-detection.component.css'],
  providers: [MessageService, ImageService]
})
export class DiseaseDetectionComponent implements OnInit {


  constructor(private messageService: MessageService, private imageService: ImageService) {
  }

  ngOnInit(): void {
  }

  imageStream: string;

  public myUploader(event, form) {
    const file = event.files[0];
    console.log("Uploaded File >> " + file.name);
    const imageReader = this.convertFileToString(file);
    // console.log('imageReader ');
    // console.log(imageReader);
    //let imageStream;
    imageReader.onload = () => {
      this.imageStream = imageReader.result.toString().split(',')[1];
      // console.log('imageStream: ' + this.imageStream);
      this.imageService.uploadImage(this.imageStream).subscribe(res => {
        console.log("Predicted >>>>>>> ")
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.body , sticky :true});
        console.log(res);
      });

    };
    form.clear();
  }

  private convertFileToString(file): FileReader {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return fileReader;
  }
}
