# HUB-Buddy

## Empowering Decentralized Community Hubs

Traditional community platforms impose high fees, centralized control, and lack transparency. HUB-Buddy aims to solve this by providing a decentralized, peer-to-peer (P2P) community hub platform built on blockchain technology, enabling secure, transparent, and cost-efficient community management for everyone.

We believe that **everyone** deserves access to a fair community platform with **minimal fees**, **instant transactions**, and **complete transparency**, powered by blockchain technology.

## Vision

HUB-Buddy creates a decentralized ecosystem where communities can thrive without intermediaries. Whether you're managing a local meetup group, a professional network, or a global community, HUB-Buddy provides the tools you need with blockchain-backed security and transparency.

## Core Features

- **Decentralized Community Management**: Create and manage communities without centralized control
- **Smart Contract Integration**: Automated community rules and governance
- **Transparent Operations**: All transactions recorded on blockchain
- **Low-Cost Transactions**: Minimal fees compared to traditional platforms
- **Instant Settlements**: Fast transaction processing
- **Token-Based Incentives**: Reward active community members

## Architecture Overview

HUB-Buddy is built as a modern monorepo application with the following structure:

```
HUB-Buddy/
├── apps/
│   ├── frontend/          # Next.js web application
│   └── backend/           # Node.js/Express API server
├── contracts/             # Smart contracts
├── docs/                  # Documentation
└── shared/                # Shared utilities and types
```

### Technology Stack

- **Frontend**: Next.js 14+ with TypeScript, Tailwind CSS
- **Backend**: Node.js with Express, TypeScript
- **Smart Contracts**: Solidity/Rust (blockchain-agnostic design)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth
- **Package Manager**: Bun (fast, modern JavaScript runtime)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Git
- Docker (optional, for containerized development)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/HUB-Buddy.git
cd HUB-Buddy
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Set up environment variables**
```bash
# Copy example env files
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

4. **Start development servers**
```bash
# Start all services
bun run dev

# Or start individually
cd apps/backend && bun run dev
cd apps/frontend && bun run dev
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- API Documentation: http://localhost:3001/api-docs

## Development

### Project Structure

```
apps/
├── frontend/              # Next.js application
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities and helpers
│   │   └── styles/       # Global styles
│   └── package.json
│
├── backend/              # Express API
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Request handlers
│   │   ├── models/       # Data models
│   │   ├── middleware/   # Express middleware
│   │   └── utils/        # Helper functions
│   └── package.json
│
contracts/                # Smart contracts
├── src/                  # Contract source code
├── tests/                # Contract tests
└── scripts/              # Deployment scripts

shared/                   # Shared code
├── types/                # TypeScript types
└── utils/                # Shared utilities
```

### Available Scripts

```bash
# Development
bun run dev              # Start all services in development mode
bun run build            # Build all applications
bun run test             # Run all tests

# Code Quality
bun run lint             # Lint all code
bun run format           # Format code with Biome
bun run format:fix       # Auto-fix formatting issues
bun run type-check       # TypeScript type checking

# Deployment
bun run deploy:contracts # Deploy smart contracts
bun run deploy:backend   # Deploy backend
bun run deploy:frontend  # Deploy frontend
```

## Contributing

We welcome contributions from developers of all skill levels! Whether you're fixing bugs, adding features, improving documentation, or suggesting new ideas, your help is valuable.

### How to Contribute

1. **Find an Issue**
   - Browse our [open issues](https://github.com/yourusername/HUB-Buddy/issues)
   - Look for issues labeled `good first issue` or `help wanted`
   - Comment on the issue to express your interest

2. **Fork and Clone**
   ```bash
   # Fork the repository on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/HUB-Buddy.git
   cd HUB-Buddy
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

5. **Test Your Changes**
   ```bash
   bun run test
   bun run lint
   bun run type-check
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   
   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

7. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

### Development Guidelines

#### Code Style

- We use **Biome** for code formatting and linting
- Install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
- Code is automatically formatted on commit via Husky hooks
- Run `bun run format:fix` to manually format code

#### Branch Naming

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/add-community-chat` |
| `fix/` | Bug fixes | `fix/login-validation` |
| `docs/` | Documentation | `docs/update-readme` |
| `refactor/` | Code refactoring | `refactor/api-structure` |
| `test/` | Test additions/changes | `test/add-unit-tests` |
| `chore/` | Maintenance tasks | `chore/update-dependencies` |

#### Pull Request Guidelines

- **Title**: Use conventional commit format (e.g., `feat: add user profile page`)
- **Description**: Explain what changes you made and why
- **Screenshots**: Include screenshots for UI changes
- **Tests**: Ensure all tests pass
- **Documentation**: Update relevant documentation

#### Code Review Process

1. Submit your PR with a clear description
2. Automated checks will run (linting, tests, build)
3. A maintainer will review your code
4. Address any requested changes
5. Once approved, your PR will be merged!

### Setting Up Development Environment

#### Option 1: Local Development

```bash
# Install dependencies
bun install

# Set up environment variables
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env

# Start development
bun run dev
```

#### Option 2: Docker Development (Recommended)

```bash
# Start all services with Docker
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Docker benefits:
- ✅ Consistent environment across all machines
- ✅ No need to install dependencies locally
- ✅ Isolated database and services
- ✅ Easy cleanup and reset

### Testing

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage

# Run specific test file
bun test path/to/test.spec.ts
```

### Debugging

#### Backend Debugging

```bash
# Start backend with debugger
cd apps/backend
bun run dev:debug
```

Then attach your debugger to port 9229.

#### Frontend Debugging

Use browser DevTools or VS Code debugger with the following configuration:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Next.js: debug client-side",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}/apps/frontend"
}
```

### Common Issues and Solutions

#### Issue: Port already in use
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

#### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
```

#### Issue: TypeScript errors
```bash
# Rebuild TypeScript
bun run type-check
```

## Community and Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/HUB-Buddy/issues)
- **Discussions**: [Join community discussions](https://github.com/yourusername/HUB-Buddy/discussions)
- **Discord**: [Join our Discord server](https://discord.gg/your-invite)
- **Twitter**: [@HUBBuddy](https://twitter.com/hubbuddy)

## Roadmap

### Phase 1: Foundation (Current)
- [x] Basic project structure
- [x] Frontend and backend setup
- [ ] Smart contract templates
- [ ] User authentication
- [ ] Community creation

### Phase 2: Core Features
- [ ] Community management dashboard
- [ ] Member roles and permissions
- [ ] Token-based incentives
- [ ] Event management
- [ ] Messaging system

### Phase 3: Advanced Features
- [ ] Governance voting
- [ ] Treasury management
- [ ] NFT integration
- [ ] Cross-chain support
- [ ] Mobile applications

### Phase 4: Ecosystem
- [ ] Plugin system
- [ ] Third-party integrations
- [ ] Developer API
- [ ] Marketplace

## Security

Security is our top priority. If you discover a security vulnerability, please email security@hubbuddy.io instead of creating a public issue.

### Security Best Practices

- Never commit sensitive data (API keys, private keys, passwords)
- Use environment variables for configuration
- Keep dependencies up to date
- Follow OWASP security guidelines
- Enable 2FA on your GitHub account

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with inspiration from decentralized community platforms
- Thanks to all our contributors and supporters
- Special thanks to the open-source community

## Contact

- **Email**: hello@hubbuddy.io
- **Website**: https://hubbuddy.io
- **GitHub**: https://github.com/yourusername/HUB-Buddy

---

**Let's build a better, more transparent community platform together!** 🚀

Made with ❤️ by the HUB-Buddy community
