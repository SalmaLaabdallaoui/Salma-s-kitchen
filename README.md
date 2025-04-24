# 🍽️ Salma's Kitchen

Salma's Kitchen is a web application that showcases food recipes. Users can browse, search, and interact with recipes by hovering over images or searching by name. They can access step-by-step instructions and a list of ingredients to recreate the recipes.

---

## **📌 Prerequisites**

Before installing and running the Web application, the following must be installed on your system in order for the app to run:

1️⃣ **Node.js** (Includes npm)

- Download and install Node.js from [https://nodejs.org/en]
- Verify installation by running:

```bash
node -v  # Should return a version number
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # for Windows
npm -v   # Should return a version number
```

3️⃣ **PocketBase (For Backend Database)**

- Download PocketBase from [https://pocketbase.io/]
- Extract the downloaded zip file.
- The downloaded PocketBase Executable must be placed into The Backend Folder
- Manually drag and drop the pocketbase executable into the newsletter-backend/ folder in the backend folder within the GitHub repository file.

* For Windows users: Right-click on the pocketbase.exe file and select "Run as administrator" to launch the app.
* For Mac users: After placing the pocketbase executable into the newsletter-backend/ folder:

  - You will first be asked whether to keep or replace the PocketBase executable. Click on Replace.
    then:
  - Go to System Settings.
  - Click on Privacy & Security.
  - Scroll down and click "Allow" to enable the Pocketbase app to run.

  (It’s possible that the 'Allow' setting in Privacy & Security won’t appear until you attempt to execute ./pocketbase serve in the terminal on macOS.)

**PocketBase Credentials**
Email Address: [salma.zouiten@iu-study.org]
Password: [Salmaskitchen2025*]

---

After extracting the repository, and placing the Pocketbase executable in the newsletter-backend folder, open VS Code, or other code editor and open the project folder, preferrably VS Code. Follow these steps to set up and run the project:

- Open VSCode and navigate to the File menu.
- Select Open Folder, then choose the extracted GitHub folder.
- Open a new terminal window in VSCode.
- Copy the lines of code listed betweeen the line marked with `bash and `, then paste thm into the terminal one at a time, pressing Enter after each one.
- Continue this process for all the steps until all lines are entered, following the instructions provided.

## **🚀 Installation Instructions for Mac**

### **1️⃣ Install Frontend Dependencies**

```bash

cd salma-s-kitchen #path to frontend
npm install vite --save-dev
npm install react-router-dom
npm install pocketbase
npm install #installs all the dependencies within my package.json file, to deploy the app
```

### **2️⃣ Install Backend dependencies**

```bash
cd ..
cd newsletter-backend #path to backend
npm install # Installs Express, Nodemailer, SendGrid, PocketBase, and dependencies needed for the backend to run
npm install pocketbase
```

### **3️⃣ set-up Pocketbase in Backend**

```bash
chmod +x pocketbase  # Grants execution permissions
cp pb_data/data_backup_2025-03-17.db pb_data/data.db #initialize PocketBase from Backup
chmod 777 pb_data/data.db  # Set correct permissions
./pocketbase serve # Start Pocketbase server, you will receive a link in the terminal, copy the Dashboard link in the browser and and fill in the credentials listed above.
```

### **4️⃣ Start Web App**

```bash
# open a new terminal window and run the following
cd newsletter-backend #Path to the backend
node server.js #Starts the backend server
# open a new terminal window and run the following
cd salma-s-kitchen #path to the frontend
npm run dev #runs the web app, the output is a link similar to [http://localhost:5173/], that must be inputed in a web browser
```

---

## **🚀 Installation Instructions for Windows**

### **1️⃣ Install Frontend Dependencies**

```bash

cd salma-s-kitchen #path to frontend
npm install vite --save-dev
npm install react-router-dom
npm install pocketbase
npm install #installs all the dependencies within my package.json file, to deploy the app
```

### **2️⃣ Install Backend dependencies**

```bash
cd ..
cd newsletter-backend #path to backend
npm install # Installs Express, Nodemailer, SendGrid, and dependencies needed for the backend to run
npm install pocketbase
```

### **3️⃣ set-up Pocketbase in Backend**

```bash

cp pb_data/data_backup_2025-03-17.db pb_data/data.db #initialize PocketBase from Backup
.\pocketbase serve #Starts Pocketbase server, you will receive a link in the terminal, copy the Dashboard link in the browser and and fill in the credentials listed above.
```

### **4️⃣ Start Web App**

```bash
# open a new terminal window and run the following
cd newsletter-backend #Path to the backend
node server.js #Starts the backend server
# open a new terminal window and run the following
cd salma-s-kitchen #path to the frontend
npm run dev #runs the web app, the output is a link similar to [http://localhost:5173/], that must be inputed in a web browser
```
