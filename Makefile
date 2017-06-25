.PHONY: help reactjs express build start_backend push

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: reactjs express ## Build all docker images

reactjs: ## Builds the reactjs docker container
	cd ./reactjs && yarn build
	@docker-compose build reactjs

express: ## Build the express container
	@docker-compose build express


push: build ## Push docker images
	@docker-compose push


start_backend: ## Starts just the backend for native reactjs development
	@docker-compose up -d mongodb
	@docker-compose up -d express
	@docker-compose stop reactjs



