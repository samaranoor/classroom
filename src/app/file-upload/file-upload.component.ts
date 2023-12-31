import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  uploadedFiles: File[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFiles.push(file);
    }
  }
}
