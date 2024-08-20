#!/bin/bash
week=$1
prefixes=("era" "gra" "era2")
types=("html" "pdf" "tex" "csv" "S" "circ" "c" "asm")

for page in "$prefixes[@]"; do
    find . -type f -name "${prefix}*.html" -exec chmod o+rx {} \;
done

chmod o-rx stuff
find stuff -exec chmod o-rwx {} \;

for i in $(seq 1 $week); do
    echo "Setting permissions for week $i"

    week_pad=$(printf "%02d" $i)
    for prefix in "${prefixes[@]}"; do
        for type in "${types[@]}"; do
            find stuff -type f -name "${prefix}*${week_pad}*.${type}" -exec chmod o+rx {} \;
        done
    done
done

echo "Setting permissions for bonus material"
find stuff -type f -name "bn_*" -exec chmod o+rx {} \;

echo "Done"

