# HUB-Buddy GitHub Issues

A comprehensive list of 250 GitHub issues for the HUB-Buddy decentralized community hub platform.

---

## 🎨 DESIGN (Issues #1–#30)

---

## Issue #1: Design System & Component Library Foundation
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 5 days

**Description**:
Establish a cohesive design system for HUB-Buddy including color palette, typography, spacing scale, and base component styles. This will serve as the foundation for all UI development and ensure visual consistency across the platform.

**Acceptance Criteria**:
- [ ] Color palette defined with primary, secondary, accent, and semantic colors
- [ ] Typography scale defined with font families, sizes, and weights
- [ ] Spacing and sizing scale documented
- [ ] Design tokens exported and integrated with Tailwind config
- [ ] Figma/design file created and shared with team

**Technical Requirements**:
- Tailwind CSS custom theme configuration
- CSS custom properties for dynamic theming
- Dark mode support from the start
- WCAG 2.1 AA color contrast compliance

**Labels**: `design`, `frontend`, `high-priority`

---

## Issue #2: Logo & Brand Identity Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Create the HUB-Buddy brand identity including logo, icon, wordmark, and brand guidelines. The brand should convey decentralization, community, and trust.

**Acceptance Criteria**:
- [ ] Primary logo designed in SVG format
- [ ] Icon/favicon variant created
- [ ] Dark and light versions available
- [ ] Brand guidelines document created
- [ ] Logo exported in multiple formats (SVG, PNG, WebP)

**Technical Requirements**:
- SVG format for scalability
- Minimum size legibility at 16x16px
- Works on both dark and light backgrounds

**Labels**: `design`, `branding`

---

## Issue #3: Landing Page Wireframes & Mockups
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Design wireframes and high-fidelity mockups for the HUB-Buddy landing page. The page should communicate the platform's value proposition, features, and call-to-action for new users.

**Acceptance Criteria**:
- [ ] Low-fidelity wireframes for desktop and mobile
- [ ] High-fidelity mockups for desktop (1440px)
- [ ] High-fidelity mockups for mobile (375px)
- [ ] Tablet breakpoint mockup (768px)
- [ ] Interactive prototype with key user flows

**Technical Requirements**:
- Responsive design across all breakpoints
- Above-the-fold hero section with clear CTA
- Feature highlights section
- Social proof / stats section

**Labels**: `design`, `frontend`, `landing-page`

---

## Issue #4: Dashboard UI Design
**Category**: Design
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 6 days

**Description**:
Design the main community dashboard that users see after logging in. Should display community stats, recent activity, quick actions, and navigation to key features.

**Acceptance Criteria**:
- [ ] Dashboard layout designed for desktop and mobile
- [ ] Widget/card components for stats display
- [ ] Activity feed component design
- [ ] Quick action buttons designed
- [ ] Navigation sidebar/header design

**Technical Requirements**:
- Responsive grid layout
- Real-time data display considerations
- Skeleton loading states designed
- Empty state designs included

**Labels**: `design`, `frontend`, `dashboard`

---

## Issue #5: Community Profile Page Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Design the community profile page that showcases a community's information, members, activity, and governance details. This is a key discovery page for potential members.

**Acceptance Criteria**:
- [ ] Community banner and avatar design
- [ ] Stats section (members, posts, treasury)
- [ ] About/description section
- [ ] Member list component design
- [ ] Join/Leave CTA design
- [ ] Governance info section

**Technical Requirements**:
- Responsive layout
- Blockchain data display (wallet addresses truncated)
- Token balance display design

**Labels**: `design`, `frontend`, `community`

---

## Issue #6: User Profile & Wallet Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the user profile page including personal info, connected wallets, community memberships, token balances, and activity history.

**Acceptance Criteria**:
- [ ] Profile header with avatar and basic info
- [ ] Connected wallets section design
- [ ] Token/NFT holdings display
- [ ] Community memberships list
- [ ] Activity history timeline
- [ ] Edit profile form design

**Technical Requirements**:
- Wallet address display with copy functionality
- Token balance formatting
- Avatar upload UI

**Labels**: `design`, `frontend`, `user-profile`

---

## Issue #7: Onboarding Flow Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Design a smooth onboarding experience for new users covering account creation, wallet connection, and first community discovery/creation.

**Acceptance Criteria**:
- [ ] Multi-step onboarding wizard design
- [ ] Wallet connection step UI
- [ ] Community discovery step
- [ ] Profile setup step
- [ ] Progress indicator design
- [ ] Success/completion screen

**Technical Requirements**:
- Step-by-step flow with back navigation
- Mobile-first design
- Clear progress indication
- Skip options for optional steps

**Labels**: `design`, `frontend`, `onboarding`, `ux`

---

## Issue #8: Smart Contract Interaction UI Design
**Category**: Design
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Design UI components for blockchain/smart contract interactions including transaction confirmations, gas fee displays, wallet signing prompts, and transaction status tracking.

**Acceptance Criteria**:
- [ ] Transaction confirmation modal design
- [ ] Gas fee estimation display
- [ ] Transaction pending/success/failure states
- [ ] Wallet signing request UI
- [ ] Transaction history list design

**Technical Requirements**:
- Clear cost breakdown display
- Loading states for blockchain confirmations
- Error state designs with helpful messages
- Link to block explorer integration

**Labels**: `design`, `frontend`, `blockchain`, `ux`

---

## Issue #9: Governance & Voting UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Design the governance interface for community proposals, voting, and results display. Should make decentralized governance accessible and intuitive.

**Acceptance Criteria**:
- [ ] Proposal list page design
- [ ] Proposal detail page with voting UI
- [ ] Vote casting interface (yes/no/abstain)
- [ ] Results visualization (charts/graphs)
- [ ] Proposal creation form design
- [ ] Voting power display

**Technical Requirements**:
- Progress bars for vote tallies
- Countdown timers for voting periods
- Token-weighted voting display
- Mobile-responsive voting interface

**Labels**: `design`, `frontend`, `governance`

---

## Issue #10: Notification System UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Design the notification system UI including notification bell, dropdown panel, notification items, and notification preferences page.

**Acceptance Criteria**:
- [ ] Notification bell icon with badge count
- [ ] Notification dropdown panel design
- [ ] Individual notification item designs (various types)
- [ ] Mark as read / clear all actions
- [ ] Notification preferences settings page
- [ ] Empty state design

**Technical Requirements**:
- Real-time update consideration
- Categorized notifications (governance, community, system)
- Mobile notification design

**Labels**: `design`, `frontend`, `notifications`

---

## Issue #11: Dark Mode Design Implementation
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design and implement a complete dark mode theme for HUB-Buddy. All components and pages should have proper dark mode variants that are easy on the eyes and maintain accessibility.

**Acceptance Criteria**:
- [ ] Dark mode color palette defined
- [ ] All components have dark mode variants
- [ ] System preference detection
- [ ] Manual toggle option
- [ ] Smooth transition between modes
- [ ] Dark mode persisted in user preferences

**Technical Requirements**:
- Tailwind `dark:` class usage
- CSS custom properties for theme switching
- localStorage persistence
- No flash of unstyled content (FOUC)

**Labels**: `design`, `frontend`, `dark-mode`

---

## Issue #12: Mobile Navigation Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the mobile navigation experience including bottom tab bar, hamburger menu, and mobile-specific navigation patterns for the HUB-Buddy platform.

**Acceptance Criteria**:
- [ ] Bottom navigation bar for mobile
- [ ] Slide-out drawer menu design
- [ ] Mobile header design
- [ ] Back navigation patterns
- [ ] Active state indicators

**Technical Requirements**:
- Touch-friendly tap targets (min 44x44px)
- Safe area inset support for notched phones
- Smooth animation transitions

**Labels**: `design`, `frontend`, `mobile`, `navigation`

---

## Issue #13: Token & NFT Display Components Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design reusable components for displaying tokens, NFTs, and blockchain assets throughout the platform including token cards, NFT galleries, and balance displays.

**Acceptance Criteria**:
- [ ] Token balance card design
- [ ] NFT thumbnail grid design
- [ ] NFT detail modal design
- [ ] Token transfer form design
- [ ] Asset list view design

**Technical Requirements**:
- Image lazy loading consideration
- Placeholder/skeleton states
- Support for various token standards display

**Labels**: `design`, `frontend`, `blockchain`, `nft`

---

## Issue #14: Community Creation Wizard Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Design a multi-step wizard for creating a new community on HUB-Buddy, covering basic info, governance settings, token configuration, and deployment confirmation.

**Acceptance Criteria**:
- [ ] Step 1: Basic info (name, description, avatar)
- [ ] Step 2: Governance settings design
- [ ] Step 3: Token/incentive configuration
- [ ] Step 4: Review & deploy confirmation
- [ ] Progress stepper component
- [ ] Validation error states

**Technical Requirements**:
- Multi-step form with validation
- Cost estimation display before deployment
- Mobile-responsive wizard

**Labels**: `design`, `frontend`, `community`, `onboarding`

---

## Issue #15: Search & Discovery UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the community search and discovery interface including search bar, filters, community cards, and category browsing.

**Acceptance Criteria**:
- [ ] Search bar with autocomplete design
- [ ] Filter panel design (category, size, activity)
- [ ] Community card component design
- [ ] Grid and list view options
- [ ] Empty/no results state
- [ ] Featured communities section

**Technical Requirements**:
- Debounced search input
- Filter chips/tags design
- Infinite scroll or pagination design

**Labels**: `design`, `frontend`, `search`, `discovery`

---

## Issue #16: Error & Empty State Designs
**Category**: Design
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Design consistent error pages and empty state illustrations for 404, 500, network errors, empty lists, and other edge cases throughout the platform.

**Acceptance Criteria**:
- [ ] 404 page design
- [ ] 500/server error page design
- [ ] Network error state design
- [ ] Empty list/feed states (5+ variants)
- [ ] Wallet not connected state
- [ ] Permission denied state

**Technical Requirements**:
- Consistent illustration style
- Actionable CTAs on error pages
- Friendly, non-technical error messaging

**Labels**: `design`, `frontend`, `ux`, `error-states`

---

## Issue #17: Loading & Skeleton Screen Designs
**Category**: Design
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Design skeleton loading screens and loading states for all major components to improve perceived performance and user experience during data fetching.

**Acceptance Criteria**:
- [ ] Dashboard skeleton design
- [ ] Community card skeleton
- [ ] Profile page skeleton
- [ ] Feed/activity skeleton
- [ ] Table/list skeleton
- [ ] Animated shimmer effect spec

**Technical Requirements**:
- CSS animation for shimmer effect
- Matches actual content layout
- Accessible (reduced motion support)

**Labels**: `design`, `frontend`, `performance`, `ux`

---

## Issue #18: Settings & Preferences Page Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Design the user settings and preferences page covering account settings, notification preferences, privacy settings, and connected services.

**Acceptance Criteria**:
- [ ] Settings navigation sidebar design
- [ ] Account settings section
- [ ] Notification preferences section
- [ ] Privacy & security section
- [ ] Connected wallets management
- [ ] Danger zone (delete account) section

**Technical Requirements**:
- Grouped settings with clear sections
- Toggle/switch components
- Confirmation dialogs for destructive actions

**Labels**: `design`, `frontend`, `settings`

---

## Issue #19: Activity Feed & Timeline Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the community activity feed and user timeline showing events, transactions, governance actions, and member activities in a chronological format.

**Acceptance Criteria**:
- [ ] Feed item designs for various event types
- [ ] Timeline layout design
- [ ] Filter/sort controls
- [ ] Load more / infinite scroll design
- [ ] Real-time update indicator

**Technical Requirements**:
- Distinct visual treatment per event type
- Timestamp display (relative and absolute)
- Blockchain transaction link integration

**Labels**: `design`, `frontend`, `activity-feed`

---

## Issue #20: Responsive Grid System Design
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Define and document the responsive grid system used across HUB-Buddy, including breakpoints, column counts, gutters, and container widths.

**Acceptance Criteria**:
- [ ] Breakpoints defined (mobile, tablet, desktop, wide)
- [ ] Column grid system documented
- [ ] Container max-widths specified
- [ ] Gutter/spacing rules defined
- [ ] Tailwind config updated accordingly

**Technical Requirements**:
- Tailwind CSS grid/container configuration
- Consistent spacing across all pages
- Documentation in design system

**Labels**: `design`, `frontend`, `responsive`

---

## Issue #21: Modal & Dialog Component Designs
**Category**: Design
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Design reusable modal and dialog components for confirmations, forms, alerts, and information display used throughout the platform.

**Acceptance Criteria**:
- [ ] Standard modal design (small, medium, large)
- [ ] Confirmation dialog design
- [ ] Alert/warning dialog design
- [ ] Full-screen mobile modal design
- [ ] Backdrop and animation specs

**Technical Requirements**:
- Focus trap for accessibility
- Keyboard dismissal (Escape key)
- Scroll lock when open

**Labels**: `design`, `frontend`, `components`

---

## Issue #22: Form Components Design System
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design a comprehensive set of form components including inputs, selects, checkboxes, radio buttons, toggles, and form validation states.

**Acceptance Criteria**:
- [ ] Text input (default, focus, error, disabled states)
- [ ] Textarea component
- [ ] Select/dropdown design
- [ ] Checkbox and radio button designs
- [ ] Toggle/switch design
- [ ] Form validation error display
- [ ] Form success state

**Technical Requirements**:
- WCAG 2.1 AA accessible form labels
- Clear focus indicators
- Error message placement and styling

**Labels**: `design`, `frontend`, `forms`, `accessibility`

---

## Issue #23: Treasury & Finance Dashboard Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Design the community treasury dashboard showing token balances, transaction history, spending proposals, and financial analytics.

**Acceptance Criteria**:
- [ ] Treasury balance overview design
- [ ] Transaction history table design
- [ ] Spending proposal cards
- [ ] Charts for treasury over time
- [ ] Multi-token balance display

**Technical Requirements**:
- Chart/graph components (line, bar, pie)
- Large number formatting (K, M, B)
- Currency conversion display

**Labels**: `design`, `frontend`, `treasury`, `governance`

---

## Issue #24: Member Management UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the community member management interface for admins including member list, role assignment, ban/kick actions, and member analytics.

**Acceptance Criteria**:
- [ ] Member list table with search/filter
- [ ] Member detail panel/modal
- [ ] Role badge designs
- [ ] Action menu (promote, ban, remove)
- [ ] Member analytics overview

**Technical Requirements**:
- Sortable table columns
- Bulk action support design
- Confirmation dialogs for destructive actions

**Labels**: `design`, `frontend`, `admin`, `community`

---

## Issue #25: Event Management UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Design the event creation, listing, and detail pages for community events including virtual and in-person events with RSVP functionality.

**Acceptance Criteria**:
- [ ] Event card component design
- [ ] Event detail page design
- [ ] Event creation form design
- [ ] RSVP/attendance UI
- [ ] Calendar view design
- [ ] Event reminder design

**Technical Requirements**:
- Date/time picker component
- Timezone display
- Attendee count display

**Labels**: `design`, `frontend`, `events`

---

## Issue #26: Messaging & Chat UI Design
**Category**: Design
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Design the community messaging and chat interface including channel list, message threads, direct messages, and real-time indicators.

**Acceptance Criteria**:
- [ ] Channel sidebar design
- [ ] Message thread/chat area design
- [ ] Message input with rich text options
- [ ] Direct message design
- [ ] Online/offline indicators
- [ ] Message reactions design

**Technical Requirements**:
- Sticky message input at bottom
- Message grouping by time/user
- Unread message indicators
- Mobile-optimized chat layout

**Labels**: `design`, `frontend`, `messaging`

---

## Issue #27: Analytics & Insights Dashboard Design
**Category**: Design
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Design analytics dashboards for community admins showing growth metrics, engagement stats, token activity, and governance participation.

**Acceptance Criteria**:
- [ ] Overview metrics cards design
- [ ] Member growth chart
- [ ] Engagement metrics visualization
- [ ] Token activity charts
- [ ] Governance participation stats
- [ ] Date range selector

**Technical Requirements**:
- Recharts or Chart.js component designs
- Exportable data consideration
- Responsive chart designs

**Labels**: `design`, `frontend`, `analytics`

---

## Issue #28: Accessibility Audit & Design Guidelines
**Category**: Design
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Conduct a design-level accessibility audit and create accessibility guidelines for the HUB-Buddy design system ensuring WCAG 2.1 AA compliance.

**Acceptance Criteria**:
- [ ] Color contrast ratios verified for all text
- [ ] Focus indicator designs for all interactive elements
- [ ] Screen reader considerations documented
- [ ] Keyboard navigation patterns defined
- [ ] Accessibility guidelines document created

**Technical Requirements**:
- WCAG 2.1 AA minimum compliance
- ARIA label recommendations
- Skip navigation design

**Labels**: `design`, `accessibility`, `documentation`

---

## Issue #29: Micro-interaction & Animation Spec
**Category**: Design
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Define micro-interactions and animation specifications for HUB-Buddy including hover states, transitions, loading animations, and feedback animations.

**Acceptance Criteria**:
- [ ] Hover state animations defined
- [ ] Page transition specs
- [ ] Button click feedback animations
- [ ] Success/error animation specs
- [ ] Reduced motion alternatives defined

**Technical Requirements**:
- CSS transition/animation values
- Framer Motion or CSS animation specs
- Performance considerations (GPU-accelerated)

**Labels**: `design`, `frontend`, `animation`, `ux`

---

## Issue #30: Plugin & Integration Marketplace Design
**Category**: Design
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Design the plugin and integration marketplace where community admins can discover, install, and manage third-party integrations and plugins.

**Acceptance Criteria**:
- [ ] Marketplace listing page design
- [ ] Plugin card component design
- [ ] Plugin detail page design
- [ ] Install/uninstall flow design
- [ ] Installed plugins management page
- [ ] Plugin settings page template

**Technical Requirements**:
- Category filtering
- Rating/review display
- Permission scope display design

**Labels**: `design`, `frontend`, `marketplace`, `plugins`

---

## 🖥️ FRONTEND (Issues #31–#80)

---

## Issue #31: Next.js Project Setup & Configuration
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up the Next.js 14+ frontend application with TypeScript, Tailwind CSS, ESLint, and all necessary base configurations for the HUB-Buddy platform.

**Acceptance Criteria**:
- [ ] Next.js 14 app router configured
- [ ] TypeScript strict mode enabled
- [ ] Tailwind CSS integrated with custom theme
- [ ] Biome linter/formatter configured
- [ ] Path aliases configured (`@/components`, etc.)
- [ ] Environment variable types defined

**Technical Requirements**:
- Next.js 14+ with App Router
- TypeScript 5+
- Tailwind CSS 3+
- Biome for linting/formatting

**Labels**: `frontend`, `setup`, `high-priority`

---

## Issue #32: Wallet Connection Integration
**Category**: Frontend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Implement wallet connection functionality supporting MetaMask, WalletConnect, and Coinbase Wallet using a web3 library like wagmi or ethers.js.

**Acceptance Criteria**:
- [ ] MetaMask connection supported
- [ ] WalletConnect v2 supported
- [ ] Coinbase Wallet supported
- [ ] Connected wallet address displayed
- [ ] Disconnect functionality
- [ ] Network switching support
- [ ] Persistent connection across page reloads

**Technical Requirements**:
- wagmi v2 or RainbowKit
- viem for blockchain interactions
- Error handling for rejected connections

**Labels**: `frontend`, `blockchain`, `wallet`, `high-priority`

---

## Issue #33: Authentication Flow Implementation
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement the full authentication flow including sign-in with wallet (SIWE), JWT token management, protected routes, and session persistence.

**Acceptance Criteria**:
- [ ] Sign-In with Ethereum (SIWE) implemented
- [ ] JWT stored securely (httpOnly cookie)
- [ ] Protected route middleware
- [ ] Auto-refresh token logic
- [ ] Logout clears session
- [ ] Redirect to login on 401

**Technical Requirements**:
- Next.js middleware for route protection
- SIWE library integration
- Secure cookie handling

**Labels**: `frontend`, `auth`, `security`, `high-priority`

---

## Issue #34: Landing Page Implementation
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement the HUB-Buddy landing page based on approved designs, including hero section, features, stats, testimonials, and CTA sections.

**Acceptance Criteria**:
- [ ] Hero section with animated CTA
- [ ] Features section with icons
- [ ] Platform stats section
- [ ] How it works section
- [ ] Footer with links
- [ ] Fully responsive (mobile/tablet/desktop)
- [ ] Lighthouse score 90+

**Technical Requirements**:
- Next.js static generation (SSG)
- Optimized images with next/image
- Smooth scroll behavior

**Labels**: `frontend`, `landing-page`, `high-priority`

---

## Issue #35: Community Dashboard Page
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Build the main community dashboard page showing stats, recent activity, quick actions, and community highlights for logged-in users.

**Acceptance Criteria**:
- [ ] Stats cards (members, treasury, proposals)
- [ ] Recent activity feed
- [ ] Quick action buttons
- [ ] My communities list
- [ ] Trending communities section
- [ ] Responsive layout

**Technical Requirements**:
- React Server Components where applicable
- SWR or React Query for data fetching
- Skeleton loading states

**Labels**: `frontend`, `dashboard`, `high-priority`

---

## Issue #36: Community Profile Page
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Implement the community profile page displaying community info, members, governance, treasury, and activity. Includes join/leave functionality.

**Acceptance Criteria**:
- [ ] Community banner and avatar display
- [ ] Stats (members, treasury balance, proposals)
- [ ] Tabbed content (About, Members, Governance, Activity)
- [ ] Join/Leave button with wallet transaction
- [ ] Member list with pagination
- [ ] Share community link

**Technical Requirements**:
- Dynamic routing (`/community/[slug]`)
- On-chain data fetching
- Optimistic UI updates for join/leave

**Labels**: `frontend`, `community`, `high-priority`

---

## Issue #37: User Profile Page
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build the user profile page showing personal info, connected wallets, community memberships, token holdings, and activity history.

**Acceptance Criteria**:
- [ ] Profile header with avatar and username
- [ ] Wallet addresses display with copy button
- [ ] Community memberships list
- [ ] Token/NFT holdings section
- [ ] Activity history timeline
- [ ] Edit profile functionality (own profile)

**Technical Requirements**:
- Dynamic routing (`/profile/[address]`)
- ENS name resolution
- Avatar from ENS or Gravatar fallback

**Labels**: `frontend`, `user-profile`

---

## Issue #38: Community Search & Discovery Page
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement the community search and discovery page with full-text search, category filters, sorting options, and community cards.

**Acceptance Criteria**:
- [ ] Search input with debounce
- [ ] Category filter chips
- [ ] Sort by (newest, most members, most active)
- [ ] Community card grid
- [ ] Pagination or infinite scroll
- [ ] URL-synced filters (shareable links)

**Technical Requirements**:
- URL search params for filter state
- Server-side search via API
- React Query for paginated data

**Labels**: `frontend`, `search`, `discovery`

---

## Issue #39: Governance & Voting Page
**Category**: Frontend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Build the governance interface for viewing proposals, casting votes, and creating new proposals with on-chain transaction support.

**Acceptance Criteria**:
- [ ] Proposal list with status filters
- [ ] Proposal detail page with vote breakdown
- [ ] Vote casting (yes/no/abstain) with wallet tx
- [ ] Voting power display
- [ ] Proposal creation form
- [ ] Countdown timer for active proposals

**Technical Requirements**:
- Smart contract read/write via wagmi
- Real-time vote count updates
- Transaction confirmation flow

**Labels**: `frontend`, `governance`, `blockchain`

---

## Issue #40: Treasury Management Page
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Implement the community treasury page showing balances, transaction history, and spending proposal management.

**Acceptance Criteria**:
- [ ] Multi-token balance display
- [ ] Transaction history table with filters
- [ ] Spending proposal creation
- [ ] Treasury charts (balance over time)
- [ ] Export transaction history (CSV)

**Technical Requirements**:
- On-chain balance fetching
- Block explorer links for transactions
- Chart.js or Recharts integration

**Labels**: `frontend`, `treasury`, `blockchain`

---

## Issue #41: Onboarding Wizard Implementation
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement the multi-step onboarding wizard for new users covering wallet connection, profile setup, and first community discovery.

**Acceptance Criteria**:
- [ ] Multi-step form with progress indicator
- [ ] Step 1: Connect wallet
- [ ] Step 2: Set username and avatar
- [ ] Step 3: Discover/join communities
- [ ] Skip optional steps
- [ ] Completion redirects to dashboard

**Technical Requirements**:
- React Hook Form for form state
- Zod schema validation
- Persisted step state (localStorage)

**Labels**: `frontend`, `onboarding`, `ux`

---

## Issue #42: Notification System Frontend
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement the notification system UI including bell icon with badge, dropdown panel, notification items, and real-time updates via WebSocket.

**Acceptance Criteria**:
- [ ] Notification bell with unread count badge
- [ ] Dropdown panel with notification list
- [ ] Mark as read on click
- [ ] Mark all as read action
- [ ] Real-time new notification via WebSocket
- [ ] Notification preferences link

**Technical Requirements**:
- WebSocket or SSE for real-time updates
- Optimistic mark-as-read
- Notification sound (optional, user preference)

**Labels**: `frontend`, `notifications`, `real-time`

---

## Issue #43: Community Creation Wizard
**Category**: Frontend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Build the multi-step community creation wizard that guides users through setting up a community and deploying its smart contract.

**Acceptance Criteria**:
- [ ] Step 1: Basic info (name, description, avatar upload)
- [ ] Step 2: Governance settings
- [ ] Step 3: Token configuration
- [ ] Step 4: Review and deploy
- [ ] Gas estimation display
- [ ] Deployment progress tracking
- [ ] Success page with community link

**Technical Requirements**:
- Multi-step form with React Hook Form
- Image upload to IPFS
- Smart contract deployment via wagmi
- Transaction status polling

**Labels**: `frontend`, `community`, `blockchain`, `high-priority`

---

## Issue #44: Member Management Admin Panel
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Build the admin panel for community member management including member list, role assignment, and moderation actions.

**Acceptance Criteria**:
- [ ] Searchable/filterable member table
- [ ] Role assignment dropdown
- [ ] Ban/remove member with confirmation
- [ ] Bulk actions (select multiple)
- [ ] Member detail side panel
- [ ] Activity stats per member

**Technical Requirements**:
- TanStack Table for data table
- Optimistic UI for role changes
- Permission checks (admin only)

**Labels**: `frontend`, `admin`, `community`

---

## Issue #45: Event Management Pages
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Implement event listing, detail, and creation pages for community events with RSVP functionality.

**Acceptance Criteria**:
- [ ] Event list page with calendar/list toggle
- [ ] Event detail page with RSVP button
- [ ] Event creation form
- [ ] Attendee list display
- [ ] Event reminder toggle
- [ ] Past/upcoming filter

**Technical Requirements**:
- Date/time picker component
- Timezone handling (date-fns-tz)
- iCal export for events

**Labels**: `frontend`, `events`

---

## Issue #46: Messaging & Chat Interface
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 6 days

**Description**:
Implement real-time community messaging with channels, direct messages, and message history.

**Acceptance Criteria**:
- [ ] Channel list sidebar
- [ ] Real-time message display
- [ ] Message input with emoji support
- [ ] Message reactions
- [ ] Direct message support
- [ ] Message history pagination (load older)
- [ ] Online presence indicators

**Technical Requirements**:
- WebSocket for real-time messaging
- Virtual scrolling for message list
- Optimistic message sending

**Labels**: `frontend`, `messaging`, `real-time`

---

## Issue #47: Settings & Preferences Pages
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 3 days

**Description**:
Build the user settings pages covering account info, notification preferences, privacy settings, and connected wallets management.

**Acceptance Criteria**:
- [ ] Settings navigation layout
- [ ] Account settings form
- [ ] Notification preferences toggles
- [ ] Privacy settings
- [ ] Connected wallets list with add/remove
- [ ] Delete account flow with confirmation

**Technical Requirements**:
- React Hook Form for settings forms
- Optimistic updates with rollback
- Confirmation modal for destructive actions

**Labels**: `frontend`, `settings`

---

## Issue #48: Global State Management Setup
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up global state management for the frontend using Zustand or Jotai for UI state, and React Query for server state.

**Acceptance Criteria**:
- [ ] State management library configured
- [ ] Auth state (user, wallet) in global store
- [ ] React Query client configured with defaults
- [ ] Devtools configured for development
- [ ] State persistence where needed

**Technical Requirements**:
- Zustand for UI/client state
- TanStack Query for server state
- TypeScript types for all state shapes

**Labels**: `frontend`, `state-management`, `architecture`

---

## Issue #49: API Client & Type-Safe Fetching
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up a type-safe API client for communicating with the backend, including request/response types, error handling, and auth token injection.

**Acceptance Criteria**:
- [ ] Axios or fetch wrapper configured
- [ ] Auth token auto-injected in headers
- [ ] 401 auto-logout handling
- [ ] Request/response TypeScript types
- [ ] Error response type handling
- [ ] Base URL from environment variable

**Technical Requirements**:
- Shared types from `shared/` package
- Interceptors for auth and error handling
- Retry logic for network errors

**Labels**: `frontend`, `api`, `typescript`

---

## Issue #50: Image Upload & IPFS Integration
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement image upload functionality for avatars and community banners with IPFS storage for decentralized file hosting.

**Acceptance Criteria**:
- [ ] Drag-and-drop image upload component
- [ ] Image preview before upload
- [ ] File size and type validation
- [ ] Upload to IPFS via Pinata or web3.storage
- [ ] Progress indicator during upload
- [ ] IPFS URL returned and stored

**Technical Requirements**:
- Pinata or web3.storage SDK
- Client-side image compression
- IPFS gateway URL for display

**Labels**: `frontend`, `ipfs`, `file-upload`

---

## Issue #51: ENS Name Resolution
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Integrate ENS (Ethereum Name Service) name resolution to display human-readable names instead of wallet addresses throughout the UI.

**Acceptance Criteria**:
- [ ] ENS name resolved for connected wallet
- [ ] ENS name displayed in profile header
- [ ] ENS avatar fetched and displayed
- [ ] Fallback to truncated address if no ENS
- [ ] ENS resolution cached

**Technical Requirements**:
- wagmi `useEnsName` and `useEnsAvatar` hooks
- Graceful fallback handling
- Cache ENS results in React Query

**Labels**: `frontend`, `blockchain`, `ens`

---

## Issue #52: Responsive Layout Components
**Category**: Frontend
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Build the core layout components including app shell, sidebar, header, footer, and page container used across all pages.

**Acceptance Criteria**:
- [ ] App shell layout component
- [ ] Collapsible sidebar component
- [ ] Top navigation header
- [ ] Page container with max-width
- [ ] Footer component
- [ ] Mobile-responsive behavior

**Technical Requirements**:
- Tailwind CSS responsive classes
- Sidebar collapse state in localStorage
- Skip-to-content link for accessibility

**Labels**: `frontend`, `layout`, `components`

---

## Issue #53: Reusable UI Component Library
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Build the core reusable UI component library including Button, Input, Card, Badge, Avatar, Tooltip, and other primitives.

**Acceptance Criteria**:
- [ ] Button (variants: primary, secondary, ghost, danger)
- [ ] Input, Textarea, Select components
- [ ] Card component with variants
- [ ] Badge/Tag component
- [ ] Avatar with fallback initials
- [ ] Tooltip component
- [ ] All components have TypeScript props

**Technical Requirements**:
- shadcn/ui or Radix UI primitives
- Tailwind CVA for variant management
- Storybook stories (optional)

**Labels**: `frontend`, `components`, `design-system`

---

## Issue #54: Transaction Status & Confirmation UI
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build reusable transaction status components for blockchain interactions including pending, success, and failure states with block explorer links.

**Acceptance Criteria**:
- [ ] Transaction pending modal/toast
- [ ] Transaction success notification
- [ ] Transaction failure with error message
- [ ] Block explorer link for tx hash
- [ ] Retry option on failure
- [ ] Transaction history accessible

**Technical Requirements**:
- wagmi `useWaitForTransactionReceipt`
- Toast notification system
- Configurable block explorer URLs per chain

**Labels**: `frontend`, `blockchain`, `ux`

---

## Issue #55: Internationalization (i18n) Setup
**Category**: Frontend
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up internationalization infrastructure for HUB-Buddy to support multiple languages, starting with English as the default.

**Acceptance Criteria**:
- [ ] next-intl or next-i18next configured
- [ ] English locale file created
- [ ] Language switcher component
- [ ] RTL layout support considered
- [ ] Date/number formatting localized
- [ ] All hardcoded strings extracted

**Technical Requirements**:
- next-intl library
- Locale detection from browser
- Locale persisted in cookie

**Labels**: `frontend`, `i18n`, `accessibility`

---

## Issue #56: SEO & Meta Tags Implementation
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement SEO optimization including dynamic meta tags, Open Graph tags, Twitter cards, and structured data for community pages.

**Acceptance Criteria**:
- [ ] Dynamic page titles per route
- [ ] Open Graph meta tags for community pages
- [ ] Twitter card meta tags
- [ ] Canonical URLs
- [ ] robots.txt and sitemap.xml
- [ ] JSON-LD structured data for communities

**Technical Requirements**:
- Next.js Metadata API
- Dynamic OG image generation (next/og)
- Sitemap generation script

**Labels**: `frontend`, `seo`

---

## Issue #57: Performance Optimization & Code Splitting
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Optimize frontend performance through code splitting, lazy loading, image optimization, and bundle size reduction.

**Acceptance Criteria**:
- [ ] Dynamic imports for heavy components
- [ ] Route-based code splitting verified
- [ ] Images use next/image with proper sizing
- [ ] Bundle analyzer run and large deps addressed
- [ ] Core Web Vitals targets met (LCP < 2.5s)

**Technical Requirements**:
- `@next/bundle-analyzer`
- React.lazy for non-critical components
- Preload hints for critical resources

**Labels**: `frontend`, `performance`

---

## Issue #58: Web3 Provider & Chain Configuration
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Configure the Web3 provider setup supporting multiple EVM chains with proper RPC endpoints, chain switching, and network detection.

**Acceptance Criteria**:
- [ ] Wagmi config with supported chains
- [ ] RPC endpoints from environment variables
- [ ] Wrong network detection and prompt
- [ ] Chain switching functionality
- [ ] Testnet support for development

**Technical Requirements**:
- wagmi + viem chain configuration
- Alchemy or Infura RPC endpoints
- Environment-based chain selection

**Labels**: `frontend`, `blockchain`, `web3`

---

## Issue #59: Token Balance & Holdings Display
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build components to display ERC-20 token balances and ERC-721/1155 NFT holdings for users and community treasuries.

**Acceptance Criteria**:
- [ ] ERC-20 balance list with token icons
- [ ] NFT grid display with metadata
- [ ] Token price in USD (via price feed)
- [ ] Total portfolio value calculation
- [ ] Refresh balance button

**Technical Requirements**:
- wagmi `useBalance` and `useReadContract`
- CoinGecko or similar price API
- IPFS metadata fetching for NFTs

**Labels**: `frontend`, `blockchain`, `tokens`

---

## Issue #60: Analytics Dashboard Frontend
**Category**: Frontend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Build the community analytics dashboard with charts and metrics for admins to track community growth and engagement.

**Acceptance Criteria**:
- [ ] Member growth line chart
- [ ] Daily active users bar chart
- [ ] Governance participation pie chart
- [ ] Treasury balance over time
- [ ] Date range picker
- [ ] Export data as CSV

**Technical Requirements**:
- Recharts library
- Date range filtering
- Responsive chart containers

**Labels**: `frontend`, `analytics`, `admin`

---

## Issue #61: Proposal Creation Form
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build the governance proposal creation form with rich text editor, voting configuration, and on-chain submission.

**Acceptance Criteria**:
- [ ] Rich text editor for proposal body
- [ ] Voting period duration selector
- [ ] Voting options configuration
- [ ] Required token threshold display
- [ ] Preview before submission
- [ ] On-chain submission with wallet

**Technical Requirements**:
- TipTap or Quill rich text editor
- Markdown support
- Form validation with Zod

**Labels**: `frontend`, `governance`, `blockchain`

---

## Issue #62: Role & Permission Management UI
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build the UI for managing community roles and permissions, allowing admins to create custom roles and assign permissions.

**Acceptance Criteria**:
- [ ] Role list with permission summary
- [ ] Create/edit role form
- [ ] Permission checkboxes per role
- [ ] Assign role to member UI
- [ ] Role hierarchy visualization

**Technical Requirements**:
- Permission matrix component
- Drag-and-drop role ordering (optional)
- On-chain role assignment via smart contract

**Labels**: `frontend`, `admin`, `governance`

---

## Issue #63: Community Feed & Posts
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Build the community feed with post creation, display, reactions, and comments functionality.

**Acceptance Criteria**:
- [ ] Post creation with rich text
- [ ] Feed with infinite scroll
- [ ] Post reactions (like, etc.)
- [ ] Comment thread on posts
- [ ] Pin post (admin)
- [ ] Report post functionality

**Technical Requirements**:
- Optimistic updates for reactions
- Virtual scrolling for performance
- Image attachment support

**Labels**: `frontend`, `community`, `social`

---

## Issue #64: Wallet Transaction History
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build a transaction history page showing all blockchain transactions related to the user's HUB-Buddy activity.

**Acceptance Criteria**:
- [ ] Transaction list with type icons
- [ ] Filter by transaction type
- [ ] Date range filter
- [ ] Block explorer link per transaction
- [ ] Transaction status (confirmed/pending)
- [ ] Export to CSV

**Technical Requirements**:
- Etherscan/block explorer API integration
- Transaction type categorization
- Pagination

**Labels**: `frontend`, `blockchain`, `wallet`

---

## Issue #65: Multi-Chain Support UI
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Extend the frontend to support multiple blockchain networks with chain selector, cross-chain community display, and network-specific features.

**Acceptance Criteria**:
- [ ] Chain selector dropdown in header
- [ ] Communities filtered by chain
- [ ] Chain badge on community cards
- [ ] Cross-chain balance aggregation
- [ ] Network-specific RPC handling

**Technical Requirements**:
- wagmi multi-chain config
- Chain-specific contract addresses
- Chain icon assets

**Labels**: `frontend`, `blockchain`, `multi-chain`

---

## Issue #66: PWA & Offline Support
**Category**: Frontend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Convert HUB-Buddy frontend into a Progressive Web App with offline support, push notifications, and installability.

**Acceptance Criteria**:
- [ ] Service worker configured
- [ ] App installable (manifest.json)
- [ ] Offline fallback page
- [ ] Push notification support
- [ ] Background sync for offline actions
- [ ] Lighthouse PWA score 90+

**Technical Requirements**:
- next-pwa library
- Web Push API
- IndexedDB for offline data

**Labels**: `frontend`, `pwa`, `mobile`

---

## Issue #67: Keyboard Navigation & Accessibility
**Category**: Frontend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Ensure full keyboard navigation support and screen reader compatibility across all pages and components.

**Acceptance Criteria**:
- [ ] All interactive elements keyboard accessible
- [ ] Focus trap in modals
- [ ] Skip-to-content link
- [ ] ARIA labels on all interactive elements
- [ ] Screen reader tested (NVDA/VoiceOver)
- [ ] No keyboard traps

**Technical Requirements**:
- Radix UI accessible primitives
- axe-core automated testing
- Manual screen reader testing

**Labels**: `frontend`, `accessibility`, `a11y`

---

## Issue #68: Token Gating UI Components
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build UI components for token-gated content and features, showing users what tokens are required and their current eligibility.

**Acceptance Criteria**:
- [ ] Token gate lock overlay component
- [ ] Required token display with balance check
- [ ] "Get tokens" CTA when not eligible
- [ ] Eligibility check on page load
- [ ] Graceful loading state

**Technical Requirements**:
- On-chain balance verification
- Multiple token requirement support
- Clear UX for non-eligible users

**Labels**: `frontend`, `blockchain`, `token-gating`

---

## Issue #69: Community Invite & Referral System UI
**Category**: Frontend
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Build the UI for generating and sharing community invite links with referral tracking.

**Acceptance Criteria**:
- [ ] Generate invite link button
- [ ] Copy link to clipboard
- [ ] Share via social media buttons
- [ ] Invite link landing page
- [ ] Referral stats display (admin)

**Technical Requirements**:
- Clipboard API
- Web Share API for mobile
- Unique invite code generation

**Labels**: `frontend`, `community`, `growth`

---

## Issue #70: Real-Time Updates with WebSocket
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Implement real-time UI updates using WebSocket connections for live activity feeds, notifications, vote counts, and member presence.

**Acceptance Criteria**:
- [ ] WebSocket connection established on login
- [ ] Auto-reconnect on disconnect
- [ ] Live activity feed updates
- [ ] Real-time vote count updates
- [ ] Member online presence
- [ ] Connection status indicator

**Technical Requirements**:
- Socket.io client or native WebSocket
- Exponential backoff reconnection
- React Query cache invalidation on WS events

**Labels**: `frontend`, `real-time`, `websocket`

---

## Issue #71: Dark Mode Toggle Implementation
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement dark mode toggle with system preference detection, manual override, and persistence.

**Acceptance Criteria**:
- [ ] System preference auto-detected
- [ ] Manual toggle in header/settings
- [ ] Preference saved to localStorage
- [ ] No flash of wrong theme on load
- [ ] Smooth CSS transition

**Technical Requirements**:
- next-themes library
- Tailwind `dark:` classes throughout
- `prefers-color-scheme` media query

**Labels**: `frontend`, `dark-mode`, `ux`

---

## Issue #72: Form Validation with Zod
**Category**: Frontend
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement consistent form validation across all forms using Zod schemas with React Hook Form integration.

**Acceptance Criteria**:
- [ ] Zod schemas defined for all forms
- [ ] React Hook Form + Zod resolver configured
- [ ] Inline error messages displayed
- [ ] Shared validation schemas in `shared/` package
- [ ] Server-side validation errors displayed

**Technical Requirements**:
- zod + @hookform/resolvers
- Shared schema package
- Error message i18n-ready

**Labels**: `frontend`, `forms`, `validation`

---

## Issue #73: Breadcrumb & Navigation State
**Category**: Frontend
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement breadcrumb navigation and active navigation state indicators across all pages.

**Acceptance Criteria**:
- [ ] Breadcrumb component built
- [ ] Dynamic breadcrumbs per route
- [ ] Active state in sidebar navigation
- [ ] Back button behavior consistent
- [ ] Breadcrumb schema markup (SEO)

**Technical Requirements**:
- Next.js usePathname hook
- JSON-LD BreadcrumbList schema

**Labels**: `frontend`, `navigation`, `ux`

---

## Issue #74: Copy-to-Clipboard Utility
**Category**: Frontend
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 0.5 days

**Description**:
Build a reusable copy-to-clipboard component and hook used for wallet addresses, invite links, and transaction hashes.

**Acceptance Criteria**:
- [ ] `useCopyToClipboard` hook created
- [ ] CopyButton component with tooltip feedback
- [ ] "Copied!" confirmation state (2s)
- [ ] Fallback for older browsers

**Technical Requirements**:
- Clipboard API with execCommand fallback
- Accessible button with aria-label

**Labels**: `frontend`, `components`, `utility`

---

## Issue #75: Pagination & Infinite Scroll Components
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Build reusable pagination and infinite scroll components for lists throughout the platform.

**Acceptance Criteria**:
- [ ] Pagination component with page numbers
- [ ] Infinite scroll hook with IntersectionObserver
- [ ] Loading spinner for next page
- [ ] End-of-list indicator
- [ ] URL-synced page number for pagination

**Technical Requirements**:
- IntersectionObserver API
- React Query `useInfiniteQuery`
- Accessible pagination (aria-label)

**Labels**: `frontend`, `components`, `ux`

---

## Issue #76: Error Boundary Implementation
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement React Error Boundaries throughout the app to gracefully handle runtime errors and display user-friendly fallback UIs.

**Acceptance Criteria**:
- [ ] Global error boundary wrapping app
- [ ] Route-level error boundaries
- [ ] Component-level boundaries for widgets
- [ ] Error reporting to monitoring service
- [ ] User-friendly error fallback UI

**Technical Requirements**:
- React Error Boundary class component
- Sentry or similar error reporting
- Next.js `error.tsx` files

**Labels**: `frontend`, `error-handling`, `reliability`

---

## Issue #77: Token Swap Integration UI
**Category**: Frontend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Integrate a token swap interface (via Uniswap or 1inch) allowing users to acquire community tokens directly within HUB-Buddy.

**Acceptance Criteria**:
- [ ] Token swap widget embedded
- [ ] Pre-filled with community token
- [ ] Slippage tolerance setting
- [ ] Price impact warning
- [ ] Transaction confirmation flow

**Technical Requirements**:
- Uniswap Widget or 1inch API
- wagmi for transaction signing
- Price feed integration

**Labels**: `frontend`, `blockchain`, `defi`

---

## Issue #78: Community Leaderboard Page
**Category**: Frontend
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Build a community leaderboard page showing top contributors, most active members, and token holders.

**Acceptance Criteria**:
- [ ] Top members by contribution score
- [ ] Top token holders list
- [ ] Time period filter (week/month/all-time)
- [ ] User's own rank displayed
- [ ] Animated rank changes

**Technical Requirements**:
- Sorted/ranked list component
- Rank badge designs
- Pagination for full list

**Labels**: `frontend`, `community`, `gamification`

---

## Issue #79: Storybook Component Documentation
**Category**: Frontend
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up Storybook for documenting and visually testing all UI components in isolation.

**Acceptance Criteria**:
- [ ] Storybook configured for Next.js
- [ ] Stories for all base components
- [ ] Dark mode addon configured
- [ ] Accessibility addon enabled
- [ ] Deployed Storybook URL

**Technical Requirements**:
- Storybook 7+
- @storybook/addon-a11y
- Chromatic for visual regression (optional)

**Labels**: `frontend`, `documentation`, `components`

---

## Issue #80: Frontend End-to-End Testing Setup
**Category**: Frontend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up end-to-end testing for critical user flows using Playwright or Cypress.

**Acceptance Criteria**:
- [ ] E2E test framework configured
- [ ] Wallet mock for testing
- [ ] Tests for: login, create community, vote
- [ ] CI integration for E2E tests
- [ ] Test report generation

**Technical Requirements**:
- Playwright or Cypress
- Mock wallet provider for tests
- GitHub Actions CI integration

**Labels**: `frontend`, `testing`, `e2e`

---

## ⚙️ BACKEND (Issues #81–#130)

---

## Issue #81: Express Server Setup & Architecture
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up the Node.js/Express backend with TypeScript, middleware stack, error handling, and project structure following best practices.

**Acceptance Criteria**:
- [ ] Express app with TypeScript configured
- [ ] Middleware stack (cors, helmet, compression, morgan)
- [ ] Global error handler middleware
- [ ] Request validation middleware
- [ ] Health check endpoint (`GET /health`)
- [ ] Graceful shutdown handling

**Technical Requirements**:
- Express 4+ with TypeScript
- helmet for security headers
- express-rate-limit for basic rate limiting
- Structured logging with pino or winston

**Labels**: `backend`, `setup`, `high-priority`

---

## Issue #82: Database Schema Design & Prisma Setup
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Design the PostgreSQL database schema and set up Prisma ORM with migrations for all core entities.

**Acceptance Criteria**:
- [ ] Prisma schema for User, Community, Member, Proposal, Vote, Event, Message
- [ ] Database migrations created
- [ ] Seed script for development data
- [ ] Database connection pooling configured
- [ ] Prisma client generated and typed

**Technical Requirements**:
- PostgreSQL 14+
- Prisma ORM
- Connection pooling via PgBouncer or Prisma Accelerate
- Soft delete pattern for key entities

**Labels**: `backend`, `database`, `high-priority`

---

## Issue #83: JWT Authentication Middleware
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement JWT-based authentication middleware with access tokens, refresh tokens, and Sign-In with Ethereum (SIWE) verification.

**Acceptance Criteria**:
- [ ] SIWE message verification endpoint
- [ ] JWT access token generation (15min expiry)
- [ ] Refresh token generation (7 days)
- [ ] Auth middleware for protected routes
- [ ] Token refresh endpoint
- [ ] Logout (invalidate refresh token)

**Technical Requirements**:
- siwe library for Ethereum signature verification
- jsonwebtoken library
- Refresh tokens stored in DB (revocable)
- httpOnly cookie for refresh token

**Labels**: `backend`, `auth`, `security`, `high-priority`

---

## Issue #84: User Management API
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build CRUD API endpoints for user management including profile creation, updates, and retrieval.

**Acceptance Criteria**:
- [ ] `GET /users/:address` - Get user profile
- [ ] `PUT /users/me` - Update own profile
- [ ] `GET /users/me` - Get current user
- [ ] `DELETE /users/me` - Delete account
- [ ] Avatar upload endpoint
- [ ] Username uniqueness validation

**Technical Requirements**:
- Input validation with Zod
- File upload with multer
- Rate limiting on update endpoints

**Labels**: `backend`, `users`, `api`

---

## Issue #85: Community Management API
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Build the full CRUD API for community management including creation, updates, member management, and settings.

**Acceptance Criteria**:
- [ ] `POST /communities` - Create community
- [ ] `GET /communities/:slug` - Get community
- [ ] `PUT /communities/:slug` - Update community (admin)
- [ ] `DELETE /communities/:slug` - Delete community (admin)
- [ ] `GET /communities` - List/search communities
- [ ] `POST /communities/:slug/join` - Join community
- [ ] `POST /communities/:slug/leave` - Leave community

**Technical Requirements**:
- Slug generation from community name
- Admin permission checks
- Pagination for community list
- Full-text search with PostgreSQL

**Labels**: `backend`, `community`, `api`, `high-priority`

---

## Issue #86: Governance & Proposals API
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Build API endpoints for governance proposals including creation, voting, and results with on-chain verification.

**Acceptance Criteria**:
- [ ] `POST /communities/:slug/proposals` - Create proposal
- [ ] `GET /communities/:slug/proposals` - List proposals
- [ ] `GET /proposals/:id` - Get proposal detail
- [ ] `POST /proposals/:id/vote` - Cast vote
- [ ] `GET /proposals/:id/votes` - Get vote breakdown
- [ ] Proposal status auto-update (cron)

**Technical Requirements**:
- On-chain vote verification
- Voting power calculation from token balance
- Proposal status state machine (pending/active/passed/failed)

**Labels**: `backend`, `governance`, `api`

---

## Issue #87: Notification System Backend
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build the notification system backend including notification creation, delivery, and WebSocket push to connected clients.

**Acceptance Criteria**:
- [ ] Notification model and API
- [ ] `GET /notifications` - List user notifications
- [ ] `PUT /notifications/:id/read` - Mark as read
- [ ] `PUT /notifications/read-all` - Mark all read
- [ ] WebSocket push for new notifications
- [ ] Notification preferences respected

**Technical Requirements**:
- Socket.io for WebSocket
- Notification queue (Bull/BullMQ)
- Notification templates per event type

**Labels**: `backend`, `notifications`, `websocket`

---

## Issue #88: File Upload & IPFS Service
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build the file upload service handling image uploads, validation, and pinning to IPFS via Pinata.

**Acceptance Criteria**:
- [ ] `POST /upload/image` - Upload image
- [ ] File type validation (jpg, png, webp, gif)
- [ ] File size limit (5MB)
- [ ] Image resizing/optimization
- [ ] IPFS pinning via Pinata API
- [ ] Return IPFS CID and gateway URL

**Technical Requirements**:
- multer for file handling
- sharp for image processing
- Pinata SDK for IPFS
- Virus scanning consideration

**Labels**: `backend`, `file-upload`, `ipfs`

---

## Issue #89: Search API with Full-Text Search
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement full-text search for communities, users, and proposals using PostgreSQL full-text search or Elasticsearch.

**Acceptance Criteria**:
- [ ] `GET /search?q=` - Global search endpoint
- [ ] Community search by name/description
- [ ] User search by username/address
- [ ] Proposal search by title/content
- [ ] Search results ranked by relevance
- [ ] Pagination support

**Technical Requirements**:
- PostgreSQL `tsvector` full-text search
- Search index on key columns
- Debounced search (handled client-side)

**Labels**: `backend`, `search`, `api`

---

## Issue #90: Rate Limiting & API Throttling
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement comprehensive rate limiting across all API endpoints to prevent abuse and ensure fair usage.

**Acceptance Criteria**:
- [ ] Global rate limit (100 req/min per IP)
- [ ] Auth endpoints stricter limit (10 req/min)
- [ ] Upload endpoints limited (10 req/hour)
- [ ] Rate limit headers in responses
- [ ] Redis-backed rate limiting for distributed setup
- [ ] Whitelist for internal services

**Technical Requirements**:
- express-rate-limit
- Redis for distributed rate limiting
- Custom rate limit per route group

**Labels**: `backend`, `security`, `performance`

---

## Issue #91: WebSocket Server Implementation
**Category**: Backend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Implement WebSocket server using Socket.io for real-time features including notifications, chat, and live updates.

**Acceptance Criteria**:
- [ ] Socket.io server configured
- [ ] JWT authentication for WS connections
- [ ] Room-based messaging (per community)
- [ ] Presence tracking (online users)
- [ ] Reconnection handling
- [ ] Horizontal scaling with Redis adapter

**Technical Requirements**:
- Socket.io with Redis adapter
- JWT verification on connection
- Event namespacing

**Labels**: `backend`, `websocket`, `real-time`

---

## Issue #92: Event Management API
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build CRUD API for community events including creation, RSVP management, and reminders.

**Acceptance Criteria**:
- [ ] `POST /communities/:slug/events` - Create event
- [ ] `GET /communities/:slug/events` - List events
- [ ] `GET /events/:id` - Get event detail
- [ ] `POST /events/:id/rsvp` - RSVP to event
- [ ] `DELETE /events/:id/rsvp` - Cancel RSVP
- [ ] Event reminder notifications (cron)

**Technical Requirements**:
- Timezone-aware datetime storage (UTC)
- RSVP capacity limits
- iCal generation for events

**Labels**: `backend`, `events`, `api`

---

## Issue #93: Messaging API
**Category**: Backend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Build the messaging backend for community channels and direct messages with history, pagination, and real-time delivery.

**Acceptance Criteria**:
- [ ] `GET /communities/:slug/channels` - List channels
- [ ] `POST /communities/:slug/channels` - Create channel
- [ ] `GET /channels/:id/messages` - Get message history
- [ ] `POST /channels/:id/messages` - Send message
- [ ] Direct message endpoints
- [ ] Message deletion (own messages)

**Technical Requirements**:
- Cursor-based pagination for messages
- Message content sanitization
- Attachment support (IPFS links)

**Labels**: `backend`, `messaging`, `api`

---

## Issue #94: Blockchain Event Indexer
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Build a blockchain event indexer that listens to smart contract events and syncs on-chain data to the database.

**Acceptance Criteria**:
- [ ] Event listener for community contract events
- [ ] Member join/leave events indexed
- [ ] Governance vote events indexed
- [ ] Treasury transaction events indexed
- [ ] Missed events recovery on restart
- [ ] Block number tracking for resumption

**Technical Requirements**:
- viem `watchContractEvent` or ethers.js
- BullMQ for event processing queue
- Idempotent event processing

**Labels**: `backend`, `blockchain`, `indexer`, `high-priority`

---

## Issue #95: Caching Layer with Redis
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement Redis caching for frequently accessed data including community profiles, user data, and blockchain queries.

**Acceptance Criteria**:
- [ ] Redis client configured
- [ ] Community profile cached (5min TTL)
- [ ] User profile cached (5min TTL)
- [ ] Cache invalidation on updates
- [ ] Cache hit/miss metrics logged
- [ ] Cache warming on startup (optional)

**Technical Requirements**:
- ioredis client
- Cache-aside pattern
- TTL-based expiration
- Cache key namespacing

**Labels**: `backend`, `performance`, `caching`

---

## Issue #96: Background Job Queue
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up a background job queue using BullMQ for processing async tasks like emails, notifications, blockchain indexing, and scheduled jobs.

**Acceptance Criteria**:
- [ ] BullMQ configured with Redis
- [ ] Email notification jobs
- [ ] Blockchain event processing jobs
- [ ] Scheduled jobs (proposal status updates)
- [ ] Job retry with exponential backoff
- [ ] Bull Board UI for monitoring

**Technical Requirements**:
- BullMQ + Redis
- @bull-board/express for monitoring
- Dead letter queue for failed jobs

**Labels**: `backend`, `jobs`, `infrastructure`

---

## Issue #97: Email Notification Service
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement email notification service for important events like governance proposals, event reminders, and security alerts.

**Acceptance Criteria**:
- [ ] Email service configured (SendGrid/Resend)
- [ ] Welcome email template
- [ ] Governance proposal notification
- [ ] Event reminder email
- [ ] Security alert email
- [ ] Unsubscribe link in all emails

**Technical Requirements**:
- Resend or SendGrid SDK
- React Email for templates
- Unsubscribe token generation

**Labels**: `backend`, `email`, `notifications`

---

## Issue #98: API Documentation with Swagger
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Generate comprehensive API documentation using Swagger/OpenAPI for all backend endpoints.

**Acceptance Criteria**:
- [ ] Swagger UI at `/api-docs`
- [ ] All endpoints documented
- [ ] Request/response schemas defined
- [ ] Authentication documented
- [ ] Example requests/responses
- [ ] OpenAPI spec exported as JSON

**Technical Requirements**:
- swagger-jsdoc + swagger-ui-express
- JSDoc annotations on all routes
- OpenAPI 3.0 spec

**Labels**: `backend`, `documentation`, `api`

---

## Issue #99: Logging & Monitoring Setup
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up structured logging and application monitoring for the backend including request logging, error tracking, and performance metrics.

**Acceptance Criteria**:
- [ ] Structured JSON logging with pino
- [ ] Request/response logging middleware
- [ ] Error tracking with Sentry
- [ ] Performance metrics (response times)
- [ ] Log levels configurable via env
- [ ] Correlation IDs for request tracing

**Technical Requirements**:
- pino logger
- Sentry SDK
- Correlation ID middleware (uuid)

**Labels**: `backend`, `monitoring`, `observability`

---

## Issue #100: Database Migrations & Seeding
**Category**: Backend
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Set up database migration workflow and seed scripts for development and testing environments.

**Acceptance Criteria**:
- [ ] Prisma migrations for all schema changes
- [ ] Seed script with realistic test data
- [ ] Migration CI check (no pending migrations)
- [ ] Reset script for development
- [ ] Production migration safety checks

**Technical Requirements**:
- Prisma migrate
- Faker.js for seed data
- Migration rollback procedure documented

**Labels**: `backend`, `database`, `devops`

---

## Issue #101: Role-Based Access Control (RBAC)
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement a flexible RBAC system for community roles (owner, admin, moderator, member) with permission checks on all relevant endpoints.

**Acceptance Criteria**:
- [ ] Role enum defined (owner, admin, moderator, member)
- [ ] Permission matrix defined per role
- [ ] `requireRole` middleware created
- [ ] Role checks on all community endpoints
- [ ] Role assignment API endpoint
- [ ] Custom role support (future-ready)

**Technical Requirements**:
- Middleware-based permission checks
- Role stored in community membership table
- Permission constants in shared package

**Labels**: `backend`, `auth`, `security`

---

## Issue #102: Community Analytics API
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build analytics API endpoints providing community growth, engagement, and governance participation metrics.

**Acceptance Criteria**:
- [ ] `GET /communities/:slug/analytics` - Overview stats
- [ ] Member growth over time (daily/weekly/monthly)
- [ ] Active users metric
- [ ] Governance participation rate
- [ ] Treasury activity metrics
- [ ] Date range filtering

**Technical Requirements**:
- Aggregation queries with Prisma
- Cached analytics (15min TTL)
- Time-series data format

**Labels**: `backend`, `analytics`, `api`

---

## Issue #103: Webhook System
**Category**: Backend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Build a webhook system allowing communities to subscribe to events and receive HTTP callbacks for integrations.

**Acceptance Criteria**:
- [ ] Webhook registration endpoint
- [ ] Event type subscription (member_join, proposal_created, etc.)
- [ ] Webhook delivery with retry
- [ ] HMAC signature for security
- [ ] Webhook delivery logs
- [ ] Test webhook endpoint

**Technical Requirements**:
- BullMQ for webhook delivery queue
- HMAC-SHA256 signature
- Exponential backoff retry (3 attempts)

**Labels**: `backend`, `webhooks`, `integrations`

---

## Issue #104: Treasury API Endpoints
**Category**: Backend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Build API endpoints for community treasury management including balance queries, transaction history, and spending proposals.

**Acceptance Criteria**:
- [ ] `GET /communities/:slug/treasury` - Treasury overview
- [ ] `GET /communities/:slug/treasury/transactions` - Transaction history
- [ ] `POST /communities/:slug/treasury/proposals` - Spending proposal
- [ ] On-chain balance fetching
- [ ] Transaction history from blockchain indexer

**Technical Requirements**:
- viem for on-chain balance queries
- Indexed transaction data from blockchain indexer
- Multi-token support

**Labels**: `backend`, `treasury`, `blockchain`

---

## Issue #105: Input Validation & Sanitization
**Category**: Backend
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement comprehensive input validation and sanitization across all API endpoints to prevent injection attacks and data corruption.

**Acceptance Criteria**:
- [ ] Zod validation on all request bodies
- [ ] Query parameter validation
- [ ] HTML sanitization for user content
- [ ] SQL injection prevention (Prisma parameterized queries)
- [ ] File upload validation
- [ ] Validation error response format standardized

**Technical Requirements**:
- Zod for schema validation
- DOMPurify or sanitize-html for content
- Validation middleware factory

**Labels**: `backend`, `security`, `validation`

---

## Issue #106: API Versioning Strategy
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement API versioning to allow future breaking changes without disrupting existing clients.

**Acceptance Criteria**:
- [ ] URL-based versioning (`/api/v1/`)
- [ ] Version middleware configured
- [ ] Deprecation header support
- [ ] Version documented in Swagger
- [ ] Migration guide template created

**Technical Requirements**:
- Express router versioning
- `Deprecation` and `Sunset` headers
- Version in all route paths

**Labels**: `backend`, `api`, `architecture`

---

## Issue #107: Pagination Standardization
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Standardize pagination across all list endpoints using cursor-based pagination for consistency and performance.

**Acceptance Criteria**:
- [ ] Cursor-based pagination implemented
- [ ] `limit`, `cursor`, `direction` query params
- [ ] Response includes `nextCursor` and `hasMore`
- [ ] Offset pagination as fallback option
- [ ] Pagination documented in Swagger

**Technical Requirements**:
- Prisma cursor pagination
- Consistent response envelope
- Max limit enforced (100)

**Labels**: `backend`, `api`, `performance`

---

## Issue #108: Health Check & Readiness Endpoints
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement comprehensive health check endpoints for load balancer and Kubernetes readiness/liveness probes.

**Acceptance Criteria**:
- [ ] `GET /health` - Basic liveness check
- [ ] `GET /health/ready` - Readiness (DB + Redis connected)
- [ ] `GET /health/live` - Liveness probe
- [ ] Response includes service versions
- [ ] Timeout handling for dependency checks

**Technical Requirements**:
- DB connection check
- Redis connection check
- Response time < 100ms

**Labels**: `backend`, `devops`, `reliability`

---

## Issue #109: Data Export API
**Category**: Backend
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Build data export endpoints allowing users to download their data (GDPR compliance) and admins to export community data.

**Acceptance Criteria**:
- [ ] `POST /users/me/export` - Request data export
- [ ] Export includes profile, memberships, activity
- [ ] Async export with email notification
- [ ] Download link expires after 24h
- [ ] Community data export for admins (CSV)

**Technical Requirements**:
- Background job for export generation
- Signed S3 URL for download
- GDPR-compliant data format

**Labels**: `backend`, `gdpr`, `compliance`

---

## Issue #110: Blockchain RPC Abstraction Layer
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Build an abstraction layer for blockchain RPC calls with fallback providers, retry logic, and caching.

**Acceptance Criteria**:
- [ ] Multiple RPC provider support (Alchemy, Infura, public)
- [ ] Automatic failover on RPC errors
- [ ] Response caching for read calls
- [ ] Rate limit handling per provider
- [ ] Chain-agnostic interface

**Technical Requirements**:
- viem with multiple transports
- Redis caching for read calls
- Circuit breaker pattern

**Labels**: `backend`, `blockchain`, `reliability`

---

## Issue #111: Community Moderation API
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build moderation API endpoints for banning users, removing content, and managing community rules.

**Acceptance Criteria**:
- [ ] `POST /communities/:slug/bans` - Ban member
- [ ] `DELETE /communities/:slug/bans/:userId` - Unban
- [ ] `DELETE /posts/:id` - Remove post (moderator)
- [ ] `POST /reports` - Report content
- [ ] `GET /communities/:slug/reports` - View reports (admin)
- [ ] Audit log for moderation actions

**Technical Requirements**:
- Moderator role permission checks
- Soft delete for removed content
- Moderation audit trail

**Labels**: `backend`, `moderation`, `admin`

---

## Issue #112: Token Verification Service
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Build a service that verifies token holdings for token-gated features, checking on-chain balances against requirements.

**Acceptance Criteria**:
- [ ] ERC-20 balance verification
- [ ] ERC-721 ownership verification
- [ ] ERC-1155 balance verification
- [ ] Multi-token requirement support (AND/OR)
- [ ] Cached verification results (5min TTL)
- [ ] Verification endpoint for frontend

**Technical Requirements**:
- viem `readContract` for balance checks
- Redis caching
- Batch verification support

**Labels**: `backend`, `blockchain`, `token-gating`

---

## Issue #113: Referral & Invite System Backend
**Category**: Backend
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Build the backend for community invite links and referral tracking.

**Acceptance Criteria**:
- [ ] `POST /communities/:slug/invites` - Generate invite
- [ ] `GET /invites/:code` - Validate invite
- [ ] `POST /invites/:code/accept` - Accept invite
- [ ] Invite expiry (7 days default)
- [ ] Usage limit per invite
- [ ] Referral stats tracking

**Technical Requirements**:
- Unique code generation (nanoid)
- Invite stored in DB with metadata
- Rate limit on invite generation

**Labels**: `backend`, `community`, `growth`

---

## Issue #114: Scheduled Jobs & Cron Tasks
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement scheduled background jobs for recurring tasks like proposal status updates, event reminders, and analytics aggregation.

**Acceptance Criteria**:
- [ ] Proposal status update job (every 5min)
- [ ] Event reminder emails (daily)
- [ ] Analytics aggregation job (hourly)
- [ ] Expired invite cleanup (daily)
- [ ] Job execution logging
- [ ] Failed job alerting

**Technical Requirements**:
- BullMQ repeatable jobs
- Cron expression configuration
- Job idempotency

**Labels**: `backend`, `jobs`, `automation`

---

## Issue #115: Multi-Tenancy & Community Isolation
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Ensure proper data isolation between communities so members of one community cannot access another community's private data.

**Acceptance Criteria**:
- [ ] All queries scoped to community context
- [ ] Community membership verified on all requests
- [ ] Private community access control
- [ ] Data leak prevention tests
- [ ] Community-scoped rate limiting

**Technical Requirements**:
- Middleware for community context injection
- Prisma query scoping
- Integration tests for isolation

**Labels**: `backend`, `security`, `architecture`

---

## Issue #116: API Response Standardization
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Standardize all API responses with a consistent envelope format including data, error, and metadata fields.

**Acceptance Criteria**:
- [ ] Success response format: `{ data, meta }`
- [ ] Error response format: `{ error: { code, message, details } }`
- [ ] HTTP status codes used correctly
- [ ] Response helper functions created
- [ ] All endpoints updated to use standard format

**Technical Requirements**:
- Response helper utilities
- Error code enum
- TypeScript response types in shared package

**Labels**: `backend`, `api`, `architecture`

---

## Issue #117: Database Query Optimization
**Category**: Backend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Audit and optimize slow database queries, add missing indexes, and implement query performance monitoring.

**Acceptance Criteria**:
- [ ] Slow query log enabled and reviewed
- [ ] Missing indexes identified and added
- [ ] N+1 query problems resolved
- [ ] Query execution plans reviewed
- [ ] Performance benchmarks documented

**Technical Requirements**:
- PostgreSQL EXPLAIN ANALYZE
- Prisma query logging
- Index on foreign keys and search columns

**Labels**: `backend`, `performance`, `database`

---

## Issue #118: Community Settings API
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Build API endpoints for managing community settings including visibility, join requirements, and feature toggles.

**Acceptance Criteria**:
- [ ] `GET /communities/:slug/settings` - Get settings
- [ ] `PUT /communities/:slug/settings` - Update settings
- [ ] Visibility (public/private/token-gated)
- [ ] Join approval requirement toggle
- [ ] Feature toggles (events, messaging, governance)

**Technical Requirements**:
- Admin-only access
- Settings stored as JSONB in PostgreSQL
- Settings validation schema

**Labels**: `backend`, `community`, `api`

---

## Issue #119: Audit Log System
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement an audit log system recording all significant actions for security and compliance purposes.

**Acceptance Criteria**:
- [ ] Audit log model in database
- [ ] Log: user, action, resource, timestamp, IP
- [ ] Automatic logging via middleware
- [ ] `GET /communities/:slug/audit-log` (admin)
- [ ] Log retention policy (90 days)

**Technical Requirements**:
- Async audit log writes (non-blocking)
- Structured log format
- Pagination for audit log API

**Labels**: `backend`, `security`, `compliance`

---

## Issue #120: ENS & On-Chain Identity Resolution
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Build a backend service for resolving ENS names, avatars, and other on-chain identity data with caching.

**Acceptance Criteria**:
- [ ] ENS name resolution for wallet addresses
- [ ] ENS avatar URL resolution
- [ ] Lens Protocol profile resolution (optional)
- [ ] Results cached in Redis (1 hour TTL)
- [ ] Batch resolution endpoint

**Technical Requirements**:
- viem ENS resolution
- Redis caching
- Fallback to address if no ENS

**Labels**: `backend`, `blockchain`, `identity`

---

## Issue #121: Community Token Integration API
**Category**: Backend
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Build API endpoints for community token management including token info, holder lists, and distribution tracking.

**Acceptance Criteria**:
- [ ] `GET /communities/:slug/token` - Token info
- [ ] `GET /communities/:slug/token/holders` - Token holders
- [ ] Token price from DEX (if available)
- [ ] Token distribution stats
- [ ] Transfer history

**Technical Requirements**:
- On-chain token data via viem
- Uniswap subgraph for price data
- Indexed transfer events

**Labels**: `backend`, `blockchain`, `tokens`

---

## Issue #122: API Gateway & Proxy Setup
**Category**: Backend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Set up an API gateway layer for request routing, authentication, and cross-cutting concerns.

**Acceptance Criteria**:
- [ ] Request routing to backend services
- [ ] Auth token validation at gateway
- [ ] Request/response logging
- [ ] CORS handling at gateway
- [ ] SSL termination

**Technical Requirements**:
- Nginx or Traefik as gateway
- JWT validation middleware
- Rate limiting at gateway level

**Labels**: `backend`, `infrastructure`, `devops`

---

## Issue #123: Soft Delete Implementation
**Category**: Backend
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement soft delete for key entities (users, communities, posts) to allow data recovery and maintain referential integrity.

**Acceptance Criteria**:
- [ ] `deletedAt` field on User, Community, Post
- [ ] Prisma middleware to filter deleted records
- [ ] Hard delete after retention period
- [ ] Admin restore endpoint
- [ ] Deleted content not returned in queries

**Technical Requirements**:
- Prisma middleware for soft delete filter
- Scheduled hard delete job
- Unique constraint handling for soft-deleted records

**Labels**: `backend`, `database`, `data-management`

---

## Issue #124: Community Discovery Algorithm
**Category**: Backend
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Build a community discovery/recommendation algorithm that surfaces relevant communities to users based on their interests and activity.

**Acceptance Criteria**:
- [ ] `GET /communities/recommended` endpoint
- [ ] Personalized recommendations for logged-in users
- [ ] Trending communities (activity-based)
- [ ] Category-based filtering
- [ ] New communities section

**Technical Requirements**:
- Scoring algorithm (activity, growth, relevance)
- Cached recommendations (15min TTL)
- A/B testing ready

**Labels**: `backend`, `discovery`, `algorithm`

---

## Issue #125: Blockchain Network Configuration
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Configure supported blockchain networks with contract addresses, RPC endpoints, and chain-specific settings.

**Acceptance Criteria**:
- [ ] Network config for Ethereum mainnet
- [ ] Network config for Polygon
- [ ] Network config for testnets (Sepolia, Mumbai)
- [ ] Contract addresses per network
- [ ] Network config loaded from environment
- [ ] Network validation on startup

**Technical Requirements**:
- Chain config in environment variables
- viem chain definitions
- Network-specific feature flags

**Labels**: `backend`, `blockchain`, `configuration`

---

## Issue #126: User Activity Tracking
**Category**: Backend
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Track user activity for analytics, reputation scoring, and leaderboard features.

**Acceptance Criteria**:
- [ ] Activity events tracked (post, vote, join, etc.)
- [ ] Activity score calculation
- [ ] `GET /users/:address/activity` endpoint
- [ ] Activity feed for community
- [ ] Privacy setting to hide activity

**Technical Requirements**:
- Activity event model
- Async activity recording
- Score aggregation query

**Labels**: `backend`, `analytics`, `gamification`

---

## Issue #127: Content Moderation Integration
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Integrate automated content moderation for user-generated content to detect spam, hate speech, and inappropriate content.

**Acceptance Criteria**:
- [ ] Text content moderation on post creation
- [ ] Image moderation on upload
- [ ] Auto-flag suspicious content
- [ ] Manual review queue for flagged content
- [ ] False positive appeal process

**Technical Requirements**:
- OpenAI Moderation API or Perspective API
- Async moderation (non-blocking)
- Moderation result stored with content

**Labels**: `backend`, `moderation`, `safety`

---

## Issue #128: API Performance Testing
**Category**: Backend
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up API performance testing to identify bottlenecks and ensure the backend meets performance targets under load.

**Acceptance Criteria**:
- [ ] Load testing scripts created (k6 or Artillery)
- [ ] Performance targets defined (p95 < 200ms)
- [ ] Bottlenecks identified and documented
- [ ] CI performance regression check
- [ ] Performance test report generated

**Technical Requirements**:
- k6 or Artillery for load testing
- Performance baseline established
- CI integration for regression detection

**Labels**: `backend`, `performance`, `testing`

---

## Issue #129: Secrets Management
**Category**: Backend
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement proper secrets management for API keys, database credentials, and other sensitive configuration.

**Acceptance Criteria**:
- [ ] All secrets in environment variables
- [ ] `.env.example` with all required vars
- [ ] AWS Secrets Manager or Vault integration (production)
- [ ] Secret rotation procedure documented
- [ ] No secrets in codebase or logs

**Technical Requirements**:
- dotenv for local development
- AWS Secrets Manager for production
- Secret validation on startup

**Labels**: `backend`, `security`, `devops`

---

## Issue #130: GraphQL API (Optional Layer)
**Category**: Backend
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Add an optional GraphQL API layer alongside REST for flexible data querying by frontend and third-party developers.

**Acceptance Criteria**:
- [ ] GraphQL server configured (Apollo or Pothos)
- [ ] Schema defined for core entities
- [ ] Authentication via JWT
- [ ] DataLoader for N+1 prevention
- [ ] GraphQL playground in development
- [ ] Persisted queries support

**Technical Requirements**:
- Apollo Server or Pothos
- DataLoader for batching
- Schema-first or code-first approach

**Labels**: `backend`, `graphql`, `api`

---

## 📜 SMART CONTRACTS (Issues #131–#160)

---

## Issue #131: Community Registry Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Develop the core Community Registry smart contract that manages community creation, registration, and discovery on-chain.

**Acceptance Criteria**:
- [ ] `createCommunity(name, metadata)` function
- [ ] Community ID generation (incremental or hash-based)
- [ ] Metadata stored as IPFS CID
- [ ] Community owner recorded
- [ ] `getCommunity(id)` view function
- [ ] `CommunityCreated` event emitted
- [ ] Unit tests with 100% coverage

**Technical Requirements**:
- Solidity 0.8.20+
- OpenZeppelin contracts
- IPFS metadata standard (ERC-7572)
- Gas optimization

**Labels**: `smart-contracts`, `high-priority`, `core`

---

## Issue #132: Membership Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Develop the Membership smart contract managing community membership as NFTs (ERC-721) with join, leave, and transfer logic.

**Acceptance Criteria**:
- [ ] ERC-721 membership token
- [ ] `join(communityId)` function
- [ ] `leave(communityId)` function
- [ ] Non-transferable option (soulbound)
- [ ] Membership metadata (join date, role)
- [ ] `MemberJoined` and `MemberLeft` events
- [ ] Unit tests

**Technical Requirements**:
- ERC-721 or ERC-5192 (soulbound)
- OpenZeppelin ERC721
- Role stored in token metadata

**Labels**: `smart-contracts`, `high-priority`, `membership`

---

## Issue #133: Governance Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 6 days

**Description**:
Develop the on-chain governance contract for proposal creation, voting, and execution with token-weighted voting.

**Acceptance Criteria**:
- [ ] `createProposal(description, actions)` function
- [ ] `castVote(proposalId, support)` function
- [ ] Token-weighted voting power
- [ ] Voting period with start/end blocks
- [ ] Quorum requirement
- [ ] `executeProposal(proposalId)` function
- [ ] Timelock for execution delay
- [ ] Full test suite

**Technical Requirements**:
- OpenZeppelin Governor contracts
- ERC-20 votes token integration
- Timelock controller
- Proposal state machine

**Labels**: `smart-contracts`, `governance`, `high-priority`

---

## Issue #134: Community Token (ERC-20) Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Develop the community ERC-20 token contract with minting, burning, and governance voting capabilities.

**Acceptance Criteria**:
- [ ] ERC-20 standard implementation
- [ ] ERC-20Votes extension for governance
- [ ] Minting by authorized roles
- [ ] Burning functionality
- [ ] Initial supply configuration
- [ ] Max supply cap (optional)
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin ERC20Votes
- AccessControl for minting roles
- Permit (EIP-2612) support

**Labels**: `smart-contracts`, `tokens`, `high-priority`

---

## Issue #135: Treasury Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Develop the community treasury contract that holds funds and executes spending proposals approved by governance.

**Acceptance Criteria**:
- [ ] ETH and ERC-20 token holding
- [ ] Governance-controlled spending
- [ ] `execute(target, value, data)` function
- [ ] Multi-sig fallback option
- [ ] Emergency pause functionality
- [ ] `FundsReceived` and `FundsSpent` events
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin TimelockController
- ReentrancyGuard
- Pausable pattern
- Multi-call support

**Labels**: `smart-contracts`, `treasury`, `high-priority`

---

## Issue #136: Token Reward & Incentive Contract
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Develop a reward distribution contract for incentivizing community participation with token rewards.

**Acceptance Criteria**:
- [ ] Reward pool funding
- [ ] Activity-based reward distribution
- [ ] Claim rewards function
- [ ] Reward rate configuration
- [ ] Anti-gaming mechanisms
- [ ] `RewardClaimed` event
- [ ] Unit tests

**Technical Requirements**:
- Merkle tree for reward distribution
- Staking rewards pattern
- Sybil resistance considerations

**Labels**: `smart-contracts`, `rewards`, `incentives`

---

## Issue #137: NFT Membership Badge Contract
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Develop NFT badge contracts for community achievements and special membership tiers.

**Acceptance Criteria**:
- [ ] ERC-1155 multi-token standard
- [ ] Badge types per community
- [ ] Admin minting of badges
- [ ] Non-transferable badge option
- [ ] Badge metadata on IPFS
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin ERC1155
- IPFS metadata
- Batch minting support

**Labels**: `smart-contracts`, `nft`, `badges`

---

## Issue #138: Contract Upgrade Pattern (UUPS)
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement the UUPS (Universal Upgradeable Proxy Standard) upgrade pattern for all core contracts to allow future improvements.

**Acceptance Criteria**:
- [ ] UUPS proxy pattern implemented
- [ ] Upgrade authorization restricted to owner/governance
- [ ] Storage layout documented
- [ ] Upgrade tests written
- [ ] Upgrade procedure documented

**Technical Requirements**:
- OpenZeppelin UUPSUpgradeable
- Initializer pattern (no constructors)
- Storage gap for future variables

**Labels**: `smart-contracts`, `upgradability`, `architecture`

---

## Issue #139: Contract Access Control
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement role-based access control across all contracts using OpenZeppelin AccessControl.

**Acceptance Criteria**:
- [ ] Roles defined (ADMIN, MINTER, PAUSER, etc.)
- [ ] Role assignment and revocation
- [ ] Role checks on all privileged functions
- [ ] Multi-sig as role admin
- [ ] Role events emitted
- [ ] Unit tests for access control

**Technical Requirements**:
- OpenZeppelin AccessControl
- Role constants defined
- Two-step ownership transfer

**Labels**: `smart-contracts`, `security`, `access-control`

---

## Issue #140: Contract Deployment Scripts
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Write deployment scripts for all contracts supporting multiple networks with configuration management.

**Acceptance Criteria**:
- [ ] Deployment script for all core contracts
- [ ] Network-specific configuration
- [ ] Contract address recording post-deploy
- [ ] Verification on Etherscan
- [ ] Testnet deployment tested
- [ ] Deployment documentation

**Technical Requirements**:
- Hardhat or Foundry deploy scripts
- Etherscan verification
- Deployment artifacts saved to JSON

**Labels**: `smart-contracts`, `devops`, `deployment`

---

## Issue #141: Smart Contract Testing Suite
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Write comprehensive unit and integration tests for all smart contracts achieving 100% line coverage.

**Acceptance Criteria**:
- [ ] Unit tests for all functions
- [ ] Edge case and revert tests
- [ ] Integration tests for contract interactions
- [ ] 100% line coverage
- [ ] Gas usage tests
- [ ] Fuzz testing for critical functions

**Technical Requirements**:
- Hardhat + Chai or Foundry
- Coverage with solidity-coverage
- Foundry fuzz testing

**Labels**: `smart-contracts`, `testing`, `high-priority`

---

## Issue #142: Gas Optimization
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Audit and optimize all smart contracts for gas efficiency to minimize transaction costs for users.

**Acceptance Criteria**:
- [ ] Gas usage benchmarks established
- [ ] Storage packing optimized
- [ ] Unnecessary storage reads eliminated
- [ ] Events used instead of storage where appropriate
- [ ] Gas report generated and documented

**Technical Requirements**:
- Hardhat gas reporter
- Storage slot packing
- `unchecked` blocks where safe

**Labels**: `smart-contracts`, `gas-optimization`, `performance`

---

## Issue #143: Multi-Sig Wallet Integration
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Integrate Gnosis Safe multi-sig as the admin/owner for community contracts to prevent single points of failure.

**Acceptance Criteria**:
- [ ] Gnosis Safe as contract owner
- [ ] Multi-sig required for upgrades
- [ ] Multi-sig for treasury operations
- [ ] Safe SDK integration in deployment scripts
- [ ] Documentation for multi-sig setup

**Technical Requirements**:
- Gnosis Safe contracts
- Safe SDK for transaction building
- Minimum 2-of-3 signers recommended

**Labels**: `smart-contracts`, `security`, `multi-sig`

---

## Issue #144: Contract Event Indexing Schema
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Define and document all contract events with their parameters to ensure the backend indexer can process them correctly.

**Acceptance Criteria**:
- [ ] All events documented with parameter types
- [ ] Event ABI exported for backend use
- [ ] Indexed parameters identified
- [ ] Event naming conventions followed
- [ ] TypeChain types generated

**Technical Requirements**:
- TypeChain for TypeScript types
- ABI exported to shared package
- Event documentation in NatSpec

**Labels**: `smart-contracts`, `backend`, `indexing`

---

## Issue #145: Token Vesting Contract
**Category**: Smart Contracts
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Develop a token vesting contract for team allocations and contributor rewards with cliff and linear vesting.

**Acceptance Criteria**:
- [ ] Linear vesting with cliff period
- [ ] Multiple beneficiary support
- [ ] Revocable vesting option
- [ ] `release()` function for claiming
- [ ] Vesting schedule view functions
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin VestingWallet
- Cliff period support
- Revocation with token return

**Labels**: `smart-contracts`, `tokens`, `vesting`

---

## Issue #146: Staking Contract
**Category**: Smart Contracts
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Develop a token staking contract allowing community members to stake tokens for governance power and rewards.

**Acceptance Criteria**:
- [ ] `stake(amount)` function
- [ ] `unstake(amount)` with lock period
- [ ] Staking rewards accrual
- [ ] Voting power from staked tokens
- [ ] Emergency unstake (penalty)
- [ ] Unit tests

**Technical Requirements**:
- ERC-20 staking pattern
- Lock period enforcement
- Reward calculation (per-block or time-based)

**Labels**: `smart-contracts`, `staking`, `defi`

---

## Issue #147: Cross-Chain Bridge Integration
**Category**: Smart Contracts
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 6 days

**Description**:
Integrate cross-chain bridge functionality to allow community tokens and memberships to work across multiple chains.

**Acceptance Criteria**:
- [ ] Token bridge to Polygon
- [ ] Membership NFT bridge
- [ ] Bridge fee handling
- [ ] Message passing for governance
- [ ] Security considerations documented

**Technical Requirements**:
- LayerZero or Axelar protocol
- OFT (Omnichain Fungible Token) standard
- Bridge security audit required

**Labels**: `smart-contracts`, `cross-chain`, `bridge`

---

## Issue #148: Contract Security Audit Preparation
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Prepare all smart contracts for a professional security audit by addressing known issues, adding documentation, and running automated tools.

**Acceptance Criteria**:
- [ ] Slither static analysis run and issues fixed
- [ ] Mythril analysis completed
- [ ] NatSpec documentation on all functions
- [ ] Known vulnerability checklist completed
- [ ] Audit-ready documentation package

**Technical Requirements**:
- Slither static analyzer
- Mythril symbolic execution
- NatSpec comments throughout
- Reentrancy, overflow, access control checks

**Labels**: `smart-contracts`, `security`, `audit`

---

## Issue #149: EIP-712 Typed Signatures
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement EIP-712 typed data signing for gasless transactions and meta-transactions in key contract functions.

**Acceptance Criteria**:
- [ ] EIP-712 domain separator defined
- [ ] Typed data structs for key operations
- [ ] Signature verification in contracts
- [ ] Frontend signing integration
- [ ] Replay attack prevention (nonces)

**Technical Requirements**:
- OpenZeppelin EIP712
- Nonce tracking per user
- viem `signTypedData` on frontend

**Labels**: `smart-contracts`, `ux`, `gasless`

---

## Issue #150: Contract Pause & Emergency Stop
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement pause functionality on all contracts for emergency situations allowing the team to halt operations if a vulnerability is discovered.

**Acceptance Criteria**:
- [ ] Pausable pattern on all core contracts
- [ ] Pause/unpause restricted to admin role
- [ ] All state-changing functions check pause
- [ ] `Paused` and `Unpaused` events
- [ ] Multi-sig required to pause

**Technical Requirements**:
- OpenZeppelin Pausable
- AccessControl for pause role
- Emergency pause procedure documented

**Labels**: `smart-contracts`, `security`, `emergency`

---

## Issue #151: Airdrop Distribution Contract
**Category**: Smart Contracts
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Develop a Merkle-tree-based airdrop contract for distributing community tokens to eligible addresses.

**Acceptance Criteria**:
- [ ] Merkle tree root stored on-chain
- [ ] `claim(proof, amount)` function
- [ ] One-time claim per address
- [ ] Claim deadline
- [ ] Unclaimed token recovery
- [ ] Unit tests

**Technical Requirements**:
- Merkle tree with merkletreejs
- OpenZeppelin MerkleProof
- Off-chain Merkle tree generation script

**Labels**: `smart-contracts`, `tokens`, `airdrop`

---

## Issue #152: Subscription/Membership Fee Contract
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Develop a subscription contract for paid community memberships with recurring payment support.

**Acceptance Criteria**:
- [ ] Monthly/annual subscription options
- [ ] ETH and ERC-20 payment support
- [ ] Subscription expiry tracking
- [ ] Auto-renewal option
- [ ] Refund policy implementation
- [ ] Unit tests

**Technical Requirements**:
- Subscription state tracking
- Payment splitting (platform fee + community)
- Expiry-based access control

**Labels**: `smart-contracts`, `payments`, `membership`

---

## Issue #153: On-Chain Community Metadata Standard
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Define and implement a standard for storing community metadata on-chain/IPFS following emerging standards.

**Acceptance Criteria**:
- [ ] Metadata schema defined (JSON)
- [ ] IPFS storage for metadata
- [ ] On-chain CID reference
- [ ] Metadata update function
- [ ] Schema versioning
- [ ] Documentation

**Technical Requirements**:
- ERC-7572 contract metadata standard
- IPFS pinning
- Schema validation

**Labels**: `smart-contracts`, `standards`, `metadata`

---

## Issue #154: Governance Timelock Contract
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement a timelock controller for governance proposal execution to provide a delay window for community review before execution.

**Acceptance Criteria**:
- [ ] Minimum delay configurable (e.g., 48 hours)
- [ ] Proposal queuing after passing
- [ ] Execution after delay
- [ ] Cancellation by guardian role
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin TimelockController
- Integration with Governor contract
- Guardian role for emergency cancellation

**Labels**: `smart-contracts`, `governance`, `security`

---

## Issue #155: Contract Factory Pattern
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Implement a factory contract pattern for deploying new community contracts (governance, token, treasury) in a single transaction.

**Acceptance Criteria**:
- [ ] `CommunityFactory.deploy()` function
- [ ] Deploys governance, token, treasury contracts
- [ ] Configures contracts with initial settings
- [ ] Records deployed addresses
- [ ] `CommunityDeployed` event
- [ ] Unit tests

**Technical Requirements**:
- Minimal proxy (EIP-1167) for gas efficiency
- Factory stores community contract addresses
- Initialization via proxy pattern

**Labels**: `smart-contracts`, `factory`, `architecture`

---

## Issue #156: On-Chain Voting Delegation
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement voting power delegation allowing token holders to delegate their voting power to other addresses.

**Acceptance Criteria**:
- [ ] `delegate(address)` function
- [ ] Self-delegation for direct voting
- [ ] Delegation history tracked
- [ ] Delegated voting power in governance
- [ ] `DelegateChanged` event
- [ ] Unit tests

**Technical Requirements**:
- OpenZeppelin ERC20Votes delegation
- Checkpoint-based voting power
- Delegation UI integration

**Labels**: `smart-contracts`, `governance`, `delegation`

---

## Issue #157: Contract Monitoring & Alerting
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up monitoring and alerting for deployed smart contracts to detect unusual activity or potential exploits.

**Acceptance Criteria**:
- [ ] OpenZeppelin Defender Sentinel configured
- [ ] Alerts for large treasury withdrawals
- [ ] Alerts for contract pauses
- [ ] Alerts for ownership transfers
- [ ] PagerDuty/Slack notifications

**Technical Requirements**:
- OpenZeppelin Defender
- Forta bot (optional)
- Alert thresholds configured

**Labels**: `smart-contracts`, `monitoring`, `security`

---

## Issue #158: Solidity Code Style & Linting
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up Solidity linting and code style enforcement for consistent, high-quality smart contract code.

**Acceptance Criteria**:
- [ ] Solhint configured with rules
- [ ] Prettier-solidity for formatting
- [ ] Pre-commit hooks for linting
- [ ] CI linting check
- [ ] Style guide documented

**Technical Requirements**:
- solhint
- prettier-plugin-solidity
- Husky pre-commit hook

**Labels**: `smart-contracts`, `code-quality`, `tooling`

---

## Issue #159: Contract Documentation (NatSpec)
**Category**: Smart Contracts
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Add comprehensive NatSpec documentation to all smart contracts for developer reference and auto-generated docs.

**Acceptance Criteria**:
- [ ] `@title` and `@notice` on all contracts
- [ ] `@param` and `@return` on all functions
- [ ] `@dev` notes for complex logic
- [ ] `@inheritdoc` for overridden functions
- [ ] Auto-generated docs with soldoc

**Technical Requirements**:
- NatSpec format
- soldoc or docgen for HTML docs
- Docs published to project website

**Labels**: `smart-contracts`, `documentation`

---

## Issue #160: Testnet Deployment & Verification
**Category**: Smart Contracts
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Deploy all contracts to testnets (Sepolia, Mumbai) and verify on block explorers for public testing.

**Acceptance Criteria**:
- [ ] All contracts deployed to Sepolia
- [ ] All contracts deployed to Mumbai (Polygon)
- [ ] Contracts verified on Etherscan/Polygonscan
- [ ] Deployment addresses documented
- [ ] Testnet faucet instructions provided

**Technical Requirements**:
- Hardhat deploy with network config
- Etherscan API key for verification
- Deployment addresses in README

**Labels**: `smart-contracts`, `deployment`, `testing`

---

## 🚀 DEVOPS (Issues #161–#180)

---

## Issue #161: Docker Compose Development Environment
**Category**: DevOps
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Create a complete Docker Compose setup for local development including all services (frontend, backend, PostgreSQL, Redis).

**Acceptance Criteria**:
- [ ] `docker-compose.yml` for all services
- [ ] PostgreSQL service with persistent volume
- [ ] Redis service
- [ ] Hot reload for frontend and backend
- [ ] Environment variable management
- [ ] `docker-compose.override.yml` for local overrides

**Technical Requirements**:
- Docker Compose v3.8+
- Named volumes for data persistence
- Health checks for all services
- Network isolation

**Labels**: `devops`, `docker`, `development`

---

## Issue #162: CI/CD Pipeline with GitHub Actions
**Category**: DevOps
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up a complete CI/CD pipeline using GitHub Actions for automated testing, building, and deployment.

**Acceptance Criteria**:
- [ ] CI: lint, type-check, test on every PR
- [ ] CD: deploy to staging on merge to `main`
- [ ] CD: deploy to production on release tag
- [ ] Build caching for faster runs
- [ ] Slack/Discord notification on deploy
- [ ] Rollback procedure documented

**Technical Requirements**:
- GitHub Actions workflows
- Bun caching in CI
- Environment secrets in GitHub
- Deployment to cloud provider

**Labels**: `devops`, `ci-cd`, `automation`, `high-priority`

---

## Issue #163: Production Dockerfile Optimization
**Category**: DevOps
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Create optimized production Dockerfiles for frontend and backend with multi-stage builds and minimal image sizes.

**Acceptance Criteria**:
- [ ] Multi-stage Dockerfile for backend
- [ ] Multi-stage Dockerfile for frontend (Next.js)
- [ ] Non-root user in containers
- [ ] Image size < 200MB for backend
- [ ] Security scanning with Trivy
- [ ] Images pushed to container registry

**Technical Requirements**:
- Multi-stage builds
- Alpine or distroless base images
- .dockerignore files
- Trivy vulnerability scanning

**Labels**: `devops`, `docker`, `security`

---

## Issue #164: Kubernetes Deployment Manifests
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Create Kubernetes deployment manifests for all services with proper resource limits, health checks, and scaling configuration.

**Acceptance Criteria**:
- [ ] Deployment manifests for all services
- [ ] Service and Ingress resources
- [ ] ConfigMap and Secret resources
- [ ] Resource requests and limits set
- [ ] Horizontal Pod Autoscaler configured
- [ ] Liveness and readiness probes

**Technical Requirements**:
- Kubernetes 1.28+
- Helm chart (optional)
- Ingress with TLS (cert-manager)
- HPA based on CPU/memory

**Labels**: `devops`, `kubernetes`, `infrastructure`

---

## Issue #165: Infrastructure as Code (Terraform)
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Define all cloud infrastructure using Terraform for reproducible, version-controlled infrastructure management.

**Acceptance Criteria**:
- [ ] VPC and networking resources
- [ ] EKS/GKE cluster definition
- [ ] RDS PostgreSQL instance
- [ ] ElastiCache Redis instance
- [ ] S3 buckets for assets
- [ ] State stored in S3 with DynamoDB lock

**Technical Requirements**:
- Terraform 1.5+
- AWS or GCP provider
- Remote state backend
- Terraform modules for reusability

**Labels**: `devops`, `terraform`, `infrastructure`

---

## Issue #166: Environment Configuration Management
**Category**: DevOps
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up proper environment configuration management for development, staging, and production environments.

**Acceptance Criteria**:
- [ ] `.env.example` files for all apps
- [ ] Environment validation on startup
- [ ] Staging environment configured
- [ ] Production environment configured
- [ ] Secrets in AWS Secrets Manager (prod)
- [ ] Environment documentation

**Technical Requirements**:
- zod for env validation
- AWS Secrets Manager for production
- No secrets in version control

**Labels**: `devops`, `configuration`, `security`

---

## Issue #167: Database Backup & Recovery
**Category**: DevOps
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up automated database backups with point-in-time recovery and documented restore procedures.

**Acceptance Criteria**:
- [ ] Automated daily backups to S3
- [ ] Point-in-time recovery enabled
- [ ] Backup retention policy (30 days)
- [ ] Restore procedure tested and documented
- [ ] Backup monitoring and alerting
- [ ] Cross-region backup copy

**Technical Requirements**:
- RDS automated backups
- S3 for backup storage
- Backup encryption
- Recovery time objective (RTO) < 1 hour

**Labels**: `devops`, `database`, `reliability`

---

## Issue #168: SSL/TLS Certificate Management
**Category**: DevOps
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up automated SSL/TLS certificate provisioning and renewal for all domains using Let's Encrypt.

**Acceptance Criteria**:
- [ ] SSL certificates for all domains
- [ ] Auto-renewal configured
- [ ] HTTPS redirect enforced
- [ ] HSTS header configured
- [ ] Certificate expiry monitoring

**Technical Requirements**:
- cert-manager for Kubernetes
- Let's Encrypt ACME
- Wildcard certificate for subdomains

**Labels**: `devops`, `security`, `ssl`

---

## Issue #169: Monitoring & Alerting Stack
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Set up a comprehensive monitoring and alerting stack using Prometheus, Grafana, and alerting rules.

**Acceptance Criteria**:
- [ ] Prometheus metrics collection
- [ ] Grafana dashboards for all services
- [ ] Alert rules for critical metrics
- [ ] PagerDuty/Slack alert routing
- [ ] Uptime monitoring
- [ ] SLO/SLA dashboards

**Technical Requirements**:
- Prometheus + Grafana
- Node.js metrics with prom-client
- Alert manager configuration
- Runbook links in alerts

**Labels**: `devops`, `monitoring`, `observability`

---

## Issue #170: Log Aggregation Setup
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up centralized log aggregation for all services using ELK stack or Loki for searchable, structured logs.

**Acceptance Criteria**:
- [ ] Logs from all services centralized
- [ ] Structured JSON log format
- [ ] Log search and filtering
- [ ] Log retention policy (30 days)
- [ ] Error log alerting
- [ ] Log-based metrics

**Technical Requirements**:
- Grafana Loki or ELK stack
- Fluentd/Fluent Bit for log shipping
- Log correlation IDs

**Labels**: `devops`, `logging`, `observability`

---

## Issue #171: CDN & Static Asset Optimization
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Configure CDN for static assets and Next.js deployment to improve global performance and reduce origin load.

**Acceptance Criteria**:
- [ ] CloudFront or Cloudflare CDN configured
- [ ] Static assets served from CDN
- [ ] Cache headers optimized
- [ ] Image optimization via CDN
- [ ] CDN cache invalidation on deploy

**Technical Requirements**:
- CloudFront or Cloudflare
- Cache-Control headers
- Versioned asset URLs for cache busting

**Labels**: `devops`, `performance`, `cdn`

---

## Issue #172: Security Scanning in CI
**Category**: DevOps
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Integrate security scanning tools into the CI pipeline for dependency vulnerabilities, container scanning, and SAST.

**Acceptance Criteria**:
- [ ] npm audit / bun audit in CI
- [ ] Trivy container image scanning
- [ ] CodeQL SAST analysis
- [ ] Snyk dependency scanning
- [ ] Security scan results in PR comments
- [ ] Block merge on critical vulnerabilities

**Technical Requirements**:
- GitHub Actions security workflows
- Trivy GitHub Action
- CodeQL GitHub Action
- Snyk GitHub integration

**Labels**: `devops`, `security`, `ci-cd`

---

## Issue #173: Blue-Green Deployment Strategy
**Category**: DevOps
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement blue-green deployment strategy for zero-downtime deployments with instant rollback capability.

**Acceptance Criteria**:
- [ ] Blue and green environments configured
- [ ] Traffic switching via load balancer
- [ ] Health check before traffic switch
- [ ] Instant rollback procedure
- [ ] Database migration compatibility

**Technical Requirements**:
- Kubernetes deployment strategy
- Load balancer traffic routing
- Database backward compatibility

**Labels**: `devops`, `deployment`, `reliability`

---

## Issue #174: Performance Benchmarking Pipeline
**Category**: DevOps
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up automated performance benchmarking in CI to detect performance regressions before they reach production.

**Acceptance Criteria**:
- [ ] Lighthouse CI for frontend performance
- [ ] k6 load tests in CI
- [ ] Performance budget defined
- [ ] Regression alerts on PR
- [ ] Historical performance tracking

**Technical Requirements**:
- Lighthouse CI GitHub Action
- k6 performance tests
- Performance budget in `lighthouserc.js`

**Labels**: `devops`, `performance`, `ci-cd`

---

## Issue #175: Disaster Recovery Plan
**Category**: DevOps
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Document and implement a disaster recovery plan covering data loss, service outages, and security incidents.

**Acceptance Criteria**:
- [ ] RTO and RPO defined
- [ ] DR runbook documented
- [ ] Backup restore tested
- [ ] Failover procedure tested
- [ ] Incident response playbook
- [ ] DR drill scheduled quarterly

**Technical Requirements**:
- Multi-region backup strategy
- Failover DNS configuration
- Runbook in documentation

**Labels**: `devops`, `reliability`, `disaster-recovery`

---

## Issue #176: Dependency Update Automation
**Category**: DevOps
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up automated dependency updates using Dependabot or Renovate to keep dependencies current and secure.

**Acceptance Criteria**:
- [ ] Renovate or Dependabot configured
- [ ] Auto-merge for patch updates
- [ ] Weekly PR for minor updates
- [ ] Security updates prioritized
- [ ] Update grouping configured

**Technical Requirements**:
- Renovate config or Dependabot YAML
- Auto-merge rules
- Test required before merge

**Labels**: `devops`, `dependencies`, `automation`

---

## Issue #177: Multi-Environment Deployment Pipeline
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up deployment pipelines for development, staging, and production environments with appropriate gates and approvals.

**Acceptance Criteria**:
- [ ] Dev environment: auto-deploy on PR
- [ ] Staging: auto-deploy on merge to main
- [ ] Production: manual approval required
- [ ] Environment-specific configs
- [ ] Deploy notifications per environment

**Technical Requirements**:
- GitHub Environments with protection rules
- Required reviewers for production
- Environment secrets isolation

**Labels**: `devops`, `ci-cd`, `deployment`

---

## Issue #178: Container Registry Setup
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up a container registry for storing and versioning Docker images with access control and vulnerability scanning.

**Acceptance Criteria**:
- [ ] ECR or GHCR configured
- [ ] Image tagging strategy (semver + git SHA)
- [ ] Image vulnerability scanning enabled
- [ ] Old image cleanup policy
- [ ] Pull secrets configured in Kubernetes

**Technical Requirements**:
- AWS ECR or GitHub Container Registry
- Image tag immutability
- Lifecycle policy for cleanup

**Labels**: `devops`, `docker`, `infrastructure`

---

## Issue #179: Database Connection Pooling
**Category**: DevOps
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Configure database connection pooling to handle high concurrency efficiently and prevent connection exhaustion.

**Acceptance Criteria**:
- [ ] PgBouncer or Prisma Accelerate configured
- [ ] Pool size tuned for workload
- [ ] Connection limits set
- [ ] Pool metrics monitored
- [ ] Connection timeout handling

**Technical Requirements**:
- PgBouncer in transaction mode
- Pool size = (2 * CPU cores) + disk spindles
- Monitoring with Prometheus

**Labels**: `devops`, `database`, `performance`

---

## Issue #180: Cost Optimization & Resource Tagging
**Category**: DevOps
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement cloud resource tagging strategy and cost optimization measures to manage infrastructure costs.

**Acceptance Criteria**:
- [ ] Resource tagging policy defined
- [ ] All resources tagged (env, project, team)
- [ ] Cost allocation by environment
- [ ] Unused resource cleanup
- [ ] Budget alerts configured
- [ ] Cost optimization recommendations documented

**Technical Requirements**:
- AWS Cost Explorer or GCP Billing
- Terraform tagging in all resources
- Budget alert thresholds

**Labels**: `devops`, `cost-optimization`, `infrastructure`

---

## 📚 DOCUMENTATION (Issues #181–#200)

---

## Issue #181: Project README Enhancement
**Category**: Documentation
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Enhance the main project README with comprehensive setup instructions, architecture overview, and contribution guidelines.

**Acceptance Criteria**:
- [ ] Project overview and value proposition
- [ ] Architecture diagram
- [ ] Quick start guide (< 5 minutes to run)
- [ ] All environment variables documented
- [ ] Contributing section
- [ ] Badges (build status, coverage, license)

**Technical Requirements**:
- Mermaid diagrams for architecture
- Tested setup instructions
- Links to all documentation

**Labels**: `documentation`, `high-priority`

---

## Issue #182: API Documentation Site
**Category**: Documentation
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Create a dedicated API documentation site with interactive examples, authentication guide, and SDK documentation.

**Acceptance Criteria**:
- [ ] All REST endpoints documented
- [ ] Request/response examples
- [ ] Authentication guide
- [ ] Error codes reference
- [ ] Rate limiting documentation
- [ ] Interactive API explorer (Swagger UI)

**Technical Requirements**:
- Swagger/OpenAPI 3.0
- Hosted documentation site
- Code examples in multiple languages

**Labels**: `documentation`, `api`

---

## Issue #183: Smart Contract Documentation
**Category**: Documentation
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Create comprehensive documentation for all smart contracts including function references, deployment guides, and integration examples.

**Acceptance Criteria**:
- [ ] Contract overview for each contract
- [ ] Function reference with parameters
- [ ] Event reference
- [ ] Deployment guide per network
- [ ] Integration code examples
- [ ] Security considerations

**Technical Requirements**:
- Auto-generated from NatSpec
- Deployed to documentation site
- ABI references included

**Labels**: `documentation`, `smart-contracts`

---

## Issue #184: Developer Getting Started Guide
**Category**: Documentation
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Write a comprehensive getting started guide for new developers joining the HUB-Buddy project.

**Acceptance Criteria**:
- [ ] Prerequisites listed
- [ ] Step-by-step local setup
- [ ] Project structure explained
- [ ] First contribution walkthrough
- [ ] Common commands reference
- [ ] Troubleshooting section

**Technical Requirements**:
- Tested on fresh machine
- Both macOS and Linux instructions
- Docker and non-Docker paths

**Labels**: `documentation`, `onboarding`, `high-priority`

---

## Issue #185: Architecture Decision Records (ADRs)
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Document key architecture decisions using ADR format to provide context for future developers.

**Acceptance Criteria**:
- [ ] ADR template created
- [ ] ADR for: monorepo structure
- [ ] ADR for: blockchain choice
- [ ] ADR for: database choice
- [ ] ADR for: authentication approach
- [ ] ADR for: state management

**Technical Requirements**:
- ADR format (MADR or Nygard)
- Stored in `docs/adr/` directory
- Linked from main README

**Labels**: `documentation`, `architecture`

---

## Issue #186: User Guide & Help Documentation
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 3 days

**Description**:
Write end-user documentation covering all platform features for non-technical community managers and members.

**Acceptance Criteria**:
- [ ] Getting started for users
- [ ] Creating a community guide
- [ ] Governance participation guide
- [ ] Wallet connection guide
- [ ] FAQ section
- [ ] Video tutorial links (placeholder)

**Technical Requirements**:
- Non-technical language
- Screenshots for each step
- Searchable documentation site

**Labels**: `documentation`, `user-guide`

---

## Issue #187: Contributing Guidelines
**Category**: Documentation
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Create detailed contributing guidelines covering code style, PR process, issue reporting, and community standards.

**Acceptance Criteria**:
- [ ] CONTRIBUTING.md created
- [ ] Code style guide
- [ ] PR template
- [ ] Issue templates (bug, feature, question)
- [ ] Code of conduct
- [ ] Review process explained

**Technical Requirements**:
- GitHub PR template (`.github/pull_request_template.md`)
- GitHub issue templates
- CODE_OF_CONDUCT.md

**Labels**: `documentation`, `community`, `high-priority`

---

## Issue #188: Security Policy Documentation
**Category**: Documentation
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Create a security policy document covering vulnerability reporting, responsible disclosure, and security practices.

**Acceptance Criteria**:
- [ ] SECURITY.md created
- [ ] Vulnerability reporting process
- [ ] Responsible disclosure timeline
- [ ] Security contact email
- [ ] Bug bounty program details (if applicable)
- [ ] Supported versions table

**Technical Requirements**:
- GitHub SECURITY.md
- Private vulnerability reporting enabled
- PGP key for encrypted reports

**Labels**: `documentation`, `security`

---

## Issue #189: Changelog & Release Notes
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up automated changelog generation and release notes process following Keep a Changelog format.

**Acceptance Criteria**:
- [ ] CHANGELOG.md created
- [ ] Conventional commits → changelog automation
- [ ] Release notes template
- [ ] GitHub Releases configured
- [ ] Semantic versioning policy documented

**Technical Requirements**:
- conventional-changelog or release-please
- GitHub Actions for release automation
- Semantic versioning (semver)

**Labels**: `documentation`, `release-management`

---

## Issue #190: Database Schema Documentation
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Document the database schema with entity-relationship diagrams and field descriptions.

**Acceptance Criteria**:
- [ ] ER diagram generated
- [ ] All tables and fields documented
- [ ] Relationships explained
- [ ] Index documentation
- [ ] Migration history documented

**Technical Requirements**:
- Prisma ERD generator
- dbdocs.io or similar
- Auto-generated from Prisma schema

**Labels**: `documentation`, `database`

---

## Issue #191: Deployment Guide
**Category**: Documentation
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Write comprehensive deployment guides for staging and production environments covering all infrastructure components.

**Acceptance Criteria**:
- [ ] Prerequisites and requirements
- [ ] Step-by-step deployment instructions
- [ ] Environment variable reference
- [ ] Database migration steps
- [ ] Rollback procedure
- [ ] Post-deployment verification checklist

**Technical Requirements**:
- Separate guides for Docker and Kubernetes
- Cloud provider-specific instructions
- Tested deployment procedure

**Labels**: `documentation`, `devops`

---

## Issue #192: Blockchain Integration Guide
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Document the blockchain integration including supported networks, contract addresses, and integration patterns.

**Acceptance Criteria**:
- [ ] Supported networks listed
- [ ] Contract addresses per network
- [ ] How to interact with contracts
- [ ] Event listening guide
- [ ] Gas estimation guide
- [ ] Testnet setup guide

**Technical Requirements**:
- Network configuration reference
- Code examples with viem/ethers
- Testnet faucet links

**Labels**: `documentation`, `blockchain`

---

## Issue #193: Frontend Component Documentation
**Category**: Documentation
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Document all frontend components with props, usage examples, and accessibility notes.

**Acceptance Criteria**:
- [ ] Component props documented
- [ ] Usage examples for each component
- [ ] Accessibility notes
- [ ] Storybook stories as documentation
- [ ] Design system reference

**Technical Requirements**:
- Storybook for interactive docs
- TypeScript prop types as documentation
- Accessibility notes per component

**Labels**: `documentation`, `frontend`, `components`

---

## Issue #194: Testing Guide
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Write a comprehensive testing guide covering unit tests, integration tests, E2E tests, and smart contract tests.

**Acceptance Criteria**:
- [ ] Testing philosophy documented
- [ ] How to run each test suite
- [ ] Writing new tests guide
- [ ] Test coverage requirements
- [ ] Mocking strategies documented
- [ ] CI test configuration explained

**Technical Requirements**:
- Test command reference
- Coverage threshold documentation
- Test file naming conventions

**Labels**: `documentation`, `testing`

---

## Issue #195: Glossary & Terminology
**Category**: Documentation
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Create a glossary of terms used in HUB-Buddy covering blockchain, governance, and platform-specific terminology.

**Acceptance Criteria**:
- [ ] Blockchain terms defined (wallet, gas, etc.)
- [ ] Governance terms (proposal, quorum, etc.)
- [ ] Platform terms (community, hub, etc.)
- [ ] Acronyms expanded
- [ ] Linked from relevant documentation

**Technical Requirements**:
- Alphabetically sorted
- Cross-linked within docs
- Accessible to non-technical users

**Labels**: `documentation`, `accessibility`

---

## Issue #196: Performance Optimization Guide
**Category**: Documentation
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Document performance optimization techniques and best practices for frontend, backend, and smart contracts.

**Acceptance Criteria**:
- [ ] Frontend performance best practices
- [ ] Backend query optimization guide
- [ ] Smart contract gas optimization tips
- [ ] Caching strategies documented
- [ ] Performance monitoring guide

**Technical Requirements**:
- Practical examples
- Benchmarks and targets
- Tools and commands reference

**Labels**: `documentation`, `performance`

---

## Issue #197: Monorepo Structure Guide
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Document the monorepo structure, workspace configuration, and how packages interact with each other.

**Acceptance Criteria**:
- [ ] Directory structure explained
- [ ] Workspace dependencies documented
- [ ] Shared package usage guide
- [ ] Adding new packages guide
- [ ] Build order and dependencies

**Technical Requirements**:
- Bun workspace documentation
- Package dependency graph
- Script reference

**Labels**: `documentation`, `architecture`

---

## Issue #198: Incident Response Runbook
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Create incident response runbooks for common production issues including database outages, smart contract exploits, and service degradation.

**Acceptance Criteria**:
- [ ] Incident severity levels defined
- [ ] Database outage runbook
- [ ] Smart contract exploit runbook
- [ ] Service degradation runbook
- [ ] Communication templates
- [ ] Post-mortem template

**Technical Requirements**:
- Step-by-step procedures
- Contact list and escalation path
- Links to monitoring dashboards

**Labels**: `documentation`, `devops`, `reliability`

---

## Issue #199: License & Legal Documentation
**Category**: Documentation
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 0.5 days

**Description**:
Ensure all legal documentation is in place including license file, third-party attributions, and terms of service.

**Acceptance Criteria**:
- [ ] LICENSE file (Apache 2.0)
- [ ] Third-party license attributions
- [ ] Terms of service (placeholder)
- [ ] Privacy policy (placeholder)
- [ ] License headers in source files

**Technical Requirements**:
- SPDX license identifiers
- License compatibility check for dependencies

**Labels**: `documentation`, `legal`

---

## Issue #200: Documentation Site Setup
**Category**: Documentation
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up a documentation website using Docusaurus or Nextra to host all project documentation in a searchable, navigable format.

**Acceptance Criteria**:
- [ ] Documentation site framework configured
- [ ] All existing docs migrated
- [ ] Search functionality enabled
- [ ] Versioned documentation support
- [ ] Auto-deploy on docs changes
- [ ] Custom domain configured

**Technical Requirements**:
- Docusaurus 3 or Nextra
- Algolia DocSearch for search
- GitHub Actions deploy to GitHub Pages

**Labels**: `documentation`, `devops`

---

## 🧪 TESTING (Issues #201–#220)

---

## Issue #201: Unit Testing Framework Setup
**Category**: Testing
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up unit testing frameworks for frontend (Vitest) and backend (Vitest/Jest) with coverage reporting.

**Acceptance Criteria**:
- [ ] Vitest configured for frontend
- [ ] Vitest configured for backend
- [ ] Coverage reporting with v8
- [ ] Coverage thresholds set (80% minimum)
- [ ] Test scripts in package.json
- [ ] CI integration

**Technical Requirements**:
- Vitest for both frontend and backend
- @testing-library/react for component tests
- Coverage threshold enforcement in CI

**Labels**: `testing`, `setup`, `high-priority`

---

## Issue #202: Backend API Integration Tests
**Category**: Testing
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Write integration tests for all backend API endpoints using a test database and mocked external services.

**Acceptance Criteria**:
- [ ] Test database setup and teardown
- [ ] Tests for all CRUD endpoints
- [ ] Auth flow tested
- [ ] Error cases tested
- [ ] External services mocked (blockchain, email)
- [ ] 80%+ API coverage

**Technical Requirements**:
- Supertest for HTTP testing
- Test database with Prisma
- MSW or nock for external mocks

**Labels**: `testing`, `backend`, `integration`

---

## Issue #203: Frontend Component Unit Tests
**Category**: Testing
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 4 days

**Description**:
Write unit tests for all reusable UI components using React Testing Library.

**Acceptance Criteria**:
- [ ] Tests for all base components
- [ ] Interaction tests (click, input)
- [ ] Accessibility tests with jest-axe
- [ ] Snapshot tests for stable components
- [ ] 80%+ component coverage

**Technical Requirements**:
- @testing-library/react
- @testing-library/user-event
- jest-axe for accessibility
- Vitest

**Labels**: `testing`, `frontend`, `components`

---

## Issue #204: Smart Contract Unit Tests
**Category**: Testing
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Write comprehensive unit tests for all smart contracts covering happy paths, edge cases, and revert conditions.

**Acceptance Criteria**:
- [ ] 100% line coverage for all contracts
- [ ] Happy path tests
- [ ] Revert condition tests
- [ ] Access control tests
- [ ] Event emission tests
- [ ] Gas usage assertions

**Technical Requirements**:
- Hardhat + Chai or Foundry
- solidity-coverage
- Gas reporter

**Labels**: `testing`, `smart-contracts`, `high-priority`

---

## Issue #205: End-to-End Test Suite
**Category**: Testing
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 5 days

**Description**:
Write end-to-end tests for critical user journeys using Playwright covering the full stack.

**Acceptance Criteria**:
- [ ] User registration/login flow
- [ ] Create community flow
- [ ] Join community flow
- [ ] Create and vote on proposal
- [ ] Send message in community
- [ ] Tests run in CI

**Technical Requirements**:
- Playwright
- Mock wallet for Web3 interactions
- Test fixtures and page objects
- Parallel test execution

**Labels**: `testing`, `e2e`, `high-priority`

---

## Issue #206: Smart Contract Fuzz Testing
**Category**: Testing
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement fuzz testing for critical smart contract functions to discover edge cases and vulnerabilities.

**Acceptance Criteria**:
- [ ] Fuzz tests for token transfer functions
- [ ] Fuzz tests for governance voting
- [ ] Fuzz tests for treasury operations
- [ ] Invariant tests defined
- [ ] Foundry fuzz configuration

**Technical Requirements**:
- Foundry fuzz testing
- Invariant testing
- Corpus management

**Labels**: `testing`, `smart-contracts`, `security`

---

## Issue #207: API Contract Testing
**Category**: Testing
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement API contract testing to ensure frontend and backend stay in sync using Pact or similar tools.

**Acceptance Criteria**:
- [ ] Consumer-driven contract tests
- [ ] Pact broker configured
- [ ] Frontend consumer tests
- [ ] Backend provider verification
- [ ] CI integration

**Technical Requirements**:
- Pact JS
- Pact Broker (self-hosted or PactFlow)
- Contract versioning

**Labels**: `testing`, `api`, `contract-testing`

---

## Issue #208: Performance & Load Testing
**Category**: Testing
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Write performance and load tests for the backend API to validate it meets performance targets under load.

**Acceptance Criteria**:
- [ ] Load test scenarios defined
- [ ] Baseline performance established
- [ ] 1000 concurrent users tested
- [ ] Performance targets documented
- [ ] Bottlenecks identified

**Technical Requirements**:
- k6 load testing
- Performance targets: p95 < 200ms
- Grafana dashboard for results

**Labels**: `testing`, `performance`, `backend`

---

## Issue #209: Security Penetration Testing Checklist
**Category**: Testing
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Create and execute a security testing checklist covering OWASP Top 10 vulnerabilities for the web application.

**Acceptance Criteria**:
- [ ] OWASP Top 10 checklist completed
- [ ] SQL injection tests
- [ ] XSS vulnerability tests
- [ ] CSRF protection verified
- [ ] Authentication bypass attempts
- [ ] Findings documented and remediated

**Technical Requirements**:
- OWASP ZAP or Burp Suite
- Automated DAST scanning
- Manual testing for complex flows

**Labels**: `testing`, `security`

---

## Issue #210: Test Data Factory Setup
**Category**: Testing
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Create test data factories for generating realistic test data for unit and integration tests.

**Acceptance Criteria**:
- [ ] User factory with all fields
- [ ] Community factory
- [ ] Proposal factory
- [ ] Member factory
- [ ] Factories used across all tests
- [ ] Faker.js for realistic data

**Technical Requirements**:
- @faker-js/faker
- Factory pattern (fishery or custom)
- TypeScript typed factories

**Labels**: `testing`, `backend`, `frontend`

---

## Issue #211: Accessibility Testing Automation
**Category**: Testing
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up automated accessibility testing in CI using axe-core to catch accessibility regressions.

**Acceptance Criteria**:
- [ ] axe-core integrated in component tests
- [ ] Playwright accessibility checks in E2E
- [ ] CI fails on accessibility violations
- [ ] Accessibility report generated
- [ ] WCAG 2.1 AA rules enforced

**Technical Requirements**:
- jest-axe for unit tests
- @axe-core/playwright for E2E
- Accessibility violation reporting

**Labels**: `testing`, `accessibility`, `ci-cd`

---

## Issue #212: Visual Regression Testing
**Category**: Testing
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Set up visual regression testing to catch unintended UI changes using screenshot comparison.

**Acceptance Criteria**:
- [ ] Playwright screenshot tests for key pages
- [ ] Baseline screenshots established
- [ ] CI comparison on PR
- [ ] Visual diff reporting
- [ ] Approved changes update baseline

**Technical Requirements**:
- Playwright visual comparisons
- Chromatic or Percy (optional)
- Threshold for acceptable differences

**Labels**: `testing`, `frontend`, `visual-regression`

---

## Issue #213: Blockchain Integration Tests
**Category**: Testing
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 4 days

**Description**:
Write integration tests for blockchain interactions using a local Hardhat node to test the full stack with real contract calls.

**Acceptance Criteria**:
- [ ] Local Hardhat node for tests
- [ ] Community creation flow tested
- [ ] Governance voting flow tested
- [ ] Treasury operations tested
- [ ] Event indexer tested with real events

**Technical Requirements**:
- Hardhat local node
- viem test client
- Contract deployment in test setup

**Labels**: `testing`, `blockchain`, `integration`

---

## Issue #214: Test Coverage Reporting
**Category**: Testing
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up comprehensive test coverage reporting across all packages with coverage badges and trend tracking.

**Acceptance Criteria**:
- [ ] Coverage reports for all packages
- [ ] Coverage badges in README
- [ ] Codecov or Coveralls integration
- [ ] Coverage trend tracking
- [ ] PR coverage diff comments

**Technical Requirements**:
- Codecov GitHub integration
- Coverage thresholds per package
- Combined coverage report

**Labels**: `testing`, `ci-cd`, `quality`

---

## Issue #215: Mock Service Worker (MSW) Setup
**Category**: Testing
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Set up Mock Service Worker for mocking API calls in frontend tests and development.

**Acceptance Criteria**:
- [ ] MSW configured for test environment
- [ ] Handlers for all API endpoints
- [ ] MSW browser mode for development
- [ ] Shared handlers between tests
- [ ] Error scenario mocks

**Technical Requirements**:
- msw v2
- Handlers in `src/mocks/`
- TypeScript typed handlers

**Labels**: `testing`, `frontend`, `mocking`

---

## Issue #216: Database Testing Utilities
**Category**: Testing
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Create database testing utilities for setting up, seeding, and tearing down test databases efficiently.

**Acceptance Criteria**:
- [ ] Test database setup utility
- [ ] Transaction rollback between tests
- [ ] Seed helpers for common scenarios
- [ ] Parallel test isolation
- [ ] Fast test database reset

**Technical Requirements**:
- Prisma test utilities
- Transaction-based test isolation
- Separate test database per worker

**Labels**: `testing`, `backend`, `database`

---

## Issue #217: Snapshot Testing Strategy
**Category**: Testing
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Define and implement a snapshot testing strategy for stable UI components and API response shapes.

**Acceptance Criteria**:
- [ ] Snapshot tests for stable components
- [ ] API response shape snapshots
- [ ] Snapshot update workflow documented
- [ ] Inline snapshots for small outputs
- [ ] Snapshot review in PR process

**Technical Requirements**:
- Vitest snapshot testing
- Inline snapshots for small values
- Snapshot update command documented

**Labels**: `testing`, `frontend`, `backend`

---

## Issue #218: Chaos Engineering Tests
**Category**: Testing
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Implement chaos engineering tests to verify system resilience under failure conditions.

**Acceptance Criteria**:
- [ ] Database connection failure handling tested
- [ ] Redis failure graceful degradation
- [ ] Blockchain RPC failure handling
- [ ] Network timeout handling
- [ ] Partial failure scenarios

**Technical Requirements**:
- Chaos Monkey or custom fault injection
- Circuit breaker pattern verification
- Graceful degradation assertions

**Labels**: `testing`, `reliability`, `chaos-engineering`

---

## Issue #219: Test Environment Documentation
**Category**: Testing
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Document the testing environment setup, test running procedures, and testing best practices for contributors.

**Acceptance Criteria**:
- [ ] Test setup instructions
- [ ] How to run each test suite
- [ ] Writing new tests guide
- [ ] Test naming conventions
- [ ] Mocking best practices
- [ ] CI test configuration explained

**Technical Requirements**:
- Markdown documentation
- Code examples for common patterns
- Troubleshooting section

**Labels**: `testing`, `documentation`

---

## Issue #220: Continuous Testing Pipeline
**Category**: Testing
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Optimize the CI testing pipeline for speed and reliability with parallel execution and smart test selection.

**Acceptance Criteria**:
- [ ] Tests run in parallel in CI
- [ ] Changed-file-based test selection
- [ ] Test result caching
- [ ] Flaky test detection and quarantine
- [ ] Test timing reports

**Technical Requirements**:
- GitHub Actions matrix strategy
- Vitest workspace parallel execution
- Test result artifacts

**Labels**: `testing`, `ci-cd`, `performance`

---

## 🔒 SECURITY (Issues #221–#235)

---

## Issue #221: Security Headers Implementation
**Category**: Security
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement comprehensive security headers for both the frontend (Next.js) and backend (Express) to protect against common web attacks.

**Acceptance Criteria**:
- [ ] Content-Security-Policy configured
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy configured
- [ ] Permissions-Policy configured
- [ ] HSTS with preload

**Technical Requirements**:
- helmet.js for Express
- Next.js headers config
- CSP nonce for inline scripts

**Labels**: `security`, `backend`, `frontend`, `high-priority`

---

## Issue #222: SQL Injection Prevention Audit
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Audit all database queries for SQL injection vulnerabilities and ensure all queries use parameterized inputs via Prisma.

**Acceptance Criteria**:
- [ ] All raw queries reviewed
- [ ] No string interpolation in queries
- [ ] Prisma parameterized queries verified
- [ ] Dynamic query building audited
- [ ] Automated SAST check added to CI

**Technical Requirements**:
- Prisma ORM (inherently safe)
- CodeQL SQL injection rules
- Manual review of any raw SQL

**Labels**: `security`, `backend`, `high-priority`

---

## Issue #223: XSS Prevention & Content Sanitization
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement XSS prevention measures including output encoding, CSP, and input sanitization for all user-generated content.

**Acceptance Criteria**:
- [ ] All user content sanitized before storage
- [ ] HTML output encoded in React (default)
- [ ] Rich text editor output sanitized
- [ ] CSP blocks inline scripts
- [ ] DOMPurify used for HTML rendering

**Technical Requirements**:
- DOMPurify for HTML sanitization
- CSP with strict-dynamic
- React's default XSS protection

**Labels**: `security`, `frontend`, `backend`

---

## Issue #224: CSRF Protection
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 1 day

**Description**:
Implement CSRF protection for all state-changing API endpoints using double-submit cookie pattern or SameSite cookies.

**Acceptance Criteria**:
- [ ] SameSite=Strict cookies for session
- [ ] CSRF token for sensitive operations
- [ ] Origin header validation
- [ ] CORS properly configured
- [ ] CSRF tests written

**Technical Requirements**:
- SameSite cookie attribute
- CORS whitelist configuration
- csurf or custom CSRF middleware

**Labels**: `security`, `backend`

---

## Issue #225: Dependency Vulnerability Management
**Category**: Security
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up automated dependency vulnerability scanning and a process for addressing security advisories promptly.

**Acceptance Criteria**:
- [ ] npm audit / bun audit in CI
- [ ] Snyk or Dependabot alerts enabled
- [ ] Critical vulnerabilities block merge
- [ ] Vulnerability response SLA defined
- [ ] Regular dependency update schedule

**Technical Requirements**:
- GitHub Dependabot security alerts
- Snyk integration
- Automated PR for security patches

**Labels**: `security`, `devops`, `dependencies`

---

## Issue #226: Private Key & Secret Security
**Category**: Security
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Audit the codebase for accidentally committed secrets and implement pre-commit hooks to prevent future leaks.

**Acceptance Criteria**:
- [ ] git-secrets or truffleHog scan run
- [ ] No secrets found in git history
- [ ] Pre-commit hook blocks secret commits
- [ ] .gitignore covers all env files
- [ ] Secret scanning enabled on GitHub

**Technical Requirements**:
- git-secrets or detect-secrets
- GitHub secret scanning
- Husky pre-commit hook

**Labels**: `security`, `high-priority`

---

## Issue #227: JWT Security Hardening
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Harden JWT implementation including algorithm pinning, short expiry, secure storage, and token rotation.

**Acceptance Criteria**:
- [ ] RS256 algorithm used (not HS256)
- [ ] Access token expiry: 15 minutes
- [ ] Refresh token rotation on use
- [ ] Token stored in httpOnly cookie
- [ ] Token revocation list (Redis)
- [ ] JWT claims validated strictly

**Technical Requirements**:
- RS256 with key pair
- Redis for token revocation
- Strict claim validation

**Labels**: `security`, `auth`, `backend`

---

## Issue #228: Rate Limiting & DDoS Protection
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement comprehensive rate limiting and DDoS protection at multiple layers to prevent abuse.

**Acceptance Criteria**:
- [ ] IP-based rate limiting
- [ ] User-based rate limiting (authenticated)
- [ ] Endpoint-specific limits
- [ ] Cloudflare DDoS protection (production)
- [ ] Rate limit bypass prevention
- [ ] Monitoring for rate limit hits

**Technical Requirements**:
- express-rate-limit with Redis store
- Cloudflare for production
- Rate limit headers in responses

**Labels**: `security`, `backend`, `devops`

---

## Issue #229: Smart Contract Reentrancy Protection
**Category**: Security
**Priority**: High
**Difficulty**: Advanced
**Estimated Time**: 2 days

**Description**:
Audit all smart contracts for reentrancy vulnerabilities and implement proper guards.

**Acceptance Criteria**:
- [ ] All external calls audited
- [ ] ReentrancyGuard on vulnerable functions
- [ ] Checks-Effects-Interactions pattern followed
- [ ] Slither reentrancy check passing
- [ ] Unit tests for reentrancy scenarios

**Technical Requirements**:
- OpenZeppelin ReentrancyGuard
- Checks-Effects-Interactions pattern
- Slither static analysis

**Labels**: `security`, `smart-contracts`, `high-priority`

---

## Issue #230: Data Encryption at Rest
**Category**: Security
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Ensure sensitive data is encrypted at rest in the database and file storage.

**Acceptance Criteria**:
- [ ] Database encryption enabled (RDS)
- [ ] S3 bucket encryption enabled
- [ ] Sensitive fields encrypted at application level
- [ ] Encryption key management documented
- [ ] Key rotation procedure

**Technical Requirements**:
- AWS KMS for key management
- RDS encryption at rest
- Application-level encryption for PII

**Labels**: `security`, `devops`, `compliance`

---

## Issue #231: OAuth & Social Login Security
**Category**: Security
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
If social login is added, ensure OAuth implementation follows security best practices including state parameter and PKCE.

**Acceptance Criteria**:
- [ ] State parameter prevents CSRF
- [ ] PKCE for public clients
- [ ] Token exchange server-side only
- [ ] Scope minimization
- [ ] Account linking security

**Technical Requirements**:
- OAuth 2.0 with PKCE
- State parameter validation
- Server-side token exchange

**Labels**: `security`, `auth`

---

## Issue #232: Security Audit Trail
**Category**: Security
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement a security-focused audit trail for sensitive operations including login attempts, permission changes, and data exports.

**Acceptance Criteria**:
- [ ] Failed login attempts logged
- [ ] Successful logins logged with IP/device
- [ ] Permission changes logged
- [ ] Data export requests logged
- [ ] Audit logs tamper-evident
- [ ] Retention: 1 year

**Technical Requirements**:
- Append-only audit log table
- Log integrity verification
- Alerting on suspicious patterns

**Labels**: `security`, `compliance`, `backend`

---

## Issue #233: Wallet Signature Replay Attack Prevention
**Category**: Security
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Prevent replay attacks on wallet signature-based authentication by implementing nonces and expiry in SIWE messages.

**Acceptance Criteria**:
- [ ] Nonce generated server-side per login attempt
- [ ] Nonce single-use (invalidated after use)
- [ ] Message expiry (5 minutes)
- [ ] Chain ID included in message
- [ ] Domain binding in SIWE message

**Technical Requirements**:
- SIWE standard fields (nonce, expirationTime, chainId)
- Redis nonce storage
- Nonce cleanup after use

**Labels**: `security`, `auth`, `blockchain`

---

## Issue #234: Content Security Policy (CSP) Hardening
**Category**: Security
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Implement and harden Content Security Policy to prevent XSS and data injection attacks.

**Acceptance Criteria**:
- [ ] Strict CSP with nonces
- [ ] No `unsafe-inline` or `unsafe-eval`
- [ ] Trusted domains whitelisted
- [ ] CSP violation reporting endpoint
- [ ] CSP tested with browser tools

**Technical Requirements**:
- Next.js CSP with nonces
- CSP report-uri endpoint
- Regular CSP audit

**Labels**: `security`, `frontend`

---

## Issue #235: Penetration Testing & Bug Bounty Setup
**Category**: Security
**Priority**: Medium
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Prepare for and conduct penetration testing of the platform, and set up a bug bounty program for ongoing security research.

**Acceptance Criteria**:
- [ ] Scope defined for pentest
- [ ] Pentest conducted (internal or third-party)
- [ ] Findings remediated
- [ ] Bug bounty program on Immunefi or HackerOne
- [ ] Responsible disclosure policy published

**Technical Requirements**:
- Pentest scope document
- Immunefi or HackerOne setup
- Triage process for reports

**Labels**: `security`, `high-priority`

---

## 🔧 MISCELLANEOUS (Issues #236–#250)

---

## Issue #236: Monorepo Tooling & Workspace Setup
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 2 days

**Description**:
Configure the monorepo tooling with Bun workspaces, shared scripts, and inter-package dependencies for efficient development.

**Acceptance Criteria**:
- [ ] Bun workspaces configured
- [ ] Shared `types` package set up
- [ ] Shared `utils` package set up
- [ ] Root-level scripts for all packages
- [ ] Package dependency graph documented
- [ ] Turborepo or Nx for build caching (optional)

**Technical Requirements**:
- Bun workspace protocol
- TypeScript project references
- Shared tsconfig base

**Labels**: `miscellaneous`, `tooling`, `setup`

---

## Issue #237: Code Quality & Linting Setup
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up Biome for linting and formatting across all packages with pre-commit hooks and CI enforcement.

**Acceptance Criteria**:
- [ ] Biome configured for all packages
- [ ] Pre-commit hooks with Husky
- [ ] lint-staged for staged files only
- [ ] CI lint check on all PRs
- [ ] Editor config for consistent formatting

**Technical Requirements**:
- Biome 1.x
- Husky + lint-staged
- `.editorconfig` file

**Labels**: `miscellaneous`, `code-quality`, `tooling`

---

## Issue #238: Git Hooks & Commit Standards
**Category**: Miscellaneous
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Set up Git hooks for commit message validation, pre-commit linting, and pre-push testing.

**Acceptance Criteria**:
- [ ] Conventional commits enforced (commitlint)
- [ ] Pre-commit: lint and format
- [ ] Pre-push: type-check
- [ ] Commit message template
- [ ] Hook bypass documented (--no-verify)

**Technical Requirements**:
- Husky for Git hooks
- commitlint with conventional config
- lint-staged

**Labels**: `miscellaneous`, `tooling`, `code-quality`

---

## Issue #239: Environment Variable Validation
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Implement startup validation of all required environment variables to fail fast with clear error messages.

**Acceptance Criteria**:
- [ ] All required env vars validated on startup
- [ ] Clear error message for missing vars
- [ ] Type coercion for non-string vars
- [ ] Validation schema documented
- [ ] `.env.example` kept in sync

**Technical Requirements**:
- Zod for env validation
- `@t3-oss/env-nextjs` for frontend
- Fail-fast on missing required vars

**Labels**: `miscellaneous`, `backend`, `frontend`

---

## Issue #240: Shared TypeScript Types Package
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Build out the shared TypeScript types package used by both frontend and backend to ensure type consistency.

**Acceptance Criteria**:
- [ ] API request/response types
- [ ] Domain model types (User, Community, etc.)
- [ ] Blockchain types (addresses, tx hashes)
- [ ] Error types
- [ ] Zod schemas exported alongside types
- [ ] Published as internal package

**Technical Requirements**:
- TypeScript strict mode
- Zod schemas for runtime validation
- Barrel exports

**Labels**: `miscellaneous`, `typescript`, `shared`

---

## Issue #241: Developer Experience (DX) Improvements
**Category**: Miscellaneous
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Improve the developer experience with better tooling, scripts, and development utilities.

**Acceptance Criteria**:
- [ ] `bun run dev` starts all services
- [ ] Database reset script
- [ ] Log pretty-printing in development
- [ ] VS Code recommended extensions
- [ ] VS Code workspace settings
- [ ] Development tips in README

**Technical Requirements**:
- Concurrently for parallel dev servers
- VS Code `.vscode/extensions.json`
- Development-only utilities

**Labels**: `miscellaneous`, `developer-experience`

---

## Issue #242: Community Discord Bot Integration
**Category**: Miscellaneous
**Priority**: Low
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Build a Discord bot integration that syncs HUB-Buddy community activity to Discord servers.

**Acceptance Criteria**:
- [ ] Discord bot created and configured
- [ ] New proposal notifications to Discord
- [ ] New member announcements
- [ ] Governance vote results posted
- [ ] Bot commands for community stats
- [ ] OAuth link Discord to HUB-Buddy account

**Technical Requirements**:
- Discord.js
- Webhook-based notifications
- OAuth2 for account linking

**Labels**: `miscellaneous`, `integrations`, `discord`

---

## Issue #243: Analytics & Telemetry (Privacy-First)
**Category**: Miscellaneous
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Implement privacy-first analytics to understand platform usage without compromising user privacy.

**Acceptance Criteria**:
- [ ] Privacy-first analytics tool (Plausible/Fathom)
- [ ] No PII collected
- [ ] Cookie consent not required (cookieless)
- [ ] Analytics dashboard accessible to team
- [ ] Custom events for key actions

**Technical Requirements**:
- Plausible Analytics or Fathom
- No third-party cookies
- GDPR compliant by design

**Labels**: `miscellaneous`, `analytics`, `privacy`

---

## Issue #244: Feature Flag System
**Category**: Miscellaneous
**Priority**: Medium
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Implement a feature flag system to enable gradual rollouts, A/B testing, and environment-specific features.

**Acceptance Criteria**:
- [ ] Feature flag service configured
- [ ] Flags for all in-progress features
- [ ] User/community targeting support
- [ ] Flag evaluation in frontend and backend
- [ ] Flag management UI (admin)

**Technical Requirements**:
- Unleash, LaunchDarkly, or custom
- Server-side and client-side evaluation
- Flag defaults for offline mode

**Labels**: `miscellaneous`, `feature-flags`, `devops`

---

## Issue #245: Internationalization Content Strategy
**Category**: Miscellaneous
**Priority**: Low
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Define the content strategy for internationalization including which languages to support and translation workflow.

**Acceptance Criteria**:
- [ ] Target languages identified (5 initial)
- [ ] Translation workflow documented
- [ ] Translation management tool selected
- [ ] Crowdin or Lokalise configured
- [ ] Contributor translation guide

**Technical Requirements**:
- Crowdin or Lokalise for translation management
- ICU message format
- Automated translation sync

**Labels**: `miscellaneous`, `i18n`, `content`

---

## Issue #246: Mobile App Planning (React Native)
**Category**: Miscellaneous
**Priority**: Low
**Difficulty**: Advanced
**Estimated Time**: 3 days

**Description**:
Plan and scaffold the React Native mobile application for HUB-Buddy, sharing code with the web frontend where possible.

**Acceptance Criteria**:
- [ ] React Native project scaffolded (Expo)
- [ ] Shared business logic with web
- [ ] Navigation structure planned
- [ ] Wallet connection on mobile (WalletConnect)
- [ ] Push notifications planned

**Technical Requirements**:
- Expo SDK
- React Navigation
- WalletConnect v2 mobile
- Shared types from monorepo

**Labels**: `miscellaneous`, `mobile`, `react-native`

---

## Issue #247: Open Source Community Building
**Category**: Miscellaneous
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Set up the open source community infrastructure including issue templates, discussion categories, and contributor recognition.

**Acceptance Criteria**:
- [ ] GitHub Discussions enabled with categories
- [ ] Issue templates for bug/feature/question
- [ ] PR template created
- [ ] Good first issue labels applied
- [ ] Contributors file/page
- [ ] Community health files complete

**Technical Requirements**:
- GitHub community health files
- `.github/` directory setup
- All-contributors bot (optional)

**Labels**: `miscellaneous`, `community`, `open-source`

---

## Issue #248: License Compliance Check
**Category**: Miscellaneous
**Priority**: Medium
**Difficulty**: Beginner
**Estimated Time**: 1 day

**Description**:
Audit all dependencies for license compatibility with the Apache 2.0 project license and document findings.

**Acceptance Criteria**:
- [ ] All dependency licenses audited
- [ ] Incompatible licenses identified
- [ ] License compatibility matrix documented
- [ ] NOTICE file created for attributions
- [ ] Automated license check in CI

**Technical Requirements**:
- license-checker or FOSSA
- CI license compliance check
- NOTICE file for required attributions

**Labels**: `miscellaneous`, `legal`, `compliance`

---

## Issue #249: Project Roadmap & Milestone Planning
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Beginner
**Estimated Time**: 2 days

**Description**:
Create a detailed project roadmap with milestones, priorities, and timeline estimates for the HUB-Buddy platform.

**Acceptance Criteria**:
- [ ] GitHub Milestones created (Phase 1-4)
- [ ] Issues assigned to milestones
- [ ] Priority labels applied to all issues
- [ ] Roadmap document created
- [ ] Public roadmap page (GitHub Projects)

**Technical Requirements**:
- GitHub Projects board
- GitHub Milestones
- Priority and status labels

**Labels**: `miscellaneous`, `planning`, `high-priority`

---

## Issue #250: Platform Launch Checklist
**Category**: Miscellaneous
**Priority**: High
**Difficulty**: Intermediate
**Estimated Time**: 3 days

**Description**:
Create and execute a comprehensive pre-launch checklist covering security, performance, legal, and operational readiness.

**Acceptance Criteria**:
- [ ] Security audit completed
- [ ] Smart contract audit completed
- [ ] Performance targets met
- [ ] Legal documents in place (ToS, Privacy Policy)
- [ ] Monitoring and alerting active
- [ ] Backup and recovery tested
- [ ] Support channels ready
- [ ] Launch announcement prepared

**Technical Requirements**:
- Checklist document in `docs/`
- All critical issues resolved
- Staging environment validated

**Labels**: `miscellaneous`, `launch`, `high-priority`

---

*Total: 250 issues across 9 categories*

| Category | Issues | Count |
|----------|--------|-------|
| Design | #1–#30 | 30 |
| Frontend | #31–#80 | 50 |
| Backend | #81–#130 | 50 |
| Smart Contracts | #131–#160 | 30 |
| DevOps | #161–#180 | 20 |
| Documentation | #181–#200 | 20 |
| Testing | #201–#220 | 20 |
| Security | #221–#235 | 15 |
| Miscellaneous | #236–#250 | 15 |
