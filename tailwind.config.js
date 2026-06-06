module.exports = {
    content: [
        './src/views/**/*.twig',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                'primary-dark': '#2d54cc',
                'secondary-dark': '#25a9b5'
            },
            fontFamily: {
                body: ['Cairo', 'sans-serif']
            }
        },
        container: {
            center: true,
            padding: '1rem'
        }
    },
    plugins: []
};
