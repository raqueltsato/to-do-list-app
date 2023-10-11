#!/usr/bin/env bash

# Definindo o modo padrão da versão
version_mode="patch"

function get_semantic_version {
    repo="to-do-list-app"

    response=$(curl -sL \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Authorization: Bearer ${GITHUB_API_TOKEN}" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        "https://api.github.com/repos/${SEMANTIC_VERSION_GITHUB_OWNER}/${repo}/pulls?state=closed&sort=updated&direction=desc&page=1&per_page=1")

    labels_names=$(echo "$response" | jq -r '.[0].labels[].name')

    if [[ "$labels_names" == *"major"* ]]; then
        version_mode="major"
    elif [[ "$labels_names" == *"minor"* ]]; then
        version_mode="minor"
    fi
}

get_semantic_version

echo "Generating version..."
echo "Labels: ${labels_names}"
npm version $version_mode
echo "Version generated $version_mode."
