#!/bin/bash
chmod -R o+rx ../html-data
find ../html-data/stuff -type f ! \( -name "*.pdf" -o -name "*.tex" -o -name "*.csv" \) -exec chmod o-rx {} \;
