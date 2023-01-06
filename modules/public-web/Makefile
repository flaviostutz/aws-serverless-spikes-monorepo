SHELL := /bin/bash

# Build this module and all its dependencies
build: install
	npx nx run build-module --verbose --output-style=stream

# Build only this module (without dependencies)
build-module: package

install:
	yarn install --frozen-lockfile --ignore-optional

lint:
	npx prettier --loglevel warn --check .
	npx eslint . --ext .ts
	npx tsc -noEmit --skipLibCheck
	yarn audit; [[ $? -ge 16 ]] && exit 1 || exit 0

lint-fix:
	npx prettier --loglevel warn --write .
	npx eslint . --ext .ts --fix

test: unit-tests

unit-tests:
	npx jest --verbose

package: stagereq prepare
	npx sls package --stage ${STAGE}

deploy: stagereq prepare
	npx sls deploy --stage ${STAGE}

get-environment-url: stagereq
	PRINT_OUT=$$(npx sls print --stage $${STAGE}); \
		../../shared/scripts/find-url.sh "$${PRINT_OUT}" "environment-url: "

integration-tests:
	curl ${ENVIRONMENT_URL}

prepare:
	CONFIG_RANDOM_API_BASE_URL="https://l0tmt6tk1k.execute-api.us-east-1.amazonaws.com/dev" \
		CONFIG_RANDOM_API_KEY="QVWv27iOIP6ik9NjkB2ShaShABeKYHgo4Dw9KzLR" \
		./prepare.sh

undeploy: prereqs
	npx sls remove --stage ${STAGE}

stagereq:
	../../shared/scripts/stage-require.sh

all: build lint unit-tests deploy get-environment-url

clean: undeploy
	rm -rf node_modules



