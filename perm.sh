#!/bin/bash
week=$1
prefixes=("era" "era2")
available=("gra")
types=("html" "pdf" "tex" "csv" "S" "circ" "c" "asm")

find stuff -exec chmod o-rwx {} \;
chmod o+rx script.js
chmod o+rx css
chmod o+rx stuff
chmod o+rx index.html
chmod o+rx assets/*

# Set permissions for folders containing all files for one page, and set permissions for the page itself
for page in "${prefixes[@]}"; do
    chmod o+rx "stuff/$page"
    find . -type f -name "${page}.html" -exec chmod o+rx {} \;
done

for i in $(seq 1 $week); do
    echo "Setting permissions for week $i"

    week_pad=$(printf "%02d" $i)

    # Set permissions for all special foldes, such as code and circuits
    find stuff -type d -name "*${week_pad}*" -exec chmod o+rx {} \;
    find stuff -type d -name "w${week_pad}*" -exec chmod -R o+rx {} \;
    
    # Set permissions for slides and notes
    for prefix in "${prefixes[@]}"; do
        for type in "${types[@]}"; do
            find stuff -type f -name "${prefix}*${week_pad}*.${type}" -exec chmod o+rx {} \;
        done
    done
done

# Unset permission for this weeks notes - they shouldn't be available
echo "Removing permission for most recent writeup"
week_pad=$(printf "%02d" $week)
find stuff -type f -name "*${week_pad}*_clean.pdf" -exec chmod o-rx {} \;

# Set permissions for modules that are not taught this semester
for av in "${available[@]}"; do
   chmod -R o+rx stuff/$av
done

# Set permissions for data filed under "other"
echo "Setting permissions for bonus material"
find stuff -type f -name "bn_*" -exec chmod o+rx {} \;

echo "Done"
