package ro.tefacprogramator.m4.gymapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ro.tefacprogramator.m4.gymapp.entity.Contact;
import ro.tefacprogramator.m4.gymapp.service.ContactService;

@RestController
public class ContactController {

    @Autowired
    private ContactService service;

    @CrossOrigin
    @PostMapping("/schedule-now")
    public String saveSchedule(@RequestBody Contact c1) {

        if (c1.getFullName() == null || c1.getFullName().isEmpty()) {
        return "Numele este gol !!";
    }
    if (c1.getDateFrom() == null || c1.getDateFrom().isEmpty()) {
        return "Lipseste data !";
    }
    if (c1.getStartHour() == null || c1.getStartHour().isEmpty()) {
        return "Lipseste ora de început!";
    }
    if (c1.getEndHour() == null || c1.getEndHour().isEmpty()) {
        return "Lipseste ora de sfârșit!";
    }
    if (c1.getPhoneNumber() == null || c1.getPhoneNumber().isEmpty()) {
        return "Nr de telefon lipseste!";
    }
    if (service.saveContact(c1)) {
        return "success";
    }
    return "failed";
    }

    @CrossOrigin
    @GetMapping("/schedules-list")
    public List<Contact> getAllContacts() {
        return service.getAllContacts();
    }
}

