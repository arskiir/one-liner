# ------------------------------------------------------------------------
# ! make text with tabs and newline characters to a unicode one liner
# ! here https://onlineunicodetools.com/convert-unicode-to-string-literal

import sys


def main():
    if len(sys.argv) == 2:
        print_one_liner(sys.argv[1])
    elif len(sys.argv) == 1:
        unicode_str = input("Enter unicode escape sequence: ")
        # example, Enter: \u0068\u0065\u006c\u006c\u006f
        print_one_liner(unicode_str)
    else:
        exit(1)


def print_one_liner(uni: str) -> None:
    list_of_ascii_hex = uni.replace("\\u", " ").split()
    string = "".join(
        list(map(lambda hex_string: chr(int(hex_string, 16)), list_of_ascii_hex)))
    processed_string = string.replace('\n', "\\n").replace('\t', "\\t")
    print(processed_string)


if __name__ == "__main__":
    main()
