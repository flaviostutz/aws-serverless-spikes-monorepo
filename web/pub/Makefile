SHELL := /bin/bash

build:
	npm ci

lint:
	echo "No lint configured"

unit-tests:
	npx react-scripts test

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


