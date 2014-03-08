module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: '<%= pkg.main %>',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jscrush: {
      build: {
        src: 'build/<%= pkg.name %>.min.js',
        dest: '<%= pkg.name %>.crushed.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jscrush');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jscrush']);

};