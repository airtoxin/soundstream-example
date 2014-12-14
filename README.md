```
brew install sox
node sound.js | sox -traw -r8000 -b8 -e unsigned-integer - -tcoreaudio
```
