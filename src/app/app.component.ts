import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poster-generator';
  fileUploaded: File;


  uploadFile(files: FileList){
    console.log('teste' + files[0]);
  }
}
