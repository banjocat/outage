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

mongodb_up: ## Starts mongodb - primarly for testing
	@docker-compose up -d mongodb

express_up: ## Starts just the backend for native reactjs development
	@docker-compose up -d express

backend_up: mongodb_up express_up ## Starts teh backend for native reactjs development
	@docker-compose down reactjs

reactjs_up: reactjs ## Builds and starts backend
	@docker-compose up -d reactjs

up: mongodb_up express_up reactjs_up ## Starts evertying but also builds reactjs
	@docker-compose up -d reactjs

deploy: push ## Deploys.. well eventually
	@echo "Deploy no implemented yet"
