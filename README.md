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
- Manually drag and drop the pocketbase executable into the newsletter-backend/ folder in VS Code's file Explorer, or in the backend folder within the GitHub repository file.
- For Mac/Linux: the following command can also be run

```bash
mv ~/Downloads/pocketbase newsletter-backend/  # Adjust the path if needed based upon where Pocketbase got downloaded in your system
```

**PocketBase Credentials**
Email Address: [salma.zouiten@iu-study.org]
Password: [Salmaskitchen2025*]

---

## **🚀 Installation Instructions**

After extracting the repository, open VS Code, or other code editor and open the project folder. Follow these steps to set up and run the project:

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
node server.js # Starts the backend API
```

### **4️⃣ set-up Pocketbase in Backend**

```bash
#open in a new terminal window and run the following one after the other
cd newsletter-backend #navigate to backend again
chmod +x pocketbase  # Grants execution permissions
cp pb_data/data_backup_2025-03-17.db pb_data/data.db #initialize PocketBase from Backup
chmod 777 pb_data/data.db  # Set correct permissions
pocketbase serve # Start Pocketbase server, you will receive a link in the terminal, click on it and it will open-up in a web browser on mac or .\pocketbase serve for windows
```

### **5️⃣ Start Web App**

```bash
# open a new terminal
cd salma-s-kitchen
npm run dev #runs the web app, the output is a link similar to [http://localhost:5173/], that must be inputed in a web browser
```
