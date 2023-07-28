for (let i = 0; i < 13; i++) {
    if (i < 9)
        console.log("".padStart((9 - i), " ") + "*".padEnd((i * 2) + 1, "*"))
    else if (i < 12)
        console.log("".padStart(9, " ") + "||")
    else
        console.log("\\".padStart(8, " ") + "".padStart(4, "=") + "/")
}