#!/bin/bash
if [ "${STAGE}" == "" ]; then
    echo "ENV STAGE is required"
    exit 1
fi
