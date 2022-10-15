npm-upgrade-services:
	echo "Upgrading service modules"
	shared/scripts/run-cmd-all-subfolders.sh "services/" "npm upgrade"

lint-monorepo:
	echo "Verifying if monorepo services are well organized"

	echo "Checking service names"
	shared/scripts/parse-yml.sh 

