import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgImageFilesDirective } from './directives/ng-Image-files.directive';


@NgModule({
  declarations: [UploadImageComponent, NgImageFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
