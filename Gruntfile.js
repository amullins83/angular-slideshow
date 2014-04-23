module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        connect: {
            test: {
                port: 3000
            }
        },
        jasmine: {
            src: ['lib/**/*.js', 'coffee/**/*.coffee'],
            options: {
                specs: ['test/**/*Spec.js', 'test/**/*Spec.coffee'],
                outfile: "specRunner.html"
            }
        },
        watch: {
            // tests: {
            //     files: ["<%= jasmine.src %>",
            //             "<%= jasmine.options.specs %>"],
            //     tasks: ["jasmine"]
            // },
            distjs: {
                files: ['lib/**/*.js'],
                tasks: ["concat:js"]
            },
            distcss: {
                files: ['assets/css/**/*.css'],
                tasks: ["concat:css"]
            },
            coffee: {
                files: ['coffee/*.coffee', 'test/*.coffee'],
                tasks: ['coffee']
            },
            sass: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass']
            },
            karma: {
                files: ['lib/**/*.js', 'test/**/*Spec.js',],
                tasks: ['karma:unit:run']
            }
        },
        concat: {
            options: {
                separator: ";"
            },
            js: {
                src: [
                    './bower_components/jQuery/dist/jquery.min.js',
                    './bower_components/angular/angular.min.js',
                    './bower_components/angular-mocks/angular-mocks.js',
                    './bower_components/angular-ui/build/angular-ui.min.js',
                    './bower_components/angular-ui-bootstrap/src/**/*.js',
                    './public/**/*.js',
                ],
                dest: './public/application.js'
            },
            css: {
                src: [

                        './assets/css/bootstrap/bootstrap.min.css',
                        './assets/css/bootstrap/bootstrap-theme.min.css',
                        './assets/css/experiment.css',
                        './assets/css/mems.css'
                ],
                dest: './public/application.css'
            }
        },
        coffee: {
            dist: {
                options: {
                    bare: true
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: "coffee",
                    src: ["*.coffee"],
                    dest: "lib/",
                    ext: ".js"
                }]
            },
            test: {
                options: {
                    bare: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: "test",
                    src: ["./**/*.coffee"],
                    dest: "./test",
                    ext: ".js"
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/scss',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-karma");

    grunt.registerTask("default", ["watch"]);

};