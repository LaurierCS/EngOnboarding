# 🚀 LCS Engineering Team Directory

Welcome to the Laurier Computing Society Engineering Team onboarding project! This is a simple, fun way to learn essential developer tools and workflows.

https://lcsonboarding.vercel.app/

## 🎯 Your Mission

Add yourself to our team directory by creating a pull request. Along the way, you'll learn:

- Git basics (cloning, branching, committing)
- GitHub workflows (PRs, reviews, CI/CD)
- React & TypeScript fundamentals
- Modern web styling with Tailwind CSS

## 🏗️ Getting Started

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/EngOnboarding.git
   cd EngOnboarding
   pnpm install
   ```

2. **Create Your Card**
   ```bash
   # Create a new branch
   git checkout -b add-YOUR_NAME

   # Create your file
   Mac/Linx: cp src/team/example.ts src/team/YOUR_NAME.ts
   Windows: copy src\team\example.ts src\team\YOUR_NAME.ts
   ```

3. **Make It Yours**
   - Edit your new file with your info
   - Customize your card's style (optional)
   - Test locally with `pnpm dev`

4. **Submit**
   ```bash
   git add .
   git commit -m "Add YOUR_NAME to team"
   git push -u origin add-YOUR_NAME
   ```
   Then open a pull request!

## 🎨 Card Customization

Want to stand out? Customize your card's appearance:
```typescript
cardStyle: {
    background: "bg-purple-800",    // Any Tailwind bg class
    border: "border-purple-600",    // Border style
    text: "text-purple-100"         // Text color
}
```

## 💡 Need Help?

- Check out [GitHub's Git Guide](https://github.com/git-guides)
- Review [React's Documentation](https://react.dev)
- Ask in `#🔧 | eng` on discord
