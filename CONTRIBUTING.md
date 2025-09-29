# 🤝 Contributing to Department Hub

We welcome contributions from everyone! Whether it's fixing a bug, suggesting a new feature, or improving documentation, your help is appreciated.

Please adhere to the following guidelines to make the contribution process smooth for everyone.

## 🐛 Found a Bug?

1.  **Check Existing Issues:** Before creating a new issue, please check the [Issues tab](https://github.com/[your-username]/department-hub/issues) to see if the bug has already been reported.
2.  **Reporting:** If it’s a new bug, open a new issue.
3.  **Details:** Clearly describe the bug and include:
    * The steps to reproduce the issue.
    * The expected behavior and the actual behavior.
    * Your operating system and browser version.
    * Screenshots or code snippets if applicable.

## ✨ Suggesting a Feature

1.  **Open an Issue:** Submit a new issue in the [Issues tab](https://github.com/[your-username]/department-hub/issues).
2.  **Describe the Need:** Explain the feature's goal, why it's necessary, and how it aligns with the project's aim.

## 💻 Making Code Contributions

### 1. Setup

Follow the steps in the **[SETUP.md](SETUP.md)** guide to get the project running locally.

### 2. Branching

All feature development and bug fixes should be done on separate, descriptive branches.

* **Feature Branch:** `feat/[feature-name]` (e.g., `feat/add-professor-dashboard`)
* **Bug Fix Branch:** `fix/[issue-number]-short-description` (e.g., `fix/12-login-ui-mismatch`)

### 3. Commit Messages

Please follow the **Conventional Commits** specification. This helps in automatic versioning and clear history tracking.

* `feat: added new notice board component`
* `fix(client): corrected button h-12 size in button.jsx`
* `docs: updated setup guide`

### 4. Pull Request (PR)

1.  **Fork** the repository and clone your fork.
2.  Create your new branch.
3.  Commit your changes using clear commit messages.
4.  Push your branch to your fork.
5.  Open a Pull Request (PR) against the `main` branch of the original repository.

**In your PR description, please include:**
* A brief summary of your changes.
* Which issue it resolves (e.g., `Closes #12`).
* Any testing performed.

## 🎨 Style Guide

* **Code Style:** Follow the existing project code style (e.g., React component structure, Tailwind class ordering).
* **JavaScript:** Use modern ES6+ syntax.
* **Tailwind:** Prefer utility classes over inline styles.
* **Formatting:** We use Prettier/ESLint (if configured) for automatic formatting.