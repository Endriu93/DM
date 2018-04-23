/**
 * Created by Andrzej on 06.05.2017.
 */
import { Component } from '@angular/core';
import {DocumentItem} from './documentItem';

@Component({
  selector: 'documents',
  templateUrl: 'ts/component/documents/documents.html',
  styleUrls: ['ts/component/documents/documents.css']
})
export class DocumentsComponent  {
  documents: DocumentItem[] = [
    {name: 'Dokument1' , icon: 'folder', category: 'kategoria 1', addedBy: 'User 11'},
    {name: 'Dokument2' , icon: 'folder', category: 'kategoria 2', addedBy: 'User 11'}
  ];
}
