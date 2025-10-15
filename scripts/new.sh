packageName=$1

mkdir -p packages/$packageName

echo "{
  \"name\": \"@javascript-playground/$packageName\"
}" >> packages/$packageName/package.json

pnpm i
