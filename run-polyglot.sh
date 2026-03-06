#!/bin/bash
# run-polyglot.sh — run the polyglot JS example in Rhino
echo 'load(["libraries-Rhino.js"])//to import the java libraries'
java --enable-native-access=ALL-UNNAMED -cp "rhino-all-1.9.1.jar:jython-standalone.jar:luaj-jse-3.0.2.jar:jruby-complete-10.0.4.0.jar" \
     org.mozilla.javascript.tools.shell.Main
