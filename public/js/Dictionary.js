function Translate(letter){
    switch (letter)
    {
        default:
            return letter
        case 'q':
            return '/';
        case 'w':
            return '\u0027';
        case 'e':
            return 'ק';
        case 'r':
            return 'ר';
        case 't':
            return 'א';
        case 'y':
            return 'ט';
        case 'u':
            return 'ו';
        case 'i':
            return 'ן';
        case 'o':
            return 'ם';
        case 'p':
            return 'פ';
        case 'a':
            return 'ש';
        case 's':
            return 'ד';
        case 'd':
            return 'ג';
        case 'f':
            return 'כ';
        case 'g':
            return 'ע';
        case 'h':
            return 'י';
        case 'j':
            return 'ח';
        case 'k':
            return 'ל';
        case 'l':
            return 'ך';
        case ';':
            return 'ף';
        case 'z':
            return 'ז';
        case 'x':
            return 'ס';
        case 'c':
            return 'ב';
        case 'v':
            return 'ה';
        case 'b':
            return 'נ';
        case 'n':
            return 'מ';
        case 'm':
            return 'צ';
        case ',':
            return 'ת';
        case '.':
            return 'ץ';
        case '/':
            return '.';
        case '\u0027':
            return ',';
    }
}