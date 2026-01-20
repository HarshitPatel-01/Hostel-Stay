🏡 HomeStay – Airbnb Clone

HomeStay is a full-stack Airbnb-inspired web application that allows users to browse property listings, create accounts, log in securely, and host their own homes.
The project emphasizes clean UI/UX, authentication & authorization, and full CRUD functionality for property listings.

🔐 1. User Authentication & Authorization
📝 User Registration (Sign Up)

Users can create an account using:

Username

Email

Password

Security & validation features:

Passwords are securely hashed using bcrypt

Unique username and email enforcement

Proper email format validation

Minimum password length enforcement

After successful signup, users are redirected to the login page.

<img width="1918" height="881" alt="Login Page" src="https://github.com/user-attachments/assets/78d026e3-cfc6-4cd9-acb0-d2fa0332144a" />
🔑 User Login

Registered users can log in using:

Username

Password

On successful login:

A secure session is created using express-session

User authentication state is preserved across pages

Invalid credentials trigger proper error handling

🚪 Logout

Logged-in users can log out anytime

Session is securely destroyed

User is redirected to the home page

<img width="1918" height="872" alt="SignUp Page" src="https://github.com/user-attachments/assets/327fca1e-e6a1-4557-bbbf-2e39406f4883" />
🔒 Route Protection

To ensure security:

Only authenticated users can:

Add new listings

Edit listings

Delete listings

Unauthorized users are automatically redirected to the login page

<img width="1900" height="863" alt="New Listings" src="https://github.com/user-attachments/assets/0c2e0993-1420-49a6-9413-44d8e3b950bb" />
🏠 2. Property Listings (Core Feature)
📋 View All Listings (Home Page)

The home page displays all available properties in a card-based layout.

Each card includes:

Property image

Property title

Price per night

Additional features:

Fully responsive grid layout

Clicking a card opens the listing details page

<img width="1900" height="873" alt="Home Page" src="https://github.com/user-attachments/assets/173161f7-9cef-49df-9f08-17b5a1ea88ed" />
📄 Listing Details Page

Displays complete information about a property:

High-quality image

Title

Location (City + Country)

Price per night

Detailed description

Owner-only actions:

Edit listing

Delete listing

Non-owners can only view the listing.

<img width="1897" height="875" alt="Edit Page" src="https://github.com/user-attachments/assets/d4c3fa72-bf00-4378-a38d-2f67460a80b2" />
➕ Create New Listing

Only logged-in users can create listings.

Listing form includes:

Title

Description

Image upload

Country

Location (City)

Price per night

Technical details:

Images uploaded using Multer

Listing stored in MongoDB

Owner reference linked to the logged-in user

User redirected to the listing page after creation

✏️ Edit Listing

Only the listing owner can edit

Form is pre-filled with existing data

Editable fields:

Title

Description

Price

Location

Ownership validation prevents unauthorized edits

🗑 Delete Listing

Only the owner can delete a listing

Safe confirmation flow

Listing is permanently removed from the database

🔍 3. Search & Explore
🔎 Search Bar

Users can search listings using:

Destination names

Location keywords

Features:

Real-time filtering

Improves discoverability and navigation

🧭 Category-Based Exploration

Users can explore listings by categories such as:

Trending

Rooms

Iconic Cities

Mountains

Pools

Camping

Farms

Arctic

Domes

Boats

The UI closely follows Airbnb’s category-based browsing experience.

🎨 4. UI / UX Features
🌙 Dark Theme Design

Consistent dark theme across all pages

Modern and minimal aesthetic

Easy on the eyes for long sessions

📱 Responsive Layout

Optimized for:

Desktop

Tablet

Mobile devices

Flexible grid system

Adaptive navigation bar

🧭 Dynamic Navbar

Navbar updates based on authentication state:

Logged out: Login | Sign Up

Logged in: Username | Add New Home | Logout

Enhances usability and clarity.

🧾 Clean & Accessible Forms

Uniform input styling

Clear labels and placeholders

Proper spacing and alignment

Smooth, error-free UX

🗄️ 5. Database Design (MongoDB + Mongoose)
👤 User Schema

Username (unique)

Email (unique)

Hashed password

Created timestamp

🏡 Listing Schema

Title

Description

Image path

Price

Country

Location

Owner reference (ObjectId)

Created timestamp

🔗 Relationships

Each listing is linked to a user (owner)

Authorization enforced using owner reference

🛠️ 6. Backend Architecture
🚦 Express Routing

Modular routing structure:

/users

/listings

Clean separation of concerns

🧠 Middleware

Authentication middleware

Authorization checks

Session handling

Centralized error handling

🔐 Security Measures

Password hashing using bcrypt

Session-based authentication

Route protection

Ownership validation for listings
