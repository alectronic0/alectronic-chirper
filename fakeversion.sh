#!/bin/sh
echo "version: $(./bin/get_package_version.sh)" > version
echo "build: ${BUILD_NUMBER:-local}" >> version
echo "commit: $(git rev-parse --short HEAD)" >> version
echo "date: $(date)" >> version
