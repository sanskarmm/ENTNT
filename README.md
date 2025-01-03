# Calendar Application for Communication Tracking

## Overview
This Calendar Application is built using React to help organizations efficiently track and manage communications with companies. The application includes:

- **Admin Module**: Manage companies and communication parameters.
- **User Module**: View, manage, and perform communication tasks.
- **Optional Reporting Module**: Gain insights into communication trends and performance.

## Features

### Admin Module
- **Company Management**:
  - Add, edit, and delete company entries with details like name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
- **Communication Method Management**:
  - Define and manage communication methods such as LinkedIn posts, emails, and phone calls.
  - Set the sequence and specify mandatory methods.

### User Module
- **Dashboard**:
  - View company communications, including the last five interactions and upcoming schedules.
  - Color-coded highlights for overdue (red) and due (yellow) communications.
- **Communication Action**:
  - Log new communications and reset overdue/due highlights.
  - Add notes and specify the type and date of the interaction.
- **Notifications**:
  - Separate grids for overdue and today’s communications.
- **Calendar View**:
  - Visualize past and upcoming communications.

### Reporting and Analytics Module (Optional)
- Communication frequency reports.
- Engagement effectiveness dashboards.
- Trends of overdue communications.
- Downloadable reports in PDF or CSV format.
- Real-time activity log.

## Installation and Setup

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
  [ git clone https://github.com/your-username/calendar-app.git
   cd calendar-app
   ```](https://github.com/sanskarmm/ENTNT.git)

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Deployment
1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Deploy the `build` folder to a hosting platform such as [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or GitHub Pages.

## Usage


### Sample Data
The application includes mock data for companies, communication methods, and schedules to demonstrate functionality.

## Folder Structure
```
calendar-app/
├── public/            # Public assets (e.g., favicon, index.html)
├── src/
│   ├── components/    # Reusable React components
│   ├── modules/       # Feature-specific modules (Admin, User, Reporting)
│   ├── services/      # API calls and utility functions
│   ├── styles/        # CSS and styling files
│   ├── App.jsx        # Main application component
│   ├── index.js       # Application entry point
├── README.md          # Project documentation
├── package.json       # Project metadata and dependencies
```

## Libraries and Tools
- **React**: Frontend framework.
- **React Router**: Navigation and routing.
- **Redux**: State management.
- **Tailwind CSS**: Styling framework.
- **FullCalendar**: Calendar functionality.
- **Chart.js**: Visual analytics (for Reporting Module).

## Known Limitations
- Reporting and Analytics Module is optional and may require additional setup.
- Multi-select for companies is limited to logging communication only.

## Future Enhancements
- Add user authentication for personalized access.
- Implement push notifications for overdue tasks.
- Integrate with external APIs (e.g., LinkedIn, email clients).

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.



---

