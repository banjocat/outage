.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


build: ## Builds the reactjs docker container
	@cd ./reactjs && yarn build
	@docker-compose build

push: build ## Push docker images  - don't push if you are on a mac more for ci/cd
	@docker-compose push


backend: ## Starts just the backend for native reactjs development
	@docker-compose up -d mongodb
	@docker-compose up -d express
	@docker-compose stop reactjs


