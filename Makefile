
build-dev:
	echo "Building all monorepo modules..."
	STAGE=dev npm exec turbo build

lint:
	echo "Linting all monorepo modules..."
	npm exec turbo lint
	echo "Linting repository wise rules..."
	npm exec monolint

test:
	echo "Testing all monorepo modules..."
	npm exec turbo lint test

all-dev:
	STAGE=dev npm exec turbo lint test build
