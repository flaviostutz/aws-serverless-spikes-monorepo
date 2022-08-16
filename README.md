# aws-serverless-monorepo-demo

Serverless Framework application using a monorepo with Web, API and NodeJS backend with DB and PR deployments orchestrated by Github Actions

## Creating a new service or web site

* Duplicate and rename the folder of an existing service
* Delete files under src/
* Change serverless.yml service name and contents
* Duplicate and rename the workflow file on .github/workflows from an existing service

## Javascript tooling

* Linting:
  * `eslint` for checking code conventions and auto formatting
    * uses .eslintrc
  * `tsc` for typescript type checks

* Compiling and bundling:
  * `esbuild`
    * uses tsconfig.json

* Test
  * `Jest` for unit tests

* Coding
  * VSCode as main tool
  * VSCode plugin [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## References

* <https://khalilstemmler.com/blogs/typescript/node-starter-project/>

* <https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/>

* <https://khalilstemmler.com/blogs/tooling/prettier/>

* <https://prettier.io/docs/en/install.html>
