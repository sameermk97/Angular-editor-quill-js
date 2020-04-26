import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editorForm: FormGroup;
  editorContent: string;

  editorStyle = {
    height: '300px'

  }

  config = {
    
    
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  maxLength(e){
    if(e.editor.getLength() > 500){
      e.editor.deleteText(500, e.editor.getLength());
    }
  }
}
