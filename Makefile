npm-upgrade-services:
	echo "Upgrading service modules"
	shared/scripts/run-cmd-all-subfolders.sh "services/" "npm upgrade"

npm-upgrade-web:
	echo "Upgrading web modules"
	shared/scripts/run-cmd-all-subfolders.sh "web/" "npm upgrade"

npm-upgrade-all: npm-upgrade-services npm-upgrade-web

