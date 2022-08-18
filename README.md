# aws-serverless-monorepo-demo

Serverless Framework application using a monorepo with Web, API and NodeJS backend with DB and PR deployments orchestrated by Github Actions

## Creating a new service or web site

* Duplicate and rename the folder of an existing service
* Change src files, serverless.yml service name and contents
* Duplicate and rename the workflow file on .github/workflows from an existing service

## Tooling

* The selected tools is the state of the art, minimal and productive set we could find at Aug-2022

* Linting:
  * `eslint` for checking code conventions and auto formatting
    * uses .eslintrc.js, which imports a shared rule set among all services
  * `tsc` for typescript type checks

* Compiling and bundling:
  * `esbuild`
    * uses tsconfig.json

* Test
  * `Jest` for unit tests

* Coding
  * [VSCode](https://code.visualstudio.com/download) as main tool with plugins:
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for showing and formatting ESlint rules
    * [File Nesting](https://marketplace.visualstudio.com/items?itemName=antfu.file-nesting)

## Pipelines

* Github actions
* In general
  * When a PR is created, a preview environment is deployed to AWS
  * When something is merged to "main" (through a PR merge), a "dev" environment is deployed to AWS
  * When a tag is created, a deployment is started to "production" in AWS, but normally you need to authorize the deployment manually
* Each service/web site have its own workflow configured in ".github/workflow". Check the files for details
* After a deployment is done, the base URL for the service is usually shown in the job details

## References

* <https://khalilstemmler.com/blogs/typescript/node-starter-project/>

* <https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/>

