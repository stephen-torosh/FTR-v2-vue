# Welcome to FireTR

# FireTR - is terminal application, which was written with Python 3.10.2

# This version is made only for API between FireTR 1.0 & FireTR-OS 


# importing modules

# os for system management
# random for generating passwords
# flask for routing data


import os
import random
from flask import Flask

app = Flask(__name__)

# functions

# commands for paths


def ls(path):
    answer = ""
    if os.path.isdir(path):
        files = os.listdir(path)
        files.sort()
        for f in files:
            if (os.path.isfile(f)):
                answer += f"<div style='color: red;'>{f}</div>"
            else:
                 answer += f"<div style='color: blue;'>{f}</div>"
        return answer
    else:
       return "<span style='color: red;'>-> FTR: directory not found</span>"


def cd(path):
    try:
        os.chdir(path)
        return "<span style='color: LimeGreen;'>-> FTR: Current directory successfully defined</span>"
    except:
        return "<span style='color: red;'>-> FTR: Current directory does not exists</span>"

# commands for directories


def mkdir(path):
    try:
        os.mkdir(path)
        return f"<span style='color: LimeGreen;'>-> FTR: Directory '{path}' successfully created</span>"
    except FileExistsError as error:
        return f"<span style='color: red;'>-> FTR: failed to create directory</span"


def rmdir(path):
    if os.path.isdir(path):
        if os.listdir(path) != []:
            return "<span style='color: red;'>Sorry, but directory is not empty, use rmf and rmdir commands to delete files and directories</span>"
        else:
            if os.path.isdir(path):
                os.rmdir(path)
                return f"<span style='color: LimeGreen;'>-> FTR: Directory '{path}' successfully removed</span>"
            else:
                return "<span style='color: red;'>-> FTR: directory not found</span>"
    else:
        return f"<span style='color: red;'>Sorry, but '{path}' is not a directory</span>"

# commands for files


def rmf(filePath):
    if os.path.isdir(filePath):
        return f"Sorry, but '{filePath}' is not a file"
    else:
        try:
            os.remove(filePath)
            return f"<span style='color: LimeGreen;'>-> FTR: File '{filePath}' successfully removed</span>"
        except FileExistsError as error:
            return "<span style='color: red;'>-> FTR: file not found</span>"


def genpass(length: int = 0):
    chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=+<>?/][{}"
    password = ""
    lengthRange = range(random.randint(8, 32))
    if (length > 0):
        if (length > 128):
            return "<span style='color: red;'>Sorry, but password length can not be more than 128</span>"
        lengthRange = range(length)
    for i in lengthRange:
        password = password + chars[random.randint(0, 72)]
    return password


# def cat(path):
#     if os.path.isfile(path):
#         with open(path, "r") as file:
#             contents = ""
#             for i in file:
#                 contents += f"<div>{i}</div>"

#             return contents
#     else:
#         return "<span style='color: red;'>-> FTR: file not found</span>"


def createFile(filePath, textLine):
    with open(filePath, "w") as f:
        f.write(textLine)
    return f"<span style='color: LimeGreen;'>-> FTR: File '{filePath}' successfully created</span>"


def listCommands():
    # list of different prompts
    pass


def printTooManyParamsErr(command):
    return f"Sorry, but the command '{command}' does not accept so many parameters"


# commands definer

@app.route("/terminal/<value>")
def command(value):
    newval = value.replace("~", "/")
    arguments = newval.split()
    lenOfValueList = len(arguments)

    if (lenOfValueList > 0):
        match arguments[0]:
            case "ls":
                if (lenOfValueList == 1):
                    return ls(".")
                if (lenOfValueList > 1):
                    return ls(' '.join(arguments[1:]))
            case "cd":
                if (lenOfValueList == 1):
                    return cd(".")
                if (lenOfValueList > 1):
                    return cd(' '.join(arguments[1:]))
            case "mkdir":
                if (lenOfValueList == 1):
                    return "Please, enter name of new directory: mkdir <name of dir>"
                if (lenOfValueList > 1):
                    return mkdir(' '.join(arguments[1:]))
            case "rmdir":
                if (lenOfValueList == 1):
                    return "Please, enter name of directory: rmdir <name of dir>"
                if (lenOfValueList > 1):
                    return rmdir(' '.join(arguments[1:]))
            case "crf":
                if (lenOfValueList == 1):
                    return "Please, enter name of new file: crf <name of file>"
                if (lenOfValueList > 1):
                    return createFile(' '.join(arguments[1:]), "")
            case "rmf":
                if (lenOfValueList == 1):
                    return "Please, enter name of file: rmf <name of file>"
                if (lenOfValueList == 2):
                    return rmf(' '.join(arguments[1:]))
            case "cwd":
                return os.getcwd()
            # case "cat":
            #     if (lenOfValueList == 1):
            #         return "Please, enter name of file: cat <name of file>"
            #     if (lenOfValueList == 2):
            #         return cat(' '.join(arguments[1:]))
            case "version":
                return "FTR: version: 1.2 official"
            case "help":
                return listCommands()
            case "genpass":
                if (lenOfValueList == 1):
                    return genpass()
                if (lenOfValueList == 2):
                    return genpass(int(arguments[1]))
                if (lenOfValueList > 2):
                    return printTooManyParamsErr("genpass")
            case _:
                firstIndex = arguments[0]
                return f"unknown command: {firstIndex}"

    elif (lenOfValueList == 0):
        pass
