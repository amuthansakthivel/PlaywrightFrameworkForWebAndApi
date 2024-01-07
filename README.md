**Playwright + Typescript Automation Framework for Web and API Automation**

Skeleton framework for web and API automation using Playwright and Typescript. This framework is designed to be used as a starting point for new projects. It is not intended to be a complete framework, but rather a starting point for new projects. 

It has examples of how to use Playwright to automate web and API tests. It also includes examples of how to use Playwright's Page Object Model (POM) pattern.

* **_My strong recommendation is to avoid Page Object Model or use only the pages to store the locators._**

E2E UI tests needs to be minimalist and simple. If you are writing very few E2E UI test, you may not have the need to use Page Object Model. You can simply generate the test using `npx playwright codegen`, improvise the locators by adding new attributes and also by using user-friendly locators.


**Libraries used:**
- [Playwright](https://playwright.dev/) - Browser and API Automation
- [Typescript](https://www.typescriptlang.org/) - Programming Language
- [Dotenv](https://www.npmjs.com/package/dotenv) - Environment Variables
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting

**Commands:**

- `npm install` - Install dependencies
- `npm run test` - Run all tests
- `npm run test:ui` - Run all UI tests
- `npm run test:api` - Run all API tests
- `npm run prettier:check` - Check code formatting
- `npm run prettier:fix` - Fix code formatting
- `npm run lint:check` - Check code linting
- `npm run lint:fix` - Fix code linting
- `npm run test:ui:staging` - Run all UI tests in staging environment //It won't work as the URL is invalid. Just for demo purpose.


