module.exports = {
    roots: [
        "<rootDir>/test"
    ],
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.js$': 'babel-jest',
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.vue$": "vue-jest"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node',"vue"],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/test/coverage',
    coverageReporters: ['html', 'lcov', 'text-summary'],
    collectCoverageFrom: ['packages/*/*.{js,vue,tsx}'],
    coverageThreshold: {
        'global': {
            'branches': 90,
            'functions': 95,
            'lines': 95,
            'statements': 95
        }
    },
    reporters: [
        'default',
        [
            '<rootDir>/node_modules/jest-html-reporter',
            {
                pageTitle: 'maucash-model-test',
                includeFailureMsg: true,
                outputPath: '<rootDir>/test/test-report.html',
                includeConsoleLog: true
            }
        ]
    ]
};