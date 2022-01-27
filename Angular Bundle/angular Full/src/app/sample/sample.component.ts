import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  selector: 'app-sample',
})
export class SampleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  text = 'number';
  color = 'red';
  demo = 'demo2';
  number = 4;
  value: number = 0;
  flag = false;
  planet = 'sea';
  elementArray = [
    { name: 'basava', place: 'bangaluru' },
    { name: 'charan', place: 'vishakapattanam' },
    { name: 'faisal', place: 'ramnagara' },
  ];

  constructor(private sampleService:SampleService) {
    console.log('inside sample component  constructor');
    console.log(this.sampleService.getData());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside sample component OnChanges');
  }

  ngOnInit(): void {
    console.log('inside sample component OnInit');
  }

  ngDoCheck(): void {
    console.log('inside sample component DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('inside sample component AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('inside sample component AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('inside sample component AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('inside the component AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('inside the component OnDestroy');  
  }

  @Input() dataFromParent: any;
  @Input() onemoredata: any;

  namo() {
    alert('hey deep sea divers');
  }

  @Output() newItemEvent = new EventEmitter<string>();
  newItem = 'data';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  send4() {
    4;
  }

  onclick() {
    alert('you have clicked the button');
  }

  toggle() {
    this.flag = !this.flag;
  }
}
