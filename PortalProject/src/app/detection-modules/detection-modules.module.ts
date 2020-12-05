import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiseaseDetectionComponent} from './disease-detection/disease-detection.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [DiseaseDetectionComponent],
  exports: [DiseaseDetectionComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule,
    ButtonModule,
    TabViewModule
  ]
})
export class DetectionModulesModule {
}
