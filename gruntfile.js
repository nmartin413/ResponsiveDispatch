var fs = require('fs');

module.exports = function(grunt) {

    var banner = fs.readFileSync('src/concat/banner.js').toString();
    var footer = fs.readFileSync('src/concat/footer.js').toString();

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: banner,
                footer: footer,
            },
            main: {
                src: [
                    'src/closureGlobals.js',
                    'src/range/range.js',
                    'src/range/rangeList.js',
                    'src/responsiveDispatch.js'
                ],
                dest: 'out/responsiveDispatch.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'out/responsiveDispatch.min.js': ['out/responsiveDispatch.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};