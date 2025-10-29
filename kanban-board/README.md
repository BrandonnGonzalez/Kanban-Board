# 📋 Kanban Board

A modern, responsive Kanban board application built with React and Vite. Drag-and-drop task management with a beautiful, professional UI design.

![Kanban Board Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Kanban+Board+Preview)

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Beautiful glass-morphism design with gradient backgrounds
- **📊 Three Column Layout** - To Do, In Progress, and Done columns
- **🔄 Task Management** - Easy task status updates with dropdown selectors
- **🎯 Visual Status Indicators** - Color-coded task cards and column headers
- **⚡ Smooth Animations** - Hover effects and transitions for better UX
- **📱 Mobile-First** - Optimized for mobile devices with responsive breakpoints

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) *(Replace with your actual deployment URL)*

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with modern features
- **Package Manager**: npm
- **Development**: ESLint for code quality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
kanban-board/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Column.jsx          # Column component for task columns
│   │   └── Task.jsx            # Individual task component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Styling and responsive design
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 How to Use

1. **View Tasks** - See all your tasks organized in three columns:
   - **To Do 🪄** - New tasks that need to be started
   - **In Progress 🚀** - Tasks currently being worked on
   - **Done 🌟** - Completed tasks

2. **Update Task Status** - Use the dropdown selector on each task to move it between columns

3. **Responsive Design** - The board automatically adapts to your screen size:
   - Desktop: Three columns side by side
   - Mobile: Stacked columns for better mobile experience

## 🎨 Design Features

- **Glass-morphism UI** - Semi-transparent cards with backdrop blur effects
- **Gradient Backgrounds** - Beautiful purple-to-blue gradient background
- **Color-coded Status** - Each column and task status has its own color scheme
- **Smooth Animations** - Hover effects and transitions for enhanced user experience
- **Modern Typography** - Clean, readable fonts with proper hierarchy

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Three columns side by side)
- **Tablet**: 768px - 1199px (Optimized spacing)
- **Mobile**: < 768px (Stacked columns)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Customization

### Adding New Task Statuses

1. Update the task status options in `src/components/Task.jsx`
2. Add corresponding CSS styles in `src/App.css`
3. Update the task filtering logic in `src/App.jsx`

### Styling Modifications

The main styles are located in `src/App.css`. Key sections:
- `.board` - Main board layout
- `.column` - Column styling and glass-morphism effects
- `.task` - Individual task card styling
- `@media` queries - Responsive design breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Brandon Gonzalez**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Modern CSS features for beautiful styling
- Open source community for inspiration

---

⭐ **Star this repository if you found it helpful!**

📧 **Questions?** Feel free to open an issue or reach out!