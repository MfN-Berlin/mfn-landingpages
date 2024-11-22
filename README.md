# Gatsby MfN Landingpages

This repository contains the Gatsby-based landing pages for the Museum für Naturkunde Berlin. View the repository at [GitHub](https://github.com/MfN-Berlin/mfn-landingpages).

## 🛠 Prerequisites

- Node.js v20.16.0 (LTS)
- npm (comes with Node.js)
- Git

### Setting up Node.js v20.16.0

Using nvm (Node Version Manager) - recommended:
```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js v20.16.0
nvm install 20.16.0
nvm use 20.16.0
```

## 📁 Repository Structure

```
.
├── .github/             # GitHub specific configurations
│   └── workflows/      # GitHub Actions workflows
│
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── elements/  # Basic UI elements
│   │   ├── features/ # Feature components
│   │   └── layouts/  # Layout components
│   │
│   ├── data/          # Static data and content
│   ├── images/        # Image assets
│   ├── pages/         # Auto-routed pages
│   ├── scripts/       # Utility scripts
│   ├── styles/        # Styling files
│   └── templates/     # Page templates
│
├── static/            # Static assets
│   └── fonts/        # Web fonts
│
├── gatsby-*.js        # Gatsby configuration files
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── .prettierrc       # Prettier configuration
├── .gitignore        # Git ignore rules
└── LICENSE           # Project license
```

## 🔧 Configuration Files

- `.github/workflows/` - CI/CD configurations
- `.prettierrc` - Code formatting rules
- `gatsby-browser.js` - Browser runtime config
- `gatsby-config.js` - Site configuration
- `gatsby-node.js` - Build customization
- `gatsby-ssr.js` - Server-side rendering
- `postcss.config.js` - PostCSS/Tailwind processing
- `tailwind.config.js` - Tailwind customization

## 🚀 Development

1. Clone the repository:
```bash
git clone https://github.com/MfN-Berlin/mfn-landingpages.git
cd mfn-landingpages
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
gatsby develop
```

## 📦 Releases

Latest release: v0.0.77 (November 22, 2024)
[View all releases](https://github.com/MfN-Berlin/mfn-landingpages/releases)

## 🚀 Quick Start

1. Clone the repository
```bash
git clone [repository-url]
cd mfn-landingpages
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
gatsby develop
```

Your site will be running at `http://localhost:8000`

## 🔧 Common Commands

```bash
# Clean Gatsby cache and public directories
gatsby clean

# Start development server
gatsby develop

# Build for production
gatsby build

# Serve production build locally
gatsby serve
```

## 📁 Project Structure

```
.
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── elements/    # Basic UI elements (buttons, inputs)
│   │   ├── features/    # Feature components (forms, cards)
│   │   └── layouts/     # Layout components (header, footer)
│   │
│   ├── data/            # Static data and content
│   │
│   ├── images/          # Image assets
│   │
│   ├── pages/           # Page components (auto-routed)
│   │   ├── de/         # German pages
│   │   └── en/         # English pages
│   │
│   ├── scripts/         # JavaScript utilities
│   │
│   ├���─ styles/          # Styling files
│   │   ├── global.css  # Global styles
│   │   └── theme.js    # Theme configuration
│   │
│   └── templates/       # Page templates
│
├── static/              # Static files
├── gatsby-browser.js    # Browser-specific configuration
├── gatsby-config.js     # Main Gatsby configuration
├── gatsby-node.js       # Gatsby Node APIs configuration
├── gatsby-ssr.js       # Server-side rendering configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project dependencies and scripts
└── README.md          # This file

```

### Source Directory (`src/`)

#### Components (`components/`)
- `elements/` - Basic UI building blocks
- `features/` - Complex feature components
- `layouts/` - Page layout components

#### Data (`data/`)
- Static content and configuration
- Navigation structure
- Content data files

#### Images (`images/`)
- Image assets used throughout the site

#### Pages (`pages/`)
- Auto-routed page components
- Organized by language (de/en)

#### Scripts (`scripts/`)
- JavaScript utilities and helpers
- Custom functions and hooks

#### Styles (`styles/`)
- Global CSS and Tailwind configuration
- Theme settings and design tokens

#### Templates (`templates/`)
- not actively used

## 💅 Styling System

### Tailwind Configuration

The project uses a customized Tailwind CSS setup with specific design tokens and extensions:

```
├── tailwind.config.js    # Main Tailwind configuration
├── src/
    ├── styles/
        ├── global.css    # Global styles, custom classes
        └── theme.js      # Theme tokens (colors, typography, etc.)
```

### Custom Design System

#### Typography
- Custom Trade Gothic font family with four variants:
  - Trade Gothic Next LT W04 Rg (Regular)
  - Trade Gothic Next LT W04 Bold
  - Trade Gothic Next LT W04 Itali (Italic)
  - Trade Gothic Next LT W04 Bd It (Bold Italic)

#### Predefined Classes
- Typography utilities: `.typography-kicker`, `.typography-button`
- Semantic HTML elements (`h1`, `h2`, `h3`, `p`) are pre-styled
- Responsive typography scaling for mobile/desktop

#### Custom Variables
```css
:root {
  --width-main: 1140px;
  --color-background-menu: white;
  --z-index-menu: 50;
  --height-branding-logo: 84px;
  --height-menu: 44px;
  --top-menu: 40px;
}
```

### Webfonts
- Self-hosted Trade Gothic fonts in WOFF2/WOFF formats
- Custom icon font (icomoon) embedded as base64
- Fonts are loaded through `@font-face` declarations in `global.css`

### Development Notes
- Use Tailwind utility classes when possible
- Custom components use `@layer components` in `global.css`
- Theme extensions are managed in `theme.js`
- Custom gap values available (4.5rem to 10rem)
- Swiper component has custom styling configuration

### Usage Example
```jsx
// Using predefined typography classes
<h1 className="typography-kicker">Headline</h1>

// Using custom font variants
<p className="font-tradegothic-bold">Bold text</p>
```

## 🏗 Built With

- [Gatsby](https://www.gatsbyjs.com/) - Static site generator
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Node.js](https://nodejs.org/) - JavaScript runtime

## 📦 Key Dependencies

```json
{
  "gatsby": "^5.x.x",
  "react": "^18.x.x",
  "tailwindcss": "^3.x.x"
}
```

## 🌐 Environment Variables

Create a `.env.development` and `.env.production` file in the root directory:

```env
# Add any environment variables here
```

## 📝 Additional Notes

- The site uses Gatsby's image optimization features
- Custom fonts are loaded through gatsby-plugin-webfonts
- SEO is handled through gatsby-plugin-react-helmet

## 🤝 Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## 📜 License

This project is licensed under the [appropriate license] - see the LICENSE file for details

## 🧩 Components

### Elements
Basic building blocks used across the application.

#### Button (`elements/Button.js`)
```jsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'inverted' | 'plain'
  text="Click Me"
  url="/destination"
  className="custom-class"
/>
```

#### Card (`elements/Card.js`)
```jsx
<Card
  variant="green"    // 'classic' | 'green' | 'white'
  alignment="left"   // 'left' | 'center'
  imageProps={{
    src: "path/to/image.jpg",
    alt: "Description",
    aspectRatio: 16/9
  }}
  textProps={{
    headline: "Card Title",
    body: "Card description text",
    headlineStyle: "h3",
    spacing: "regular"
  }}
  url="/destination-page"
  className="my-custom-class"
/>
```

#### CardText (`elements/CardText.js`)
```jsx
<CardText
  kicker="Subtitle"
  headline="Main Title"
  body="Content text"
  headlineStyle="h2"     // 'h1' | 'h1-small' | 'h2' | 'h3' | 'h4'
  spacing="regular"      // 'regular' | 'wide'
  alignment="left"       // 'left' | 'center'
  textColor="black"      // 'black' | 'white'
  buttons={[
    { text: "Learn More", variant: "primary", url: "/more" }
  ]}
/>
```

#### ContentImage (`elements/ContentImage.js`)
Optimized image component using Gatsby Image.
```jsx
<ContentImage
  imageName="image-key"
  alt="Description"
  imageMap={imageData}
  className="custom-class"
/>
```

#### Section (`elements/Section.js`)
```jsx
<Section
  backgroundColor="bg-white"
  padding="py-16"
  columns={2}           // 1-4
  layout="equal"        // 'equal' | 'custom'
  gapClass="gap-4"
  justifyContent="start"
/>
```

### Features
Complex functional components with specific business logic.

#### CookieConsent (`features/CookieConsent.js`)
GDPR-compliant cookie consent manager.
```jsx
<CookieConsent
  forceOpen={false}
  onClose={() => {}}
/>
```

#### Feedback (`features/Feedback.js`)
User feedback collection with star rating system.
```jsx
<Feedback />
```

#### OpenToday (`features/OpenToday.js`)
Dynamic component showing museum opening status.
```jsx
<OpenToday />
```

#### UpcomingHoliday (`features/UpcomingHoliday.js`)
Displays information about upcoming holidays.
```jsx
<UpcomingHoliday />
```

### Layouts
Components that define the structure and layout of pages.

#### AccessibilityNav (`layouts/AccessibilityNav.js`)
```jsx
<AccessibilityNav currentPage="Page Title" />
```

#### Accordion (`layouts/Accordion.js`)
```jsx
<Accordion bgColor="white" defaultOpenIndex={0}>
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
</Accordion>
```

#### Blockquote (`layouts/Blockquote.js`)
```jsx
<BlockQuote
  text="Quote text"
  source="Author Name"
  sourceTitle="Author Title"
  backgroundColor="#0197b7"
  imageProps={{
    src: "path/to/image",
    alt: "Author"
  }}
/>
```

#### Footer & Header (`layouts/Footer.js`, `layouts/Header.js`)
Main navigation and footer components.

#### HeadComponent (`layouts/HeadComponent.js`)
```jsx
<HeadComponent
  title="Page Title"
  description="Page description"
  image="path/to/og-image.jpg"
  url="/current-page"
/>
```

#### Slideshow & SlideContent (`layouts/Slideshow.js`, `layouts/SlideContent.js`)
```jsx
<Slideshow imageMap={images}>
  <SlideContent
    imageName="slide1"
    title="Title"
    text="Description"
    link="/page"
  />
</Slideshow>
```

#### StoryTime (`layouts/StoryTime.js`)
```jsx
<StoryTime
  imageProps={{...}}
  textProps={{...}}
  linkUrl="/more"
  imagePosition="left"  // 'left' | 'right'
  linkText="Read More"
/>
```

#### Teaser (`layouts/Teaser.js`)
```jsx
<Teaser
  imageProps={{...}}
  textProps={{...}}
  buttonProps={{...}}
  textStyle="circle-white"  // 'circle-white' | 'circle-green' | 'box-white'
  textPosition="bottom-left"
/>
```

## 📄 Pages

The website follows a multi-language structure with German (`/de/`) as the primary language. Pages are organized using a component-based architecture that emphasizes reusability and consistent layout patterns.

### Common Page Structure
Each page follows a consistent template:
```jsx
<>
  <Header activeNavItem="current-section" />
  <main>
    <Section>
      <AccessibilityNav currentPage="Page Title" />
    </Section>
    {/* Page Content */}
    <Section>
      <StoryTime /> {/* Hero section */}
    </Section>
    {/* Main Content Sections */}
    <Section>
      <Feedback /> {/* Optional */}
    </Section>
  </main>
  <Footer />
</>
```

### Common Patterns
- All pages use `HeadComponent` for SEO
- Image handling through Gatsby's GraphQL system
- Consistent section spacing using the `Section` component
- Accessibility navigation at the top
- Contact section at the bottom
- Responsive design considerations

### Data Strategy
- Images are queried via GraphQL at build time
- Navigation data is centralized
- Content is structured for easy maintenance
- Components receive data through props
