
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, MapPin } from "lucide-react";

const Appointments = () => {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      specialization: "General Physician",
      date: "April 10, 2025",
      time: "10:30 AM",
      location: "PHC Chandpur",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Amit Kumar",
      specialization: "Pediatrician",
      date: "April 18, 2025",
      time: "11:00 AM",
      location: "District Hospital",
      status: "pending"
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: "Dr. Deepika Patel",
      specialization: "Gynecologist",
      date: "March 15, 2025",
      time: "9:00 AM",
      location: "Sub-Center Rajpur",
      status: "completed"
    },
    {
      id: 4,
      doctor: "Dr. Ramesh Singh",
      specialization: "General Physician",
      date: "February 28, 2025",
      time: "2:30 PM",
      location: "PHC Chandpur",
      status: "completed"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">
            View and manage your upcoming and past appointments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <div className="grid gap-4">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialization}</p>
                          
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            appointment.status === "confirmed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                          </span>
                          
                          <div className="mt-4 space-x-2">
                            <Button variant="outline" className="hover:text-white" size="sm">Reschedule</Button>
                            <Button variant="destructive" size="sm">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">No upcoming appointments.</p>
                  <Button className="mt-4 bg-green">Book Appointment</Button>
                </CardContent>
              </Card>
            )}
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
            {pastAppointments.length > 0 ? (
              <div className="grid gap-4">
                {pastAppointments.map((appointment) => (
                  <Card key={appointment.id} className="opacity-75">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialization}</p>
                          
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-green" />
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                            Completed
                          </span>
                          
                          <div className="mt-4">
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">No past appointments.</p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Appointments;
