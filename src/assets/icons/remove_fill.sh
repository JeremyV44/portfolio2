#!/bin/bash

# Vérifie si un fichier a été fourni en argument
if [ -z "$1" ]; then
    echo "Usage: $0 fichier.svg"
    exit 1
fi

# Fichier SVG à modifier
FILE="$1"

# Vérifie si le fichier existe
if [ ! -f "$FILE" ]; then
    echo "Erreur : Le fichier $FILE n'existe pas."
    exit 1
fi

# Remplace tous les attributs fill="..." par fill="currentColor"
sed -i 's/fill="[^"]*"/fill=""/g' "$FILE"

echo "Modification terminée : Tous les attributs 'fill' ont été remplacés par 'currentColor' dans $FILE."
