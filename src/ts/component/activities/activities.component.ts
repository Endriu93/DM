/**
 * Created by Andrzej on 06.05.2017.
 */
import { Component } from '@angular/core';
import {ActivityItem} from './activityItem';

@Component({
  selector: 'activitiess',
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})
export class ActivitiesComponent  {
  documents: ActivityItem[] = [
    {name: 'Dokument1' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'},
    {name: 'Dokument2' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'},
    {name: 'Dokument3' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'usunął', actionClass: 'bold deleted'},
    {name: 'Dokument3' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'}
  ];
}
