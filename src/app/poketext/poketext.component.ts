import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';

@Component({
  selector: 'app-poketext',
  templateUrl: './poketext.component.html',
  styleUrls: ['./poketext.component.css'],
})
export class PoketextComponent implements AfterViewInit {
  editor!: Editor;

  extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ];

  @ViewChild('element') child!: ElementRef;

  content = '<b>oi</b>';

  ngAfterViewInit() {
    this.editor = new Editor({
      element: this.child.nativeElement,
      extensions: [StarterKit],
      content: this.content,
    });
  }
}
