import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointments: Appointment[] = [];
  newAppointmentDescritpion = "";
  newAppointmentDate = new Date();
  count= 0;

  appointment: Appointment= {
    id: 1,
    title: "Start Learning Angular",
    date: new Date("2023-10-26")
  }
ngOnInit(): void {
  let localAppointments = localStorage.getItem("appointments")
  this.appointments = localAppointments?  JSON.parse(localAppointments): []
}

  addAppointment() {
    let newAppointment: Appointment = {
      id: this.count++,
      title: this.newAppointmentDescritpion,
      date: this.newAppointmentDate
    }
    this.appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
    this.newAppointmentDescritpion="";
    this.newAppointmentDate=new Date();
  }

  deleteAppointment(id: number) {
    this.appointments.splice(id, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
