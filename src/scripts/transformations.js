/**
 * Apply selected transformations to text
 * @param {string} text - Original text to transform
 * @param {string[]} transformations - Array of transformation IDs to apply
 * @param {Object} options - Additional options for transformations
 * @returns {string} - Transformed text
 */
export function applyTransformations(text, transformations, options = {}) {
    // If no text or no transformations, return the original text
    if (!text || transformations.length === 0) {
        return text;
    }

    let result = text;

    // Apply each transformation in order
    for (const transform of transformations) {
        switch (transform) {
            case "trim-whitespace":
                result = trimWhitespace(result);
                break;
            case "remove-extra-spaces":
                result = removeExtraSpaces(result);
                break;
            case "remove-line-breaks":
                result = removeLineBreaks(result);
                break;
            case "normalize-text":
                result = normalizeText(result);
                break;
            case "strip-html-tags":
                result = stripHtmlTags(result);
                break;
            case "unindent-text":
                result = unindentText(result);
                break;
            case "indent-text":
                result = indentText(result, options.indentSize || 2);
                break;
            case "justify-text":
                result = justifyText(result);
                break;
            case "left-align-text":
                result = leftAlignText(result);
                break;
            case "right-align-text":
                result = rightAlignText(result);
                break;
            case "center-align-text":
                result = centerAlignText(result);
                break;
            case "reverse-text":
                result = reverseText(result);
                break;
            case "reverse-words":
                result = reverseWords(result);
                break;
            case "reverse-sentences":
                result = reverseSentences(result);
                break;
            case "reverse-lines":
                result = reverseLines(result);
                break;
            case "sort-lines":
                result = sortLines(result);
                break;
            case "shuffle-lines":
                result = shuffleLines(result);
                break;
            case "remove-empty-lines":
                result = removeEmptyLines(result);
                break;
            case "add-line-numbers":
                result = addLineNumbers(result);
                break;
            case "limit-line-length":
                result = limitLineLength(result, options.lineLength || 80);
                break;
        }
    }

    return result;
}

// Individual transformation functions

/**
 * Removes leading and trailing whitespace
 */
function trimWhitespace(text) {
    return text.trim();
}

/**
 * Collapses multiple spaces into one
 */
function removeExtraSpaces(text) {
    return text.replace(/\s+/g, " ");
}

/**
 * Removes newlines and carriage returns
 */
function removeLineBreaks(text) {
    return text.replace(/\r?\n/g, " ");
}

/**
 * Normalizes Unicode characters and spacing
 */
function normalizeText(text) {
    return text.normalize("NFKD");
}

/**
 * Removes HTML tags from the text
 */
function stripHtmlTags(text) {
    return text.replace(/<[^>]*>/g, "");
}

/**
 * Removes indentation from multi-line text
 */
function unindentText(text) {
    const lines = text.split("\n");

    // Find minimum indentation level (excluding empty lines)
    const minIndent =
        lines
            .filter((line) => line.trim().length > 0)
            .reduce((min, line) => {
                const indent = line.match(/^\s*/)[0].length;
                return indent < min ? indent : min;
            }, Infinity) || 0;

    // Remove the minimum indentation from each line
    return lines.map((line) => line.substring(minIndent)).join("\n");
}

/**
 * Adds indentation to each line
 */
function indentText(text, spaces = 2) {
    const indent = " ".repeat(spaces);
    return text
        .split("\n")
        .map((line) => indent + line)
        .join("\n");
}

/**
 * Aligns text to both left and right margins
 * This is a simplified implementation
 */
function justifyText(text) {
    return text
        .split("\n")
        .map((line) => {
            if (!line.trim()) return "";

            const words = line.trim().split(/\s+/);
            if (words.length <= 1) return line;

            // Simple implementation for demonstration
            return words.join(" ");
        })
        .join("\n");
}

/**
 * Aligns text to the left
 */
function leftAlignText(text) {
    return text
        .split("\n")
        .map((line) => line.trim())
        .join("\n");
}

/**
 * Aligns text to the right
 * This is a simplified implementation
 */
function rightAlignText(text) {
    const lines = text.split("\n");
    const maxLength = Math.max(...lines.map((line) => line.trim().length));

    return lines
        .map((line) => {
            const trimmed = line.trim();
            const padding = " ".repeat(maxLength - trimmed.length);
            return padding + trimmed;
        })
        .join("\n");
}

/**
 * Centers text horizontally
 * This is a simplified implementation
 */
function centerAlignText(text) {
    const lines = text.split("\n");
    const maxLength = Math.max(...lines.map((line) => line.trim().length));

    return lines
        .map((line) => {
            const trimmed = line.trim();
            const padding = " ".repeat(
                Math.floor((maxLength - trimmed.length) / 2)
            );
            return padding + trimmed;
        })
        .join("\n");
}

/**
 * Reverses the entire string character by character
 */
function reverseText(text) {
    return text.split("").reverse().join("");
}

/**
 * Reverses the order of words
 */
function reverseWords(text) {
    return text
        .split("\n")
        .map((line) => line.split(/\s+/).reverse().join(" "))
        .join("\n");
}

/**
 * Reverses the order of sentences
 */
function reverseSentences(text) {
    // Split by sentence endings (., !, ?) followed by space or end of string
    return text
        .split(/(?<=[.!?])\s+|(?<=[.!?])$/)
        .reverse()
        .join(" ")
        .trim();
}

/**
 * Reverses the order of lines
 */
function reverseLines(text) {
    return text.split("\n").reverse().join("\n");
}

/**
 * Sorts lines alphabetically (A–Z)
 */
function sortLines(text) {
    return text.split("\n").sort().join("\n");
}

/**
 * Randomly shuffles the lines
 */
function shuffleLines(text) {
    const lines = text.split("\n");

    // Fisher-Yates shuffle algorithm
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    return lines.join("\n");
}

/**
 * Deletes blank lines
 */
function removeEmptyLines(text) {
    return text
        .split("\n")
        .filter((line) => line.trim().length > 0)
        .join("\n");
}

/**
 * Prefixes each line with its number
 */
function addLineNumbers(text) {
    return text
        .split("\n")
        .map((line, index) => `${index + 1}. ${line}`)
        .join("\n");
}

/**
 * Wraps text so that no line exceeds a specified length
 */
function limitLineLength(text, maxLength = 80) {
    return text
        .split("\n")
        .map((line) => {
            if (line.length <= maxLength) return line;

            let result = "";
            let currentLine = "";

            // Split the line into words
            const words = line.split(/\s+/);

            for (const word of words) {
                if ((currentLine + word).length > maxLength) {
                    result += currentLine.trim() + "\n";
                    currentLine = word + " ";
                } else {
                    currentLine += word + " ";
                }
            }

            return result + currentLine.trim();
        })
        .join("\n");
}
