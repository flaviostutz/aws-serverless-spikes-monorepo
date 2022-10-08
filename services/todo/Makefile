SHELL := /bin/bash

build: prereqs
	npm ci

lint: prereqs
	npx eslint . --ext .ts
	npx tsc -noEmit --skipLibCheck

unit-tests: prereqs
	npx jest

package: prereqs
	npx sls package --stage ${STAGE}

deploy: prereqs
	npx sls deploy --stage ${STAGE}

integration-tests:
	curl ${ENVIRONMENT_URL}

undeploy: prereqs
	npx sls remove --stage ${STAGE}

prereqs:
	../../shared/scripts/stage-require.sh

all: build lint unit-tests deploy

clean: undeploy
	rm -rf node_modules

