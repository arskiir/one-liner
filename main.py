import sys
import os
if os.name == 'nt':
    import msvcrt
else:
    import termios


def main():
    raw_code_file = "code.txt"
    if not os.path.exists(raw_code_file):
        open(raw_code_file, "w").close()

    wait_key("Press any key to open file, paste code, save, then return here")
    os.system("start " + raw_code_file)
    wait_key("Press any key to continue")
    
    processed_code_file = "one-line-code.txt"
    with open(raw_code_file) as f:
        processed_string = transform_one_line(f.read())
        with open(processed_code_file, 'w') as p:
            p.write(processed_string)
        os.system("start " + processed_code_file)
        print(processed_string)

def transform_one_line(string: str) -> str:
    """ process text with newline and tab characters as \n and \t """

    processed_string = ""
    for each in string:
        if each == '\n':
            processed_string += "\\n"
            continue
        if each == '\t':
            processed_string += "\\t"
            continue
        if each == '"':
            processed_string += "'"
            continue
        processed_string += each
        print(processed_string)
    return processed_string


def wait_key(prompt=None, end='\n'):
    """ Wait for a key press on the console and return it as str type. """

    if prompt:
        print(prompt, end=end)

    result = None
    if os.name == 'nt':
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

    return result if type(result) == str else result.decode('utf-8')


if __name__ == "__main__":
    main()

