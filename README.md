# aws-serverless-monorepo-demo

Serverless Framework application using a monorepo with Web, API and NodeJS backend with DB and PR deployments orchestrated by Github Actions

## Spikes you can find

### module public-web

- Static website deployed by Serverless Framework
- Features CloudFront, S3 buckets, custom DNS domains per environment, automatic HTTP certificate provisioning and automatic CF invalidation during deployment, all provisioned via Serverless Framework/Cloudformation
- In progress: AWS WAF and AWS Shield

https://www.serverlessguru.com/blog/connecting-aws-waf-to-api-gateway-via-serverless-framework

https://scalesec.com/blog/using-waf-and-cloudfront-with-serverless-applications/

https://blog.mechanicalrock.io/2022/03/17/aws-wafv2-association-with-api-gateway.html


## Module naming

* Use consistent naming for a certain module
  * Example:
    * modules/todo-svc
    * modules/todo-web
    * "todo-svc" and "todo-web" are the module names and must be unique in the repo
  * Take care to use exactly the same module name for all related resources around a specific module, for example:
    * GH environments names
      * "todo-svc-dev" "todo-svc-prd"
    * Secrets Manager prefix
      * "todo-svc/dev/GOOGLE_MAPS_KEY"
    * GH workflows names
      * "todo-svc-dev-deploy.yml"

## Monorepo linting

* /.github/workflows contains GH workflows
  * Filename must be the same as 'name' attribute inside the yml file
    * file todo-web-dev-deploy.yml must have 'name: todo-web-dev-deploy'
  * Workflow filename must start with the name of an existing module

* /modules folder contains modules
  * Ex.:
    * modules/todo/todo-svc
    * modules/todo/todo-web
    * modules/random-generator-svc

* /shared folder contains resources used by other modules
  * folders must be [js|scripts|assets]

* Modules
  * A module is identified by having a ".serverless" file at its root

  * The module name must end with [-svc|-web]

  * All modules must have different names, regardless of the parent folder structure they are

  * Module folder structure
    * /src - javascript files
    * /src/[handlers|utils]
    * /sls - serverless files referenced by .serverless.yml
    * /.serverless.yml - serverless config entrypoint
    * /Makefile - pipeline and scripts run

  * .serverless.yml
    * 'service' attribute must match module folder name

  * package.json
    * 'name' attribute must match module folder name

## Environment variables

* Use .env files for defining environment variables
* Serverless tries to get .env.[stage] name, and if it doesn't exist, fall back to .env
* Inside serverless.yml use "useDotEnv: true"
* Example:
  * .env - used by all PRs and dev environments
  * .env.prd - used by production environments

## Creating a new service or web site

* Duplicate and rename the folder of an existing service
* Change src files, serverless.yml service name and contents
* Duplicate and rename the workflow file on .github/workflows from an existing service

## Tooling

* Use Makefiles for all scripting tasks, including CI/CD and scripts for running things locally
  * Each module have its own Makefile
  * There is a Makefile in the root for monorepo-wide operations

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

## For enabling NX in your monorepo

* Add nx.json and yarnrc.yml to your monorepo root
* Add package.json to the root of your project

```json
{
  "private": true,
  "name": "aws-serverless-spikes-monorepo",
  "workspaces": [
    "modules/*",
    "shared/*"
  ],
  "packageManager": "yarn@3.2.4",
  "devDependencies": {
    "nx": "15.4.2"
  }
}
```

## References

* <https://khalilstemmler.com/blogs/typescript/node-starter-project/>

* <https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/>

