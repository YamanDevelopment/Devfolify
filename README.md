# Devfolify

Welcome to **Devfolify**! Our project submission for the [**Illuminate Hackathon**](https://illuminatehackathon.org).

## Overview 🌟

Devfolify is a full stack application designed to provide personalized coding challenges. Our goal is to move beyond the traditional lists of beginner or advanced projects and offer unique, skill-level tailored challenges that encourage creativity and problem-solving. This approach not only helps you develop new projects and skills but also fosters real-world problem-solving abilities, and perhaps even that idea of a lifetime that could take you to great places! 🌟

## Project Website 🌐

Visit us at [devfolify.com](http://devfolify.com)

## Features ✨

- **Personalized Challenges**: Utilizing our refined algorithm to provide tailored challenges to your skill level.
- **Express.js Backend**: A robust REST API built with Express.js.
- **Gemini Pro Integration**: Leveraging Gemini Pro to return results based on our algorithmically generated prompts.
- **Nuxt.js Frontend**: A modern (sorta... it was rushed) frontend designed with Nuxt.js. (mobile is NOT supported at the time)
- **TailwindCSS Styling**: Sleek and simple UI using TailwindCSS.
- **[Appwrite](https://appwrite.io/) Authentication**: Secure user authentication implemented with self-hosted Appwrite.
- **Docker Support**: Full Docker support with Docker Compose and Dockerfiles for easy self-hosting.
- **Uptime Monitoring**: Alongside this app being fully up on the web at [devfolify.com](https://devfolify.com), there's also 24/7 [monitoring](https://uptime.lopezhome.tech/status/devfolify) to make sure services don't go down

## Table of Contents 📑

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Acknowledgements](#acknowledgements)

## Developing Devfolify 🚀

To get started with Devfolify, follow these steps:

### Prerequisites 📋

- Docker
- Docker Compose
- Node.js
- npm (Node Package Manager)

### Configuration ⚙️

In both the `/frontend/app` and `/backend/app` folders you'll find a `.env.sample` file. This is where you add your environment variables to make this app fully work on your maching.

#### Environment variables include your:

##### Frontend

- [Appwrite Endpoint](https://appwrite.io/docs/references/cloud/client-web/account)
- [Appwrite Project ID](https://appwrite.io/docs/references/quick-start)

##### Backend

- REST API Port
- [Gemini Pro API Key](https://ai.google.dev/gemini-api/docs/api-key)


### Installation 🔧

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/devfolify.git
    cd devfolify
    ```

2. **Install backend dependencies**:
    ```sh
    cd backend/app/
    npm install
    ```

3. **Install frontend dependencies**:
    ```sh
    cd ../frontend/app/
    npm install
    ```

3. **Develop as you please and run the test environment**:
    ```sh
    npm run dev
    cd ../backend/app
    npm run dev
    ```

4. **Or just run with Docker Compose in the root directory to test changes**:
    ```sh
    docker-compose up --build
    ```

5. **Access the application**:
    Open your browser and navigate to `http://localhost:3000` for the frontend or your configured location for the backend.

    And if you're running with docker, the configured ports are `9986` for the backend and `9987` for the frontend

## Usage 💻

Once the application is up and running, you can:

1. **Sign up / Log in**: Use Appwrite authentication to create an account or log in.
2. **Receive Challenges**: Based on your skill level, receive unique coding challenges.
3. **Submit Solutions**: Work on the challenges and submit your solutions.
4. **Track Progress**: Keep track of your progress and enhance your skills with each challenge.

## Contributing 🤝

We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

Please ensure your code follows our coding conventions and passes all tests.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏

- **Express.js**: For the powerful backend framework.
- **Nuxt.js**: For the modern and versatile frontend framework.
- **TailwindCSS**: For the easy-to-use and customizable UI components.
- **Appwrite**: For providing secure and easy-to-integrate authentication.
- **Docker**: For enabling simple and efficient deployment.
- **Illuminate Hackathon**: For the opportunity to develop and showcase this project.

## TODO + Isssues

Sadly we weren't able to get a database implemented in time so there won't be a social aspect to this platform just yet.

We also had many more plans to add to the dashboard but simply didn't have enough time as well as a core team members WiFi was out during all of the hackathon (Saturday).



---

Thank you for checking out Devfolify! We hope our application helps you take your coding skills to the next level through creative and challenging projects. Happy coding! 😊