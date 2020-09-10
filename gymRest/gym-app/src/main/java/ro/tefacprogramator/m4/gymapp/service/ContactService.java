package ro.tefacprogramator.m4.gymapp.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import ro.tefacprogramator.m4.gymapp.entity.Contact;

@Service
public class ContactService {

    public String fileName = "Z:\\MyGymApp\\gym-app - Remake\\gymRest\\gym-app\\gym_records.txt";

    public boolean saveContact(Contact c1) {
        try {

            String str = c1.getFullName() + "," + c1.getDateFrom() + "," + c1.getHour() + "," + c1.getPhoneNumber()+"\n";
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            writer.write(str);
            writer.close();
            return true;

        } catch (Exception e) {
            System.out.println(e);
            return false;
        }

      

    }
    
    public ArrayList<Contact> getAllContacts() {
        ArrayList<Contact> contacts = new ArrayList<Contact>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(fileName));

           String line = reader.readLine();
           while(line!=null){

            Contact c1 = new Contact();
            String []data= line.split(",");
            c1.setFullName(data[0]);
            c1.setDateFrom(data[1]);
            c1.setHour(data[2]);
            c1.setPhoneNumber(data[3]);

            contacts.add(c1);
               line = reader.readLine();
               
           }
        } catch (Exception e) {
            System.out.println(e);
        }
        

        return contacts;
        

    }

}
