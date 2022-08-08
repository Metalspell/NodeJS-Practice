function build(name, age, gender) {
    return {
        age,
        gender,
        greeting: () => {
            console.log('Hello. My name is', name)
        },
        name
    }
}

function test() {
    console.log('I AM RUNNING !!!!!')
}
test();

module.exports = {
    string: 'HELLO WORLD',
    build
};
