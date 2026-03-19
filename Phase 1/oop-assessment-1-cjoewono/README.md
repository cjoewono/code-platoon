# **Assessment 1: Object Oriented Programming + CSV Reading**

## Important Grading Information

- You need to get a 70% or better to pass ie 18/25 tests. (You must pass all assessments in order to graduate Code Platoon's program.)
- If you fail the assessment, you have can retake it once to improve your score. For this assessment...
  - _5% penalty_: If you complete and submit the retake **within one week** of receiving your grade.
  - _10% penalty_: If you complete and submit the retake **by the start of week 12**. A retake for this assessment WILL NOT be accepted after this date.

## Requirements

- This assessment should be completed using Python Object Oriented Programming.
- This assessment will utilize a `pytest` test suite.
- Install all dependencies by running

```bash
pip install -r requirements.txt #if this fails run `pip3 install -r requirements.txt'
```

### Rules / Process

- This test is fully open notes and open Google, but is not to be completed with the help of other students/individuals.

## Challenge

_Back in the day_, humans would actually leave their homes to go rent a physical video copy of movies (what a strange concept, right?). Blockbuster was the leading video rental company in this era. Today, there is only one Blockbuster location left which is located in Bend, Oregon. We are going to ask you to build a video inventory application for this Blockbuster!

Your Video Inventory Management application should manage the following data:

- Load cutomer and video inventory data from the csv files provided
- Manage customer information:
  - customer id
  - customer account type (sx/px/sf/pf)
    - "sx" = standard account: max 1 rental out at a time
    - "px" = premium account: max 3 rentals out at a time
    - "sf" = standard family account: max 1 rental out at a time AND can not rent any "R" rated movies
    - "pf" = premium family account: max 3 rentals out at a time AND can not rent any "R" rated movies
  - customer first name
  - customer last name
  - current list of video rentals (_by title_), each title separated by a forward slash "/"
- Manage the store's video inventory:
  - video id
  - video title
  - video rating
  - video release year
  - number of copies currently available in-store

Your application should allow:

- Viewing the current video inventory for the store
- Viewing all customer's and their rented videos
- Adding a new customer
  - You should not have an initial list of video rentals assigned to a newly created customer
  - No duplicate ID's
- Renting a video out to a customer
  - Get video _by title_
  - Decrement video copies
- Returning a video from a customer
  - Get video _by title_
  - Increment video copies
- Exiting the application
- **IMPORTANT:** Customers should be limited based on their account type. Your application should enforce these limitations when attempting to rent a video!

Be sure to give careful consideration into what data structures & data types (including classes) you might need to use in your application logic.

Your menu should look like this:

```bash
== Welcome to Code Platoon Video! ==

Please select an option:

1. View Inventory
2. View Customers
3. New Customer
4. Rent a Video
5. Return a Video
6. Exit
```

## Class Breakdown

### 📦 `Video` Class

#### 🔹 Purpose

Represents a single video in the store inventory.

---

#### 🧱 Attributes

| Attribute           | Type | Access Level | Description                | Example        |
| ------------------- | ---- | ------------ | -------------------------- | -------------- |
| `_title`            | str  | Private      | Normalized title of video  | `"The Matrix"` |
| `_rating`           | str  | Private      | MPAA rating (uppercase)    | `"PG-13"`      |
| `_release_year`     | int  | Private      | Year of release            | `1999`         |
| `_copies_available` | int  | Private      | Number of available copies | `5`            |

---

#### 🔍 Properties (Getters & Setters)

| Property           | Type | Validation Rules         | Example Input  | Example Output |
| ------------------ | ---- | ------------------------ | -------------- | -------------- |
| `title`            | str  | Must be non-empty string | `"the matrix"` | `"The Matrix"` |
| `rating`           | str  | Must be non-empty string | `"pg-13"`      | `"PG-13"`      |
| `release_year`     | int  | Must be positive integer | `1999`         | `1999`         |
| `copies_available` | int  | Must be ≥ 0              | `3`            | `3`            |

---

#### ⚙️ Instance Methods

| Method              | Parameters | Returns | Description                   | Example                                            |
| ------------------- | ---------- | ------- | ----------------------------- | -------------------------------------------------- |
| `decrease_copies()` | None       | None    | Decrements copies if > 0      | 3 → 2                                              |
| `increase_copies()` | None       | None    | Increments copies             | 2 → 3                                              |
| `__str__()`         | None       | str     | Human-readable representation | `"The Matrix (1999) - PG-13 - 3 copies available"` |

---

#### 🏗 Class Methods

| Method           | Parameters | Returns | Description                |
| ---------------- | ---------- | ------- | -------------------------- |
| `create_video()` | dict       | Video   | Factory method for CSV row |

Example:

```python
Video.create_video({
    "title": "Inception",
    "rating": "PG-13",
    "release_year": "2010",
    "copies_available": "5"
})
```

---

### 👤 `Customer` Base Class

#### 🔹 Purpose

Represents a video store customer.

---

#### 🧱 Attributes

| Attribute                | Type      | Access         | Description                |
| ------------------------ | --------- | -------------- | -------------------------- |
| `_id`                    | int       | Private        | Unique customer ID         |
| `_account_type`          | str       | Private        | sx, px, sf, pf             |
| `_first_name`            | str       | Private        | Customer first name        |
| `_last_name`             | str       | Private        | Customer last name         |
| `_current_video_rentals` | list[str] | Private        | Titles currently rented    |
| `last_id`                | int       | Class Variable | Tracks highest assigned ID |
| `ACCOUNT_TYPES`          | tuple     | Class Constant | Valid account types        |

---

#### 🔍 Properties

| Property                | Type      | Validation               | Example         |
| ----------------------- | --------- | ------------------------ | --------------- |
| `id`                    | int       | Must be positive int     | `1`             |
| `account_type`          | str       | Must be in ACCOUNT_TYPES | `"px"`          |
| `first_name`            | str       | Alphabetic only          | `"Francisco"`   |
| `last_name`             | str       | Alphabetic only          | `"Avila"`       |
| `current_video_rentals` | list[str] | Must be list             | `["Inception"]` |

---

#### ⚙️ Instance Methods

| Method                 | Parameters | Returns | Description                       |
| ---------------------- | ---------- | ------- | --------------------------------- |
| `view_rentals()`       | None       | str     | Displays rental list              |
| `can_rent(video)`      | Video      | bool    | Determines rental eligibility     |
| `add_rental(video)`    | Video      | None    | Adds rental + decreases copies    |
| `return_rental(video)` | Video      | None    | Removes rental + increases copies |
| `__str__()`            | None       | str     | Customer display string           |

---

#### Example: Adding Rental

```python
customer.add_rental(video)
```

Before:

```
Copies: 3
Customer rentals: []
```

After:

```
Copies: 2
Customer rentals: ["The Matrix"]
```

---

#### 🏗 Class Methods

| Method              | Parameters | Returns  | Description                   |
| ------------------- | ---------- | -------- | ----------------------------- |
| `generate_id()`     | str | None | int      | Auto-generates sequential IDs |
| `create_customer()` | dict       | Customer | Factory from CSV row          |

---

#### 👥 Customer Subclasses

These override `can_rent()` to enforce account rules.

---

##### `Customer_px` (Premium)

| Rule            | Value |
| --------------- | ----- |
| Max Rentals     | 3     |
| R-rated Allowed | Yes   |

---

##### `Customer_pf` (Premium Family)

| Rule            | Value |
| --------------- | ----- |
| Max Rentals     | 3     |
| R-rated Allowed | ❌ No  |

---

##### `Customer_sx` (Standard)

| Rule            | Value |
| --------------- | ----- |
| Max Rentals     | 1     |
| R-rated Allowed | Yes   |

---

##### `Customer_sf` (Standard Family)

| Rule            | Value |
| --------------- | ----- |
| Max Rentals     | 1     |
| R-rated Allowed | ❌ No  |

---

### 🏬 `Store` Class

#### 🔹 Purpose

Central controller managing customers, inventory, and CLI interaction.

---

#### 🧱 Attributes

| Attribute        | Type                | Description                   |
| ---------------- | ------------------- | ----------------------------- |
| `name`           | str                 | Store name                    |
| `customer_types` | dict[str, type]     | Maps account codes to classes |
| `customers`      | dict[int, Customer] | ID → Customer                 |
| `inventory`      | dict[str, Video]    | Title → Video                 |
| `menu`           | str                 | CLI menu string               |

---

#### ⚙️ Instance Methods

| Method                 | Parameters | Returns  | Description                    |
| ---------------------- | ---------- | -------- | ------------------------------ |
| `new_customer()`       | None       | None     | Prompts + creates new customer |
| `load_data()`          | path, type | dict     | Loads CSV data                 |
| `view_inventory()`     | None       | None     | Prints inventory               |
| `view_customers()`     | None       | None     | Prints customers               |
| `get_customer_by_id()` | None       | Customer | Retrieves valid customer       |
| `get_video_by_title()` | None       | Video    | Retrieves valid video          |
| `rent_video()`         | None       | None     | Executes rental                |
| `return_video()`       | None       | None     | Executes return                |
| `run_store()`          | None       | str     | Runs CLI loop                  |

---

## Executing the Test Suite

Please ensure you have `pytest` installed onto your Python environment.

### Local Development Execution

- Executing all tests within the test suite can be done by running the followin from the `root` directory

```bash
./run_all_tests.sh
```

- Executing a singular test can be done by running the following command from the `root` directory

```bash
./run_a_test.sh <name_of_tes>.py
```

### Docker Execution

- Executing the test suite within a Docker container can be done by running the following command from the `root` directory:

```bash
./run_docker.sh
```
