# arskiir.one-liner

Replace the invisible newline and tab characters with \\n and \\t respectively, *making lines into a line*.

## How it is

input:

```python
import os
if os.name == "nt":
    import msvcrt
else:
    import termios


def wait_key(prompt=None, end="\n"):
    """ Wait for a key press on the console and return it as str type. """

    if prompt:
        print(prompt, end=end)

    result = None
    if os.name == "nt":
        result = msvcrt.getch()
    else:
        fd = sys.stdin.fileno()

        oldterm = termios.tcgetattr(fd)
        newattr = termios.tcgetattr(fd)
        newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO
        termios.tcsetattr(fd, termios.TCSANOW, newattr)

        try:
            result = sys.stdin.read(1)
        except IOError:
            pass
        finally:
            termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)

    return result if type(result) == str else result.decode("utf-8")
```

output:

```python
import os\nif os.name == 'nt':\n    import msvcrt\nelse:\n    import termios\n\n\ndef wait_key(prompt=None, end='\\n'):\n    ''' Wait for a key press on the console and return it as str type. '''\n\n    if prompt:\n        print(prompt, end=end)\n\n    result = None\n    if os.name == 'nt':\n        result = msvcrt.getch()\n    else:\n        fd = sys.stdin.fileno()\n\n        oldterm = termios.tcgetattr(fd)\n        newattr = termios.tcgetattr(fd)\n        newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO\n        termios.tcsetattr(fd, termios.TCSANOW, newattr)\n\n        try:\n            result = sys.stdin.read(1)\n        except IOError:\n            pass\n        finally:\n            termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)\n\n    return result if type(result) == str else result.decode('utf-8')
```

## Usage

### Python

1. run main.py
2. ???
3. profit

### Web Application

- <https://arskiir-one-liner.web.app/>

## Use cases

Idk. Something like

- ### Create vscode snippet much faster and easier

See something useful or hate typing the same code again and again? Just make the snippets yourself in *copy-pasta* style!  
Type "Configure User Snippets" in command pallete and be happy.

```json
{
	// in python.json
	"define waitkey": {
		"prefix": "def wait_key",
		// the one liner is here!
		"body": "import os\nif os.name == 'nt':\n    import msvcrt\nelse:\n    import termios\n\n\ndef wait_key(prompt=None, end='\\n'):\n    ''' Wait for a key press on the console and return it as str type. '''\n\n    if prompt:\n        print(prompt, end=end)\n\n    result = None\n    if os.name == 'nt':\n        result = msvcrt.getch()\n    else:\n        fd = sys.stdin.fileno()\n\n        oldterm = termios.tcgetattr(fd)\n        newattr = termios.tcgetattr(fd)\n        newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO\n        termios.tcsetattr(fd, termios.TCSANOW, newattr)\n\n        try:\n            result = sys.stdin.read(1)\n        except IOError:\n            pass\n        finally:\n            termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)\n\n    return result if type(result) == str else result.decode('utf-8')",
		"description": "Wait for a key press on the console and return it as str type."
	},
	// ...
}
```

- ### Print nicely to console

```python
Python 3.8.8 (tags/v3.8.8:024d805, Feb 19 2021, 13:18:16) [MSC v.1928 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> one_line_thing = "import os\nif os.name == \"nt\":\n    import msvcrt\nelse:\n    import termios\n\n\ndef wait_key(prompt=None, end=\"\\n\"):\n    \"\"\" Wait for a key press on the console and return it as str type. \"\"\"\n\n    if prompt:\n        print(prompt, end=end)\n\n    result = None\n    if os.name == \"nt\":\n        result = msvcrt.getch()\n    else:\n        fd = sys.stdin.fileno()\n\n        oldterm = termios.tcgetattr(fd)\n        newattr = termios.tcgetattr(fd)\n        newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO\n        termios.tcsetattr(fd, termios.TCSANOW, newattr)\n\n        try:\n            result = sys.stdin.read(1)\n        except IOError:\n            pass\n        finally:\n            termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)\n\n    return result if type(result) == str else result.decode(\"utf-8\")\n"
>>> print(one_line_thing)
import os
if os.name == "nt":
    import msvcrt
else:
    import termios


def wait_key(prompt=None, end="\n"):
    """ Wait for a key press on the console and return it as str type. """

    if prompt:
        print(prompt, end=end)

    result = None
    if os.name == "nt":
        result = msvcrt.getch()
    else:
        fd = sys.stdin.fileno()

        oldterm = termios.tcgetattr(fd)
        newattr = termios.tcgetattr(fd)
        newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO
        termios.tcsetattr(fd, termios.TCSANOW, newattr)

        try:
            result = sys.stdin.read(1)
        except IOError:
            pass
        finally:
            termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)

    return result if type(result) == str else result.decode("utf-8")

>>> # The above kinda looks cool
```

[Try it yourself](https://replit.com/@ArmSukrit/printingnicely)

## Limitations

_None_
