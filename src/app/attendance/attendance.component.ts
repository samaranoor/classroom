// attendance.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  students: string[] = [];
  presentStudents: string[] = [];

  constructor() {
    // قائمة الطلاب
    this.students = ['kalid', 'Salim', 'Ali', 'Mohammed', 'Fahad'];
  }

  recordAttendance(studentName: string) {
    this.presentStudents.push(studentName);
  }
}
