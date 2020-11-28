with open("text_to_string.txt", "r") as f:
    lines = f.readlines()

result = ""
for line in lines:
    result += line.replace('\n', '')

with open("text_converted.txt", "w") as f:
    f.write(result)
