# YC Directory - Pitch Your Startup 🚀

A platform for startups to pitch their ideas, showcase their projects, and connect with others in the entrepreneurial ecosystem. Built with **Next.js**, **Sanity**, **Tailwind CSS**, and **NextAuth** for seamless authentication and dynamic content management.

### 🌐 Live Demo  
Check out the live application here:  
👉 [YC Directory - Pitch Your Startup](https://yc-directory-pitch-your-startup-smoky.vercel.app/)

---

## Features ✨

- **Startup Pitches**: Submit your startup idea with a detailed description, category, and images.  
- **GitHub Authentication**: Login using GitHub for a secure and streamlined user experience.  
- **Sanity CMS Integration**: Easily manage dynamic content like startup data.  
- **Markdown Support**: Leverage a markdown editor for formatting pitch descriptions.  
- **Responsive Design**: Optimized for both desktop and mobile devices.  

---

## Tech Stack 🛠️

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)  
- **CMS**: [Sanity](https://www.sanity.io/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Markdown Rendering**: [React Markdown Editor](https://github.com/uiwjs/react-md-editor)

---

## Getting Started 🚀

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or later)
- npm (v10 or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ad-itya07/YC_Directory-Pitch-Your-Startup.git
   ```
2. **Navigate to the project folder**:
   ```bash
   cd YC_Directory-Pitch-Your-Startup
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:  
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   NEXTAUTH_URL=https://yc-directory-pitch-your-startup-smoky.vercel.app
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_client_id
   AUTH_GITHUB_SECRET=your_github_client_secret
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WRITE_TOKEN=your_sanity_write_token
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment 🌍

This project is deployed on [Vercel](https://vercel.com/).  
Live link: [YC Directory - Pitch Your Startup](https://yc-directory-pitch-your-startup-smoky.vercel.app/)

To deploy your own version:
1. Push the project to a GitHub repository.
2. Import the repository to Vercel.
3. Set the environment variables in the Vercel dashboard.
4. Deploy your application.

---

## Contributing 🤝

Contributions are welcome! If you’d like to add new features or fix bugs:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements 🙌

- [Next.js](https://nextjs.org/)  
- [Sanity](https://www.sanity.io/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [NextAuth.js](https://next-auth.js.org/)  

--- 

Enjoy building with YC Directory! 🚀
