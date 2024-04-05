**Jurly Store Website Repository README**

Welcome to the repository for my E-Commerce Website project! This project utilizes ReactJS, ASP.NET, SQL, Bootstrap, Docker and Azure Data Studio to create a dynamic and scalable e-commerce platform. Below you'll find instructions on setting up and running the project locally.

### Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository:**
   ```
   git clone <https://github.com/mohammadjury/jurly-store>
   ```

2. **Install Dependencies:**
   - Ensure you have Node.js installed on your machine.
   - Navigate to the project directory and run:
     ```
     npm install
     ```
   - Install ASP.NET dependencies by following the appropriate instructions for your development environment.

3. **Configure Database:**
   - Use Azure Data Studio or any SQL client to set up your database.
   - Import the database schema provided in the repository or create your own schema.
   - Update the connection string in the project configuration files to point to your database.

4. **Run the Application:**
   - Start the ASP.NET server.
   - Navigate to the project directory and run:
     ```
     npm start
     ```
   - This command will start the React development server.
   
5. **View the Application:**
   - Once the servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Docker Deployment

This project includes Docker configuration for easy deployment. To deploy using Docker, follow these steps:

1. **Build Docker Image:**
   ```
   docker build -t jurly-store .
   ```

2. **Run Docker Container:**
   ```
   docker run -p 8080:80 jurly-store
   ```

3. **Access Application:**
   - Access the application by navigating to `http://localhost:8080` in your web browser.

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository and create your branch from `main`.
- Make your contributions.
- Ensure your code follows the project's coding standards.
- Test your changes.
- Create a pull request detailing the changes you've made.

### Contact

For any inquiries or issues regarding the project, please contact [mohammadjury00@gmail.com].

Thank you for using my E-Commerce Website repository! I hope you find it useful and look forward to any contributions you make. Happy coding! 🚀
