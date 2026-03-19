from classes.customer_types import Customer_px, Customer_pf, Customer_sx, Customer_sf
import csv
from classes.videos import Video
from classes.customers import Customer

class Store:
    def __init__(self, name):
        self.name = name
        self.customer_types = {
            'sx' : Customer_sx,
            'px' : Customer_px,
            'sf' : Customer_sf,
            'pf' : Customer_pf
        }
        self.customers = self.load_data("./data/customers.csv", "customer")
        self.inventory = self.load_data("./data/videos.csv", "video")
        self.menu = "== Welcome to Code Platoon Video! == \n Please select an option: \n 1. View Inventory \n 2. View Customers \n 3. New Customer \n 4. Rent a Video \n 5. Return a Video \n 6. Exit"
    
    def load_data(self, path_to_csv, data_type):
        data_dict = []
        try:
            with open(path_to_csv, 'r') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    if data_type == "video":
                        row['release_year'] = int(row.get("release_year"))
                        row['copies_available'] = int(row.get('copies_available'))
                        data_dict.append(Video(**row))
                    elif data_type == "customer":
                        if row['account_type'] == 'px':
                            data_dict.append(Customer_px.create_customer(row))
                        else:
                            data_dict.append(Customer.create_customer(row))
        except FileNotFoundError:
            return {}
        
        final_dict = {}
        for item in data_dict:
            if data_type == 'video':
                final_dict[item.title] = item
            else:
                final_dict[item.id] = item
        return final_dict
    
    def new_customer(self):
        print("== NEW CUSTOMER ==")
        try:
            first_name = input("Enter first name: ").strip()
            last_name = input("Enter last name: ").strip()
            print("Account Types: \n sx - Standard (max 1 rental, R-rated allowed) \n px = Premium (max 3 rentals, R-rated allowed) \n sf - Standard Family (max 1 rental, R-rated not allowed) \n pf - Premium Family (max 3 rentals, R- Rated not allowed) /n")
            account_type = input("Enter account type: ").strip().lower()
            if account_type not in Customer.ACCOUNT_TYPES:
                print(f"You selected an invalid account type. Must be one of the following: {Customer.ACCOUNT_TYPES}")
                return None
            new_id = Customer.generate_id()
            customer_class = self.customer_types[account_type]
            new_customer = customer_class(new_id, account_type, first_name, last_name, [])
            self.customers[new_id] = new_customer
            print("Customer created successfully")
            return new_customer
        except Exception as e:
            print(e)
            return None
            
    def view_inventory(self):
        print("=== STORE INVENTORY===")
        if not self.inventory:
            print("No video in inventory")
        else:
            for video in self.inventory.values():
                print(video)
    
    def view_customers(self):
        pass
    
    def get_customer_by_id(self):
        while True:
            try: 
                customer_id = input("Enter customer ID: ").strip()
                customer_id = int(customer_id)
                if customer_id in self.customers:
                    return self.customers[customer_id]
                else:
                    print(f"Customer ID {customer_id} not found")
                    return None
            except ValueError:
                print("Invalid input.")
                return None
    
    def get_video_by_title(self):
        while True:
            title = input("Enter video title: ").strip().title()
            if title in self.inventory:
                return self.inventory[title]
            
    def rent_video(self):
        pass
    
    def return_video(self):
        pass
    
    def run_store(self):
        print("===================================")
        print("Welcome to Code Platoon Video Store")
        print("===================================")
        
        while True:
            print(self.menu)
            user_input = input("Select from the following options (1-6): ").strip()
            
            if user_input == '1':
                self.view_inventory()
            elif user_input == '2':
                self.view_customers()
            elif user_input == '3':
                self.new_customer()
            elif user_input == '4':
                self.rent_video()
            elif user_input == '5':
                self.rent_video()
            elif user_input =="6":
                return "Thank you for visiting Test Store! Goodbye!"
                
            else:
                print("You selected an invalid option. Please enter a number between 1 and 6.")