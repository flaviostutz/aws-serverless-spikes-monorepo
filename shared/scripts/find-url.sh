#!/bin/bash

INPUT=$1

if [ "$INPUT" == "" ]; then
    echo "Usage $0 [input] [text before url]"
    exit 1
fi

PREFIX=$2

OUT_URL=$(echo ${INPUT} | { grep -Eo "${PREFIX}(http|https)://[a-zA-Z0-9./?=_%:-]*" || true; } | head -1)
if [ "${OUT_URL}" != "" ]; then
    echo ${OUT_URL}
    exit 0
fi
exit 1
