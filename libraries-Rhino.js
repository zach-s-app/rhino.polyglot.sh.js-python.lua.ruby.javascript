/*
Polyglot Interpreter Setup — Rhino + Jython + LuaJ + JRuby

How to use:

// Python (Jython)
py.exec("print('Hello from Python!')");        // run Python statements
var result = py.eval("2 + 3");                // evaluate expressions (returns PyObject)

// Lua (LuaJ)
var chunk = globals.load("print('Hello Lua!')"); 
chunk.call();                                 // execute Lua code
var result = globals.load("return 2 + 3").call(); // get return value

// Ruby (JRuby)
ruby.runScriptlet("puts 'Hello Ruby!'");      // run Ruby statements
var result = ruby.runScriptlet("1 + 2");      // evaluate expressions
*/

////////////////////////
// Interpreter Setup //
//////////////////////

// Jython (Python)
var PythonInterpreter = Packages.org.python.util.PythonInterpreter;
var py = new PythonInterpreter();
try {
    py.exec("print('Python ready!')"); // actually runs in Python
} catch(e) {
    print("Python failed to start:", e);
}

// LuaJ (Lua)
var LuaGlobals = Packages.org.luaj.vm2.lib.jse.JsePlatform;
var globals = LuaGlobals.standardGlobals();
try {
    var chunk = globals.load("print('Lua ready!')");
    chunk.call(); // actually runs in Lua
} catch(e) {
    print("Lua failed to start:", e);
}

// JRuby (Ruby)
var ScriptingContainer = Packages.org.jruby.embed.ScriptingContainer;
var ruby = new ScriptingContainer();
try {
    ruby.runScriptlet("puts 'Ruby ready!'"); // actually runs in Ruby
} catch(e) {
    print("Ruby failed to start:", e);
}
