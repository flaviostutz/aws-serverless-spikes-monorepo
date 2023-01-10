SHELL := /bin/bash

build:
	yarn install

lint:
	npx eslint . --ext .ts
	npx tsc -noEmit --skipLibCheck
	yarn audit; [[ $? -ge 8 ]] && exit 1 || exit 0

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


