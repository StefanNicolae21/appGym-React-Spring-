package ro.tefacprogramator.m4.gymapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import ro.tefacprogramator.m4.gymapp.entity.Contact;

@Service
public class ContactService {

    private List<Contact> contacts = new ArrayList<>();

    public boolean saveContact(Contact c) {
        return contacts.add(c);
    }

    public List<Contact> getAllContacts() {
        return contacts;
    }
}
