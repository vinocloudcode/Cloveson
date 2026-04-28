# Company Portfolio Site  

## Overview  

Welcome to our company portfolio site! We specialize in providing high-quality, innovative products for healthcare, industrial, and commercial sectors worldwide. Our mission is to continuously innovate to meet the evolving needs of our customers.  

## Features  

- **Quality**: High-quality products tailored to diverse industries.  
- **Innovation**: Cutting-edge solutions for healthcare, industrial, and commercial applications.  
- **Global Reach**: Serving customers worldwide with reliable and high-quality offerings.  

## Project Structure  

### Root Files  

- `.env.local`, `.env.example`: Environment configuration files.  
- `.gitignore`: Specifies files to ignore in version control.  
- `next.config.js`, `tailwind.config.js`, `tsconfig.json`: Configuration files for Next.js, Tailwind CSS, and TypeScript.  
- `package.json`: Project dependencies and scripts.  
- `README.md`: Documentation for the project.  
- `docker-compose.yml`, `Dockerfile`: Docker setup for containerized deployment.  
- `vercel.json`: Configuration for Vercel deployment.  

### Public Assets  

- **Images**: Hero banners, product visuals, team photos, certifications, and icons.  
- **Documents**: Datasheets, case studies, whitepapers, and compliance files.  
- `favicon.ico`, `robots.txt`, `sitemap.xml`: Essential web assets.  

### Source Code  

- **App**: Core pages like homepage, products, about, industries, resources, contact, and more.  
- **Components**: Modular UI elements including layout, sections, forms, and integrations.  
- **Hooks**: Custom React hooks for preloader, search, and form handling.  
- **Lib**: Utility functions for API calls, email handling, validations, and SEO.  
- **Data**: Static data for products, services, testimonials, and blog content.  
- **Context**: React context for theme and authentication management.  
- **Store**: Redux slices for UI and quote management.  
- **Styles**: Global and theme-specific CSS files.  
- **Types**: TypeScript definitions for products, quotes, users, and global types.  

### Testing  

- **Components, Pages, Integrations**: Unit and integration tests.  
- `setup.ts`, `jest.config.js`: Test setup and configuration.  

### Documentation  

- `DEPLOYMENT.md`: Deployment instructions.  
- `API_REFERENCE.md`: API documentation.  
- `STYLE_GUIDE.md`: Coding standards and style guide.  
- `ROADMAP.md`: Future development plans.  

### Scripts  

- `build.sh`, `deploy.sh`: Build and deployment scripts.  
- `generate-sitemap.js`: Script to generate sitemap.  
- `seed-database.ts`: Script to seed the database.  

## Getting Started  

1. Clone the repository:

    ```bash  
    git clone <repository-url>  
    ```  

2. Install dependencies:
  
    ```bash  
    npm install  
    ```  

3. Start the development server:  

    ```bash  
    npm run dev  
    ```  

## Deployment  

This project is configured for deployment on Vercel. Refer to `DEPLOYMENT.md` for detailed instructions.  

## License  

This project is licensed under [MIT License](LICENSE).  

---  
For more information, visit our [website](https://example.com).
