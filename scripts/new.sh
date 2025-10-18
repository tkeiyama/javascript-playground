packageName=$1

if [ -z "$1" ]; then
  echo "A pacakge name must be given as a first argument"
  exit 1
fi

mkdir -p packages/$packageName

echo "{
  \"name\": \"@javascript-playground/$packageName\"
}" >> packages/$packageName/package.json

echo "# $packageName

## Links
" >> packages/$packageName/README.md

pnpm i
