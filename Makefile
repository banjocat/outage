.PHONY: help reactjs express build

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: reactjs express ## Build all docker images

reactjs: ## Builds the reactjs docker production container and push it
	cd ./reactjs && yarn build
	@docker build -t banjocat/outage_reacjts -f reactjs/Dockerfile-prod ./reactjs/.
	@docker push banjocat/outage_reactjs

express: ## Build the express container production and push it
	@docker build -t banjocat/outage_express ./express/.
	@docker push banjocat/outage_reactjs


