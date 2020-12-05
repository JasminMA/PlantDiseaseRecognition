import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {

  constructor(private http: HttpClient) {
  }

  public uploadImage(imageStream: string) {
    return this.http.post<any>('https://2b7hfzmaf2.execute-api.us-east-2.amazonaws.com/dev/testcallinglamda',
      {image: imageStream});
  }

}
