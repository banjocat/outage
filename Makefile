.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $, $}'

.PHONY: help

backend: ## Starts just the backend for native reactjs development
	@docker-compose up -d mongodb
	@docker-compose up -d express


