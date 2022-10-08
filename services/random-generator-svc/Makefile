SHELL := /bin/bash

build:
	npm ci

lint:
	npx eslint . --ext .ts
	npx tsc -noEmit --skipLibCheck
	npm audit --audit-level high

unit-tests:
	npx jest

package: stagereq
	npx sls package --stage ${STAGE}

deploy: stagereq
	npx sls deploy --stage ${STAGE}

integration-tests:
	curl ${ENVIRONMENT_URL}

undeploy: stagereq
	npx sls remove --stage ${STAGE}

stagereq:
	../../shared/scripts/stage-require.sh

all: build lint unit-tests deploy

clean: undeploy
	rm -rf node_modules



