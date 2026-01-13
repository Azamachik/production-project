module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-hudochenkov/full"],
    ignoreFiles: ["build/css/**.css"],
    rules: {
        "selector-class-pattern": null,
        indentation: [4],
        "selector-max-type": null,
    }
}