package ro.tefacprogramator.m4.gymapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ro.tefacprogramator.m4.gymapp.entity.Contact;
import ro.tefacprogramator.m4.gymapp.service.ContactService;

@RestController
public class ContactController {

    @Autowired
    private ContactService service;

    @GetMapping("/")
    public String showMessage(@RequestBody Contact c1) {
        return "Hello " + c1.getFullName() + c1.getDateFrom();
    }

    @GetMapping("/schedule-list")
    public List<Contact> getContacts() {
        ArrayList<Contact> contacts = new ArrayList<Contact>();
        Contact c1 = new Contact();
        c1.setFullName("Mihai Popescu");
        c1.setDateFrom("09/09/2020");
        c1.setHour("05:00");
        c1.setPhoneNumber("0700000000");

        contacts.add(c1);
        return contacts;
    }
    @CrossOrigin
    @PostMapping("/schedule-now")
    public String saveSchedule(@RequestBody Contact c1) {

        if (c1.getFullName() == null || c1.getFullName().isEmpty()) {
            return " Numele este gol !!";
        }
        if (c1.getDateFrom() == null || c1.getDateFrom().isEmpty()) {
            return " Lipseste data !";
        }
        if (c1.getHour() == null || c1.getHour().isEmpty()) {
            return "Lipseste ora !";
        }
        if (c1.getPhoneNumber() == null || c1.getPhoneNumber().isEmpty()) {
            return " Nr de telefon lipseste!";
        }
        if (service.saveContact(c1)) {
            return "success";
        }

        return "failed";
    }
    @CrossOrigin
    @GetMapping("/schedules-list")
    public List<Contact> getAllContactss(){
       return service.getAllContacts();
    }
}
