module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnviroment: 'node',
    testRegex: '/test/.*\\.test(test|spec)?\\.(ts|tsx)$',
    mdouleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};