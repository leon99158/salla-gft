const mix = require('laravel-mix');

mix.js('src/assets/js/app.js', 'dist/js')
   .postCss('src/input.css', 'dist/css', [
       require('tailwindcss'),
       require('autoprefixer'),
   ])
   .copyDirectory('src/assets/images', 'dist/images')
   .version();
